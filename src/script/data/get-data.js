import axios from "axios";

class GetData {
  static searchMovie(keyword) {
    const options = {
      params: {
        query: `${keyword}`,
        api_key: "7823b0b12a3bfbb9b7425c65922beac5",
        accept: "application/json"
      }
    };

    return axios.get('https://api.themoviedb.org/3/search/movie', options)
      .then(response => {
        return response.data;
      })
      .then(responseJson => {
        if (responseJson.results.length <= 3) {
          return Promise.reject(`${keyword} not found!`);
        } else {
          return Promise.resolve(responseJson.results);
        };
      })
  };
};

export default GetData;