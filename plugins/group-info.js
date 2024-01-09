let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*「 Info del grupo 」*\n
*ID:* 
${groupMetadata.id}
*Nombre:* 
${groupMetadata.subject}
*Descripción:* 
${groupMetadata.desc?.toString() || 'unknown'}
*Miembros:*
${participants.length} Miembros
*Dueño:* 
@${owner.split('@')[0]}
*Admins:*
${listAdmin}
*Configuración:*
${isBanned ? '✅' : '❌'} Baneado
${welcome ? '✅' : '❌'} Bienvenida
${detect ? '✅' : '❌'} Detección 
${del ? '❌' : '✅'} Anti Eliminar
${antiLink ? '✅' : '❌'} Anti Link
*Ajustes de mensaje:*
Bienvenida: ${sWelcome}
Salida: ${sBye}
Promovido: ${sPromote}
Degradado: ${sDemote}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogrupo']
handler.tags = ['group']
handler.command = /^(gro?upinfo|infogrupo)$/i

handler.group = true

export default handler