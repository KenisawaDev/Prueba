import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw m.reply(`Responde a una imagen con el comando\n\n${usedPrefix + command} <${atas ? atas : 'txt'}>|<${bawah ? bawah : 'txt'}>`);
    if (!/image\/(jpe?g|png)/.test(mime)) throw m.reply(`_*Tipo ${mime} no soportado!*_`);
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    let stiker = await sticker(false, meme, global.stickpack, global.stickauth)
    if (stiker) await conn.sendFile(m.chat, stiker, '', stickauth, m, '', { asSticker: 1 })
}
handler.help = ['smeme <txt>|<txt>']
handler.tags = ['tools']
handler.command = /^(smeme)$/i

handler.limit = true

export default handler