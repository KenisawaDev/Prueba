import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import { ytmp4 } from '../lib/download.js'
let handler = async (m, { conn, args, command, usedPrefix }) => {
		if (!args[0]) return m.reply(`Ingresa el link de YouTube!, Ejemplo: ${usedPrefix+command} *Link de YouTube*`)
		let {
			title,
			size,
			video,
			quality			
		} = await ytmp4(args[0])
		let txt = `*YOUTUBE VIDEO*\n`
		txt += ` ⭔ Titulo : ${title}\n`
		txt += ` ⭔ Calidad : ${quality}\n`
		txt += ` ⭔ Tamaño : ${size}`
		conn.sendFile(m.chat, video, {
			caption: txt,
			quoted: m
		})
}
handler.help = ['ytmp4'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^yt|yt(mp4|video)|youtube|youtube(mp4|video)$/i

handler.limit = true
handler.group = true

export default handler