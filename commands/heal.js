module.exports = {
	name: 'heal',
	cooldown:5,
	description: 'pas mate',
	args:false,
	execute(message, args) {
		message.channel.send('pas mate');
	},
};