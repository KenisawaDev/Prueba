let { MessageType } = (await import('@whiskeysockets/baileys')).default
import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, command, text }) => {
	 
    let user = global.db.data.users[m.sender]
    let htki = '––––––『'
    let htka = '』––––––'
    let SWORD = user.sword < 1
    let ARMOR = user.armor < 1
    let HEALT = user.health < 90
    if (SWORD || ARMOR || HEALT) {
        const buttons = []

        console.log({SWORD, ARMOR, HEALT})
        if (SWORD) buttons.push({buttonId: `.craft sword`, buttonText: {displayText: 'ᴄʀᴀғᴛ sᴡᴏʀᴅ'}, type: 1})
        if (ARMOR) buttons.push({buttonId: `.craft armor`, buttonText: {displayText: 'ᴄʀᴀғᴛ ᴀʀᴍᴏʀ'}, type: 1})
        if (HEALT) buttons.push({buttonId: `.heal`, buttonText: {displayText: 'ʜᴇᴀʟ'}, type: 1})
        
        let lmao = item(user.sword * 1, user.armor * 1, user.health * 1, usedPrefix)
        if (buttons.length == 0) return m.reply(lmao)   
        const buttonMessage = {
            contentText: `*${htki} DUNGEON ${htka}*`,
            footerText: lmao,
            buttons: buttons,
            headerType: 1
        }
        return conn.reply(m.chat, lmao, false, { quoted: m} )
    }
    global.dungeon = global.dungeon ? global.dungeon : {}
    if (Object.values(global.dungeon).find(room => room.id.startsWith('dungeon') && [room.game.player1, room.game.player2, room.game.player3, room.game.player4].includes(m.sender))) return m.reply('You are still in the Dungeon') // nek iseh neng njero dungeon
    let timing = (new Date - (user.lastdungeon * 1)) * 1
    if (timing < 600000) return m.reply(`ʏᴀ ʜᴀs ᴇxᴘʟᴏʀᴀᴅᴏ ʟᴀ ᴅᴜɴɢᴇᴏɴ!, ᴇsᴘᴇʀᴀ...\n➞ ${clockString(600000 - timing)}`)
    let room = Object.values(global.dungeon).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    if (room) {

      // Biar simple :v
      let p1 = room.game.player1 || ''
      let p2 = room.game.player2 || ''
      let p3 = room.game.player3 || ''
      let p4 = room.game.player4 || ''
      let c1 = room.player1 || ''
      let c2 = room.player2 || ''
      let c3 = room.player3 || ''
      let c4 = room.player4 || ''

      if (!p2) {
        room.player2 = m.chat
        room.game.player2 = m.sender
      } else if (!p3) {
        room.player3 = m.chat
        room.game.player3 = m.sender
      } else if (!p4) {
        room.player4 = m.chat
        room.game.player4 = m.sender
        room.state = 'PLAYING'
      }
        
       const buttons = [
           {buttonId: 'id1', buttonText: {displayText: 'send'}, type: 1}
       ]
        
        let lmao = `${!room.game.player4 ? `[• • •] ᴇsᴘᴇʀᴀɴᴅᴏ ${!room.game.player3 && !room.game.player4 ? '2' : '1'} ᴘᴀʀᴀ ᴊᴜɢᴀʀ ᴅᴇ ɴᴜᴇᴠᴏ... ${room.name ? `\n➞ ᴇsᴄʀɪʙᴇ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ᴊᴜɢᴀʀ *${usedPrefix}${command} ${room.name}*` : ''}` : 'ᴇsᴄᴜᴀᴅʀᴀ ᴄᴏᴍᴘʟᴇᴛᴀ...'}`
        const buttonMessage = {
            contentText: `DUNGEON`,
            footerText: lmao,
            buttons: buttons,
            headerType: 1
        }
        return conn.reply(m.chat, lmao, false, { quoted: m} )
        
        if (room.game.player1 && room.game.player2 && room.game.player3 && room.game.player4) {

        // Me gusta el regalo :v
        room.price.eris += (Math.floor(Math.random() * 1000000)) * 1
        room.price.exp += (Math.floor(Math.random() * 5001)) * 1
        room.price.iron += (pickRandom([0, 1, 0, 0, 1, 1, 0, 0])) * 1
        room.game.diamond += (pickRandom([0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0])) * 1
        room.game.trash += (Math.floor(Math.random() * 1001)) * 1
        room.price.string += (Math.floor(Math.random() * 5)) * 1
        room.price.wood += (Math.floor(Math.random() * 10)) * 1
        room.price.rock += (Math.floor(Math.random() * 10)) * 1
        room.game.petFood += (pickRandom([0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0])) * 1
        room.game.common += (pickRandom([0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])) * 1
        room.game.uncommon += (pickRandom([0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0])) * 1

        let str = `
➞ *ɪᴅ ᴅᴇʟ ᴊᴜᴇɢᴏ:* ${room.id}
👩‍🏫 *ᴊᴜɢᴀᴅᴏʀ/ᴇs:*
▸ ${M(p1)}
▸ ${M(p2)}
▸ ${M(p3)}
▸ ${M(p4)}`.trim()

        await m.reply(str, c1, {
          contextInfo: {
            mentionedJid: conn.parseMention(str)
            }
          })
        if (![c1, c3, c4].includes(c2)) m.reply(str, c2, {
            contextInfo: {
              mentionedJid: conn.parseMention(str)
            }
        })
        if (![c1, c2, c4].includes(c3)) m.reply(str, c3, {
          contextInfo: {
              mentionedJid: conn.parseMention(str)
            }
        })
        if (![c1, c2, c3].includes(c4)) m.reply(str, c4, {
          contextInfo: {
              mentionedJid: conn.parseMention(str)
          }
        })

        setTimeout(async () => {
          let users = global.db.data.users
          let player  = [p1, p2, p3, p4]
          let { health, sword } = room.less
          let { exp, eris, sampah, potion, diamond, iron, kayu, batu, string, common, uncommon, mythic, legendary, pet, petFood } = room.price  
          let str2 = `
👩‍🏫 *ᴊᴜɢᴀᴅᴏʀ/ᴇs:*
• *${M(p1)}*
• *${M(p2)}*
• *${M(p3)}*
• *${M(p4)}* 
- - - - - - - - - - - -
*ᴠɪᴅᴀ:* -${health * 1}
*ʀᴇsɪsᴛᴇɴᴄɪᴀ ᴅᴇ ᴇsᴘᴀᴅᴀ:* -${sword * 1} 
*- ʀ ᴇ ᴄ ᴏ ᴍ ᴘ ᴇ ɴ s ᴀ s -*
*➞ ᴇxᴘ:* ${exp * 4}
*➞ ᴇʀɪs:* ${eris * 4}
*➞ ʙᴀsᴜʀᴀ:* ${sampah  * 4}${potion == 0 ? '' : '\n*➞ ᴘᴏᴄɪᴏɴ:* ' + potion * 4}${kayu == 0 ? '' : '\n*➞ ᴍᴀᴅᴇʀᴀ:* ' + kayu * 4}${batu == 0 ? '' : '\n*➞ ʀᴏᴄᴀ:* ' + batu * 4}${string == 0 ? '' : '\n*➞ çᴜᴇʀᴅᴀ:* ' + string * 4}${iron == 0 ? '' : '\n*➞ ʜɪᴇʀʀᴏ:* ' + iron * 4}${diamond == 0 ? '' : '\n*➞ ᴅɪᴀᴍᴀɴᴛᴇ:* ' + diamond * 4}${common == 0 ? '' : '\n*➞ ᴄᴏᴍᴜɴ:* ' + common * 4}${uncommon == 0 ? '' : '\n*➞ ᴇxᴛʀᴀñᴏ:* ' + uncommon * 4}
             `.trim()
          for (let i = 0; i < player.length; i++) {
            let p = player[i]
            setTimeout(() => {
              users[p].health -= health * 1
              users[p].sworddurability -= sword * 1
              users[p].eris += eris * 1
              users[p].exp += exp * 1
              users[p].trash += sampah * 1
              users[p].potion += potion * 1
              users[p].diamond += diamond * 1
              users[p].iron += iron * 1
              users[p].wood += kayu * 1
              users[p].rock += batu * 1
              users[p].string += string * 1
              users[p].common += common * 1
              users[p].uncommon += uncommon * 1
              users[p].mythic += mythic * 1
              users[p].legendary += legendary * 1
              users[p].pet += pet * 1
              users[p].petFood += petFood * 1
              users[p].lastdungeon = new Date * 1

              if ((users[p].health * 1) < 1) users[p].health = 0
              if ((users[p].sworddurability * 1) < 1) {
                users[p].sword -= 1
                users[p].sworddurability = (users[p].sword * 1) * 50
              }
            }, (i * 1) * 1500)
          }
            
          await m.reply(str2, c1, {
            contextInfo: {
              mentionedJid: conn.parseMention(str2),
            externalAdReply :{
    mediaUrl: "wa.me/5493813991888",
    mediaType: 2,
    description: "Hutao-Bot",
    title: '- ᴅ ᴜ ɴ ɢ ᴇ ᴏ ɴ -',
    body: "Hutao-Bot",
    thumbnail: await(await fetch('https://telegra.ph/file/1836eec6c22d949829474.jpg')).buffer(),
    sourceUrl: "wa.me/5493813991888"
     }}
  })
          if (![c1, c3, c4].includes(c2)) m.reply(str2, c2, {
            contextInfo: {
              mentionedJid: conn.parseMention(str2)
            }
          })
          if (![c1, c2, c4].includes(c3)) m.reply(str2, c3, {
            contextInfo: {
              mentionedJid: conn.parseMention(str2)
            }
          })
          if (![c1, c2, c3].includes(c4)) m.reply(str2, c4, {
            contextInfo: {
              mentionedJid: conn.parseMention(st2)
            }
          })

          if (mythic > 0) {
            let str3 = '🎉 *ғᴇʟɪᴄɪᴅᴀᴅᴇs !* 🎉\n• ' + M(p1) + '\n• ' + M(p2) + '\n• ' + M(p3) + '\n• ' + M(p4) +'\nᴏʙᴛᴇɴɪsᴛᴇ  *' + mythic * 4 + '* ᴄᴀᴊᴀs ᴍɪsᴛɪᴄᴀs !'
            await m.reply(str3, c1, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
            if (![c1, c3, c4].includes(c2)) m.reply(str3, c2, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
            if (![c1, c2, c4].includes(c3)) m.reply(str3, c3, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
            if (![c1, c2, c3].includes(c4)) m.reply(str3, c4, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
          }

          if (legendary > 0 || pet > 0) {
            let str3 = (mythic > 0 ? 'ʏ ' : 'ғᴇʟɪᴄɪᴅᴀᴅᴇs ' + M(p1) + '\n• ' + M(p2) + '\n• ' + M(p3) + '\n• ' + M(p4) + ' ᴛᴜ') + 'ᴏʙᴛᴜᴠɪsᴛᴇ: ' + (pet > 0 && legendary > 0 ? `\n➞ *${legendary * 4}* ᴄᴀᴊᴀ/s ʟᴇɢᴇɴᴅᴀʀɪᴀs\n➞ *${pet * 4}* ᴘᴇᴛ ᴛᴏᴋᴇɴ` : pet > 0 && legendary < 1 ? `\n➞ *${pet * 4}* ᴘᴇᴛ ᴛᴏᴋᴇɴ` : legendary > 0 && pet < 1 ? `\n➞ *${legendary * 4}* ᴄᴀᴊᴀ ʟᴇɢᴇɴᴅᴀʀɪᴀ` : '')
            await m.reply(str3, c1, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
            if (![c1, c3, c4].includes(c2)) m.reply(str3, c2, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
            if (![c1, c2, c4].includes(c3)) m.reply(str3, c3, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
            if (![c1, c2, c3].includes(c4)) m.reply(str3, c4, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
          }

          // Biar lebih simple
          let _1 = users[p1]
          let _2 = users[p2]
          let _3 = users[p3]
          let _4 = users[p4]
          let _H1 = (_1.health * 1)
          let _H2 = (_2.health * 1)
          let _H3 = (_3.health * 1)
          let _H4 = (_4.health * 1)

          // sd = SwordDurability :v
          let _sd1 = (_1.sworddurability * 1)
          let _sd2 = (_2.sworddurability * 1)
          let _sd3 = (_3.sworddurability * 1)
          let _sd4 = (_4.sworddurability * 1)

          //Peringatan kalau health nya 0 ataupun sword durabilitynya 0
          if ((_H1 || _H2 || _H3 || _H4 || _sd1 || _sd2 || _sd3 || _sd4) < 1) {

            //Sama kek atas biar simple aja :v 
            let s1 = (_sd1 * 1) < 1
            let s2 = (_sd2 * 1) < 1
            let s3 = (_sd3 * 1) < 1
            let s4 = (_sd4 * 1) < 1

            //Buat nyimpen data sementara :v
            let HEALT = [], SDH = [], SDM1L = []
            for (let siapa in player) {
              if ((users[siapa].health * 1) < 1) HEALT.push(siapa)
              if ((users[siapa].sworddurability * 1) < 1 && (users[siapa].sword * 1) == 1) SDH.push(siapa)
              if ((users[siapa].sworddurability * 1) < 1 && (users[siapa].sword * 1) !== 1) SDM1L.push(siapa)
            }

            let sI = data(SDH)
            let sH = data(SDM1L)
            let H = data(HEALT)

            let str3 = `${((SDH || SDH.length > 0) || (SDM1L || SDM1L.length > 0)) ? `⚔️ᴇsᴘᴀᴅᴀ ${((SDH || SDH.length > 0 ? sI + ' ʀᴏᴛᴀ, ᴘᴏʀ ғᴀᴠᴏʀ ᴄʀᴀғᴛᴇᴀ ᴜɴᴀ ⚔️ᴇsᴘᴀᴅᴀ *' + usedPrefix + 'craft espada*' : '') + (SDM1L || SDM1L.length > 0 ? (SDH || SDH.length > 0 ? ', Mientras que ⚔️Espada ' : '') + sH + ' Destruido y caído *1* Nivell' : ''))}` : ''}${HEALT || HEALT.length > 0 ? `❤️Vida ${H} Cuando termine, complete ❤️Vida escribiendo ${usedPrefix}curar` : ''}`
            await m.reply(str3, c1, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
            if (![c1, c3, c4].includes(c2)) m.reply(str3, c2, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
            if (![c1, c2, c4].includes(c3)) m.reply(str3, c3, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
            if (![c1, c2, c3].includes(c4)) m.reply(str3, c4, {
              contextInfo: {
                mentionedJid: conn.parseMention(str3)
              }
            })
          }

          //Hapus annunya biar bisa main dungeon lagi :V
          delete global.dungeon[room.id]

        }, pickRandom([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000]))
        if (global.dungeon && room.state == 'PLAYING') delete global.dungeon[room.id] //Pastiin lagi kalau masih ada bakal ilang :v
      }
    } else {
        room = {
            id: 'dungeon-' + (+ new Date),
            player1: m.chat,
            player2: '',
            player3: '',
            player4: '',
            state: 'WAITING',
            game: {
                player1: m.sender,
                player2: '',
                player3: '',
                player4: '',
            },
            price: {
                eris: (Math.floor(Math.random() * 100001)) * 1,
                exp: (Math.floor(Math.random() * 3001)) * 1,
                sampah: (Math.floor(Math.random() * 1001)) * 1,
                potion: (Math.floor(Math.random() * 5)) * 1,
                diamond: (pickRandom([0, 0, 0, 0, 1, 1, 1, 5, 3, 0, 0])) * 1,
                iron: (Math.floor(Math.random() * 10)) * 1,
                kayu: (Math.floor(Math.random() * 12)) * 1,
                batu: (Math.floor(Math.random() * 10)) * 1,
                string: (Math.floor(Math.random() * 10)) * 1,
                common: (pickRandom([0, 0, 0, 3, 2, 4, 1, 0, 0])) * 1,
                uncommon: (pickRandom([0, 0, 0, 1, 2, 1, 3, 0, 0, 0])) * 1,
                mythic: (pickRandom([0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0])) * 1,
                legendary: (pickRandom([0, 0, 0, 2, 3, 1, 0, 0, 0, 0, 0, 0, 0])) * 1,
                pet: (pickRandom([0, 0, 0, 1, 3, 5, 2, 4, 0, 0, 0, 0, 0, 0])) * 1,
                petFood: (pickRandom([0, 0, 0, 1, 4, 3, 6, 0, 0, 0, 0])) * 1,
            },
            less: {
                health: (Math.floor(Math.random() * 101)) * 1,
                sword: (Math.floor(Math.random() * 50)) * 1,
            }
        }
        if (text) room.name = text
        const buttons = [
            {buttonId: 'id1', buttonText: {displayText: 'send'}, type: 1}
        ]
        
        let lmao = '[ • • • ] ᴇsᴘᴇʀᴀɴᴅᴏ ᴊᴜɢᴀᴅᴏʀᴇs ' + (text ? `ᴇsᴄʀɪʙᴇ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ
*${usedPrefix}${command} ${text}*` : '') + '\nᴏ ᴇsᴄʀɪʙᴇ *sᴇɴᴅ* ᴘᴀʀᴀ ᴊᴜɢᴀʀ sᴏʟᴏ'
        const buttonMessage = {
            contentText: `*WAITING*`,
            footerText: lmao,
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, { text: lmao, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
        global.dungeon[room.id] = room
      }
}

handler.before = function (m) {
  global.dungeon = global.dungeon ? global.dungeon : {}
  let room = Object.values(global.dungeon).find(room => room.id.startsWith('dungeon-') && [room.game.player1, room.game.player2, room.game.player3, room.game.player4].includes(m.sender) && room.state == 'WAITING')
  if (room) {

    let p1 = room.game.player1 || ''
    let p2 = room.game.player2 || ''
    let p3 = room.game.player3 || ''
    let p4 = room.game.player4 || ''
    let c1 = room.player1 || ''
    let c2 = room.player2 || ''
    let c3 = room.player3 || ''
    let c4 = room.player4 || '' 

    let PLAYER = [room.game.player1]
    if (room.game.player2) PLAYER.push(room.game.player2)
    if (room.game.player3) PLAYER.push(room.game.player3)
    if (room.game.player4) PLAYER.push(room.game.player4)
    let P = data(PLAYER)
    if (/^(sendsolo|dewean)$/i.test(m.text.toLowerCase())) {
        const buttons = [
            {buttonId: 'id1', buttonText: {displayText: 'send'}, type: 1}
        ]
        
        let lmao = '! ɴᴏ ᴘᴜᴇᴅᴇs ᴊᴜɢᴀʀ sᴏʟᴏ sɪ ᴇᴍᴘᴀʀᴇᴊᴀsᴛᴇ ᴄᴏɴ ᴏᴛʀᴏs ᴊᴜɢᴀᴅᴏʀᴇs, ᴘᴏɴ *sᴇɴᴅ* ᴘᴀʀᴀ ᴊᴜɢᴀʀ ..'
        const buttonMessage = {
          contentText: `*INFO*`,
          footerText: lmao,
          buttons: buttons,
          headerType: 1
      }
  
      if (room.player2 || room.player3 || room.player4) return this.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      room.state = 'PLAYING'
      let str = `
*➞ ɪᴅ ᴊᴜᴇɢᴏ:* ${room.id}
*👩‍🏫 ᴊᴜɢᴀᴅᴏʀ:*
${P}
`.trim()
      m.reply(str, room.player1, {
        contextInfo: {
          mentionedJid: this.parseMention(str)
        }
      })

      setTimeout(async () => {
        let users = global.db.data.users[p1]
        let { health, sword } = room.less
        let { exp, eris, sampah, potion, diamond, iron, kayu, batu, string, common, uncommon, mythic, legendary, pet, petFood } = room.price  
        let str2 = `
*• ᴠɪᴅᴀ:* -${health * 1}
*• ʀᴇsɪsᴛᴇɴᴄɪᴀ ᴇsᴘᴀᴅᴀ:* -${sword * 1} 
- - - - - - - - - - - - - - - - - 
*- ʀ ᴇ ᴄ ᴏ ᴍ ᴘ ᴇ ɴ s ᴀ -*
➞ *ᴇxᴘ:* ${exp}
➞ *ᴇʀɪs:* ${eris}
➞ *ʙᴀsᴜʀᴀ:* ${sampah}${potion == 0 ? '' : '\n*➞ ᴘᴏᴄɪᴏɴ:* ' + potion}${kayu == 0 ? '' : '\n*➞ ᴍᴀᴅᴇʀᴀ:* ' + kayu}${batu == 0 ? '' : '\n*➞ ʀᴏᴄᴀ:* ' + batu}${string == 0 ? '' : '\n➞ *ᴄᴜᴇʀᴅᴀ:* ' + string}${iron == 0 ? '' : '\n*➞ ʜɪᴇʀʀᴏ:* ' + iron}${diamond == 0 ? '' : '\n*➞ ᴅɪᴀᴍᴀɴᴛᴇ:* ' + diamond}${common == 0 ? '' : '\n*➞ ᴄᴏᴍᴜɴ:* ' + common}${uncommon == 0 ? '' : '\n*➞ ᴇxᴛʀᴀñᴏ:* ' + uncommon}
`.trim()
        users.health -= health * 1
        users.sworddurability -= sword * 1
        users.eris += eris * 1
        users.exp += exp * 1
        users.trash += sampah * 1
        users.potion += potion * 1
        users.diamond += diamond * 1
        users.iron += iron * 1
        users.wood += kayu * 1
        users.rock += batu * 1
        users.string += string * 1
        users.common += common * 1
        users.uncommon += uncommon * 1
        users.mythic += mythic * 1
        users.legendary += legendary * 1
        users.pet += pet * 1
        users.petFood += petFood * 1
        users.lastdungeon = new Date * 1
        await m.reply(str2, room.player1, { contextInfo:{ externalAdReply :{
    mediaUrl: "wa.me/5493813991888",
    mediaType: 2,
    description: "Hutao-Bot", 
    title: '- ᴅ ᴜ ɴ ɢ ᴇ ᴏ ɴ -',
    body: "Hutao-Bot",
    thumbnail: await(await fetch('https://telegra.ph/file/1836eec6c22d949829474.jpg')).buffer(),
    sourceUrl: "wa.me/5493813991888"
     }}
  })
        if (mythic > 0) {
          let str3 = '🎉 ғᴇʟɪᴄɪᴅᴀᴅᴇs, ᴏʙᴛᴜᴠɪsᴛᴇ *' + mythic + '* ᴄᴀᴊᴀ ᴍɪsᴛɪᴄᴀ'
          m.reply(str3, room.player1)
        }
        if (legendary > 0 || pet > 0) {
          let str3 = (mythic > 0 ? 'ʏ' : 'ғᴇʟɪᴄɪᴅᴇᴅᴇs') + ' ᴏʙᴛᴜᴠɪsᴛᴇ ɪᴛᴇᴍs ʀᴀʀᴏs ' + (pet > 0 && legendary > 0 ? `*${legendary}* ᴄᴀᴊᴀ/s ʟᴇɢᴇɴᴅᴀʀɪᴀ/s ʏ *${pet}* ᴘᴇᴛ ᴛᴏᴋᴇɴ` : pet > 0 && legendary < 1 ? `*${pet}* ᴘᴇᴛ ᴛᴏᴋᴇɴ` : legendary > 0 && pet < 1 ? `*${legendary}* ᴄᴀᴊᴀ/s ʟᴇɢᴇɴᴅᴀʀɪᴀ/s` : '')
          m.reply(str3, room.player1)
        }
        if ((users.health * 1) < 1 || (users.sworddurability * 1) < 1) {
          let sword1 = (users.sworddurability * 1) < 1 && (users.sword * 1) == 1
          let _sword1 = (users.sworddurability * 1) < 1 && (users.sword * 1) > 1
          let __sword1 = (users.sworddurability * 1) < 1 && (users.sword * 1) > 0
          let health1 = (users.health * 1) < 1
          if (__sword1) {
            users[p1].sword -= 1
            users[p1].sworddurability = 0
          }
          let str3 = `${__sword1 ? `➞ ᴛᴜ ᴇsᴘᴀᴅᴀ ${_sword1 ? ` ʙᴀᴊᴏ ʟᴀ ʀᴇsɪsᴛᴇɴᴄɪᴀ 1` : ` ғᴜᴇ ᴅᴇsᴛʀᴜɪᴅᴀ, ᴄʀᴇᴀ ᴜɴᴀ ᴇsᴄʀɪʙɪᴇɴᴅᴏ ${usedPrefix}`}craft espada` : ''} ${health1 ? `${__sword1 ? 'ʏ ' : ''}ᴛᴜ ᴠɪᴅᴀ ʙᴀᴊᴏ, ᴇsᴄʀɪʙᴇ ${usedPrefix}curar` : ''}`
        m.reply(str3, room.player1, {
            contextInfo: {
              mentionedJid: this.parseMention(str3)
            }
          })
        }
        delete global.dungeon[room.id]
      }, pickRandom([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000]))
      if (global.dungeon && room.state == 'PLAYING') delete global.dungeon[room.id]

    } else if (/^(s?s?s?s?.?.?.?|tart)$/i.test(m.text.toLowerCase())) {
        let str = `
➞ *ɪᴅ ᴊᴜᴇɢᴏ:* ${room.id}
👩‍🏫 *ᴊᴜɢᴀᴅᴏʀ:*
${P}
`.trim()
      m.reply(str, c1, {
        contextInfo: {
          mentionedJid: this.parseMention(str)
        }
      })
      if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str, c2, {
        contextInfo: {
          mentionedJid: this.parseMention(str)
        }
      })
      if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str, c3, {
        contextInfo: {
          mentionedJid: this.parseMention(str)
        }
      })
      if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str, c4, {
        contextInfo: {
          mentionedJid: this.parseMention(str)
        }
      })
        
      for (let _p of PLAYER) {
        room.price.eris += (Math.floor(Math.random() * 80)) * 1
        room.price.exp += (Math.floor(Math.random() * 76)) * 1
        room.game.sampah += (Math.floor(Math.random() * 16)) * 1
        room.price.string += (pickRandom([0, 0, 5, 10, 3, 4, 0, 1, 0, 0, 0, 0, 0, 0])) * 1
        room.price.kayu += (pickRandom([0, 0, 0, 1,10, 4, 5, 0, 0, 0, 0, 0, 0])) * 1
        room.price.batu += (pickRandom([0, 0, 0, 5, 10, 3, 4, 1, 0, 0, 0, 0, 0, 0])) * 1
        room.game.common += (pickRandom([0, 0, 0, 3, 4, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0])) * 1
      }

      let users = global.db.data.users
      let orang = PLAYER.length
      let { health, sword } = room.less
      let { exp, eris, sampah, potion, diamond, iron, kayu, batu, string, common, uncommon, mythic, legendary, pet, petFood } = room.price

      setTimeout(async () => {
        let str2 =`👩‍🏫 *ᴊᴜɢᴀᴅᴏʀᴇs:*
${P}
*ᴠɪᴅᴀ:* -${health * 1} 
*ʀᴇsɪsᴛᴇɴᴄɪᴀ ᴇsᴘᴀᴅᴀ:* -${sword * 1} 
- - - - - - - - - - - - - - - - - -
*- ʀ ᴇ ᴄ ᴏ ᴍ ᴘ ᴇ ɴ s ᴀ s -*
*➞ ᴇxᴘ:* ${exp * orang}
*➞ ᴇʀɪs:* ${eris * orang}
*➞ ʙᴀsᴜʀᴀ:* ${sampah  * orang}${potion == 0 ? '' : '\n*➞ ᴘᴏᴄɪᴏɴ:* ' + potion * orang}${kayu == 0 ? '' : '\n*➞ ᴍᴀᴅᴇʀᴀ:* ' + kayu * orang}${batu == 0 ? '' : '\n*➞ ʀᴏᴄᴀ:* ' + batu * orang}${string == 0 ? '' : '\n*➞ ᴄᴜᴇʀᴅᴀ:* ' + string * orang}${iron == 0 ? '' : '\n*➞ ʜɪᴇʀʀᴏ:* ' + iron * orang}${diamond == 0 ? '' : '\n*➞ ᴅɪᴀᴍᴀɴᴛᴇ:* ' + diamond * orang}${common == 0 ? '' : '\n*➞ ᴄᴏᴍᴜɴ:* ' + common * orang}${uncommon == 0 ? '' : '\n*➞ ᴇsᴛʀᴀñᴏ:* ' + uncommon * orang}
`.trim()
        await m.reply(str2, c1, {
          contextInfo: {
            mentionedJid: this.parseMention(str2),
          externalAdReply :{
    mediaUrl: "wa.me/5493813991888",
    mediaType: 2,
    description: "Hutao-Bot", 
    title: '- ᴅ ᴜ ɴ ɢ ᴇ ᴏ ɴ -',
    body: "Hutao-Bot",
    thumbnail: await(await fetch('https://telegra.ph/file/1836eec6c22d949829474.jpg')).buffer(),
    sourceUrl: "wa.me/5493813991888"
     }}
  })
        if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str2, c2, {
          contextInfo: {
            mentionedJid: this.parseMention(str2)
          }
        })
        if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str2, c3, {
          contextInfo: {
            mentionedJid: this.parseMention(str2)
          }
        })
        if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str2, c4, {
          contextInfo: {
            mentionedJid: this.parseMention(str2)
          }
        })
      }, pickRandom([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000]))
      for (let i = 0; i < PLAYER.length; i++) {
        let p = PLAYER[i]
        setTimeout(() => {
          users[p].health -= health * 1
          users[p].sworddurability -= sword * 1
          users[p].eris += eris * 1
          users[p].exp += exp * 1
          users[p].trash += sampah * 1
          users[p].potion += potion * 1
          users[p].diamond += diamond * 1
          users[p].iron += iron * 1
          users[p].wood += kayu * 1
          users[p].rock += batu * 1
          users[p].string += string * 1
          users[p].common += common * 1
          users[p].uncommon += uncommon * 1
          users[p].mythic += mythic * 1
          users[p].legendary += legendary * 1
          users[p].pet += pet * 1
          users[p].petFood += petFood * 1
          users[p].lastdungeon = new Date * 1

          if ((users[p].health * 1) < 1) users[p].health = 0
          if ((users[p].sworddurability * 1) < 1) {
            users[p].sword -= 1
            users[p].sworddurability = (users[p].sword * 1) * 50
          }
        }, i * 1500)
      }

      // Nak entok item Rare
      if (mythic > 0) {
        let str3 = '🎉 ғᴇʟɪᴄɪᴅᴀᴅᴇs 🎉\n ' + P + '\nᴏʙᴛᴜᴠɪsᴛᴇ *' + mythic * orang + '* ᴄᴀᴊᴀ ᴍɪsᴛɪᴄᴀ'
        m.reply(str3, c1, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
        if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str3, c2, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
        if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str3, c3, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
        if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str3, c4, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
      }

      // Nak entok item Epic
      if (legendary > 0 || pet > 0) {
        let str3 = (mythic > 0 ? 'ʏ' : 'ғᴇʟɪᴄɪᴅᴀᴅᴇs ' + P + ' ᴛᴜ') + ' ᴏʙᴛᴜᴠɪsᴛᴇ ' + (pet > 0 && legendary > 0 ? `*${legendary * orang}* ᴄᴀᴊᴀ ʟᴇɢᴇɴᴅᴀʀɪᴀ ʏ ᴛᴀᴍʙɪᴇɴ *${pet * orang}* ᴘᴇᴛ ᴛᴏᴋᴇɴ` : pet > 0 && legendary < 1 ? `*${pet * orang}* ᴘᴇᴛ ᴛᴏᴋᴇɴ` : legendary > 0 && pet < 1 ? `*${legendary * orang}* ᴄᴀᴊᴀ ʟᴇɢᴇɴᴅᴀʀɪᴀ` : '')
        m.reply(str3, c1, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
        if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str3, c2, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
        if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str3, c3, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
        if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str3, c4, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
      }

      // Biar lebih simple
      let _1 = users && p1 && users[p1] ? users[p1] : {}
      let _2 = users && p2 && users[p2] ? users[p2] : {}
      let _3 = users && p3 && users[p3] ? users[p3] : {}
      let _4 = users && p4 && users[p4] ? users[p4] : {}
      let _H1 = _1 && _1.health ? (_1.health * 1) : 100
      let _H2 = _2 && _2.health ? (_2.health * 1) : 100
      let _H3 = _3 && _3.health ? (_3.health * 1) : 100
      let _H4 = _4 && _4.health ? (_4.health * 1) : 100

      // sd = SwordDurability :v
      let _sd1 = _1 && _1.sworddurability ? (_1.sworddurability * 1) : 100
      let _sd2 = _2 && _2.sworddurability ? (_2.sworddurability * 1) : 100
      let _sd3 = _3 && _3.sworddurability ? (_3.sworddurability * 1) : 100
      let _sd4 = _4 && _4.sworddurability ? (_4.sworddurability * 1) : 100

      //Peringatan kalau health nya 0 ataupun sword durabilitynya 0
      if ((_H1 || _H2 || _H3 || _H4 || _sd1 || _sd2 || _sd3 || _sd4) < 1) {

        //Sama kek atas biar simple aja :v 
        let s1 = _sd1 ? (_sd1 * 1) < 1 : false
        let s2 = _sd2 ? (_sd2 * 1) < 1 : false
        let s3 = _sd3 ? (_sd3 * 1) < 1 : false
        let s4 = _sd4 ? (_sd4 * 1) < 1 : false

        //Buat nyimpen data sementara :v
        let HEALT = [], SDH = [], SDM1L = []
        for (let siapa in PLAYER) {
          if ((users[siapa].health * 1) < 1) HEALT.push(siapa)
          if ((users[siapa].sworddurability * 1) < 1 && (users[siapa].sword * 1) == 1) SDH.push(siapa)
          if ((users[siapa].sworddurability * 1) < 1 && (users[siapa].sword * 1) !== 1) SDM1L.push(siapa)
        }

        // Convert Array to String
        let sI = data(SDH)
        let sH = data(SDM1L)
        let H = data(HEALT)

        let str3 = `${((SDH || SDH.length > 0) || (SDM1L || SDM1L.length > 0)) ? `⚔️ᴇsᴘᴀᴅᴀ ${((SDH || SDH.length > 0 ? sI + ' ᴅᴇsᴛʀᴜɪᴅᴀ, ᴘᴏʀ ғᴀᴠᴏʀ ʜᴀᴢ ᴜɴᴀ ⚔️ᴇsᴘᴀᴅᴀ, ᴇsᴄʀɪʙɪᴇɴᴅᴏ *' + usedPrefix + 'craft espada*' : '') + (SDM1L || SDM1L.length > 0 ? (SDH || SDH.length > 0 ? ', Mientras que la ⚔️Espada fue' : '') + sH + ' Destruida, soltó *1* nivel' : ''))}` : ''}${HEALT || HEALT.length > 0 ? `❤️
        vida ${H} Cuando termine, complete ❤️vida escribiendo ${usedPrefix}curar` : ''}`
        m.reply(str3, c1, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
        if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str3, c2, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
        if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str3, c3, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
        if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str3, c4, {
          contextInfo: {
            mentionedJid: this.parseMention(str3)
          }
        })
      }
      delete global.dungeon[room.id]
    } 
    if (global.dungeon && room.state == 'PLAYING') delete global.dungeon[room.id] 
  }

  return 
}

handler.help = ['dungeon'].map(v => v + ' [custom room name]')
handler.tags = ['rpg']
handler.command = /^(dungeon)$/i
handler.level = 0

handler.mods = false

export default handler

/**
 * pickRandom from array
 * @param {Array} list 
 * @returns *
 */
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

/**
 * Message if the conditions are not met
 * @param {Number} sword 
 * @param {Number} armor 
 * @param {Number} healt 
 * @param {String} usedPrefix 
 * @returns String
 */
function item(sword, armor, health, usedPrefix) {
  let sw = (sword * 1) < 1
  let a = (armor * 1) < 1
  let h = (health * 1) < 90
  let str = `
${sw ? '➞ ᴛᴜ ɴᴏ ᴛɪᴇɴᴇs ᴇsᴘᴀᴅᴀ' : ''}${sw && a && h ? ',' : sw && a ? ' ʏ ' : ''} ${a ? 'ᴀʀᴍᴀᴅᴜʀᴀ !' : ''}${sw && a && h ? '\n➞ ᴛᴜ ᴠɪᴅᴀ ᴇs ᴍᴇɴᴏs ᴅᴇ 90' : h ? '\n➞ ᴛᴜ ᴠɪᴅᴀ ᴇs ᴍᴇɴᴏs ᴅᴇ 90' : ''}\n- - - - - - - - - - - - - - - \n${sw ? `\n「🗡️」• ᴏʙᴛᴇɴ ᴜɴᴀ ᴇsᴘᴀᴅᴀ ᴇsᴄʀɪʙɪᴇɴᴅᴏ: *${usedPrefix}craft espada*` : ''}${a ? `\n「🥼」• ʜᴀᴢ ᴜɴᴀ ᴀʀᴍᴀᴅᴜʀᴀ ᴇsᴄʀɪʙɪᴇɴᴅᴏ: *${usedPrefix}craft armadura*` : ''}${h ? `\n「❤️」• ᴄᴜʀᴀᴛᴇ ᴇsᴄʀɪʙɪᴇɴsᴏ: *${usedPrefix}curar*` : ''}
  `.trim()
  return str
}

/**
 * To split jid
 * @param {String} jid 
 * @returns String
 */
function M(jid) {
  return '@' + jid.split('@')[0]
}

/**
 * To clock
 * @param {Number} ms 
 * @returns String
 */
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0) ).join(':')
}

/**
 * Get data in Array
 * @param {Array} DATA ( avaible array length is 4)
 * @returns String
 */
function data(DATA) {
  let panjang = DATA.length * 1
  let msg = ''
  DATA.forEach(player => {
    if (panjang == 1) msg += `*${M(player)}*` 
    else {
      if (DATA.indexOf(player) !== (panjang - 1)) msg += `*${M(player)}*, ` 
      else msg += `ʏ *${M(player)}*`
    }
  })
  return msg
}