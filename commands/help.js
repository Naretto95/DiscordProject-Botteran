const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
	description: 'Liste des commandes ou information sur une commande',
	aliases: ['commands'],
	usage: '[commande]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Voici la liste de toutes mes commandes:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nEcrivez \`${prefix}help [commande]\` pour avoir la description d'une commande spécifique!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Je vous ai envoyé un DM avec toutes mes commandes!');
                })
                .catch(error => {
                    console.error(`Erreur dans l'envoi d'un DM ${message.author.tag}.\n`, error);
                    message.reply('DM impossible ! Avez-vous bloqué vos DM?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Commande invalide!');
        }

        data.push(`**Nom:** ${command.name}`);

        if (command.aliases) data.push(`**Alias:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} seconde(s)`);

        message.channel.send(data, { split: true });
	},
};