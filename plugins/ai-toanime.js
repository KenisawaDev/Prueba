import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Envia/Responde a imagenes con el comando .seranime'
m.reply('En un momento...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://skizo.tech/api/toanime?url=${url}&apikey=${global.xzn}`)).buffer()
await conn.sendFile(m.chat, hasil, '', global.wm, m)
	
}
//xd
handler.help = ['seranime']
handler.tags = ['anime', 'ai']
handler.command = /^(seranime)$/i

handler.register = true
handler.limit = true
handler.premium = true
handler.group = true

export default handler