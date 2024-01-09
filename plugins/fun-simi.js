import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) throw m.reply(`Ejemplo de uso:\n🤖 *${usedPrefix + command} hola*\n`);

        let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
        if (!res.ok) throw m.reply(eror)
        let json = await res.json()
        //if (json.success == 'que dices?') return m.reply('lu ngetik apaaan sih')
        await m.reply(`${json.success}`)
};

handler.command = ["simi","bot","hutao"];
handler.tags = ["fun"];
handler.help = ["simi <mensaje>"];

export default handler;