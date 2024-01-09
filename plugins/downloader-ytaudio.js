import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import { ytmp3 } from '../lib/download.js';
import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

let handler = async (m, { conn, args, command, usedPrefix }) => {
		if (!args[0]) return m.reply(`Ingresa el link de YouTube! \nEjemplo: ${prefix + command} https://youtu.be/aBfUFr9SBY0?si=XzQRbuH4RXjtQ6wk`);
  m.reply(wait)
  let search = await yts(args[0])
  let vid = search.videos[0]
  if (!search) throw m.reply('Sin resultados')
  let { title, thumbnail, timestamp, views, ago, url } = vid

const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data
      }
    }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['ytmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^yt(mp3|audio)|youtube(mp3|audio)$/i

handler.limit = true
handler.group = true

export default handler