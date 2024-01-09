import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {

try {

if (command === 'apk') {

if (!text) throw `*[❗] Proporcione el nombre de APK que desea descargar.*`;

await conn.reply(m.chat, global.wait, m);

let data = await download(text);

if (data.size.replace(' MB', '') > 700) {

return await conn.sendMessage(m.chat, { text: '*[⛔] El archivo es demasiado grande..*' }, { quoted: m });

}

if (data.size.includes('GB')) {

return await conn.sendMessage(m.chat, { text: '*[⛔] El archivo es demasiado grande..*' }, { quoted: m });

}

await conn.sendMessage(

m.chat,

{ document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },

{ quoted: m }

);

}

} catch {

throw m.reply(`*[❗] Ocurrió un error. Asegúrate de proporcionar una consulta válida...*`);

}

};

handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^apk$/i;

handler.limit = true

export default handler