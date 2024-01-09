let { MessageType } = (await import('@whiskeysockets/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

let lgocraft = `
*「 R E P A R A R 」*`

  let caption = `
▧ Pico
▧ Espada 
▧ Armadura 

*❏ Materiales necesitados*
▧ Pico 
〉 5 Madera
〉 3 Roca
〉 3 Hierro
〉 1 Diamante

▧ Espada 
〉 5 Madera 
〉 9 Hierro
〉 1 Diamante 

▧ Armadura 
〉 15 Hierro
〉 3 Diamante

`
  try {
    if (/reparar/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pico':
          if (user.pickaxedurability > 99) return m.reply('Tu pico aún no tiene daños')
          if (user.pickaxe == 0) return m.reply('Aún no tienes un pico')
            if(user.diamond < 1 || user.rock < 3 || user.wood < 5 || user.iron < 3 ) return m.reply(`Materiales insuficientes para la reparación!`)
             user.rock -= 3
             user.wood -= 5
             user.iron -= 3
             user.diamond -= 1
             user.pickaxedurability = 100
            m.reply("Reparación exitosa de pico")
            break
          case 'espada':
          if (user.sworddurability > 99) return m.reply('Tu espada aun no tiene daños')
          if (user.sword == 0) return m.reply('Aun no tienes espada')
            if(user.diamond < 1 || user.wood < 5 || user.iron < 9 ) return m.reply(`Te falta items!`)
             user.wood -= 5
             user.iron -= 9
             user.diamond -= 1
             user.sworddurability = 100
            m.reply("Se reparó espada")
            break
            case 'armadura':
          if (user.armordurability > 99) return m.reply('Tu armadura aun no tiene daños')
          if (user.armor == 0) return m.reply('Aun no tienes armadura')
            if(user.diamond < 3 || user.iron < 15 ) return m.reply(`Te falta items!`)
             user.iron -= 15
             user.diamond -= 3
             user.armordurability = 100
            m.reply("Se reparo armadura")
            break
          default:
            return await conn.reply(m.chat, caption, m)
        }
    } else if (/encantar|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.reply(m.chat, caption, m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['reparar']
handler.tags = ['rpg']
handler.command = /^(reparar)/i
handler.register = true

export default handler