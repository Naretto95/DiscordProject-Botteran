const Canvas = require('canvas');
const Discord = require('discord.js');
module.exports = {
	name: 'rageux',
    description: 'Renvoi un rageux',
    args:true,
    cooldown:5,
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Mauvais argument, ${message.author}!`);
        }else{
            async function Main(){
                const canvas = Canvas.createCanvas(510, 780);
                const ctx = canvas.getContext('2d');
            
                const background =  await Canvas.loadImage('./images/swing.jpg');
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            
                ctx.strokeStyle = '#74037b';
                ctx.strokeRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(250, 200, 50, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
    
                user = message.mentions.users.first();
    
                if (user.id==='170250648275648512'){
                    user=message.author;
                }
    
                const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
                ctx.drawImage(avatar, 200, 150, 100, 100);
            
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Rageux.png');
            
                message.channel.send(attachment);    
            }
            Main();
        }
    }
};