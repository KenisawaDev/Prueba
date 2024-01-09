let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw m.reply(`Si encuentra algún error, infórmelo usando este comando\n\nEjemolo:\n${usedPrefix + command} La descarga de mediafire ya no funciona`)
    if (text.length < 10) throw m.reply(`Informe demasiado corto, mínimo 10 caracteres!`)
    if (text.length > 1000) throw m.reply(`Informe demasiado largo, máximo 1000 caracteres!`)
    let teks = `*${command.toUpperCase()}!*\n\nDe : *@${m.sender.split`@`[0]}*\n\nMensaje : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Mensaje enviado al propietario del bot, si el reporte no es en serio no será respondido y sera baneado._`)
}
handler.help = ['report', 'reportar']
handler.tags = ['info']
handler.command = /^(report|reportar)$/i
export default handler
