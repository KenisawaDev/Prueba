import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

		let ownerNumbers = [
        "5493865239217@s.whatsapp.net",
        "573209873499@s.whatsapp.net",
        "584125880263@s.whatsapp.net",
        "584125880263@s.whatsapp.net",
        "5493757603881@s.whatsapp.net"
    ];   
		let ownerLinks = [];
		let sendContact = (jid, numbers, name, quoted, mn) => {
			let number = "5493865239217"
			let vcard = 'BEGIN:VCARD\n' +
				'VERSION:3.0\n' +
				'FN:' + "KenisawaDev" + '\n' +
				'ORG:;\n' +
				'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' +
				'END:VCARD'
			return conn.sendMessage(m.chat, {
				contacts: {
					displayName: name,
					contacts: [{
						vcard
					}]
				},
				mentions: mn ? mn : []
			}, {
				quoted: quoted
			})
		}
		for (let i = 0; i < ownerNumbers.length; i++) {
			const number = ownerNumbers[i].replace("@s.whatsapp.net", "");
			ownerLinks.push(`wa.me/${number}`);
			if (i === 0) {
				await sendContact(m.chat, ownerNumbers[i], "", m);
			}
		}
		if (ownerLinks.length > 1) {
			let text = "╰╮✾╭╯𝐌𝐎𝐃𝐄𝐑𝐀𝐂𝐈𝐎𝐍╰╮✾╭╯";
			ownerLinks.forEach((link, index) => {
				text += `\n${index + 1}. ${link}`;
			});
			m.reply(text);
		}
	}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)/i
export default handler