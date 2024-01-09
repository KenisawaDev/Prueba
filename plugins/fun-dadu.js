import { createSticker } from "wa-sticker-formatter"
let handler = async (m, { conn }) => {
await m.reply(wait)
let diceImage = rollDice()
let stiker = await createSticker(diceImage, { pack: "Hutao-Bot", author: m.name })
            await conn.sendFile(m.chat, stiker, "dadu.webp", "", m)
}
handler.help = ["dado"]
handler.tags = ["game"]
handler.command = ["dado"] 
export default handler

function rollDice() {
  return "https://www.random.org/dice/dice" + (Math.floor(Math.random() * 6) + 1) + ".png"
}
