const config = require("./config");
const Canvas = require("canvas");
const Discord = require("discord.js");

module.exports = function (client) {

    const description = {
        name: "WelcomeImages",
        filename: "welcome.js",
        version: "4.8"
    }
    //log que o módulo está carregado
    console.log(` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`)
    //log que o módulo está carregado
    client.on("guildMemberAdd", async member => {
      //log que o módulo está carregado
      if(!member.guild) return;
      //criar uma nova tela
      const canvas = Canvas.createCanvas(1772, 633);
      //torná-lo '2D'
      const ctx = canvas.getContext('2d');
      //defina o plano de fundo como welcome.png
      const background = await Canvas.loadImage(`./welcome.png`);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#f2f2f2';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      //definir a primeira string de texto
      var textString3 = `${member.user.username}`;
      //se o texto for muito grande então menor o texto
      if (textString3.length >= 14) {
        ctx.font = 'bold 100px Genta';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 20);
      }
      //senão não faça isso
      else {
        ctx.font = 'bold 150px Genta';
        ctx.fillStyle = '#f2f2f2';
        ctx.fillText(textString3, 720, canvas.height / 2 + 20);
      }
      //definir a Discriminator Tag
      var textString2 = `#${member.user.discriminator}`;
      ctx.font = 'bold 40px Genta';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString2, 730, canvas.height / 2 + 58);
      //definir o Member count
      var textString4 = `Member #${member.guild.memberCount}`;
      ctx.font = 'bold 60px Genta';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 750, canvas.height / 2 + 125);
      //pega a Guild Name
      var textString4 = `${member.guild.name}`;
      ctx.font = 'bold 60px Genta';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString4, 700, canvas.height / 2 - 150);
      //cria uma máscara "mask" circular
      ctx.beginPath();
      ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);//senão não faça isso
      ctx.closePath();
      ctx.clip();
      //define o user avatar
      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
      //draw the avatar
      ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);
      //obter o anexo do discord
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
      //ddefinir o welcome embed
      const welcomeembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Welcome", member.guild.iconURL({ dynamic: true }))
        .setDescription(`**Welcome to ${member.guild.name}!**
      Hi <@${member.id}>!, read and accept the rules!`)
        .setImage("attachment://welcome-image.png")
        .attachFiles(attachment);
      //define o welcome channel
      const channel = member.guild.channels.cache.find(ch => ch.id === config.CHANNEL_WELCOME);
      //manda a welcome embed para o canal
      channel.send(welcomeembed);
      //os cargos dos membros adicionam boas vindas a cada um
      let roles = config.ROLES_WELCOME;
      for(let i = 0; i < roles.length; i++ )
      member.roles.add(roles[i]);
    })
}

//Coded by Tomato#6966!
