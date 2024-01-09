import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.DATABASE.data.users[m.sender].lastbansos = global.db.data.users[m.sender].lastbansos || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let __timers = (new Date - global.db.data.users[m.sender].lastbansos)
    let _timers = (604800000 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastbansos > 200000) {
      if (Aku > Kamu) {
        conn.reply(m.chat, `Te atraparon después de corromper los fondos de la gente, Y tienes que pagar una multa de 250.000 Eris para salir de prisión.`, m)
        user.eris -= 250000
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else if (Aku < Kamu) {
        user.eris += 100000
        conn.reply(m.chat, `Usted corrompió con éxito los fondos de la gente, Y obtienes 100k Eris`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else {
        conn.reply(m.chat, `Vaya, no lograste cometer corrupción y no fuiste a la cárcel porque *sobornaste a ciertas partes*`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      }
    } else conn.reply(m.chat, `Has cometido corrupción financiera\nY tienes que esperar ${timers} Para no ser atrapado por el KPK`, m)
  } catch (e) {
    throw m.reply(`Error`)
  }
}

handler.help = ['corrupcion']
handler.tags = ['rpg']
handler.command = /^(corrupcion)$/i
handler.group = true
handler.register = true
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Dia/s*\n ', h, ' *Hora/s*\n ', m, ' *Minuto/s*\n ', s, ' *Segundo/s* '].map(v => v.toString().padStart(2, 0)).join('')
}