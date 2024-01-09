let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Introducción 」*
│ *Nombre      :* 
│ *Genero   :* 
│ *Edad      :* 
│ *Hobby    :* 
│ *Pais        :* 
│*Estado     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
conn.reply(m.chat, krtu, m)
}
handler.command = /^(intro)$/i

export default handler

