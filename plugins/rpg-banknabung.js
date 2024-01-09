const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /todo/i.test(count) ? Math.floor(global.db.data.users[m.sender].eris / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('Aún no tienes una tarjeta de cajero automático')
  if (user.bank > user.fullatm) return m.reply('¡El cajero automático está lleno de eris!')
  if (count > user.fullatm - user.bank) return m.reply('Su dinero ha llegado al límite.')
  if (global.db.data.users[m.sender].eris >= xpperlimit * count) {
    global.db.data.users[m.sender].eris -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `${count} eris ahorrada exitosamente 💹`, m)
  } else conn.reply(m.chat, `[❗] Tu eris no es suficiente para ahorrar, tienes ${count} 💹 `, m)
}
handler.help = ['atm <monto>']
handler.tags = ['rpg']
handler.command = /^atm([0-9]+)|atm|atmall$/i
handler.rpg = true
handler.group = true
export default handler