let handler = m => m
handler.before = m => {
  let user = global.db.data.users[m.sender]
  if (user.afk > -1) {
    m.reply(`
⊰᯽⊱┈─（ _𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗟𝗜𝗕𝗥𝗘_ ）─┈⊰᯽⊱

𝐀ʜᴏʀᴀ ʏᴀ ɴᴏ ᴇsᴛᴀs ᴇɴ ᴀғᴋ${user.afkReason ? '\n𝐑ᴀᴢᴏɴ ᴅᴇ ᴀғᴋ: ' + user.afkReason : ''}
ᴅᴜʀᴀᴄɪᴏɴ ᴅᴇ ᴀғᴋ: ${(new Date - user.afk).toTimeString()}

﹥ʜᴜᴛᴀᴏ-ʙᴏᴛ`.trim())
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.db.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`
⊰᯽⊱┈─（ _𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗘𝗡 𝗔𝗙𝗞_ ）─┈⊰᯽⊱

𝐍ᴏ ʟᴏ ᴇᴛɪǫᴜᴇᴛᴇs
𝐄ʟ ᴇsᴛᴀ ᴇɴ 𝐀𝐅𝐊 ${reason ? '\n𝐑ᴀᴢᴏɴ: ' + reason : 'Sin razon'}
𝐓ɪᴇᴍᴘᴏ ᴅᴇ ᴀғᴋ ${(new Date - afkTime).toTimeString()}

﹥ʜᴜᴛᴀᴏ-ʙᴏᴛ`.trim())
  }
  return true
}

export default handler
