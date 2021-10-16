module.exports = {
	name: 'avatar',
    description: 'Renvoi l\'avatar d\'un utilisateur mentionné',
    cooldown:5,
    aliases: ['icon', 'photo'],
	execute(message, args) {
		if (!message.mentions.users.size) {
            return message.channel.send(`Ton avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
        
        const avatarList = message.mentions.users.map(user => {
            return `Avatar de ${user.username}: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
        
        message.channel.send(avatarList);
	},
};