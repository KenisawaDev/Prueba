import jimp from 'jimp'
import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
import { apivisit } from './kanghit.js'
//menu settings 
let tags = {}

let fiturfull = Object.keys(global.plugins)
  .filter(plugin => !plugin.disabled)
  .map(plugin => {
    const helpArray = Array.isArray(global.plugins[plugin].help)
      ? global.plugins[plugin].help
      : [global.plugins[plugin].help];
    return {
      help: helpArray,
      helpCount: helpArray.length
    };
  })
  .reduce((total, plugin) => total + plugin.helpCount, 0);


let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
     let mpt = clockString(_mpt)
let defaultMenu = {
  before: ` ✧──···[ 𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙 ]···──✧
╭━━━━━━━━━━┈─✧
┴    
│⬡ ${ucapan()} : %name
│⬡ ᴍɪ ʀᴜᴛɪɴᴀ %uptime
│⬡ ᴘʀᴇғɪᴊᴏ : [ %p ]
│⬡ ᴍᴏᴅᴏ : ${global.opts['self'] ? 'ᴘᴠ' : 'ᴘᴜʙʟɪᴄᴏ'}
│⬡ *${Object.keys(global.db.data.users).length}* ᴜsᴜᴀʀɪᴏs 
│⬡ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* ᴄʜᴀᴛs ʙᴀɴᴇᴀᴅᴏs
│⬡ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* ᴜsᴜᴀʀɪᴏs ʙᴀɴᴇᴀᴅᴏs 
┬
├━━━━━━━━━━┈─⋆
│ ▸ *ɴᴏᴍʙʀᴇ ʙᴏᴛ: ʜᴜᴛᴀᴏ ʙᴏᴛ*
┴ ▸ *ᴏᴡɴᴇʀ: ᴋᴇɴɪsᴀᴡᴀᴅᴇᴠ*
✧
┬ 📌 🇵‌🇮‌🇳‌🇳‌🇪‌🇩‌ :
│ ᴘᴏʀ ғᴀᴠᴏʀ ʟᴇᴀ ʟᴀs ʀᴇɢʟᴀs 
│(.ʀᴇɢʟᴀs) ^ω^
│
│ Ⓛ : ᴏᴄᴜᴘᴀ ʟɪᴍɪᴛᴇ
│ Ⓟ : sᴏʟᴏ ᴘʀᴇᴍɪᴜᴍ
╰━━━━━━━━━━┈─◂
%readmore`,
header: `╭━━━━━━━━┈─◂
│≡ *%category*
├━━━━━━━━┈─◂
│`,
  body: '│➤   %cmd %isPremium %islimit',
  footer: `╰━━━━━━━━┈─◂
ㅤㅤㅤ`,
  after: '*ꜱɪᴍᴘʟᴇ ʙᴏᴛ ʙʏ ᴋᴇɴɪsᴀᴡᴀ*',
}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
 // await conn.sendMessage(m.chat, {
          // react: {
            // text: `🔄`,
            // key: m.key,
          // }})
  
    
    
try {
let name = m.pushName || conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset    0 is  0.00
// Offset  420 is  7.00
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric',
timeZone: 'America/Buenos_Aires'
})
let time = d.toLocaleTimeString(locale, { timeZone: 'America/Buenos_Aires' })
time = time.replace(/[.]/g, ':')
let _uptime
if (process.send) {
process.send('uptime')
_uptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let uptime = clockString(_uptime)
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})

    
// if (teks == '404') {
let groups = Object.keys(await conn.groupFetchAllParticipating())
let chats = Object.keys(await conn.chats)
let block = await conn.fetchBlocklist()
let to = new Date('April 22, 2023 00:00:00')
let now = new Date().getTime()
let distance = to - now
let days = Math.floor( distance / (1000 * 60 * 60 * 24));
let hours = Math.floor( distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
let minute = Math.floor( distance % (1000 * 60 * 60) / (1000 * 60))
let second = Math.floor( distance % (1000 * 60) / 1000)
let judul = `${ucapan()} ${conn.getName(m.sender)}`


    
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
//// Mengurutkan objek help berdasarkan tags
help.sort((a, b) => {
  const aTag = a.tags && a.tags[0] ? a.tags[0] : '';
  const bTag = b.tags && b.tags[0] ? b.tags[0] : '';
  return aTag.localeCompare(bTag);
});

// Mengurutkan objek tags menjadi array of {tag, tag} pairs
const tagArray = Object.keys(tags).map(tag => ({ tag, tag })).sort((a, b) => a.tag.localeCompare(b.tag));

// Membentuk teks dengan mengiterasi array yang sudah diurutkan
let _text = [
  before,
  ...tagArray.map(tagObj => {
    const tag = tagObj.tag;
    return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
      ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
        return menu.help.map(help => {
          return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
            .replace(/%islimit/g, menu.limit ? '┣> Ⓛ' : ' ')
            .replace(/%isPremium/g, menu.premium ? '┣> Ⓟ' : '')
            .trim()
        }).join('\n');
      }),
      footer
    ].join('\n');
  }),
  after
].join('\n');



    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      me: conn.getName(conn.user.jid),
      name, date, time,
      readmore: readMore
    }
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './src/avatar_contact.png')
//================={[(MENU WITH THUMBNAIL)]}========================//
//await m.react('⏳')
//await m.react('⌛️')
//await m.react('✅')
global.thumbnailUrl= [
'https://telegra.ph/file/0f49959e6bac62ddc1f95.jpg','https://telegra.ph/file/2cbb0b176e9c6836a9005.jpg','https://telegra.ph/file/8fa8b92e322eb2c312e67.jpg'
]

