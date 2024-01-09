const eris = 110000
const exp = 4000
const diamond = 3

let ro = 80000
let handler = async (m, { conn, usedPrefix, command }) => {
   let time = global.db.data.users[m.sender].lastrob + 7200000
   if (new Date - global.db.data.users[m.sender].lastrob < 7200000) return m.reply(`¡Hey! Espera *${msToTime(time - new Date())}* para volver a robar`)
   let who
   if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: false
   else who = m.chat
   if (!who) return m.reply(`Etiqueta a alguien para robar`)
   if (!(who in global.db.data.users)) return m.reply(`El usuario no se encuentra en mi base de datos`)
   let users = global.db.data.users[who]
   let rob = Math.floor(Math.random() * ro)
   if (users.exp < rob) return m.reply(`@${who.split`@`[0]} no tiene *${ro} eris*`, null, { mentions: [who]})
   global.db.data.users[m.sender].eris += rob
   global.db.data.users[who].eris -= rob

   m.reply(`*ROBASTES* *${rob} eris* a @${who.split`@`[0]}`, null, { mentions: [who]})
   global.db.data.users[m.sender].lastrob = new Date * 1
}

handler.help = ['robar']
handler.tags = ['rpg']
handler.command = /^(robar)/i

handler.group = true
handler.register = true

export default handler

   function msToTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

      hours = (hours < 10) ? "0" + hours: hours
      minutes = (minutes < 10) ? "0" + minutes: minutes
      seconds = (seconds < 10) ? "0" + seconds: seconds

      return hours + " Hora(s) " + minutes + " Minuto(s)"
   }