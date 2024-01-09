import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let chat = global.db.data.chats[m.chat]
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw m.reply(`responda el video/nota de voz que desea convertir a audio/mp3 con el comando *${usedPrefix + command}*`)
    let media = await q.download?.()
    if (!media) throw m.reply('Medio no admitido')
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw m.reply('No se pudo convertir en audio')
    //conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4', asDocument: chat.useDocument })
}
handler.help = ['tomp3 <audio>']
handler.tags = ['tools']
handler.limit = true;

handler.command = /^to(mp3|a(udio)?)$/i

export default handler
//script by Ryzen
