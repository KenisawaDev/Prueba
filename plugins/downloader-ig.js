import axios from 'axios'

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, 'Ingrese la URL de Instagram después del comando.', m)
  }

  let url = `https://vihangayt.me/download/instagram?url=${encodeURIComponent(text)}`
  
  try {
    // Fetch the Instagram reel using Axios
    const response = await axios.get(url)
    if (!response.data.status) {
      throw new Error(`Error fetching data from ${url}`)
    }

    const data = response.data.data
    if (data && data.data && data.data.length > 0) {
      const videoURL = data.data[0].url
      const caption = data.data[0].type

      // Send the file with type as caption
      await conn.sendFile(m.chat, videoURL, 'instagram_reel.mp4', caption, m)
    } else {
      conn.reply(m.chat, 'No puedo encontrar vídeos de Instagram.', m)
    }
  } catch (error) {
    console.error(error)
    conn.reply(m.chat, 'Se produjo un error al recuperar los reels de Instagram.', m)
  }
}

handler.command = /^(igdl|ig)$/i
handler.tags = ['downloader']
handler.help = ['ig']
handler.premium = false
handler.limit = true

export default handler