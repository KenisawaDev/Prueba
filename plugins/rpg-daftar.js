import { createHash } from 'crypto';
import fetch from 'node-fetch';
import { stories } from '../lib/story.js'

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;

let handler = async function (m, { text, usedPrefix, command }) {
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  let namae = await conn.getName(m.sender); // Menggunakan await karena conn.getName() adalah asinkron
  let user = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(m.sender, "image").catch((_) => "./src/avatar_contact.png");

  if (user.registered === true) throw m.reply(`Ya estás registrado en la base de datos, ¿quieres volver a registrarte? Usa *${usedPrefix}unreg*`);
  if (!Reg.test(text)) throw m.reply(`Uso: .reg (nombre).(edad) | Ejemplo: *${usedPrefix}reg KenisawaDev.18* `);

  let [_, name, splitter, age] = text.match(Reg);

  if (!name) throw m.reply('Por favor ingresa el nombre');
  if (!age) throw m.reply('Por favor ingresa la edad');

  age = parseInt(age);

  if (age > 40) throw m.reply('Eres demaciado viejo para jugar con este bot');
  if (age < 5) throw m.reply('Me sorprende que sepas escribir niño');

  user.name = name.trim();
  user.age = age;
  user.regTime = +new Date();
  user.registered = true;

  let sn = createHash('md5').update(m.sender).digest('hex');
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;

  let cap = `
╭━━「 *Información* 」
│• *Nombre:* ${namae}
│• *Edad:* ${age} años
│• *Estado:* Registrado
│• *S/N:* 
│• ${sn}
╰––––––––––––––––––––––

_*Destiny's Radiance: El misterio de la eternidad*_
${readMore}
${stories.pengenalantokoh}
`;
let pesan = `Ahora estás registrado en la Base de Datos.`
let pesan2 = `Disfrute de la apertura de la historia del juego de rol.`
await conn.sendMessage(m.chat, {
	text: cap,
	contextInfo: {
	externalAdReply: {
	title: pesan,
	body: pesan2,
	thumbnailUrl: pp,
	mediaType: 1,
	renderLargerThumbnail: true
	}}})

};

handler.help = ['reg', 'registrar'];
handler.tags = ['main'];
handler.command = /^(verf|verify|reg(istrar)?)$/i;

export default handler;
