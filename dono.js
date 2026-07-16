
module.exports = {
  nome: "dono",

  executar: async (sock, msg, comando) => {

    const jid = msg.key.remoteJid;

    if (comando === "dono") {
      return sock.sendMessage(jid, {
        text:
`👑 FROST.X-BOT

Criador: FROST.X
Versão: 1.0.0
Prefixo: t`
      });
    }

    if (comando === "reiniciar") {
      await sock.sendMessage(jid, {
        text: "♻️ Reiniciando..."
      });

      process.exit();
    }

    if (comando === "boton") {
      return sock.sendMessage(jid, {
        text: "✅ Bot ativado."
      });
    }

    if (comando === "botoff") {
      return sock.sendMessage(jid, {
        text: "❌ Bot desativado."
      });
    }

  }
};
