let handler = async (m, { conn, usedPrefix }) => {
let health = global.db.data.users[m.sender].health
    let armor = global.db.data.users[m.sender].armor 
   // let warn = global.db.data.users[m.sender].warn
    let diamond = global.db.data.users[m.sender].diamond
    let trash = global.db.data.users[m.sender].trash
    let wood = global.db.data.users[m.sender].wood
    let coal = global.db.data.users[m.sender].coal
    let rock = global.db.data.users[m.sender].rock
    let emerald = global.db.data.users[m.sender].emerald
    let gold = global.db.data.users[m.sender].gold
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let superior = global.db.data.users[m.sender].superior
    let level = global.db.data.users[m.sender].level
    let eris = global.db.data.users[m.sender].eris
    let exp = global.db.data.users[m.sender].exp
    let nabung = global.db.data.users[m.sender].nabung
    let bank = global.db.data.users[m.sender].bank
    let limit = global.db.data.users[m.sender].limit
    let iron = global.db.data.users[m.sender].iron
    let sword = global.db.data.users[m.sender].sword
    let string = global.db.data.users[m.sender].string
    let who = m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let name = m.sender
    let sortederis = Object.entries(global.db.data.users).sort((a, b) => b[1].eris - a[1].eris)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedtrash = Object.entries(global.db.data.users).sort((a, b) => b[1].trash - a[1].trash)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let userseris = sortederis.map(v => v[0])
    let str = `
Inventario de *${await conn.getName(name)}*

Vida: *${health}*
Armadura: *${armor == 0 ? 'No tienes' : '' || armor == 1 ? 'Armadura de cuero' : '' || armor == 2 ? 'Armadura de hierro' : '' || armor == 3 ? 'Armadura de oro' : '' || armor == 4 ? 'Armadura de diamante' : '' || armor == 5 ? 'Armadura netherita' : ''}*
Limites: *${limit}*
Nivel: *${level}*
Exp: *${exp}*

*Finanzas*
Eris: *${eris}*
Bank: *${bank}*

*Cajas del tesoro*
Comun: *${common}*
Extraño: *${uncommon}*
Mistico: *${mythic}*
Legendario: *${legendary}*
Superior: *${superior}*.

*Items*
Diamantes: ${diamond}
Oro: *${gold}*
Esmeralda: *${emerald}*
Pociones: *${potion}*
Basura: *${trash}*
Madera: *${wood}*
Hierro: *${iron}*
Rocas: *${rock}*
Cuerda: *${string}*
Carbon: *${coal}*
`.trim()
conn.sendMessage(m.chat, { image: { url: pp }, caption: str }, { quoted: m })
}
handler.help = ['inv']
handler.tags = ['rpg']
handler.command = /^(inv|inventory)$/i
handler.group = false
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)