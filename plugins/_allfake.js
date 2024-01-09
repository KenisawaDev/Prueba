import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://i.pinimg.com/originals/f1/f6/ac/f1f6ac64a9c9c8caac96d393ed03e980.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		const imglinkmsjj = pickRandom(global.imglinkmsj)
        //global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
		
		const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await conn.getName(owner[0] + '5493865654591@s.whatsapp.net'), 'Kenisawa Devolper', 'https://wa.me/5493865654591', true],
		 [owner[0], await conn.getName(owner[0] + '5493865654591@s.whatsapp.net'), 'Hutao Bot', 'https://wa.me/5493865654591', true], // Si desea agregarlo, simplemente copie esta línea, péguela debajo y luego edítela un poco.
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				//isForwarded: false, // Esto asegurará que el texto se reenvíe muchas veces, si desea que se elimine, cambie de true a false, si elimina isdorwarder // enviará un mensaje mediante publicidad
				externalAdReply: { // Esta parte depende de ti ser creativo :'v
                    showAdAttribution: true,
					title: "✿ » 𝐇ᴜ 𝐓ᴀᴏ - 𝐁ᴏᴛ",
					body: "𝓫𝔂 𝓴𝓮𝓷𝓲𝓼𝓪𝔀𝓪 𝓭𝓮𝓿𝓸𝓵𝓹𝓮𝓻 𝓪𝓷𝓭 𝓶𝓸𝓭𝓼",
					mediaUrl: global.sgc,
					description: 'Hutao Bot Whatsapp',
					previewType: "PHOTO",
					thumbnail: await (await fetch(imglinkmsjj)).buffer(), //klo iconnya mau sesuai profile user ganti global.thumb jadi pp
					sourceUrl: "https://wa.me/5493865701499",					
				}
			}
		}
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            title: 'Hutao Bot',
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: sig
    }
    } }
	}
}

export default handler 

function ucapan() {
    const time = moment.tz('America/Buenos_Aires').format('HH')
    let res = "Buenas Noches 🌙"
    if (time >= 4) {
        res = "Buenos Días 🌄"
    }
    if (time > 10) {
        res = "Buenos días ☀️"
    }
    if (time >= 12) {
        res = "Buenas tardes 🌅"
    }
    if (time >= 18) {
        res = "Buenas noches 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
