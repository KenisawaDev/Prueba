import { createHash } from 'crypto'
let handler = async function (m, { args }) {
  if (!args[0]) throw m.reply('Ingrese el número de serie, si no sabe cómo es, escribe .ns')
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw m.reply('Numero de serie incorrecto')
  user.registered = false
  m.reply('```Ya no esta registrado !```')
}
handler.help = ['unregister']
handler.tags = ['main']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler
