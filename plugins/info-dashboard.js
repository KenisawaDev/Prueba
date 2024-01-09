
let handler = async (m, { conn }) => {
  let stats = Object.entries(global.db.data.stats).map(([key, val]) => {
    let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join('\n• ') : plugins[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  let txt = stats.slice(0, 10).map(({ name, total, last }, idx) => {
    if (name.includes('-') && name.endsWith('.js')) name = name.split('-')[1].replace('.js', '')
    return `${idx + 1}. ${name} 
${total}x En uso
Utilizado por última vez ${getTime(last)}
`}).join`\n\n`
  m.reply(txt)
}
handler.help = ['dashboard']
handler.tags = ['info']
handler.command = /^(dash|dashboard|db|hit)$/i

export default handler

export function parseMs(ms) {
  if (typeof ms !== 'number') throw m.reply('Los parámetros deben completarse con número.')
  return {
    days: Math.trunc(ms / 86400000),
    hours: Math.trunc(ms / 3600000) % 24,
    minutes: Math.trunc(ms / 60000) % 60,
    seconds: Math.trunc(ms / 1000) % 60,
    milliseconds: Math.trunc(ms) % 1000,
    microseconds: Math.trunc(ms * 1000) % 1000,
    nanoseconds: Math.trunc(ms * 1e6) % 1000
  }
}

export function getTime(ms) {
  let now = parseMs(+new Date() - ms)
  if (now.days) return m.reply(`${now.days} Hace días`)
  else if (now.hours) return m.replt(`${now.hours} Horas atras`)
  else if (now.minutes) return m.reply(`${now.minutes} Hace minutos`)
  else return m.reply(`En este momento`)
}
