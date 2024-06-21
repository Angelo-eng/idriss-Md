let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `*@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙉𝙐𝙈𝘽𝙀𝙍 𝙊𝙁 𝘿𝙄𝘼𝙈𝙊𝙉𝘿𝙎`
if (isNaN(txt)) throw `𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍 𝙁𝙊𝙍 𝘿𝙄𝘼𝙈𝙊𝙉𝘿𝙎 𝙄𝙎 *1*`
let users = global.db.data.users
users[who].limit += dmt
m.reply(`𝘿𝙄𝘼𝙈𝙊𝙉𝘿 💎\n\nFOR :*\n*${text}*\nNOW YOU HAVE*\n*${dmt} Diamante(s)* 💎`)}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['addlimit', 'dardiamantes', 'dardiamante'] 
handler.group = true
handler.rowner = true
export default handler
