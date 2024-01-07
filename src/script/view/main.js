import '../component/movie-list.js';
import '../component/header-bar.js';
import GetData from "../data/get-data.js";
import GetDetailData from "../data/get-details-data.js";


const main = async () => {

  const searchMovieElement = await document.querySelector('header-bar');
  const movieListElement = await document.querySelector('movie-list');
  const onButtonSearchClicked = async () => {
    try {
      const result = await GetData.searchMovie(searchMovieElement.value);

      // const getGenresId = result.forEach( async (movie) => {
      //   const genreId = await GetDetailData.detailMovie(movie.id)
      //   // console.log(genreId)
      //   return genreId;
      // });

      renderResult(result)
      
      console.log(result);
      // console.log(getGenresId);
    } catch (message) {
      fallbackResult(message)
      console.log(message)
    }
  };

  const renderResult = results => {
    movieListElement.movies = results;
  }

  const fallbackResult = message => {
    movieListElement.renderError(message);
  }

  searchMovieElement.clickEvent = onButtonSearchClicked;

  console.log('COde with Reza 1234')
};

export default main;