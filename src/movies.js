// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

  const allDirectors = movies.map(movie => movie.director);

  const uniqueDirectors = new Set(allDirectors);

  const uniqueDirectorsArray = Array.from(uniqueDirectors);

  return uniqueDirectorsArray;
}

const peliculas = [];

const directoresUnicos = getAllDirectors(peliculas);
console.log(directoresUnicos);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  
  const spielbergDramas = movies.filter(movie =>
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  
  return spielbergDramas.length;
}

const cantidadPeliculasSpielbergDrama = howManyMovies(peliculas);
console.log(`Hay ${cantidadPeliculasSpielbergDrama} películas dramáticas dirigidas por Steven Spielberg.`);



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  
  const totalScore = movies.reduce((sum, movie) => sum + movie.score, 0);
  
  const averageScore = totalScore / movies.length;

  const roundedAverage = averageScore.toFixed(2);

  return parseFloat(roundedAverage); 
}

const puntuacionMedia = scoresAverage(peliculas);
console.log(`La puntuación media de las películas es: ${puntuacionMedia}`);


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

  const totalDramaScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);

  const averageDramaScore = totalDramaScore / dramaMovies.length;

  const roundedAverageDramaScore = averageDramaScore.toFixed(2);

  return parseFloat(roundedAverageDramaScore); 
}

const puntuacionMediaDrama = dramaMoviesScore(peliculas);
console.log(`La puntuación media de las películas de drama es: ${puntuacionMediaDrama}`);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

  const sortedMovies = [...movies];

  sortedMovies.sort((a, b) => a.year - b.year);

  return sortedMovies;
}

const peliculas2 = [];

const peliculasOrdenadas = orderByYear(peliculas2);
console.log(peliculasOrdenadas);




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
  const sortedMovies = movies
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title);

 
  return sortedMovies.slice(0, 20);
}

const titulosOrdenados = orderAlphabetically(peliculas);
console.log(titulosOrdenados);





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
