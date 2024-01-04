import GetData from "../data/get-data.js";
import GetDetailData from "../data/get-details-data.js";


const main = async () => {
  console.log('Code with Reza, Hello World!!! 123');
  const result = await GetData.searchMovie('avengers');
  // const movie_id = dataset.id;
  const detail = await GetDetailData.detailMovie('299536');

  console.log(result);
  console.log(detail)
};

export default main;