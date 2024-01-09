const eris = 110000
const exp = 4000
const diamond = 3

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastmonthly + 2592000000
  if (new Date - global.db.data.users[m.sender].lastmonthly < 2592000000) throw m.reply(`Ya recibiste tu mensualidad\nTienes que esperar ${msToTime(time - new Date())} para intentar de nuevo`)
        global.db.data.users[m.sender].eris += isPrems ? eris : eris
        global.db.data.users[m.sender].exp += isPrems ? exp : exp
        global.db.data.users[m.sender].diamond += isPrems ? diamond : diamond

let txt_claim = `
 ̿ ̿̿\з=(𝕽𝖊𝖈𝖔𝖒𝖕𝖊𝖓𝖘𝖆 𝕸𝖊𝖓𝖘𝖚á𝖑)=ε/̵͇̿̿ ̿ ̿

_𝐫𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚 𝐦𝐞𝐧𝐬𝐮𝐚𝐥 𝐨𝐛𝐭𝐞𝐧𝐢𝐝𝐚:_

*❇️￫ ᴇʀɪs:* +${isPrems ? eris : eris}
*🔘￫ ᴇxᴘ:* +${isPrems ? exp : exp}
*💎￫ ᴅɪᴀᴍᴀɴᴛᴇs:* +${isPrems ? diamond : diamond}
`

        conn.reply(m.chat, txt_claim, m)
        global.db.data.users[m.sender].lastmonthly = new Date * 1
    }
handler.help = ['claim3']
handler.tags = ['rpg']
handler.command = /^(claim3)$/i
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