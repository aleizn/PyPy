let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙻𝚊 𝚕𝐢́𝚍𝚎𝚛 𝚕𝚘𝚜 𝚒𝚗𝚟𝚘𝚌𝚊.♡:* ${pesan}`
let teks = `*⺀𝙸𝙽𝚅𝙾𝙲𝙰𝙽𝙳𝙾 𝙿𝙻𝙰𝙽𝚃𝙰𝚂⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣🕹️ @${mem.id.split('@')[0]}\n`}
teks += `└🌱𝐏𝐲_𝐄𝐬𝐩𝐨𝐫𝐭_𝐂𝐥𝐚𝐧`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler