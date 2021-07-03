const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Voxy Abone Rol Menüsü',`
🔔 **.abone-yetkili-rol** : Abone Yetkilisini Seçer.
🔔 **.abone-rol** : Vericeğiniz Rolü ayarlarsınız.
🔔 **.abone-log** : Log mesajınn gitceği yer seçilir.
🔔 **.abone** : Abone Rolü verme komutudur.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://media.discordapp.net/attachments/823836783854485504/860851230888558612/standard_3.gif)", )
    .setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-yardım'],
  permLevel: 0
};

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
    description: "Eğlence Komutları Gösterir."
};