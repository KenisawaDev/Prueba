/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]

var bintang = {
"Uno": "⭐",
"Dos": "⭐⭐",
"Tres": "⭐⭐⭐",
"Cuatro": "⭐⭐⭐⭐",
"Cinco": "⭐⭐⭐⭐⭐",
"Seis": "⭐⭐⭐⭐⭐⭐"
}//star how good is the skill
   
   let skil = text.trim().toLowerCase() // to filter text
     
   if (!skill.includes(skil)) throw m.reply(`Selecciona una *habilidad🃏* qué quieras:\n\n${skill.map(skil => `› ${skil}`).join('\n')}

     Cómo utilizar:
     ${usedPrefix + command} <habilidad>
     
     Ejemplo:
     ${usedPrefix + command} swordmaster 
     `)

    if (user.skill == "") {
    user.skill = skil
    m.reply(`Has seleccionado ${skil}`)
    } else if (user.skill) {
    m.reply(`Ya tienes la habilidad ${user.skill} No se puede reemplazar`)
   }

}

handler.help = ['habilidad <tipo>']
handler.tags = ['rpg']
handler.command = /^(habilidad|selectskill)$/i

export default handler
