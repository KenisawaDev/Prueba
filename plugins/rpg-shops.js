const Blimit = 50000
const potion = 8000
const Spotion = 4000
const Bdiamond = 500000
const Sdiamond = 250000
const Bcommon = 50000
const Scommon = 1500
const Buncommon = 90000
const Suncommon = 19000
const Bmythic = 500000
const Smythic = 100000
const Blegendary = 1000000
const Slegendary = 200000
const Btrash = 15
const Strash = 15
const Bwood = 150000
const Swood = 40000
const Biron = 250000
const Siron = 25000
const Bstring = 15000
const Sstring = 7000
const Bsword = 1000000
const Ssword = 500000
const Bumpan = 70000
const Bpancingan = 150000
const Spancingan = 30000
const Brock = 60000
const Srock = 10000
let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let nomors = m.sender
    const Kchat = `============================
Ejemplo: .tienda (comprar/vender) limite 10  
    
*Lista de precios de compra de bienes*

============================
_*Mayores ventas*_
㊮ Limite: ${Blimit} Eris.

 - .tienda comprar limite

============================
㊮ Diamante: ${Bdiamond} Eris.
㊮ Pocion: ${potion} Eris.
㊮ Basura: ${Btrash} Eris.
㊮ Cuerda: ${Bstring} Eris.
㊮ Hierro: ${Biron} Eris.
㊮ Roca: ${Brock} Eris.
㊮ Madera: ${Bwood} Eris.
㊮ Mistico: ${Bmythic} Eris.
㊮ Comun: ${Bcommon} Eris.
㊮ Extraño: ${Buncommon} Eris.
㊮ Legendario: ${Blegendary} Eris.
============================
${readMore}
 *Lista de las cosas que puedes vender*

============================
㊮ Pocion: ${Spotion} Eris.
㊮ Diamantes: ${Sdiamond} Eris.
㊮ Basura: ${Strash} Eris.
㊮ Cuerda: ${Sstring} Eris.
㊮ Hierro: ${Siron} Eris.
㊮ Roca: ${Srock} Eris.
㊮ Madera: ${Swood} Eris.
㊮ Comun: ${Scommon} Eris.
㊮ Extraño: ${Suncommon} Eris.
㊮ Mistico: ${Smythic} Eris.
㊮ Legendario: ${Slegendary} Eris.
============================
*NOTA:* _Los precios de la tienda pueden cambiar en cualquier momento dependiendo de las circunstancias_

`.trim()
    try {
        if (/shop|tienda/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const trash = global.db.data.users[m.sender].trash
            switch (jualbeli) {
            case 'comprar':
                switch (_type) {
                    case 'limite':
                            if (global.db.data.users[m.sender].eris >= Blimit * count) {
                                global.db.data.users[m.sender].eris -= Blimit * count
                                global.db.data.users[m.sender].limit += count * 1
                                conn.reply(m.chat, `Se compró ${count} Limite/s, por ${Blimit * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`,)
                        break
                    case 'pocion':
                            if (global.db.data.users[m.sender].eris >= potion * count) {
                                global.db.data.users[m.sender].eris -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Se compró ${count} Pocion/es, por ${potion * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`,)
                        break
                    case 'diamante':
                            if (global.db.data.users[m.sender].eris >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].eris -= Bdiamond * count
                                conn.reply(m.chat, `Se compró ${count} Diamante/s, por ${Bdiamond * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                        
                        break
                    case 'comun':
                            if (global.db.data.users[m.sender].eris >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].eris -= Bcommon * count
                                conn.reply(m.chat, `Se compró ${count} Caja/s comun/es, por ${Bcommon * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                          
                        break
                    case 'extraño':
                            if (global.db.data.users[m.sender].eris >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].eris -= Buncommon * count
                                conn.reply(m.chat, `Se compró ${count} Caja/s extraña/s, por ${Buncommon * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                        
                        break
                    case 'mistico':
                            if (global.db.data.users[m.sender].eris >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].eris -= Bmythic * count
                                conn.reply(m.chat, `Se compró ${count} Caja mistica/s, por ${Bmythic * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                        
                        break
                    case 'legendario':
                            if (global.db.data.users[m.sender].eris >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].eris -= Blegendary * count
                                conn.reply(m.chat, `Se compró ${count} Caja/s legendaria/s, por ${Blegendary * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                        
                        break
                    case 'basura':
                            if (global.db.data.users[m.sender].eris >= Btrash * count) {
                                global.db.data.users[m.sender].trash += count * 1
                                global.db.data.users[m.sender].eris -= Btrash * count
                                conn.reply(m.chat, `Se compró ${count} de Basura, por ${Btrash * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`.trim(), m)
                        
                        break
                    case 'madera':
                            if (global.db.data.users[m.sender].eris >= Bwood * count) {
                                global.db.data.users[m.sender].wood += count * 1
                                global.db.data.users[m.sender].eris -= Bwood * count
                                conn.reply(m.chat, `Se compró ${count} de Madera, por ${Bwood * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`.trim(), m)
                        
                        break
                  case 'hierro':
                            if (global.db.data.users[m.sender].eris >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].eris -= Biron * count
                                conn.reply(m.chat, `Se compró ${count} de Hierro dengan harga ${Biron * count} eris`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} de hierro, coste ${Biron * count} eris`.trim(), m)
                        
                        break
                  case 'cuerda':
                            if (global.db.data.users[m.sender].eris >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].eris -= Bstring * count
                                conn.reply(m.chat, `Se compró ${count} Cuerda/s, por ${Bstring * count} eris`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} cuerda/s, coste ${Bstring * count} eris`.trim(), m)
                        
                        break
                  case 'roca':
                            if (global.db.data.users[m.sender].eris >= Brock * count) {
                                global.db.data.users[m.sender].rock += count * 1
                                global.db.data.users[m.sender].eris -= Brock * count
                                conn.reply(m.chat, `Se compró ${count} Roca/s, por ${Brock * count} eris`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} roca/s, coste ${Brock * count} eris`.trim(), m)
                        
                        break 
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'vender': 
                switch (_type) {
                case 'pocion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].eris += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Pocion/es, por ${Spotion * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu poción no es suficiente`.trim(), m)
                    break
                case 'comun':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].eris += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Caja/s comun/es, por ${Scommon * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu caja común no es suficiente`.trim(), m)
                    break
                case 'extraño':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].eris += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Caja/s extraña/s, por ${Suncommon * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu caja extraña no es suficiente`.trim(), m)
                    break
                case 'mistico':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].eris += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Caja/s mistica/s, por ${Smythic * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu caja mística no es suficiente`.trim(), m)
                    break
                case 'legendario':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].eris += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Caja/s legendaria/s, por ${Slegendary * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu caja legendaria no es suficiente`.trim(), m)
                    break
                case 'basura':
                    if (global.db.data.users[m.sender].trash >= count * 1) {
                        global.db.data.users[m.sender].trash -= count * 1
                        global.db.data.users[m.sender].eris += Strash * count
                        conn.reply(m.chat, `Se vendió ${count} de Basura, por ${Strash * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `tu basura no es suficiente`.trim(), m)
                    break
                    case 'madera':
                        if (global.db.data.users[m.sender].wood >= count * 1) {
                            global.db.data.users[m.sender].wood -= count * 1
                            global.db.data.users[m.sender].eris += Swood * count
                            conn.reply(m.chat, `Se vendió ${count} de Madera, por ${Swood * count} eris`, m)
                        } else conn.reply(m.chat, `tu madera no es suficiente`, m)
                        break
                    case 'cebo':
                        if (global.db.data.users[m.sender].pancingan >= count * 1) {
                            global.db.data.users[m.sender].pancingan -= count * 1
                            global.db.data.users[m.sender].eris += Spancingan * count
                            conn.reply(m.chat, `Se vendió ${count} Cebo/s, por ${Spancingan * count} eris`, m)
                        } else conn.reply(m.chat, `Tu cebo no es suficiente`, m)
                        break
                    case 'hierro':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].eris += Siron * count
                            conn.reply(m.chat, `Se vendió ${count} de Hierro, por ${Siron * count} eris`, m)
                        } else conn.reply(m.chat, `Tu hierro no es suficiente`, m)
                        break
                    case 'cuerda':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].eris += Sstring * count
                            conn.reply(m.chat, `Se vendió ${count} Cuerda/s, por ${Sstring * count} eris`, m)
                        } else conn.reply(m.chat, `Tu cuerda no es suficiente`, m)
                        break
                    case 'espada':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].eris += Ssword * count
                            conn.reply(m.chat, `Se vendió ${count} Espada/s, por ${Ssword * count} eris`, m)
                        } else conn.reply(m.chat, `Tu espada no es suficiente`, m)
                        break
                    case 'roca':
                        if (global.db.data.users[m.sender].rock >= count * 1) {
                            global.db.data.users[m.sender].rock -= count * 1
                            global.db.data.users[m.sender].eris += Srock * count
                            conn.reply(m.chat, `Se vendió ${count} Roca/s, por ${Srock * count} eris`, m)
                        } else conn.reply(m.chat, `Tu roca no es suficiente`, m)
                        break

                    case 'diamante':
                       if (global.db.data.users[m.sender].diamond >= count * 1) {
                           global.db.data.users[m.sender].diamond -= count * 1
                           global.db.data.users[m.sender].eris += Sdiamond * count
                           conn.reply(m.chat, `Se vendió ${count} Diamante/s, por ${Sdiamond * count} eris`, m)
                        } else conn.reply(m.chat, `Tus diamantes no son suficientes`, m)
                       break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/comprar|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                    case 'limite':
                            if (global.db.data.users[m.sender].eris >= Blimit * count) {
                                global.db.data.users[m.sender].eris -= Blimit * count
                                global.db.data.users[m.sender].limit += count * 1
                                conn.reply(m.chat, `Se compró ${count} Limite/s, por ${Blimit * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`,)
                        break
                    case 'pocion':
                            if (global.db.data.users[m.sender].eris >= potion * count) {
                                global.db.data.users[m.sender].eris -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Se compró ${count} Pocion/es, por ${potion * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`,)
                        break
                    case 'diamante':
                            if (global.db.data.users[m.sender].eris >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].eris -= Bdiamond * count
                                conn.reply(m.chat, `Se compró ${count} Diamante/s, por ${Bdiamond * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                        
                        break
                    case 'comun':
                            if (global.db.data.users[m.sender].eris >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].eris -= Bcommon * count
                                conn.reply(m.chat, `Se compró ${count} Caja/s comun/es, por ${Bcommon * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                          
                        break
                    case 'extraño':
                            if (global.db.data.users[m.sender].eris >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].eris -= Buncommon * count
                                conn.reply(m.chat, `Se compró ${count} Caja/s extraña/s, por ${Buncommon * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                        
                        break
                    case 'mistico':
                            if (global.db.data.users[m.sender].eris >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].eris -= Bmythic * count
                                conn.reply(m.chat, `Se compró ${count} Caja mistica/s, por ${Bmythic * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                        
                        break
                    case 'legendario':
                            if (global.db.data.users[m.sender].eris >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].eris -= Blegendary * count
                                conn.reply(m.chat, `Se compró ${count} Caja/s legendaria/s, por ${Blegendary * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`, m)
                        
                        break
                    case 'basura':
                            if (global.db.data.users[m.sender].eris >= Btrash * count) {
                                global.db.data.users[m.sender].trash += count * 1
                                global.db.data.users[m.sender].eris -= Btrash * count
                                conn.reply(m.chat, `Se compró ${count} de Basura, por ${Btrash * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`.trim(), m)
                        
                        break
                    case 'madera':
                            if (global.db.data.users[m.sender].eris >= Bwood * count) {
                                global.db.data.users[m.sender].wood += count * 1
                                global.db.data.users[m.sender].eris -= Bwood * count
                                conn.reply(m.chat, `Se compró ${count} de Madera, por ${Bwood * count}`, m)
                            } else conn.reply(m.chat, `Dinero insuficiente`.trim(), m)
                        
                        break
                  case 'hierro':
                            if (global.db.data.users[m.sender].eris >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].eris -= Biron * count
                                conn.reply(m.chat, `Se compró ${count} de Hierro dengan harga ${Biron * count} eris`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} de hierro, coste ${Biron * count} eris`.trim(), m)
                        
                        break
                  case 'cuerda':
                            if (global.db.data.users[m.sender].eris >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].eris -= Bstring * count
                                conn.reply(m.chat, `Se compró ${count} Cuerda/s, por ${Bstring * count} eris`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} cuerda/s, coste ${Bstring * count} eris`.trim(), m)
                        
                        break
                  case 'roca':
                            if (global.db.data.users[m.sender].eris >= Brock * count) {
                                global.db.data.users[m.sender].rock += count * 1
                                global.db.data.users[m.sender].eris -= Brock * count
                                conn.reply(m.chat, `Se compró ${count} Roca/s, por ${Brock * count} eris`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} roca/s, coste ${Brock * count} eris`.trim(), m)
                        
                        break 
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|vender|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'pocion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].eris += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Pocion/es, por ${Spotion * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu poción no es suficiente`.trim(), m)
                    break
                case 'comun':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].eris += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Caja/s comun/es, por ${Scommon * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu caja común no es suficiente`.trim(), m)
                    break
                case 'extraño':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].eris += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Caja/s extraña/s, por ${Suncommon * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu caja extraña no es suficiente`.trim(), m)
                    break
                case 'mistico':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].eris += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Caja/s mistica/s, por ${Smythic * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu caja mística no es suficiente`.trim(), m)
                    break
                case 'legendario':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].eris += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Se vendió ${count} Caja/s legendaria/s, por ${Slegendary * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `Tu caja legendaria no es suficiente`.trim(), m)
                    break
                case 'basura':
                    if (global.db.data.users[m.sender].trash >= count * 1) {
                        global.db.data.users[m.sender].trash -= count * 1
                        global.db.data.users[m.sender].eris += Strash * count
                        conn.reply(m.chat, `Se vendió ${count} de Basura, por ${Strash * count} eris`.trim(), m)
                    } else conn.reply(m.chat, `tu basura no es suficiente`.trim(), m)
                    break
                    case 'madera':
                        if (global.db.data.users[m.sender].wood >= count * 1) {
                            global.db.data.users[m.sender].wood -= count * 1
                            global.db.data.users[m.sender].eris += Swood * count
                            conn.reply(m.chat, `Se vendió ${count} de Madera, por ${Swood * count} eris`, m)
                        } else conn.reply(m.chat, `tu madera no es suficiente`, m)
                        break
                    case 'hierro':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].eris += Siron * count
                            conn.reply(m.chat, `Se vendió ${count} de Hierro, por ${Siron * count} eris`, m)
                        } else conn.reply(m.chat, `Tu hierro no es suficiente`, m)
                        break
                    case 'cuerda':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].eris += Sstring * count
                            conn.reply(m.chat, `Se vendió ${count} Cuerda/s, por ${Sstring * count} eris`, m)
                        } else conn.reply(m.chat, `Tu cuerda no es suficiente`, m)
                        break
                    case 'roca':
                        if (global.db.data.users[m.sender].rock >= count * 1) {
                            global.db.data.users[m.sender].rock -= count * 1
                            global.db.data.users[m.sender].eris += Srock * count
                            conn.reply(m.chat, `Se vendió ${count} Roca/s, por ${Srock * count} eris`, m)
                        } else conn.reply(m.chat, `Tu roca no es suficiente`, m)
                        break

                    case 'diamante':
                       if (global.db.data.users[m.sender].diamond >= count * 1) {
                           global.db.data.users[m.sender].diamond -= count * 1
                           global.db.data.users[m.sender].eris += Sdiamond * count
                           conn.reply(m.chat, `Se vendió ${count} Diamante/s, por ${Sdiamond * count} eris`, m)
                        } else conn.reply(m.chat, `Tus diamantes no son suficientes`, m)
                       break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
    }
}

handler.help = ['tienda']
handler.tags = ['rpg']
    
handler.command = /^(tienda)$/i
handler.group = true
handler.register = true

export default handler

let more = String.fromCharCode(8206)
let readMore = more.repeat(4001)