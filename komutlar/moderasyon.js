const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = ".";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("Voxy Moderasyon Menüsü",`
🔰 **.reklam** : Reklam Engeli Açarsınız.
🔰 **.küfür** : Küfür Engeli Açarsınız.
🔰 **.otorol** : Otorol Ayarlarsınız.
🔰 **.sayaç** : Sayaç Rakamını Seçersiniz.
🔰 **.sayaç-kanal-ayarla** : Sayaç Kanalını Seçer.
🔰 **.mod-log** : Mod-Log Kanalı Seçersiniz.
🔰 **.yavaş-mod** : Yavaş Mod Ayarlarsınız.
🔰 **.sa-as** : Sa-As Mesajını Açar..
🔰 **.sil** : Belli Miktarda Mesaj Siler.
🔰 **.oylama** : Oylama Yaparsınız.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=860222080796065873&permissions=8&scope=bot)", )
    .setImage("https://media.discordapp.net/attachments/823836783854485504/860851230888558612/standard_3.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`,message.author.avatarURL())
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  category: "moderasyon",
  description: "Eğlence Komutları Gösterir."
};
