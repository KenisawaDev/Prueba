import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw m.reply('Que buscas?')
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ *_Link :_* ${v.url}
↳ *_Duracion :_* ${v.timestamp}
↳ *_Subido :_* ${v.ago}
↳ *_Vistas :_* ${v.views}`}}).filter(v => v).join('\n\n=========================\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}

handler.help = ['yts']
handler.tags = ['downloader']
handler.command = /^yts(earch)?$/i
handler.limit = true

export default handler
