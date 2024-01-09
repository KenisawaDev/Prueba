let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *BANCO* 」
│ *Nombre:* ${user.registered ? user.name : conn.getName(m.sender)}
│ *Eris :* ${user.eris} 💲
│ *Banco :* ${user.bank} 💲 / ${user.fullatm} 💲
└────────────────────────────────────────────···
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7ce8b61f7a620afceffc5.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['banco']
handler.tags = ['rpg']
handler.command = /^(banco)$/i

handler.register = true
export default handler
