let handler = async (m, { conn, command, args, usedPrefix }) => {
     let type = (args[0] || '').toLowerCase()
     let users = global.db.data.users[m.sender]
     let time = global.db.data.users[m.sender].lastkerja + 10800000
     //let __timers = (new Date - global.db.data.users[m.sender].lastkerja)
     // let _timers = (0 - __timers)
     // let timers = clockString(_timers) 
     //NO LO DESCUBRAS
     //Trabajo
     let pembayar = ['Caballero lascivo', 'Nobles corruptos', 'Esclavista', 'Aristócrata lascivo' ]
     let pembunuhbayarannn = pembayar[Math.floor(Math.random() * pembayar.length)]
     let mentanbat = ['hoja de ensueño', 'Dragonvine', 'Hoja de Kaila', 'Raíz de las Sombras', 'Flor de estrella', 'Hoja helada', 'Flor de luna', 'Hierba Sirena', 'Hierba celestial']
     let mencaritanamanobattt = mentanbat[Math.floor(Math.random() * mentanbat.length)]
     let pengbar = ['Ingredientes alimentarios', 'Armas', 'Ingredientes medicinales', 'Libros']
     let pengantarbaranggg = pengbar[Math.floor(Math.random() * pengbar.length)]
     let pane = ['zanahoria', 'Repollo', 'fresas', 'vino', 'trigo', 'naranja', 'banana', 'Manzana', 'melón']
     let panen = pane[Math.floor(Math.random() * pane.length)]
     let penmak = ['Hamburguesa', 'Filete', 'Ramen', 'Pollo Satay', 'Cerdo a la parrilla', 'Pescado a la parrilla', 'Crepes', 'Sopa de frutas']
     let penjualmakanannn = penmak[Math.floor(Math.random() * penmak.length)]
     let pelat = ['Conviértete en un entrenador de magia', 'Conviértete en un entrenador de espada', 'Conviértete en un entrenador de arqueros', 'Enseña a los estudiantes de la Academia de Magia', 'Enseña a los estudiantes de la Academia de Caballeros']
     let pelatihhh = pelat[Math.floor(Math.random() * pelat.length)]

     ///Motivo del despido
     let PB = ['No pudiste matar al objetivo', 'Fuiste atrapado por el guardia', 'Eres más débil que el objetivo']
     let Apembunuhbayaran = PB[Math.floor(Math.random() * PB.length)]
     let MTO = ['No se pudo encontrar medicina', 'Atacado por un monstruo', 'Muerto en el bosque', 'Expuesto a una planta venenosa']
     let Amencaritanamanobat = MTO[Math.floor(Math.random() * MTO.length)]
     let PGB = ['Te robaron', 'Te atacó un monstruo']
     let Apengantarbarang = PGB[Math.floor(Math.random() * PGB.length)]
     let PTN = ['Cosecha fallida', 'Tu campo está en llamas', 'Tu almacén está en llamas']
     let Apetani = PTN[Math.floor(Math.random() * PTN.length)]
     let PLT = ['Robas', 'Perviertes a tus propios alumnos']
     let Apelatih = PLT[Math.floor(Math.random() * PLT.length)]
     //Dinero
     let coinpb = Math.floor(Math.random() * 50) + 100000
     let coinmto = Math.floor(Math.random() * 40) + 40000
     let coinpgb = Math.floor(Math.random() * 50) + 60000
     let coinptn = Math.floor(Math.random() * 42) + 90000
     let coinpm = Math.floor(Math.random() * 30) + 40000
     let coinplt = Math.floor(Math.random() * 30) + 70000
     //ANJAY
     let _1pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatPB = (_1pecat * 1)
     let ppecatPB = `Fallaste porque ${Apembunuhbayaran}`

     let _2pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatMTO = (_2pecat * 1)
     let ppecatMTO = `No pudo encontrar un remedio porque ${Amencaritanamanobat}`

     let _3pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatPGB = (_3pecat * 1)
     let ppecatPGB = `Fallaste porque ${Apengantarbarang}`

     let _4pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatPTN = (_4pecat * 1)
     let ppecatPTN = `Fallaste porque ${Apetani}`

     let _5pecat = `${pickRandom(['1', '1', '1', '1'])}`
     let pecatPLT = (_5pecat * 1)
     let ppecatPLT = `Te despidieron porque ${Apelatih}`

     //NO LIMPIO BUENO GUAPO
     let kerjaanya = `*Lista de trabajos*
• asesino
• buscador_de_plantas
• repartidor
• agricultor
• vendedor_de_comida
• entrenador

Ejemplo: *.trabajar asesino*
`
     if (/trabajarprimero|work|trabajar/i.test(command)) {
          switch (type) {
               case 'asesino':
                    if (global.db.data.users[m.sender].pembunuhbayaran == false) throw m.reply('¡No es tu trabajo o estás desempleado!')
                    if (new Date - global.db.data.users[m.sender].lastkerja < 10800000) throw m.reply(`Has trabajado\nEs hora de tomar un descanso ${clockString(time - new Date())}`)
                    global.db.data.users[m.sender].eris += coinpb
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Mataste con éxito a *${pembunuhbayarannn}*\nY conseguiste *${coinpb}* Eris`)
                    if (pecatPB > 1) {
                         global.db.data.users[m.sender].pembunuhbayaran -= pecatPB * 1
                         m.reply(ppecatPB)
                    }
                    break
               case 'buscador_de_plantas':
                    if (global.db.data.users[m.sender].mencaritanamanobat == false) throw m.reply('¡No es tu trabajo o estás desempleado!')
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw m.reply(`Has trabajado, es hora de tomar un descanso.\n${clockString(time - new Date())}`)
                    global.db.data.users[m.sender].eris += coinmto
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Encuentras plantas medicinales *${mencaritanamanobattt}* y las vendes\nY obtienes el valor de Eris *${coinmto}*`)
                    if (pecatMTO > 1) {
                         global.db.data.users[m.sender].mencaritanamanobat -= pecatMTO * 1
                         m.reply(ppecatMTO)
                    }
                    break
               case 'repartidor':
                    if (global.db.data.users[m.sender].pengantarbarang == false) throw m.reply('¡No es tu trabajo o estás desempleado!')
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw m.reply(`Has trabajado, es hora de tomar un descanso.\n${clockString(time - new Date())}`)
                    global.db.data.users[m.sender].eris += coinpgb
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Entregas *${pengantarbaranggg}*\nY obtienes*${coinpgb}* Eris`)
                    if (pecatPGB > 1) {
                         global.db.data.users[m.sender].pengantarbarang -= pecatPGB * 1
                         m.reply(ppecatPGB)
                    }
                    break
               case 'agricultor':
                    if (global.db.data.users[m.sender].petani == false) throw m.reply('¡No es tu trabajo o estás desempleado!')
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw m.reply(`Has trabajado, es hora de tomar un descanso.\n${clockString(time - new Date())}`)
                    global.db.data.users[m.sender].eris += coinptn
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`${panen} ya cosechado y vendido\nLas ganancias de la venta obties *${coinptn}* Eris`)
                    if (pecatPTN > 1) {
                         global.db.data.users[m.sender].petani -= pecatPTN * 1
                         m.reply(ppecatPTN)
                    }
                    break
               case 'vendedor_de_comida':
                    if (global.db.data.users[m.sender].penjualmakanan == false) throw m.reply('¡No es tu trabajo o estás desempleado!')
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw m.reply(`Has trabajado, es hora de tomar un descanso\n${clockString(time - new Date())}`)
                    global.db.data.users[m.sender].cointembaga += coinpm
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Acabas de preparar comida *${penjualmakanannn}* para tus clientes\ny ganaste monedas de cobre por valor de *${coinpm}* eris`)
                    break
               case 'entrenador':
                    if (global.db.data.users[m.sender].pelatih == false) throw m.reply('¡No es tu trabajo o estás desempleado!')
                    if (new Date - global.db.data.users[m.sender].lastkerja < 72000000) throw m.reply(`Has trabajado, es hora de tomar un descanso.\n${clockString(time - new Date())}`)
                    global.db.data.users[m.sender].eris += coinplt
                    global.db.data.users[m.sender].lastkerja = new Date * 1
                    m.reply(`Acabas de terminar ${pelatihhh}\nY conseguiste  *${coinplt}* Eris`)
                    if (pecatPLT > 1) {
                         global.db.data.users[m.sender].pelatih -= pecatPLT * 1
                         m.reply(ppecatPLT)
                    }
                    break
               default:
                    return conn.reply(m.chat, kerjaanya, m)
          }
     }

}
///AKSJDDJ
handler.help = ['trabajar']
handler.tags = ['rpg']
handler.command = /^(work|trabajar)$/i
handler.register = true

export default handler
//NO CAMBIE LO ABAJO
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
     let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
     let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
     let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
     let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 6
     0
     return ['\n' + d, ' *Día/s*\n ', h, ' *Hora/s*\n ', m, ' *Minuto/s*\n ', s, ' *Segundo/s* '].map(v => v.toString().padStart(2, 0)).join('')
}