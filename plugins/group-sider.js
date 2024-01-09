let handler = async (m, {
    conn,
    text,
    groupMetadata
}) => {
await conn.sendPresenceUpdate('composing', m.chat)
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "America/Buenos_Aires"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var pesan = "Mmmm, oye, fantasma... jajaja"
    } else {
        var pesan = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return conn.reply(m.chat, `*No hay inactivos en este grupo.*`, m)
    conn.reply(m.chat, `*${total}/${sum}* Miembros del grupo *${await conn.getName(m.chat)}* Puede definirse como inactivo por :\n1. Inactivo por más de 7 días\n2. Entro al grupo pero no habló \n\n_“${pesan}”_\n\n*Lista de miembros fantasmas:*\n${sider.map(v => '  • @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Inactivo ' : ' Desconectado ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`, m, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}
handler.help = ['inactivos']
handler.tags = ['group']
handler.command = /^(inactivos)$/i
handler.group = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  if (d == 0 && h == 0 && m == 0) {
        return "Sólo apenas"
    } else {
        return [d, 'H ', h, 'J '].map(v => v.toString().padStart(2, 0)).join('')
    }
  
}
