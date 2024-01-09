let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!m.quoted) throw m.reply('Responde al sticker!')
    if (!m.quoted.fileSha256) throw m.reply('SHA256 Hash No encontrado')
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw m.reply('Hash no encontrado en la base de datos')
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('Listo!')
} 
handler.help = ['lockcmd']
handler.tags = ['database']
handler.command = /^(un)?lockcmd$/i
handler.premium = true

export default handler
