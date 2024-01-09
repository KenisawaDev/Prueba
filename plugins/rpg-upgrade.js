let handler = async (m, { conn, command, args, usedPrefix }) => {
    try {
        let user = global.db.data.users[m.sender]
        let wood = user.wood * 1
        let rock = user.rock * 1
        let string = user.string * 1
        let eris = user.eris * 1
        let iron = user.iron * 1
        let fishingrod = user.fishingrod * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let type = (args[0] || '').toLowerCase()
        let prefix = usedPrefix

        const buttons1 = [
            { buttonId: `${prefix}craft fishingrod`, buttonText: { displayText: `Craft ${rpg.emoticon('fishingrod')}FishingRod` }, type: 1 },
            { buttonId: `${prefix}craft pickaxe`, buttonText: { displayText: `Craft ${rpg.emoticon('pickaxe')}Pickaxe` }, type: 1 },
            { buttonId: `${prefix}craft sword`, buttonText: { displayText: `Craft ${rpg.emoticon('sword')}Sword` }, type: 1 },
        ]
        let lmao1 = `Ejemplo *${usedPrefix}${command} [tipo]*
uso: *${usedPrefix}${command} pico*

*📌Lista que se puede actualizar*

${rpg.emoticon('pickaxe')}pico
`.trim()
        const buttonMessage1 = {
            text: lmao1,
            footer: wm,
            headerType: 1

        }
        switch (type) {
            case 'pico':
                if (pickaxe == 0) {
                    const buttons = [
                        { buttonId: usedPrefix + `craft pickaxe`, buttonText: { displayText: `Craft ${rpg.emoticon('pickaxe')}Pickaxe` }, type: 1 },
                    ]
                    let lmao = `Aun no tienes un *${rpg.emoticon('pickaxe')}pico*
Puedes crear uno usando el comando *${usedPrefix}craft pico*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,

                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (pickaxe > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`, wm, 'inventory', usedPrefix + 'inv', m)
                let __rock = pickaxe * 25
                let __wood = pickaxe * 15
                let __eris = pickaxe * 15000
                if (rock < __rock || wood < __wood || eris < __eris) return m.reply(`
¡¡Te faltan materiales!!
${rock < __rock ? `\n${rpg.emoticon('rock')}roca te falta *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}madera te falta *${__wood - wood}*` : ''}${eris < __eris ? `\n${rpg.emoticon('eris')}eris te falta *${__eris - eris}*` : ''}`)
                user.pickaxe += 1
                user.wood -= __wood * 1
                user.rock -= __rock * 1
                user.eris -= __eris * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                m.reply(`Se actualizó *${rpg.emoticon('pickaxe')}pico*`)
                break
            default:
                return conn.sendMessage(m.chat, buttonMessage1, { quoted: m })
        }
    } catch (e) {
        console.log(e)
        throw eror
    }
}
handler.help = ['actualizar']
handler.tags = ['rpg']
handler.command = /^(actualizar)$/i
handler.register = true

handler.fail = null

export default handler
