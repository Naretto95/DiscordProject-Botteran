const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
	description: 'Liste des commandes ou information sur une commande',
	aliases: ['commands'],
	usage: '[commande]',
	cooldown: 5,
	execute(message, args) {
		let data = new String();
        const { commands } = message.client;

        if (!args.length) {
            data+='Voici la liste de toutes mes commandes :\n';
            data+=commands.map(command => command.name).join(', ')+'\n';
            data+=`\nEcrivez \`${prefix}help [commande]\` pour avoir la description d'une commande spécifique !`;

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Je vous ai envoyé un DM avec toutes mes commandes !');
                })
                .catch(error => {
                    console.error(`Erreur dans l'envoi d'un DM ${message.author.tag}.\n`, error);
                    message.reply('DM impossible ! Avez-vous bloqué vos DM ?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Commande invalide !');
        }

        data+=`**Nom:** ${command.name}\n`;

        if (command.aliases) data+=`**Alias:** ${command.aliases.join(', ')}\n`;
        if (command.description) data+=`**Description:** ${command.description}\n`;
        if (command.usage) data+=`**Usage:** ${prefix}${command.name} ${command.usage}\n`;

        data+=`**Cooldown:** ${command.cooldown || 3} seconde(s)\n`;
        message.channel.send(data, { split: true });
	},
};