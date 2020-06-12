"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Там были сиськи?', ''),
      d = prompt('Они вам понравились?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);