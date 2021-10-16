module.exports = {
	name: 'team',
	cooldown:5,
	description: 'génère des equipes',
	args:true,
	execute(message, args) {
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            while (0 !== currentIndex) {
          

              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          

              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array;
          }
        function generation(args) {
            const nbteam = args[args.length-1];
            args.length=args.length-1;
            shuffle(args);
            const equipes=[];
            var equipe=[];
            const taille=Math.round(args.length/nbteam);
            console.log(args);
            for (let index = 0; index < nbteam; index++) {
                for (let index2 = 0; index2 < taille; index2++) {
                    equipe.push(args[index2]);
                }
                for (let index3 = 0; index3 < taille; index3++) {
                    args=args.slice(1);
                }
                console.log(args);
                equipes.push(equipe);
                equipe=[];
                console.log(equipes);
            }
            return equipes;
        }
        message.channel.send(generation(args));
	},
};