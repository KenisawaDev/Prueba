
import { randomBytes } from 'crypto'

let handler = async (m, { mufar, text }) => {
  let chats = Object.entries(mufar.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
  let cc = mufar.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  mufar.reply(m.chat, `_Enviando a ${chats.length} chats_`, m)
  for (let id of chats) await mufar.copyNForward(id, mufar.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 *MENSAJE DEL OWNER* 」\n' + randomID(32)), true).catch(_ => _)
  m.reply('Listo :)')
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <txt>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)