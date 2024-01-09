import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw m.reply(`¿Dónde quieres guardarlo?`)
    if (!m.quoted.text) throw m.reply(`Responde a un mensaje!`)
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Guardado en ${path}`)
}
handler.help = ['sf']
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true
export default handler