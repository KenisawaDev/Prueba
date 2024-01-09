let handler = async (m, { conn, text }) => {
    if (!text) throw m.reply('¿Quién quiere ser baneado?')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw m.reply('Tag??')
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, 'listo!', m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.rowner = true

export default handler
