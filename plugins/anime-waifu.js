import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch(`https://api.waifu.pics/sfw/waifu`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw m.reply('Error!')
conn.sendFile(m.chat, json.url, '', 'Aqui tiene su pedido UwU', m)
}
handler.command = /^(waifu)$/i
handler.tags = ['anime']
handler.help = ['waifu']
handler.limit = true
export default handler
