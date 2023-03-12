import games from "./games.json" assert { type: 'json' };

init()

function init() {
    games
    let result = getTitlesByYear(2020, games)
    console.log(result);
}

// function init() {
//     console.log(games);
//     console.log(games[0]);
//     console.log(games[2].year);
//     console.log(games.length[-1].title);
// }

// a. Logger le permier elem du tableau games.

// 1. Ecrire une fonction qui prend en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)
function getAllTitles(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let currentTitle = arr[i].title;
        newArray.push(currentTitle);
    }
    return newArray;
}
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee

function getTitlesByYear(y, arr) {
    let newArray = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].year === y) {
        newArray.push(arr[i].title)
    }
}


    return newArray;
}
// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8


function getGamesNameByRate(games) {
let goodGamesNames = []

for(let i = 0; i < tab.length; i++) {

if (tab[i].rate >= 8) {

    goodGames.push([i].title)

}

}

return goodGamesNames;

}










// 4. Ecrire une fonction qui prend en parametre une console et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console


function getAvailableGamesByDevice = [];
    let currentGame = arr[i];
    if(arr[i].includes(device)) {
        getAvailableGamesByDevice.push(currentGame.title)
    }




// arr.forEach(function (element) {
//     console.log(element);
// })

















