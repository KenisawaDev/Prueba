import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { usedPrefix, command, conn, text }) => {
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
let usernya = 'https://telegra.ph/file/3c1daf4390f0c5b0b0ebc.jpg'
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*Registrados en la base de bot ${totalreg} usuario*\n*Total de registrados ${rtotalreg} usuarios*`
    await conn.sendMessage(m.chat, { image: { url: usernya },  caption: kon }, m)
}
handler.help = ['usuarios']
handler.tags = ['main','info']
handler.command = /^(pengguna|(jumlah)?database|usuario)$/i

export default handler
