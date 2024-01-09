let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let monsters = [
    { area: 1, name: "Duendes" },
    { area: 1, name: "Limo" },
    { area: 1, name: "Lobo" },
    { area: 2, name: "Ninfas" },
    { area: 2, name: "Esqueleto" },
    { area: 2, name: "Lobo" },
    { area: 3, name: "Bebe demonio" },
    { area: 3, name: "Fantasma" },
    { area: 3, name: "Zombie" },
    { area: 4, name: "Diablillo" },
    { area: 4, name: "Bruja" },
    { area: 4, name: "Zombie" },
    { area: 5, name: "Demonios" },
    { area: 5, name: "Escorpión gigante" },
    { area: 5, name: "Unicornio" },
    { area: 6, name: "Bebe robot" },
    { area: 6, name: "Hechicero" },
    { area: 6, name: "Unicornios" },
    { area: 7, name: "Cecaelia" },
    { area: 7, name: "Piraña gigante" },
    { area: 7, name: "Sirenas" },
    { area: 8, name: "Cocodrilos Gigantes" },
    { area: 8, name: "Nereida" },
    { area: 8, name: "Sirenas" },
    { area: 9, name: "Demonio" },
    { area: 9, name: "Arpías" },
    { area: 9, name: "Robot asesino" },
    { area: 10, name: "Dullahan" },
    { area: 10, name: "Mantícora" },
    { area: 10, name: "Dinosaurio Joven" },
    { area: 11, name: "Bebe dragon" },
    { area: 11, name: "Dragón joven" },
    { area: 11, name: "Dinosaurio Mayor" },
    { area: 12, name: "Godzilla" },
    { area: 12, name: "Jefe Vampiro" },
    { area: 12, name: "Zombie carnicero gigante" },
    { area: 13, name: "Cerbero" },
    { area: 13, name: "The Rex Mecha" },
    { area: 13, name: "Litch" },
  ]
  let player = global.db.data.users[m.sender]
  let pengirim = m.sender.split("@")[0]
 let __timers = (new Date - global.db.data.users[m.sender].lasthunt)
 let _timers = (7200000 - __timers) 
 let timers = clockString(_timers)

  let area_monsters = monsters[Math.floor(Math.random() * monsters.length)]
  let monster = area_monsters.name
  area_monsters = area_monsters.area
  let monsterName = monster.toUpperCase()

  if (new Date - global.db.data.users[m.sender].lasthunt > 7200000) {
    let coins = parseInt(Math.floor(Math.random() * 100000))
    let exp = parseInt(Math.floor(Math.random() * 10000))
    let _healing = `${Math.floor(Math.random() * 100)}`.trim()
    let healing = (_healing * 1)
    player.health -= healing
    player.lasthunt = new Date * 1 // waktu hunt 2menit

    if (player.health < 0) {
      let msg = `*@${pengirim}* Muere asesinado por ${monsterName}`
      if (player.level > 0) {
      if (player.sword > 0) {
        player.level -= 1
        player.sword -= 5
        player.exp -= exp * 1
        msg += `\n¡Tu nivel disminuye en 1 debido a que mueres mientras cazas!\nTu espada disminuye en 5 debido a que mueres mientras cazas!`
      }
      }
      player.health = 100
      await conn.reply(m.chat, msg, m, { mentions: conn.parseMention(msg) })
      return
    }

    player.eris += coins * 1
    player.exp += exp * 1
    
    let pesan = `Encontro con éxito a *${monsterName}*
*@${pengirim}* lo has matado
Consiguió:
${new Intl.NumberFormat('en-US').format(coins)} Eris
${new Intl.NumberFormat('en-US').format(exp)} XP
Disminuyó -${healing} su Salud, salud restaurante ${player.health}
`
    await conn.reply(m.chat, pesan, m, { mentions: conn.parseMention(pesan) })
  } else throw m.reply(`Espera ${timers} Para volver a cazar`)
}

handler.help = ['cazar']
handler.tags = ['rpg']
handler.command = /^cazar/i
handler.limit = true
handler.group = true
handler.register = true

export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Día/s*\n ', h, ' *Hora/s*\n ', m, ' *Minuto/s*\n ', s, ' *Segundo/s.* '].map(v => v.toString().padStart(2, 0)).join('')
}