class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#" id="movieElement" class="relative flex flex-col rounded-md overflow-hidden border border-cyan-800 shadow-lg shadow-cyan-800 hover:shadow-xl hover:shadow-cyan-900 duration-300 group">
        <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="" class="object-cover object-center group-hover:brightness-50 group-hover:blur-sm duration-300">
        <h2 class="line-clamp-1 py-1 px-2 text-sm font-inter font-[700] group-hover:text-cyan-500 duration-300 md:text-xl md:pt-2 md:px-4">${this._movie.title}</h2>
        <p class="text-slate-400 px-2 pb-2 font-inter text-xs font-[300] md:text-base md:px-4 md:pb-3">${this._movie.release_date}</p>
        <p class="absolute top-1/2 -translate-y-6 left-1/2 -translate-x-1/2 text-xs font-inter font-[400] text-slate-300/80 invisible group-hover:visible group-hover:duration-300 md:text-base md:-translate-y-10">See Detail</p>
      </a>
    `;

    this.querySelector('#movieElement').addEventListener('click', () => {
      const modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.add('active');
    });
  };
};

customElements.define('movie-item', MovieItem);