let handler = async (m, {conn, groupMetadata }) => {
conn.reply(m.chat, `${await groupMetadata.id}`, m)
}
handler.help = ['idgp']
handler.tags = ['group']
handler.command = /^(idgp|idgc|gcid)$/i

handler.group = true

export default handler  