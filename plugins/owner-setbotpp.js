let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw m.reply(`No hay foto, cariño. *┰ω┰*`)
     conn.updateProfilePicture (bot, img)
    conn.reply(m.chat, 'Listo, cambié mi perfil, querido *>ω<*!', m)
	}
    }
handler.help = ['setbotpp']
handler.tags = ['owner']
handler.command = /^(setbotpp)$/i
handler.owner = true

export default handler
