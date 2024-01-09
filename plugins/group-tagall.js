let handler = async (m, { conn, text, participants }) => {
  let teks = `⋙ *AVISO DEL ADMINISTRADOR* ⋘\n\n${text ? text : 'Ninguno'}\n\n`;

  for (let mem of participants) {
      let jid = mem.jid || mem.id;
      teks += `@${jid.split('@')[0]}\n`;
  }

  teks += `___________________________________________`;

  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.jid || a.id) });
};

handler.help = ['tagall'];
handler.tags = ['group'];
handler.command = ['tagall'];
handler.admin = true;
handler.group = true;

export default handler;
