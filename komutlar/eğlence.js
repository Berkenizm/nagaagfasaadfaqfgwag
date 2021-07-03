const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "y!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      "Voxy Eğlence Menüsü",
      `
✨ **.fbi** : FBİ Gelir.
✨ **.token** : Botun Tokenini Görürsünüz.
✨ **.atam** : Dene ve Gör Reis.
✨ **.vine** : Komik Paylaşımlar.`
    )
    .addField(
      "**» Davet Linki**",
      " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)"
    )
    .setImage(
      "https://media.discordapp.net/attachments/823836783854485504/860851230888558612/standard_3.gif"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    )
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence"],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  category: "eğlence",
  description: "Eğlence Komutları Gösterir."
};
