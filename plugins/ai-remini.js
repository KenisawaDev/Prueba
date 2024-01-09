import FormData from "form-data";
import Jimp from "jimp";

async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}

//By KenisawaDev

let handler = async (m, { conn, usedPrefix, command }) => {
	switch (command) {
		case "hd":
			{
				conn.enhancer = conn.enhancer ? conn.enhancer : {};
				if (m.sender in conn.enhancer)
					throw m.reply("Hay un proceso pendiente, por favor sea paciente o intentelo de nuevo mas tarde >//<");
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw m.reply(`Tienes que etiquetar una foto con el comando ${usedPrefix + command}`);
				if (!/image\/(jpe?g|png)/.test(mime))
					throw m.reply(`Tipo de medio ${mime} no soportado`);
				else conn.enhancer[m.sender] = true;
				m.reply("Espere un momento...");
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "Aqui tiene >//<", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Perdon, hay un error :(");
					}
					delete conn.enhancer[m.sender];
				}
			}
			break;
		case "color":
			{
				conn.recolor = conn.recolor ? conn.recolor : {};
				if (m.sender in conn.recolor)
					throw m.reply("Hay un proceso pendiente, por favor sea paciente o intentelo de nuevo mas tarde >//<");
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw m.reply(`Tienes que etiquetar una foto con el comando ${usedPrefix + command}`);
				if (!/image\/(jpe?g|png)/.test(mime))
					throw m.reply(`Tipo de medio ${mime} no soportado`);
				else conn.recolor[m.sender] = true;
				m.reply("Espere un momento...");
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "Aqui tiene >//<", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Perdon, hay un error :(");
					}
					delete conn.recolor[m.chat];
				}
			}
			break;
		case "hdr":
			{
				conn.hdr = conn.hdr ? conn.hdr : {};
				if (m.sender in conn.hdr)
					throw m.reply("Hay un proceso pendiente, por favor sea paciente o intentelo de nuevo mas tarde >//<");
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw m.reply(`Tienes que etiquetar una foto con el comando ${usedPrefix + command}`);
				if (!/image\/(jpe?g|png)/.test(mime))
					throw m.reply(`Tipo de medio ${mime} no soportado`);
				else conn.hdr[m.sender] = true;
				m.reply("Espere un momento...");
				let img = await q.download?.();
				let error;
				try {
					const This = await processing(img, "enhance");
					conn.sendFile(m.chat, This, "", "Aqui tiene >//<", m);
				} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Perdon, hay un error :(");
					}
					delete conn.hdr[m.sender];
				}
			}
			break;
	}
};
handler.help = ["hd","color","hdr"];
handler.tags = ["ai"];
handler.limit = true;
handler.command = ["hd","color","hdr"];
export default handler;
