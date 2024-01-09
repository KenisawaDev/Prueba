import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    
m.reply(`En rutina desde: ${muptime}`)
}
handler.help = ['rutina']
handler.tags = ['info']
handler.command = ['rutina', 'rt']

export default handler


function ucapan() {
  const time = moment.tz('America/Buenos_Aires').format('HH')
  let res = "Es temprano en la mañana, ¿por qué no has dormido todavía?? 🥱"
  if (time >= 4) {
    res = "Madrugada 🌄"
  }
  if (time >= 10) {
    res = "Mañana ☀️"
  }
  if (time >= 15) {
    res = "Tarde 🌇"
  }
  if (time >= 18) {
    res = "Noche 🌙"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Día* \n', h, ' *Hora*\n', m, ' *Minuto*\n', s, ' *Segundo*'].map(v => v.toString().padStart(2, 0)).join('')
}
