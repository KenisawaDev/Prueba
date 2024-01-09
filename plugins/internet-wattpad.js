import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw m.reply(`Que quieres buscar?`);
  let res = await fetch(`https://api.clayzaaubert.my.id/api/search/wattpad?q=${text}&apikey=${global.clayza}`);
  let anu = await res.json();
  let data = anu.data.slice(0, 10);
  let result = data.map((v) => `*Titulo:* ${v.title}\n*Reads:* ${v.reads}\n*Voto:* ${v.vote}\n*Capitulos:* ${v.chapter}\n*Link:* ${v.link}\n*Descripción:* ${v.desc}`).join('\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n');
  conn.sendFile(m.chat, data[0].thumb, '', result, m);
};

handler.help = ['wattpad'];
handler.tags = ['internet'];
handler.command = /^(wattpad)$/i;
handler.limit = true;

export default handler;
