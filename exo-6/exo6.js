// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

var team = {
    players : null ,
    games : null ,

    addPlayer(firstname, lastname, age){
        team.players.push({firstname, lastname, age});
    },
    addGame(opponent, teamPoints, opponentPoints){
        team.games.push({opponent,teamPoints,opponentPoints})
    }
}
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log('cars : ' + joeInfo.cars.length)
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log("bathroom : " + joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log("garage : " + joeInfo.garage);
//création des catégories 
team.players = [{firstname: "Pablo", lastname: "Sanchez", age: 11}];
team.games = [{opponent: "Broncos", teamPoints: 42, opponentPoints: 27}];
//ajout des joueurs
team.addPlayer("Bob", "Lemoine", 88);
team.addPlayer("Roger", "Dupont", 69);
team.addPlayer("Coco", "Lapin", 20);
//ajout des parties

team.addGame("Les loups", 2, 450);
team.addGame("Suisse", 45, 21);
team.addGame("Les Sauveurs", 42, 84);
team.addGame("Le loup", 0, 32);

//calcul des point de mon équipe
let sumOfTeamPoints = 0;
for(var i = 0; i < team.games.length; i++){
    sumOfTeamPoints += team.games[i].teamPoints;
}
console.log("Somme des point de l'équipe : " + sumOfTeamPoints);


//calcule des point moyens 
let avgOppsPoints = 0;
for(i = 0; i < team.games.length; i++){
    avgOppsPoints += team.games[i].opponentPoints;
    avgOppsPoints /= team.games.length;
}
console.log("Moyenne des point de l'équipe adverse : " + avgOppsPoints);

//trouver le joueur le plus agé
let maxAge = 0;
let maxAgeName = 0;
for(i = 0; i < team.players.length; i++){
    if (maxAge < team.players[i].age){
        maxAge = team.players[i].age;
        maxAgeName = team.players[i].firstname + " " + team.players[i].lastname ;
    }
}
console.log("le joueur le plus agé est : " + maxAgeName + " avec " + maxAge + " ans")


console.log(team);