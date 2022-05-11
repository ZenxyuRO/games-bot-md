let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083190403329]
╰────

╭─「 Donasi • Non Pulsa 」
│
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
