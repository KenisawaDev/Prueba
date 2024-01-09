let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw m.reply(`¿Quién quiere ser el concentido?!`)
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw m.reply(`Por cuantos días??`)
    if (isNaN(txt)) return m.reply(`Ingresa el numero!\n\nEjemplo:\n${usedPrefix + command} @${m.sender.split`@`[0]} 15`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true
    m.reply(`Listo!
*Nombre:* ${user.name}
*Tiempo:* ${txt} Días`)
}
handler.help = ['addprem']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.group = false
handler.rowner = true

export default handler