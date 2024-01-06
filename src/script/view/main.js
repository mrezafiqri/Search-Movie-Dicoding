import '../component/header-bar.js';
import GetData from "../data/get-data.js";
import GetDetailData from "../data/get-details-data.js";


const main = async () => {
  // const result = await GetData.searchMovie('avengers');
  
  // function getGenresId () {
  //   result.forEach( async (movie) => {
  //     const detail = await GetDetailData.detailMovie(movie.id);
  //     console.log(detail)
  //   });
  // }

  // console.log(result);
  // getGenresId()

  const searchMovieElement = await document.querySelector('header-bar');
  const onButtonSearchClicked = async () => {
    try {
      const result = await GetData.searchMovie(searchMovieElement.value);

      const getGenresId = result.forEach( async (movie) => {
        const genreId = await GetDetailData.detailMovie(movie.id)
        console.log(genreId)
        // return genreId.value;
      });

      console.log(result);
      console.log(getGenresId);
    } catch (error) {
      console.log(error)
    }

  }

  searchMovieElement.clickEvent = onButtonSearchClicked;

};

export default main;