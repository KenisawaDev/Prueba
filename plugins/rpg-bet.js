let confirm = {}

async function handler(m, { conn, args }) {
    //if (!isROwner) throw 'Dalam perbaikan'
    if (m.sender in confirm) throw m.reply('¡¡Todavía estás apostando, espera hasta que termine!!')
    try {
        let user = global.db.data.users[m.sender]
        let count = (args[0] && number(parseInt(args[0])) ? Math.max(parseInt(args[0]), 1) : /todo/i.test(args[0]) ? Math.floor(parseInt(user.eris)) : 1) * 1
        if ((user.eris * 1) < count) return m.reply('Uang Kamu Tidak Cukup!!')
        if (!(m.sender in confirm)) {
            confirm[m.sender] = {
                sender: m.sender,
                count,
                timeout: setTimeout(() => (m.reply('Se acabo el tiempo'), delete confirm[m.sender]), 60000)
            }
            let txt = `¿Estás seguro de que quieres apostar con Hutao?\n\n*Apuesta:* ${count}\nTiempo: 60 Segundos\nResponde *Sí* si quieres, Responde *No* para cancelar`
            return conn.reply(m.chat, txt, m)
        }
    } catch (e) {
        console.error(e)
        if (m.sender in confirm) {
            let { timeout } = confirm[m.sender]
            clearTimeout(timeout)
            delete confirm[m.sender]
            m.reply('Cancelado')
        }
    }
}

handler.before = async m => {
    if (!(m.sender in confirm)) return
    if (m.isBaileys) return
    let { timeout, count } = confirm[m.sender]
    let user = global.db.data.users[m.sender]
    let erisDulu = user.eris * 1
    let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()
    try {
        if (/^(Si|si)?$/i.test(txt)) {
            let Bot = (Math.ceil(Math.random() * 91)) * 1
            let Kamu = (Math.floor(Math.random() * 81)) * 1
            let status = 'Perdio'
            if (Bot < Kamu) {
                user.eris += count * 1
                status = 'Gano'
            } else if (Bot > Kamu) {
                user.eris -= count * 1
            } else {
                status = 'Serie'
                user.eris += (Math.floor(count / 1.5)) * 1
            }
            m.reply(`
| *JUGADORES* | *PUNTOS* |
*Hutao:*      ${Bot}
*Tu:*    ${Kamu}

Usted *${status}*, ${status == 'Gano' ? `Consigio *+${count * 2}*` : status == 'Perdio' ? `Perdio *-${count * 1}*` : `Gano *+${Math.floor(count / 1.5)}*`} 
  `.trim())
            clearTimeout(timeout)
            delete confirm[m.sender]
            return !0
        } else if (/^(No|no)?$/i.test(txt)) {
            clearTimeout(timeout)
            delete confirm[m.sender]
            m.reply('Rejected')
            return !0
        }

    } catch (e) {
        clearTimeout(timeout)
        delete confirm[m.sender]
        if (erisDulu > (user.eris * 1)) user.eris = erisDulu * 1
        m.reply('Error al apostar (Rejected)')
        return !0
    } finally {
        clearTimeout(timeout)
        delete confirm[m.sender]
        return !0
    }
}

handler.help = ['apostar']
handler.tags = ['rpg']
handler.command = /^(apostar|bet)$/i

handler.register = true

export default handler

/**
 * Detect if thats number
 * @param {Number} x 
 * @returns Boolean
 */
function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}