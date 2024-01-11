/* eslint-disable max-len */
/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';

class GetData {
  static showMovie() {
    const options = {
      params: {
        api_key: '7823b0b12a3bfbb9b7425c65922beac5',
        accept: 'application/json',
      },
    };

    return axios.get('https://api.themoviedb.org/3/movie/popular', options)
      .then((response) => response.data)
      .then((responseJson) => Promise.resolve(responseJson.results));
  }

  static searchMovie(keyword) {
    const options = {
      params: {
        query: `${keyword}`,
        api_key: '7823b0b12a3bfbb9b7425c65922beac5',
        accept: 'application/json',
      },
    };

    return axios.get('https://api.themoviedb.org/3/search/movie', options)
      .then((response) => response.data)
      .then((responseJson) => {
        if (responseJson.results.length <= 3) {
          return Promise.reject(`${keyword} not found!`);
        }
        Object.filter = (obj, predict) => Object.fromEntries(Object.entries(obj).filter(([, value]) => predict(value)));

        const filtersMovie = Object.filter(responseJson.results, (result) => result.poster_path !== null && result.release_date !== '');

        return Promise.resolve(Object.values(filtersMovie));
      });
  }
}

export default GetData;
