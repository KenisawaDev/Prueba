import fetch from 'node-fetch';
import axios from 'axios';
import cheerio from 'cheerio';

const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw m.reply(`Y el link?\nEjemplo: ${usedPrefix + command} https://pin.it/zJIufSh`);
try {
let result = await pindl(text)
await conn.sendMessage(m.chat, {video: {url: (result.url)}}, {quoted: m})
} catch(e){
console.log(e)
}
}

handler.help = ['pinterestvideo']
handler.command = /^(pinterestvideo|pinvid)$/i;
handler.tags = ['downloader']
export default handler;

async function pindl(url) {
try {
const { data } = await axios.get(`https://www.savepin.app/download.php?url=${url}&lang=en&type=redirect`)
const $ = cheerio.load(data)
const result = {
status: true,
url: decodeURIComponent($(".download-link > div:nth-child(2) > div > table > tbody >  tr:nth-child(1) > td:nth-child(3) > a").attr("href").split("url=")[1])
}
console.log(result)
return result
} catch (err) {
result = {
status: false,
msg: "Error: Invalid URL!"
}
console.log(result)
return result
}
}