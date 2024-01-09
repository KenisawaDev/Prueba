import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
	if (!text[0]) return m.reply(`Formato: *.attp hola*`)
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let res = `https://star-apis.teamfx.repl.co/api/maker/attp?text=${teks}&apikey=StarAPI`
    let stiker = await sticker(null, res, "Sticker Attp By:", "Hutao Bot WhatsApp")
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['attp <texto>']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.limit = true
handler.premium = true
handler.register = true
export default handler 