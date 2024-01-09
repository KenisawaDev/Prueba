import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw m.reply(`Ejemplo de uso: ${usedPrefix}${command} Hutao icons`)
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'google.jpg', `*Resultado de:* ${text}
*Fuente:* Google
`,m)
}
handler.help = ['imagen']
handler.tags = ['internet']
handler.limit = true;
handler.command = /^(gimage|imagen)$/i

export default handler
