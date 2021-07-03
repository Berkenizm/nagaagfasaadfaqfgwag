const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const YRNEXEMBED = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**  » Voxy**")
.setImage("https://media.discordapp.net/attachments/823836783854485504/860851230888558612/standard_3.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/P2Ha5BNy8Q)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=860222080796065873&permissions=8&scope=bot)** **•**
Bir komut hakkında detaylı __yardım için__: **.yardım**`)

.addField('**• Komutlar**',' Botun Tüm Komutları Aşağıda Bulunmaktadır.')
.addField('> .moderasyon ',' 🔰 Moderasyon komutları')
.addField('> .kullanıcı ',' 👥 Kullanıcı komutları')
.addField('> .abone-yardım ',' 🔔 Ayarlamalı Abone Rol Sistemi')
.addField('> .eğlence','  ✨ Eğlence Komutları')
return message.channel.send(YRNEXEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};