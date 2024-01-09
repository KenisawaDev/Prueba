let handler = async (m, { conn, text, usedPrefix, command }) => {
    db.data.sticker = db.data.sticker || {}
    if (!m.quoted) throw m.reply(`Responde a un sticker con el comando *${usedPrefix + command}*`)
    if (!m.quoted.fileSha256) throw m.reply('SHA256 Hash No econtrado')
    if (!text) throw m.reply(`Uso:\n${usedPrefix + command} <txt>\n\nEjemplo:\n${usedPrefix + command} prueba`)
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw m.reply('No tienes permiso para cambiar el comando de este sticker.')
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Listo!`)
}


handler.help = ['setcmd']
handler.tags = ['database', 'premium']
handler.command = ['setcmd']
handler.premium = true

export default handler
