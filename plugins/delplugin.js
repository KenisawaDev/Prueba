import { tmpdir } from 'os'
import path, { join } from 'path'
import {
    readdirSync,
    statSync,
    unlinkSync,
    existsSync,
    readFileSync,
    watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text, usedPrefix, command }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `uhm.. y el texto?\n\nEjemplo:\n${usedPrefix + command} info`
    if (!ar1.includes(args[0])) return m.reply(`*🗃️ NO ENCONTRADO!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    const file = join(__dirname, '../plugins/' + args[0] + '.js')
    unlinkSync(file)
    conn.reply(m.chat, `Se eliminó el archivo "plugins/${args[0]}.js"`, m)

}
handler.help = ['delplugin']
handler.tags = ['owner']
handler.command = /^delplugin$/i

handler.mods = true

export default handler