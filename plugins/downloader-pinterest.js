import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { lookup } from 'mime-types'
import { URL_REGEX } from '@adiwajshing/baileys'
import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	text = text.endsWith('SMH') ? text.replace('SMH', '') : text 
	if (!text) throw m.reply('Ingresa la consulta ')
	let res = await pinterest(text)
	// if (!res) throw res
	let mime = await lookup(res)
	text.match(URL_REGEX) ?
		await conn.sendMessage(m.chat, { [mime.split('/')[0]]: { url: res.url }, caption: `Exito al descargar: ${await shortUrl(res.url)}` }, { quoted: m }) :
	await conn.sendMessage(m.chat, { image: { url: res }, caption: `Resultados de: ${text.capitalize()}`}, { quoted: m })
}
handler.help = handler.alias = ['pinterest'].map(v => v + ' <txt / url>')
handler.tags = ['downloader']
handler.command = /^(pinterest|pin)$/i

export default handler

async function pinterest(query) {
	if (query.match(URL_REGEX)) {
	const { data } = await axios.get(`https://www.savepin.app/download.php?url=${query}&lang=en&type=redirect`)
    const $ = cheerio.load(data)
    const result = {
    status: true,
    url: decodeURIComponent($(".download-link > div:nth-child(2) > div > table > tbody >  tr:nth-child(1) > td:nth-child(3) > a").attr("href").split("url=")[1])
		/*let res = await fetch('https://www.expertsphp.com/facebook-video-downloader.php', {
			method: 'post',
			body: new URLSearchParams(Object.entries({ url: query }))
		})
		let $ = cheerio.load(await res.text())
		let data = $('table[class="table table-condensed table-striped table-bordered"]').find('a').attr('href')
		if (!data) throw 'Can\'t download post :/'*/
		return data
	} else {
		let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
		let json = await res.json()
		let data = json.resource_response.data.results
		if (!data.length) throw m.reply(`consulta "${query}" no encontrada :/`);
		return data[~~(Math.random() * (data.length))].images.orig.url
	}
}

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}