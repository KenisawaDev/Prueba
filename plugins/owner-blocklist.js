let handler = async (m, { conn, usedPrefix }) => {
	await conn.fetchBlocklist().then(async data => {
		let txt = `*「  Numeros Bloqueados 」*\n\n*Total:* ${data.length}\n\n┌─\n`
		for (let i of data) {
			txt += `├ @${i.split("@")[0]}\n`
		}
		txt += "└────"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'nadie está bloqueado!'
	})
}
handler.help = ['blocklist']
handler.tags = ['owner']
handler.command = /^(blocklist)$/i
handler.rowner = true
export default handler