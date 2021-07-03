const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Voxy Kullanıcı Menüsü',`
👥 **.profil** : Kullanıcı Bilginizi Görürsünüz.
👥 **.avatar** : Avatarınıza Bakarsınız.
👥 **.say** : Sunucudaki Üye Sayısını Gösterir.
👥 **.afk** : AFK Olma Komutudur.
👥 **.yetkilerim** : Sunucudaki Yetkinize Bakarsınız.
👥 **.ping** : Botun Pingine Bakarsınız.
👥 **.i** : Botun İstatistiklerine Bakarsınız.
👥 **.bug-bildir** : Botun Bugunu Bildirirsiniz.
👥 **.davet** : Botu Davet Edersiniz.`)
.addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=860222080796065873&permissions=8&scope=bot)", )
    .setImage("https://media.discordapp.net/attachments/823836783854485504/860851230888558612/standard_3.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};