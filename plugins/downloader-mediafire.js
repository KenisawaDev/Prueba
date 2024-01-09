import { lookup } from 'mime-types'
import { mediafiredl } from '@bochilteam/scraper'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw m.reply('Ingresa el link junto con el comando')
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw m.reply(' URL invalida')
	let res = await mediafiredl(args[0])
	let mimetype = await lookup(res.url)
	delete res.url2
	m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Enviando archivo..._')
	conn.sendMessage(m.chat, { document: { url: res.url }, fileName: res.filename, mimetype }, { quoted: m })
	await apivisit
}
handler.help = handler.alias = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire)$/i
export default handler