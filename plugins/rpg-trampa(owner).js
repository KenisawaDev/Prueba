let handler = async (m, { conn, command, args, usedPrefix }) => {
     let users = global.db.data.users[m.sender]
global.db.data.users[m.sender].eris += 999999999
global.db.data.users[m.sender].iron += 999999999
global.db.data.users[m.sender].potion += 999999999
global.db.data.users[m.sender].wood += 999999999
global.db.data.users[m.sender].trash += 999999999
global.db.data.users[m.sender].uncommon += 999999999
global.db.data.users[m.sender].common += 999999999
global.db.data.users[m.sender].diamond += 999999999
global.db.data.users[m.sender].rock += 999999999
global.db.data.users[m.sender].string += 999999999
global.db.data.users[m.sender].legendary += 999999999
global.db.data.users[m.sender].mythic += 999999999
global.db.data.users[m.sender].superior += 999999999
global.db.data.users[m.sender].exp += 999999999999
global.db.data.users[m.sender].emerald += 999999999

m.reply("cosas agregadas")
}
handler.help = ['trampa']
handler.tags = ['rpg','owner']
handler.command = /^(trampa|kenisawa)$/i
handler.register = true
handler.owner = true

export default handler