let handler = async (m, { conn, text }) => {
    
      if (!m.quoted) throw 'Responde a un sticker!'
 }

handler.help = ['tiktok']

handler.tags = ['dl', 'servicio']

//handler.command = ['tiktok']

handler.exp = 3

export default handler