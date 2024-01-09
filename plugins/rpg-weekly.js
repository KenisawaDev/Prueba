const eris = 50000
const mythic = 2
const common = 10

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastweekly + 604800000
  if (new Date - global.db.data.users[m.sender].lastweekly < 604800000) throw m.reply(`Ya has tomado tu semanal\nEspera ${msToTime(time - new Date())} De nuevo`)
        global.db.data.users[m.sender].eris += isPrems ? eris : eris
        global.db.data.users[m.sender].mythic += isPrems ? mythic : mythic
        global.db.data.users[m.sender].common += isPrems ? common : common

let txt_claim = `
̿ ̿ ̿̿\з=(𝕽𝖊𝖈𝖔𝖒𝖕𝖊𝖓𝖘𝖆 𝕾𝖊𝖒𝖆𝖓𝖆𝖑)=ε/̵͇̿̿ ̿ ̿

_𝐫𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚 𝐬𝐞𝐦𝐚𝐧𝐚𝐥 𝐨𝐛𝐭𝐞𝐧𝐢𝐝𝐚:_

*❇️￫ ᴇʀɪs:* +${isPrems ? eris : eris}
*✡️￫ ᴄᴏғʀᴇ ᴍɪᴛɪᴄᴏ:* +${isPrems ? mythic : mythic}
*⭕￫ ᴄᴏғʀᴇ ᴄᴏᴍᴜɴ:* +${isPrems ? common : common}
`

        conn.reply(m.chat, txt_claim, m)
        global.db.data.users[m.sender].lastweekly = new Date * 1
    }
handler.help = ['claim2']
handler.tags = ['rpg']
handler.command = /^(claim2)$/i

handler.register = true
handler.fail = null

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    monthly = Math.floor((duration / (1000 * 60 * 60 * 24)) % 720)

  monthly  = (monthly < 10) ? "0" + monthly : monthly
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return monthly + " Día/s " +  hours + " Hora/s " + minutes + " Minuto/s"
}