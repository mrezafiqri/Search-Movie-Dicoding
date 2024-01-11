/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import './movie-item.js';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    const valueSearchMovie = document.querySelector('header-bar');
    this.innerHTML = `
    <div id="movieContainer" class="container mt-36 mb-10 text-slate-200 grid grid-cols-2 gap-4 w-full m-auto px-4 relative md:w-11/12 md:px-0 md:grid-cols-3 lg:grid-cols-5 lg:w-10/12 2xl:grid-cols-6 2xl:mt-40">

      <h1 id="title-movie" class="absolute cursor-default pb-1 -top-14 left-1/2 -translate-x-1/2 text-lg font-inter capitalize font-[600] border-b-4 border-cyan-600 md:text-3xl 2xl:text-4xl 2xl:-top-16">${valueSearchMovie.value || 'Popular Movies'}</h1>

    </div>
    `;

    this._movies.forEach((movie) => {
      const movieContainer = document.querySelector('#movieContainer');
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      movieContainer.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `<h2 class="absolute mt-36 text-slate-200 text-center pb-1 -top-14 left-1/2 -translate-x-1/2 text-2xl font-inter capitalize font-[600] border-b-4 border-cyan-600 md:text-3xl">${message}</h2>`;
  }
}

customElements.define('movie-list', MovieList);
