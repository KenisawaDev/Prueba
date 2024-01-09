let handler = async (m, { conn, usedPrefix, text, command }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw m.reply(`sin hash`)
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw m.reply('No tienes permiso para eliminar este comando de sticker')
    delete sticker[hash]
    m.reply(`Listo!`)
}


handler.help = ['delcmd']
handler.tags = ['main']
handler.command = ['delcmd']
handler.premium = true

export default handler
