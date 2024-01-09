import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `Reglas para usar el bot:
- No spam de comandos
- No llamar al bot 
- No toxicidad 

Notas :
Todas las funciones del bot las lleva a cabo automáticamente el sistema 
Hay interferencia del propietario, 
Y toda tu información como chat, fotos, vídeos o vídeos 
Estará seguro sin que se difunda, y si hay respuestas absurdas o absurdas notas de voz
Sticker absurdo, tal vez el dueño está confundido y necesita alguien con quien charlar :v
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://w0.peakpx.com/wallpaper/413/400/HD-wallpaper-red-eyes-hu-tao-genshin-impact.jpg' }, caption: rules }, m)
}
handler.help = ['reglas']
handler.tags = ['info']
handler.command = /^(reglas|regla)$/i;

export default handler;
