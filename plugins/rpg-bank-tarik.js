const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^tomar/i, '')
  count = count ? /todo/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('Si aún no tienes un cajero automático, consíguelo uno primero')
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count
    global.db.data.users[m.sender].eris += count
    conn.reply(m.chat, `Extraiste ${count} Eris con éxito`, m)
  } else conn.reply(m.chat, `Tu Eris no es suficiente para tomar ${count}`, m)
}
handler.help = ['tomar']
handler.tags = ['rpg']
handler.command = /^tarik([0-9]+)|tomar|tarikall$/i
handler.register = true

export default handler
