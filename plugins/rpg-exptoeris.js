const xpperlimit = 100000
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^expporeris/i, '')
  count = count ? /todo/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].eris += count
    conn.reply(m.chat, `Exp intercambiado con éxito ${count} Exp`, m)
  } else conn.reply(m.chat, `Tu experiencia no es suficiente para convertir tanto ${count}`, m)
}
handler.help = ['expporeris <monto> (100k exp)']
handler.tags = ['rpg']
handler.command = /^expporeris([0-9]+)|expporeris|expporeristodo$/i
handler.register = true

export default handler
