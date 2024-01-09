let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'abrir': 'not_announcement',
        'cerrar': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw m.reply(`
*Formato incorrecto! Ejemplo :*
  *○ ${usedPrefix + command} cerrar*
  *○ ${usedPrefix + command} abrir*
`.trim())
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['grupo']
handler.tags = ['group']
handler.command = /^(grupo)$/i

handler.admin = true
handler.botAdmin = true

export default handler
