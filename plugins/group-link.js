import { areJidsSameUser } from '@whiskeysockets/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw m.reply('Sólo se puede abrir en grupos.')
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw m.reply('groupMetadata is undefined :\\')
    if (!('participants' in groupMetadata)) throw m.reply('participants is not defined :(')
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw m.reply('no estoy en ese grupo :(')
    if (!me.admin) throw m.reply('no soy administrador T_T')
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgp']
handler.tags = ['group']
handler.command = /^link(gp)?$/i


export default handler