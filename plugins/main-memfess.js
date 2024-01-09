let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw m.reply(`*Ejemplo :*\n\n${usedPrefix + command} número|nombre anonimo|mensaje\n\n*Nota:* no se expondra nada de tu información.\n\n*Uso:* ${usedPrefix + command} ${m.sender.split`@`[0]}|${namebot}|Hola.`);
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw m.reply(`*Ejemplo :*\n\n${usedPrefix + command} número|nombre anonimo|mensaje\n\n*Nota:* no se expondra nada de tu información.\n\n*Uso:* ${usedPrefix + command} ${m.sender.split`@`[0]}|${namebot}|Hola.`);
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw m.reply('Numero no registrado en WhatsApp.');
    
   // if (jid == m.sender) throw 'tidak bisa mengirim pesan memfess ke diri sendiri.'
    
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let txt = `Hola @${data.jid.split('@')[0]}, Recibiste el correo.\n\nDe: *${name}*\nMensaje: \n${pesan}\n\n¿Quieres responder a este mensaje? Puedo, solo escribe tu mensaje y te lo pasaré. *${name}*.`.trim();
        await conn.reply(data.jid, txt, m)
        .then(() => {
            m.reply('Correo enviado con éxito.')
            conn.menfess[id] = {
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
        m.reply('error');
    }
}
handler.help = ['correo']
handler.tags = ['main']
handler.command = /^(mfs|menfess|correo|confes)$/i
handler.register = true
handler.private = true

export default handler
