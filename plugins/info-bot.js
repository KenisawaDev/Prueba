import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, generateWAMessageFromContent, }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw, statusupdate, autogetmsg, antivirus, publicjoin } = global.db.data.settings[conn.user.jid]
    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
    const block = await conn.fetchBlocklist()
    
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let sts = `┌────〔 Estado 〕───⬣
│✧  Activo hace ${uptime}
│✧  *${groups.length}* Grupo
│✧  *${chats.length - groups.length}* Chats
│✧  *${Object.keys(global.db.data.users).length}* Usuarios
│✧  ${block == undefined ? '*0* Bloqueados' : '*' + block.length + '* Bloqueados'}
│✧  *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat baneados
│✧  *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Usuarios baneados
╰────────────⬣

┌───〔 CHAT 〕───⬣
│✧  ${anticall ? '✅' : '❌'} *Anti Llamada*
│✧  ${antispam ? '✅' : '❌'} *Anti Spam*
│✧  ${antitroli ? '✅' : '❌'} *Anti Virus*
│✧  ${backup ? '✅' : '❌'} *Auto Backup DB*
│✧  ${groupOnly ? '✅' : '❌'} *Modo Grupo*
│✧  ${nsfw ? '✅' : '❌'} *Modo Nsfw*
╰────────────⬣`

m.reply(sts)

}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
