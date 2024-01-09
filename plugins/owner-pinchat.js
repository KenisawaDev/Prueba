let handler = async (m, { conn, command }) => {
	try {
		await conn.chatModify({ pin: command.includes('un') ? false : true }, m.chat)
		//m.reply(` *${command.includes('un') ? 'unpin' : 'pin'}*.`)
	} catch (e) {
		console.log(e)
		m.reply('Error, inténtelo de nuevo más tarde.')
	}
}

handler.help = ['pinchat','unpinchat']
handler.tags = ['owner']
handler.command = /^((un)?pin(chats?))$/i

handler.owner = true

export default handler