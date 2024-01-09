let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw m.reply('¿Cuál es el límite querido?')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw m.repñy('Tag??')
    let users = global.db.data.users
    users[who].limit += 1000
    conn.reply(m.chat, 'Limite agregado!', m)
}
handler.help = ['addlimit']
handler.tags = ['owner']
handler.command = /^addlimit(user)?$/i
handler.owner = true

export default handler