import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw m.reply(`responda el video/audio que desea convertir a nota de voz/vn con el comando *${usedPrefix + command}*`)
    let media = await q.download?.()
    if (!media) throw m.reply('Medio no encontrado')
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw m.reply('No se pudo convertir en audio')
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn <audio>']
handler.tags = ['tools']

handler.command = /^to(vn|(ptt)?)$/i

export default handler
