import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw m.reply('Sin medios encontrados')
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`📮 *L I N K :*
${link}
📊 *T a m a ñ o :* ${media.length} Byte
📛 *E x p i r a c i o n :* ${isTele ? 'Sin expiracion' : 'Indefinido'}`)
}
handler.help = ['upload (medio)', 'tourl (medio)']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
handler.limit = true
export default handler