export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isSticker = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`*Sticker detectado*\n\nTendre que eliminar el mensaje ya que el administrador activo el anti-sticker`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
    }
  }
  return true
}  