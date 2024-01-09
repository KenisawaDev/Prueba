var handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`❀ ${conn.getName(m.sender)} ᴀʜᴏʀᴀ ᴇsᴛᴀ ᴇɴ ᴀғᴋ${text ? ', ʀᴀᴢᴏɴ: ' + text : ''}, *ᴀɢʀᴀᴅᴇᴄᴇʀɪᴀ ᴀ ᴛᴏᴅᴏs sɪ ɴᴏ ʟᴏ ᴍᴇɴᴄɪᴏɴᴀʀᴀɴ ♡*`)
  }
  handler.help = ['afk']
  handler.tags = ['main']
  handler.command = /^afk$/i
  
  export default handler
