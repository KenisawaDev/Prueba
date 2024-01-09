// By Clara Victoria

import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Tutotial del bot :
	
Utilice el comando que desee según el menú que aparece, ejemplo .play (ese punto es un prefijo, si no hay prefijo entonces el comando no se ejecutará)

¿Se te acabó tus límites? puedes comprarlo en rpgmenu (.shop), y simplemente síguelo... El límite se compra con Eris...
`;
	await conn.sendMessage(m.chat, { image: { url: global.thumb }, caption: tqto }, m)
}
handler.help = ['tutorial']
handler.tags = ['main']
handler.command = /^(tutorial|tutor)$/i;

export default handler;
