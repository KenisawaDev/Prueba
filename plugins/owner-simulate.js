let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
  if (!event) {
    return await conn.reply(
      m.chat,
      `ejemplo:
${usedPrefix + command} bienvenida @user
${usedPrefix + command} bye @user
${usedPrefix + command} promover @user
${usedPrefix + command} degradar @user`.trim(),
      m
    );
  }
  let mentions = text.replace(event, '').trimStart();
  let who = mentions ? conn.parseMention(mentions) : [];
  let part = who.length ? who : [m.sender];
  let act = false;

  // I assume you wanted to use "event" instead of "htjava" in the message
  m.reply(`*Simulando* ${event}...`);

  switch (event.toLowerCase()) {
    case 'add':
    case 'bienvenida':
    case 'welcome':
      act = 'add';
      break;
    case 'bye':
    case 'kick':
    case 'leave':
    case 'remove':
      act = 'remove';
      break;
    case 'promover':
      act = 'promote';
      break;
    case 'degradar':
      act = 'demote';
      break;
    default:
      throw new Error(`Unsupported event: ${event}`);
  }

  if (act) {
    return conn.participantsUpdate({
      id: m.chat,
      participants: part,
      action: act,
    });
  }
  // return conn.onDelete(m); // You can uncomment this line if needed
};

handler.help = ['simulate'];
handler.tags = ['owner'];
handler.command = /^simulate$/i;

export default handler;
