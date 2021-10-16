module.exports = {
	name: 'args-info',
	description: 'Information sur l\'argument donné en paramètre',
	args:true,
	cooldown:5,
	execute(message, args) {   
        message.channel.send(`Nom de la commande: ${command}\nArgument: ${args}\nTaille de l\'argument: ${args.length}`);
	},
};