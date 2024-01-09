let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.ownreply = conn.ownreply ? conn.ownreply : {}
    if (!text) throw m.reply(`*Cómo utilizar :*\n\n${usedPrefix + command} numero|mensaje\n\n*Ejemplo:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Hola.`);
    let [jid, pesan] = text.split('|');
    if ((!jid || !pesan)) throw m.reply`*Cara penggunaan :*\n\n${usedPrefix + command} numero|mensaje\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Hola.`);
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw m.reply('Nomer tidak terdaftar di whatsapp.');
    
   // if (jid == m.sender) throw 'tidak bisa mengirim pesan memfess ke diri sendiri.'
    
    let mf = Object.values(conn.ownreply).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let txt = `Hola @${data.jid.split('@')[0]}, Recibiste un mensaje de: *Propietario*\nMensaje: \n${pesan}`.trim();
        await conn.sendButton(data.jid, txt, wm, null, [[' ']])
        .then(() => {
            conn.ownreply[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        m.reply('Mensaje del propietario enviado correctamente.');
    }
}
handler.help = ['msjo']
handler.tags = ['owner']
handler.command = /^(msjo|responder)/i

handler.owner = true

handler.fail = null

export default handler
