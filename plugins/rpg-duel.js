let { MessageType } = (await import('@whiskeysockets/baileys')).default

let handler = async ( m, { conn, args, command}) => {
  conn.duel = conn.duel ? conn.duel : []
  args.length != 0 ? conn.duel.push(m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')) : ""
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  //let kita = conn.duel[m.sender]
  let enemy = global.db.data.users[who]
  let user = global.db.data.users[m.sender]
  let count = args[1] && args[1].length > 0 ? Math.min(100, Math.max(parseInt(args[1]), 1)) : Math.min(1)
  let nama = conn.getName(m.sender)

  let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
  let randomkamu = `${Math.floor(Math.random() * 81)}`.trim()
  let Aku = (randomaku * 1)
  let Kamu = (randomkamu * 1)

  let __timers = (new Date - user.lastduel)
  let _timers = (300000 - __timers) 
  let timers = clockString(_timers)

   try {
     if (/pvp/.test(command)) {
       if (!who) return m.reply('¡Etiqueta con quién quieres batirte en duelo!')

     let pler = `@${m.sender.replace(/@.+/, '')} fue Invitando a un duelo ${args[0]}\n\nEscribe dsi para aceptar\nO dno para cancelar`
     let mentionedJid = [m.sender]

       if (new Date - user.lastduel > 300000) {
      conn.reply(m.chat, pler, m, false, { contextInfo: { mentionedJid }})

      } else conn.reply( m.chat, `Has tenido un duelo, espera hasta *${timers}*`, m)
     }

     if (/dsi/.test(command)) {
     let kenal = !who.includes(m.sender)
     if(kenal) throw '¿Quién eres?\nNo fuiste invitado'
     user.lastduel = new Date * 1
     if (Aku > Kamu) {
       user.eris -= 50000
       enemy.eris += 50000
       delete conn.duel[m.sender]
       conn.reply(m.chat, `@${who.split("@")[0]} Gana el juego\n*Ganancias:*\nEris.50000 para comprar frituras`.trim(), m)
     } else if (Aku < Kamu) {
       user.eris += 50000
       enemy.eris -= 50000
       delete conn.duel[m.sender]
       conn.reply(m.chat, `@${who.split("@")[0]} Perdió\n*Hadiah:*\nEris.50000 para compra limites`.trim(), m)
     } else {
       user.eris += 250
       enemy.eris += 250
       delete conn.duel[m.sender]
       conn.reply(m.chat, `@${who.split("@")[0]}\n *Empate*\nObtienen 250 de eris`.trim(), m)
     }
   }
   if (/dno/.test(command)) {
   let kenal = !who.includes(m.sender)
   if(kenal) return conn.sendBut(m.chat, `¿Quién eres?\nNo fuiste invitado`, m)
    //if (!who) return m.reply('tag yg ingin di ajak duel!')
    conn.reply( m.chat, `@${who.split("@")[0]} Cancela la invitación al duelo`, m)
    delete conn.duel[m.sender]
   }
 } catch (e) {
   //return conn.sendBut( m.chat, `Sepertinya ada bug`, `laporkan ke owner`, `Kanjut Badag`, `+bug duel ${e.stack}`, m)
   return m.reply(`${e}`)
 }
}

handler.help = ['pvp']
handler.tags = ['rpg']
handler.command = /^(pvp|dsi|dno)/i
handler.group = true

export default handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}