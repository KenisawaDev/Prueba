import fs from 'fs'
import os from 'os'
import { sizeFormatter } from 'human-readable'
import { apivisit } from './kanghit.js'

let formatSize = sizeFormatter({
	std: 'JEDEC',
	decimalPlaces: '2',
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`
})

let handler = async (m, { conn }) => {
	let chats = Object.entries(conn.chats).filter(([a, b]) => a && b.isChats),
		groups = chats.filter(([a]) => a.endsWith('@g.us')),
		session = fs.statSync("sessions"),
		txt = `
*BOT:*
- ${groups.length} Grupos
- ${chats.length - groups.length} Pv's
- ${chats.length} Chats totales

*SERVIDOR:*
- Plataforma: ${process.platform}
- Nodejs: ${process.version}
- Peso de la sesión: ${formatSize(session.size)}
- Memoria: ${formatSize(os.totalmem() - os.freemem())} / ${formatSize(os.totalmem())}
`
	await m.reply(txt.trim())
	await apivisit
}
handler.alias = ['estado']
handler.tags = ['main']
handler.command = /^(estado)$/i
export default handler