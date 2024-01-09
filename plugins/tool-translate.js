import translate from '@vitalets/google-translate-api'

let handler = async (m, { args, usedPrefix, command }) => {
	let lang, text
	if (args.length >= 2) {
		lang = args[0] ? args[0] : 'es', text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0] ? args[0] : 'es', text = m.quoted.text
	} else throw m.reply(`Ej: ${usedPrefix + command} es hello i am robot`)
	let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) throw m.reply(`Error : Idioma "${lang}" No encontrado`)
	m.reply(`*Idioma detectado:* ${res.from.language.iso}\n*De:* ${lang}\n\n*Para:* ${res.text}`.trim())
}
handler.help = ['translate'].map(v => v + ' <idioma> <txt>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

export default handler