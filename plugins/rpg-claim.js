let handler = async (m, { conn }) => {
  let __timers = (new Date - global.db.data.users[m.sender].lastclaim)
  let _timers = (43200000 - __timers)
  let timers = clockString(_timers) 
  let user = global.db.data.users[m.sender]
  if (new Date - global.db.data.users[m.sender].lastclaim > 43200000) {
  
  let txt_claim =`
̿ ̿ ̿̿\з=(𝕽𝖊𝖈𝖔𝖒𝖕𝖊𝖓𝖘𝖆 𝕯𝖎𝖆𝖗𝖎𝖆)=ε/̵͇̿̿ ̿ ̿

_𝐫𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚 𝐝𝐢𝐚𝐫𝐢𝐚 𝐨𝐛𝐭𝐞𝐧𝐢𝐝𝐚:_

*❇️￫ ᴇʀɪs:* 100000
*🧪￫ ᴘᴏᴄɪᴏɴᴇs:* 2
*💠￫ ʟɪᴍɪᴛᴇ:* 15
`
      conn.reply(m.chat, txt_claim, m)
      user.eris += 100000
      user.potion += 2
      user.limit += 15
      user.lastclaim = new Date * 1
  } else conn.reply(m.chat, `Espera ${timers} para volver a reclamar`, m)
}
handler.help = ['claim']
handler.tags = ['rpg']
handler.command = /^(claim)$/i
handler.group = true
handler.register = true
handler.fail = null

export default handler

function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return ['\n' + d, ' *Día/s*\n ', h, ' *Hora/s*\n ', m, ' *Minuto/s*\n ', s, ' *Segundo/s* '].map(v => v.toString().padStart(2, 0)).join('')
}