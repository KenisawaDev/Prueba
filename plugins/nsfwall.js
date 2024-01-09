import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command, args }) => {
    let list = `
✧ ahegao
✧ ass
✧ blowjob
✧ cuckold
✧ cum
✧ ero
✧ femdom
✧ foot
✧ loli
✧ gangbang
✧ glasses
✧ hentai
✧ jahy
✧ manga
✧ milf
✧ masturbation
✧ neko
✧ panties
✧ pussy
✧ oppai
✧ orgy
✧ tentacles
✧ thighs
✧ uniform
✧ incest
✧ waifu
✧ yaoi
✧ yuri
✧ zettai

Ejemplo:
${usedPrefix + command} cum
`.trim()
    if (!args[0]) return m.reply(list)
    let type = args[0].toLowerCase()
    if (/nsfw|hentai/i.test(command)) {
        switch (type) {
            case 'ahegao':
            case 'ass':
            case 'blowjob':
            case 'cuckold':
            case 'bdsm':
            case 'cum':
            case 'ero':
            case 'femdom':
            case 'foot':
            case 'gangbang':
            case 'glasses':
            case 'hentai':
            case 'jahy':
            case 'manga':
            case 'masturbation':
            case 'milf':
            case 'loli':
            case 'neko':
            case 'panties':
            case 'pussy':
            case 'oppai':
            case 'orgy':
            case 'tentacles':
            case 'thighs':
            case 'uniform':
            case 'incest':
            case 'waifu':
            case 'yaoi':
            case 'yuri':
                axios.get(`https://raw.githubusercontent.com/Yunxvoid/GOJO-BOT/682aff3f1cedbf9e60332940a9993dbeb282af5b/Shikimori/imports/hmfull/src/images/${type}.json`).then(async v => {
                    let img = v.data.getRandom()
                    await conn.sendFile(m.chat, img, false, 'Category: ' + type, m, false)
                })
            break
            default:
                return m.reply(list)
        }
    }
}
handler.help = ['nsfw ahegao',
'nsfw ass',
'nsfw blowjob',
'nsfw cuckold',
'nsfw cum',
'nsfw ero',
'nsfw femdom',
'nsfw foot',
'nsfw gangbang',
'nsfw glasses',
'nsfw hentai',
'nsfw jahy',
'nsfw manga',
'nsfw milf',
'nsfw masturbation',
'nsfw neko',
'nsfw panties',
'nsfw pussy',
'nsfw oppai',
'nsfw orgy',
'nsfw tentacles',
'nsfw thighs',
'nsfw uniform',
'nsfw incest',
'nsfw waifu',
'nsfw yaoi',
'nsfw yuri',
'nsfw zettai']
handler.tags = ['nsfw', 'premium']
handler.command = /^(nsfw|hentai)$/i
handler.premium = true
handler.age = 18
export default handler