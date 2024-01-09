import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'

/*============= TIEMPO =============*/
let hora = moment.tz('America/Buenos_Aires').format('HH')
let minuto = moment.tz('America/Buenos_Aires').format('mm')
let segundo = moment.tz('America/Buenos_Aires').format('ss')
let wktuwib = `${hora} 𝐇ᴏʀᴀ/s ${minuto} 𝐌ɪɴᴜᴛᴏ/s ${segundo} 𝐒ᴇɢᴜɴᴅᴏ/s`

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
/*==========================*/

/*============= LEER MAS =============*/
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
/*==========================*/

/*============= CONFIGURACIÓN =============*/
global.owner = [
    ['584125880263', 'Joker', true],
    ['573123099361', 'Zhongli', true],
    ['5493865239217', 'Mauro', true],
    ['5493757603881', 'Maury (mod)', true] // global owner 3
]
global.mods = [] //Moderadores
global.prems = [] //Usuarios Premium
global.nomorbot = '5493865366153' //Numero del bot
global.nomorown = '5493812466696' //Tu número 
global.nomorown1 = '5493812466696' //Tu número 1
global.nomorown2 = '5493812466696' //número 2
global.nomorwa = '5493812466696' //Tu número de WhatsApp 
global.readMore = readMore // Definir Leer más 
global.author = 'KenisawaDev' // Autor
global.namebot = 'Hutao bot' // Nombre del bot
global.wm = 'KenisawaDev' // Marca de agua
global.watermark = wm // Marca de agua
global.wm2 = 'KenisawaDev' // Marca de agua 2
global.botdate = `Fecha: ${week} ${date}\nHora: ${wktuwib}` //Fecha y hora
global.bottime = `Hora: ${wktuwib}` //Solo hora
global.titlebot = `𝐇𝐮𝐭𝐚𝐨 𝐁𝐨𝐭`
global.stickpack = '× •-•-•-•⟮\n⁍Sticker By\nᵏᵉⁿⁱˢᵃʷᵃᵈᵉᵛ\nWhatsapp'
global.stickauth = `⟯•-•-•-• ×\nʰᵘᵗᵃᵒ ᵇᵒᵗ\n⁍ᶜʳᵉᵃᵈᵒʳ\n+5493865654591`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
global.nameown1 = 'KenisawaDev' // Opcional 
global.nameown2 = 'KenisawaDev' // Opcional 
global.thumb = 'https://telegra.ph/file/215036e8f0124eddf03f5.jpg' // gambar di menu

global.imglinkmenu = ["https://telegra.ph/file/ac08d320db37bdf167f00.jpg","https://telegra.ph/file/c27a1e24ecdceeacb3ee3.jpg","https://telegra.ph/file/c9890e310eb1a9a44925f.jpg","https://telegra.ph/file/f664ae16c29d61d7f8aac.jpg","https://telegra.ph/file/b0e1753b2a86f72c9159e.jpg","https://telegra.ph/file/203e7c517ee0835e86630.jpg","https://telegra.ph/file/8badc12f5d9dfb30f1e26.jpg"]
global.imglinkmsj = ["https://telegra.ph/file/7d6bf5c4153d161b2d919.jpg","https://telegra.ph/file/80427afda135cd226b906.jpg","https://telegra.ph/file/2ab867021263f4cae08f1.jpg","https://telegra.ph/file/d79b1bafceeeee4a5d374.jpg"]

global.leave = 'https://rare-gallery.com/mocahbig/395268-hu-tao-ghost-genshin-impact-4k-pc-wallpaper.jpg' /// Untuk BG leave

//Simplemente cambie los enlaces de las redes sociales si no los tiene. Déjelos cómo está.
global.myweb = 'https://wa.me/5493865701499' //sitio web
global.sig = 'https://www.instagram.com/mauro.azcurraa' //instagram
global.sgh = 'https://github.com/KenisawaDev' //github
global.sgc = 'https://chat.whatsapp.com/CVdOuQPYe5T5e4gMSt6pe9' //grupo de WhatsApp 
global.sdc = '-' //discord
global.snh = 'https://youtube.com/@kenisawa-devolper?si=lDvFiRS3nmBV2g3i' //youtube

/// Api keys
global.xzn = 'npnpicyy' // NPNPCY
global.lol = 'GataDios' // SGWN
global.rose = 'Rs-putangina'
global.xyro = 'ClaraKeyOfficial'
global.clayza = 'emZeriRZQ9' // https://api.clayzaaubert.my.id



/// TEXT
global.stiker_wait = '_ᴇsᴘᴇʀᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ, ᴄʀᴇᴀɴᴅᴏ sᴜ sᴛɪᴄᴋᴇʀ_.....'
global.wait = '_ᴇsᴘᴇʀᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ_....'
global.eror = 'ᴇʀʀᴏʀ, ɪɴғᴏʀᴍᴇʟᴏ ᴀʟ ᴄʀᴇᴀᴅᴏʀ'
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.multiplier = 69

/// flaaa
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

// Cuanto más alto, más difícil subir de nivel
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Se actualizó 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
