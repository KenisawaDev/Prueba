let handler = async (m) => {

let anu =`
*❏ INFO PREMIUM*
  
Al registrarte para convertirte en usuario premium obtendrás los siguientes beneficios:

1. Puede utilizar todas las funciones
2. Obtén límites ilimitados 
3. Puedes unir el bot a varios grupos

Comuníquese con el propietario (*.owner*) para actualizar a premium

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

`
await m.reply(anu)
}

handler.help = ['infopremium']
handler.tags = ['info']
handler.command = /^(infopremium)$/i

export default handler