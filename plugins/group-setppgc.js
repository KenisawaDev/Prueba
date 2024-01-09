let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw m.reply('Cual foto quieres defiir para el icono del grupo?')
        await conn.updateProfilePicture(m.chat, img)
    } else throw m.reply(`Envia o responde a una foto con el comando *${usedPrefix + command}*`)
}
handler.help = ['fotogrupo']
handler.tags = ['group']

handler.command = /^fotogrupo$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
