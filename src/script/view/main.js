/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../component/movie-list.js';
import '../component/header-bar.js';
import GetData from '../data/get-data.js';

const main = async () => {
  const searchMovieElement = await document.querySelector('header-bar');
  const movieListElement = await document.querySelector('movie-list');

  const popularMovies = await GetData.showMovie();

  const onButtonSearchClicked = async () => {
    try {
      const result = await GetData.searchMovie(searchMovieElement.value);

      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  searchMovieElement.clickEvent = onButtonSearchClicked;

  renderResult(popularMovies);
};

export default main;