let ihu = pickRandom(global.thumbnailUrl);
let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let d3 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let d4 = 'application/pdf'
let d5 = 'application/vnd.android.package-archive'
let d6 = 'application/zip'
let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`

let p1 = './thumb/1.jpg'
let p2 = './thumb/2.jpg'
let p3 = './thumb/3.jpg'
let p4 = './thumb/4.jpg'
let p5 = './thumb/5.jpg'
let p6 = './thumb/6.jpg'
let prn = `${pickRandom([p1,p2,p3,p4,p5,p6])}`
let prn2 = `${pickRandom([p6,p5,p4,p3,p2,p1])}`
// Daftar mimetype yang didukung oleh WhatsApp
const mt = [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/zip',
    'application/x-rar-compressed',
    'application/x-tar',
    'application/x-7z-compressed',
    'application/epub+zip',
    'application/json'
];
// Memilih secara acak satu mimetype dari daftar
const ri = Math.floor(Math.random() * mt.length);
const rm = mt[ri];

// await conn.sendMessage(m.chat, {
	// text: text,
// contextInfo: {
// externalAdReply: {
	// showAdAttribution: true,
	// title: `ファイル ・「ムファル」。`,
	// body: '처녀 사냥꾼',
	// thumbnailUrl: ihu,
	// sourceUrl: `https://${global.author}`,
	// mediaType: 1,
	// renderLargerThumbnail: true,
// }}}, { quoted: m});
  // await conn.sendMessage(m.chat, {
          // react: {
            // text: `⚡`,
            // key: m.key,
          // }})
// let arr = [
    // `『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n*[■□□□□□□□□□] 10%*`,
    // `『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n*[■■■□□□□□□□] 30%*`,
    // `『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n*[■■■■■□□□□□] 50%*`,
    // `『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n*[■■■■■■■□□□] 70%*`,
    // `『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n*[■■■■■■■■■■] 100%*`,
    // `ʟᴏᴀᴅɪɴɢ sᴜᴄᴄᴇssғᴜʟ`
  // ];
  // let { key } = await conn.sendMessage(m.chat, { text: "ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ..." });
  // async function showLoading(index) {
    // if (index >= arr.length) {
      // // Jika loop selesai, kirim pesan 'hallo'
      // return;
    // }
    // await new Promise(resolve => setTimeout(resolve, 150));
    // await conn.sendMessage(m.chat, { text: arr[index], edit: key });
    // showLoading(index + 1);
  // }

  // showLoading(0);
  
global.AraChu2 = [
  "https://telegra.ph/file/2e3446b3a385e0b9f4dfd.jpg",
  "https://telegra.ph/file/31c86621ac52942463dcf.jpg",
  "https://telegra.ph/file/a28343678a2f2bb3178fc.jpg",
  "https://telegra.ph/file/3c271c0cf8b71be3f10e2.jpg",
  "https://telegra.ph/file/1609363f6c432073970a6.jpg",
  "https://telegra.ph/file/fb549e950569748d15c39.jpg",
  "https://telegra.ph/file/805eb03f3063ef5bdd4c8.jpg",
  "https://telegra.ph/file/332b68ffa952111962acf.jpg",
  "https://telegra.ph/file/4617c8e1d6f738cb8b8a1.jpg",
  "https://telegra.ph/file/0be762bf72a4715a79fad.jpg",
  "https://telegra.ph/file/353f3da5c006614a08a3f.jpg",
  "https://telegra.ph/file/ea6c9f2084308771ebd21.jpg",
  "https://telegra.ph/file/244b6aa90fb3cca878993.jpg",
  "https://telegra.ph/file/56949dfa865092fa049ae.jpg",
  "https://telegra.ph/file/fb549e950569748d15c39.jpg",
  "https://telegra.ph/file/12030aeec46a0f5f4fcd6.jpg",
  "https://telegra.ph/file/2f30658854d79cc0dc718.jpg",
  "https://telegra.ph/file/b62a3dda01e9b5f1c872c.jpg"
]

  let arc = pickRandom(global.imglinkmenu)
  await conn.sendMessage(m.chat, {
        react: {
        text: '🍬',
        key: m.key }});
        
        
await conn.sendMessage(m.chat, {
	document: fs.readFileSync("./package.json"),
	fileName: wm,
	mimetype: rm,
	fileLength: 99999999999999,
	bpageCount: 10909143,	
	caption: text,
      contextInfo: {
      externalAdReply: {
	showAdAttribution: true,
	title: `:  ❄️  ℋ𝓊𝓉𝒶ℴ 𝒷👻𝓉𝓏  ☃️  :`,
	body: global.author,
//	thumbnail: await fs.readFileSync(prn),
	thumbnailUrl: arc,
	sourceUrl: `instagram.com/mauro_azcurraa`,
	mediaType: 1,
	renderLargerThumbnail: true 
	}}}, { quoted: m,ephemeralExpiration: 86400});
	
	await conn.sendMessage(m.chat, {
	react: {
	texy: '✅',
	key: m.key 
	}}); 	
//========={[(END)]}==========//
           
    //  let vn = "./vn/yowaimo.mp3"   
// conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
	// type: "audioMessage",
	// ptt: true,
// });
} catch (e) {
conn.reply(m.chat, 'Hubo un error en el menu', m)
throw e
}
}
handler.command = /^(menu|help|menú|\?)$/i
handler.register = true
export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'
    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())
    await welcome.print(font, 550, 180, 'Nombre:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'Info:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Numero:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}


function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Ohayou...'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Ohayou...'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Konnichiwa...'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Konnichiwa...'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Konbanwa...'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Konbanwa...'
        } else {
          ucapanWaktu = 'Konbanwa'
        }	
        return ucapanWaktu
}