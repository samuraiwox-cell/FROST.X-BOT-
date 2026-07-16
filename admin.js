
module.exports = {
  nome: "admin",

  executar: async (sock, msg, comando, args) => {

    const jid = msg.key.remoteJid;

    const metadata = await sock.groupMetadata(jid);

    const admins = metadata.participants
      .filter(p => p.admin)
      .map(p => p.id);

    if (!admins.includes(msg.key.participant)) {
      return sock.sendMessage(jid, {
        text: "❌ Apenas administradores podem usar este comando."
      });
    }

    const alvo = msg.message.extendedTextMessage?.contextInfo?.participant;

    if (!alvo) {
      return sock.sendMessage(jid, {
        text: "❌ Marque o usuário."
      });
    }


    if (comando === "ban") {
      await sock.groupParticipantsUpdate(
        jid,
        [alvo],
        "remove"
      );

      return sock.sendMessage(jid, {
        text: "🚫 Usuário removido do grupo."
      });
    }


    if (comando === "promover") {
      await sock.groupParticipantsUpdate(
        jid,
        [alvo],
        "promote"
      );

      return sock.sendMessage(jid, {
        text: "👑 Usuário promovido a administrador."
      });
    }


    if (comando === "rebaixar") {
      await sock.groupParticipantsUpdate(
        jid,
        [alvo],
        "demote"
      );

      return sock.sendMessage(jid, {
        text: "⬇️ Administrador rebaixado."
      });
    }


    if (comando === "mutar") {
      return sock.sendMessage(jid, {
        text: "🔇 Mute será adicionado."
      });
    }

  }
};
