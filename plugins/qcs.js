import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import { fakechat } from '../lib/scrape.js'

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
    let q = m.quoted && !text ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    let txt = text ? text : typeof q.text == 'string' ? q.text : ''
    if (!txt) return m.reply(`Ejemplo: ${usedPrefix + command} hola`)
    await m.reply('_En progreso por favor espere..._')
    let avatar = await conn.profilePictureUrl(q.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
    if (!/image\/(jpe?g|png)/.test(mime)) {
        let req = await fakechat(txt, q.name, avatar)
        let stiker = await sticker(false, req, "qc", "By Hutao")
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    } else {
        let img = await q.download()
        let { files } = await uploadImage(img)
        let req = await fakechat(txt, q.name, avatar, files[0].url)
        let stiker = await sticker(false, req, "qc", "By Hutao")
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
}
handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(fc|qc|fakechat)$/i
handler.limit = true
handler.onlyprem = true
export default handler