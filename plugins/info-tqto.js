// Terima Kasih Telah Menggunakan Script Victoria
// Tolong jangan di hapus creditnya silakan saja isi nama kalian
import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `
Gracias a:

> MauryMooder
> SaykoDev
> Clara Aubert (SorceCode)
> KenisawaDev (Recode)

`;

conn.sendMessage(m.chat, {
	text: tqto,
	contextInfo: {
	externalAdReply: {
	title: 'Creditos del bot de WhatsApp',
	body: 'No lo borres ni cometas un ERROR',
	thumbnailUrl: global.thumb,
	sourceUrl: 'https://wa.me/5493865654591',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
  
}
handler.help = ['creditos']
handler.tags = ['main']
handler.command = /^(creditos)$/i;

export default handler;
