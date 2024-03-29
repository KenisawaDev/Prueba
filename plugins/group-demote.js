import { areJidsSameUser } from '@whiskeysockets/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
     let user = m.mentionedJid && m.mentionedJid[0]
            await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
        
    m.reply('Miembro degradado')

}
handler.help = ['degradar']
handler.tags = ['group']
handler.command = /^(degradar)$/i

handler.admin = true
handler.owner = true
handler.group = true
handler.botAdmin = true

export default handler
