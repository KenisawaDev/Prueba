const isToxic = /wa.me|puto|puta|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|bagina|vagina|pendeja|pendejo|tetek|vrg|mmvrg|mmhv|idiota|mmg|mrd|rata|mierdas|chupa|pingo|huevos|cojer|mierda|ano|pelas|pario|desgraciado|chupala|pinga|culiao|prostituta|pajero|zorra|cabron|put@|pvta|pvto|chinga|verga|negros|negro|culos|teta|culo|tetas|bastatdo|asshole|a(su|sw|syu)/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let name = conn.getName(m.sender)
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id
    
    if (chat.antiToxic && isAntiToxic) {
        //await m.reply(`*Terdeteksi ${name} Telah Mengirim Kata-Kata Aneh!*\n\n_“Barang Siapa Yang Beriman Kepada Allah Dan Hari Akhir Maka Hendaklah Dia Berkata Baik Atau Diam” (HR. al-Bukhari dan Muslim)`)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//   global.db.data.users[m.sender].warn += 1
 //   global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Tienes que dar un buen ejemplo, tonto!')
    }
    return !0
}

export const disable = true