import axios from "axios";

class GetDetailData {
  static detailMovie(movie_id) {
    const options = {
      params: {
        api_key: "7823b0b12a3bfbb9b7425c65922beac5"
      }
    };
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
    .then(response => {
      const responseJson = response.data.genres;
      let result = responseJson.map(({ name }) => name);

      return Promise.resolve(result);
    })
    .catch(error => {
      return Promise.reject(error.response.data.status_message);
    })
  };
};

export default GetDetailData;