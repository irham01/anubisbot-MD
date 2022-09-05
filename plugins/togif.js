const { webp2mp4File } = require('../library/upload')
const fs = require('fs')
const util = require('util')
module.exports = anuplug = async(m, { anubis, text, command, args, usedPrefix }) => {
  const mquo = m.quoted || m;
  const quoted = mquo.mtype == "buttonsMessage"
      ? mquo[Object.keys(mquo)[1]]
      : mquo.mtype == "templateMessage"
      ? mquo.hydratedTemplate[Object.keys(mquo.hydratedTemplate)[1]]
      : mquo.mtype == "product"
      ? mquo[Object.keys(mquo)[0]]
      : m.quoted
      ? m.quoted
      : m;
  const mime = (quoted.msg || quoted).mimetype || "";
  const qmsg = quoted.msg || quoted;
    if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption *${usedPrefix + command}*`)
    try {
        let media = await anubis.downloadAndSaveMediaMessage(qmsg, 'anubisgif');
          let webpToMp4 = await webp2mp4File(media);
          await anubis.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            { quoted: m }
          );
          await fs.unlinkSync(media);
    } catch (err) {
        m.reply('error ngab! cba wa ownernya!')
        console.log(err)
    }
}
anuplug.help = ['togif']
anuplug.tags = ['sticker']
anuplug.command = /^(togif)$/i