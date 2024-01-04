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
      return response.data.genres;
    })
    .catch(error => {
      console.log(error.response.data.status_message);
      console.log(error.message);
    })
  };
};

export default GetDetailData;