let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Ejemplo: *${usedPrefix}transferir eris 100 @marcar*\n\n*Lista de cosas que se pueden transferir :*\n• eris\n• limite\n• pocion\n• basura\n• diamante\n• comun\n• extraño\n• mistico\n• legendario\n• cuerda\n🪵 madera\n• roca\n• hierro`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if (!m.mentionedJid || !args[2]) throw m.reply('Etiqueta uno o escribe el número!!')
        let users = global.db.data.users
        switch (type) {
            case 'eris':
                if (global.db.data.users[m.sender].eris >= count * 1) {
                    try {
                        global.db.data.users[m.sender].eris -= count * 1
                        global.db.data.users[who].eris += count * 1
                        conn.reply(m.chat, `Monto de Eris transferido exitosamente ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].eris += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu Eris no es suficiente para transferir ${count} `.trim(), m)
                break
            case 'limite':
                if (global.db.data.users[m.sender].limit >= count * 1) {
                    try {
                        global.db.data.users[m.sender].limit -= count * 1
                        global.db.data.users[who].limit += count * 1
                        conn.reply(m.chat, `Límite transferido exitosamente ${count}`.trim(), m)
                    } catch (e) {
                        [m.sender].limit += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu límite no es suficiente para transferir el límite de ${count}`.trim(), m)
                break
            case 'pocion':
                if (global.db.data.users[m.sender].potion >= count * 1) {
                    try {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[who].potion += count * 1
                        conn.reply(m.chat, `Poción ${count} transferida con éxito`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].potion += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu poción no es suficiente`.trim(), m)
                break
            case 'basura':
                if (global.db.data.users[m.sender].trash >= count * 1) {
                    try {
                        global.db.data.users[m.sender].trash -= count * 1
                        global.db.data.users[who].trash += count * 1
                        conn.reply(m.chat, `Se transfirió correctamente ${count} basura`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].trash += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `no tienes suficiente basura`.trim(), m)
                break
            case 'diamante':
                if (global.db.data.users[m.sender].diamond >= count * 1) {
                    try {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[who].diamond += count * 1
                        conn.reply(m.chat, `${count} diamantes transferidos correctamente`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].diamond += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tus diamantes no son suficientes`.trim(), m)
                break
            case 'comun':
                if (global.db.data.users[m.sender].common >= count * 1) {
                    try {
                        global.db.data.users[m.sender].common -= count * 1
                        global.db.data.users[who].common += count * 1
                        conn.reply(m.chat, `${count} caja común transferida exitosamente`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].common += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu caja común no es suficiente`.trim(), m)
                break
            case 'extraña':
                if (global.db.data.users[m.sender].uncommon >= count * 1) {
                    try {
                        global.db.data.users[m.sender].uncommon -= count * 1
                        global.db.data.users[who].uncommon += count * 1
                        conn.reply(m.chat, `Caja extraña ${count} transferida con éxito`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].uncommon += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu caja extraña no es suficiente`.trim(), m)
                break
            case 'mistico':
                if (global.db.data.users[m.sender].mythic >= count * 1) {
                    try {
                        global.db.data.users[m.sender].mythic -= count * 1
                        global.db.data.users[who].mythic += count * 1
                        conn.reply(m.chat, `Caja mítica de ${count} transferida con éxito`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].mythic += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu caja mística no es suficiente`.trim(), m)
                break
            case 'legendario':
                if (global.db.data.users[m.sender].legendary >= count * 1) {
                    try {
                        global.db.data.users[m.sender].legendary -= count * 1
                        global.db.data.users[who].legendary += count * 1
                        conn.reply(m.chat, `Caja legendaria ${count} transferida con éxito`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].legendary += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu caja legendaria no es suficiente`.trim(), m)
                break
            case 'cuerda':
                if (global.db.data.users[m.sender].string >= count * 1) {
                    try {
                        global.db.data.users[m.sender].string -= count * 1
                        global.db.data.users[who].string += count * 1
                        conn.reply(m.chat, `Cuerda transferida exitosamente por valor de ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].string += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Sus cuerdas son insuficientes para transferir ${count} cadenas`.trim(), m)
                break
            case 'roca':
                if (global.db.data.users[m.sender].rock >= count * 1) {
                    try {
                        global.db.data.users[m.sender].rock -= count * 1
                        global.db.data.users[who].rock += count * 1
                        conn.reply(m.chat, `Roca transferida con éxito Por valor de ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].rock += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu roca no es suficiente para transferir ${count} roca`.trim(), m)
                break
            case 'madera':
                if (global.db.data.users[m.sender].wood >= count * 1) {
                    try {
                        global.db.data.users[m.sender].wood -= count * 1
                        global.db.data.users[who].wood += count * 1
                        conn.reply(m.chat, `Madera transferida exitosamente Por valor de ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].wood += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu madera no es suficiente para transferir ${count} madera`.trim(), m)
                break
            case 'hierro':
                if (global.db.data.users[m.sender].iron >= count * 1) {
                    try {
                        global.db.data.users[m.sender].iron -= count * 1
                        global.db.data.users[who].iron += count * 1
                        conn.reply(m.chat, `Hierro transferido con éxito por valor de ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].iron += count * 1
                        m.reply('No se pudo transferir')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Su hierro no es suficiente para transferir ${count} hierro`.trim(), m)
                break
            default:
                return conn.reply(m.chat, `Ejemplo: *${usedPrefix}transferir eris 100 @marcar*\n\n*Lista de cosas que se pueden transferir :*\n• eris\n• limite\n• pocion\n• basura\n• diamante\n• comun\n• extraño\n• mistico\n• legendario\n• cuerda\n🪵 madera\n• roca\n• hierro`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Ejemplo: *${usedPrefix}transferir eris 100 @marcar*\n\n*Lista de cosas que se pueden transferir :*\n• eris\n• limite\n• pocion\n• basura\n• diamante\n• comun\n• extraño\n• mistico\n• legendario\n• cuerda\n🪵 madera\n• roca\n• hierro`.trim(), m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'Transferir.js error\nNo: *' + m.sender.split`@`[0] + '*\nComando: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}

handler.help = ['transferir']
handler.tags = ['rpg']
handler.command = /^(transferir|tf)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

export default handler
