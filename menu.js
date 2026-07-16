
module.exports = {
  nome: "menu",

  executar: async (sock, msg) => {
    await sock.sendMessage(msg.key.remoteJid, {
      text:
`❄️ FROST.X-BOT ❄️

👑 DONO
tdono
treiniciar

🛡️ ADMIN
tban
tmutar
tpromover
trebaixar

🎵 MÚSICA
tplay

⚙️ UTILIDADES
tping
tperfil
tcalc
thora
ttempo

🤖 Use t + comando`
    });
  }
};
