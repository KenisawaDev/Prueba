import { tiktokdl } from '@bochilteam/scraper'
import { toAudio } from '../lib/converter.js'
import fetch from 'node-fetch'
import axios from 'axios';

let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return m.reply(`Necesito un link!\n\nEjemplo:\n${usedPrefix + command} https://vt.tiktok.com/ZS8oHC5Ka/`)
    if (!/^http(s)?:\/\/(www|v(t|m)).tiktok.com\/[-a-zA-Z0-9@:%._+~#=]/i.test(args[0])) return m.reply('Link invalido')
    await m.reply('_Descargando su audio de tiktok..._')
    let res = await fetch(`https://vihangayt.me/download/tiktok?url=${args[0]}`)
    let kk = await res.json()
    let { play_url } = kk.data
    console.log(play_url)
    //let { a } = links[5]
    //let download = await getBuffer(play_url)
    //let audio = await toAudio(download, 'mp4')
    //let vid = await conn.sendFile(m.chat, download.data, '', `Nickname : ${data.author.nickname}`, m)
    //conn.sendFile(m.chat, audio, '', '', m, false, { mimetype: 'audio/mpeg' })
    conn.sendMessage(m.chat, {audio: {url : play_url }, mimetype: 'audio/mpeg', fileName: `tiktok.mp3`}, {quoted: m});   
}
handler.help = ['tiktokmp3']
handler.tags = ['downloader']
handler.command = /^(tiktok(mp3|audio)|tt(mp3|audio))$/i
handler.limit = true
export default handler

const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};