import movies from "./movies.json" assert { type: 'json' };

init()

function init() {
    // let result = getAllTitles(movies)
    // console.log(result);
}

function init() {
    let result = getBestElement(movies)
    console.log(result);
}


function init() {
    let result = getTitlesMovie(movies)
    console.log(result);
}




// a. Logger le premier element du tableau movies
console.log(movies[0]);


// b. Logger l'annee du 4eme element du tableau movies

console.log(movies[3].year)
// c. Logger le titre du dernier element du tableau movies

console.log(movies[movies.length -1].title)
// d. Logger le titre du film qui a la meilleure note

function getBestElement(arr) {
    let bestMovie = arr[0]
    // for(let i = 0; i < arr.length; i++){
    //     if (arr[i].rate > bestMovie.rate) {
    //         bestMovie = arr[i]
    //     }
    // }

    arr.forEach((el) => {
        if(el.rate > bestMovie.rate) {
            bestMovie = el;
        }
    })
    return bestMovie.title;
}

// e. Logger le titre du film le plus ancien

function getOldestMovie(arr){
    let oldestMovie = arr[0]

    arr.forEach(() => {
        if(el.rate > bestMovie.rate){
            oldestMovie = el;
        }
    })
    return oldestMovie.title
}

// f. Logger tous les titres de film qui ont au moins 3 acteurs


// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films

function getTitlesMovie(arr) {
    let titlesArr = [];

    for (let i = 0; i < arr.length; i++) {
        titlesArr.push(arr[i].title)

    }
    return titlesArr;
}
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee

function getTitlesFromArrByYear(arr, year) {
    let arrTitleByYear = arr.mapforEach((element) => {
        if (element.year === year) arrTitleByYear.push(element.title)
    })
    return arrTitleByYear;
    // let titlesByYear = []
    // for (let i=0; i< arr.length; i++) {
    //     if (arr[i].year === yearr) {
    //         titlesByYear.push(arr[i].title)
    //     }
    // }
    // return titlesByYear;
}
// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur

function getTitlesByDirector(arr, director){
    let elementsByDirector = []
    for (let i = 0; i< arr.length; i++) {
        if(arr[i].director === name) {
            elementdByDirector.push(arr[i].title )
        }
    }
    return elementsByDirector;
}
























