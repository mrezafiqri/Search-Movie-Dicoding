class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {

    const getColor = (vote) => {
      if (vote >= 8) {
        return 'vote-green';
      } else if (vote >= 5) {
        return 'vote-yellow';
      } else {
        return 'vote-red';
      };
    };

    this.innerHTML = `
      <a href="#" id="movieElement" class="relative flex flex-col rounded-md overflow-hidden border border-cyan-800 shadow-lg shadow-cyan-800 hover:shadow-xl hover:shadow-cyan-900 duration-300 group md:rounded-lg">
        <div class="overflow-hidden">
          <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="Poster ${this._movie.title}" class="object-cover scale-100 object-center group-hover:brightness-50 group-hover:blur-sm group-hover:scale-110 duration-300">
        </div>  
        <h2 class="line-clamp-1 py-1 px-3 text-sm font-inter font-[700] group-hover:text-cyan-500 duration-300 md:text-xl md:pt-2 md:px-4 lg:text-base">${this._movie.title}</h2>
        <p class="text-slate-400 px-3 pb-2 font-inter text-xs font-[300] md:text-base md:px-4 md:pb-3 lg:text-xs">${this._movie.release_date}</p>
        <p class="absolute top-1/2 -translate-y-6 left-1/2 -translate-x-1/2 text-xs font-inter font-[400] text-slate-300/80 invisible group-hover:visible group-hover:duration-300 md:text-base md:-translate-y-10">See Detail</p>
        <p class="${getColor(this._movie.vote_average)} absolute top-2 right-2 p-2 w-8 h-8 bg-primary/80 border border-cyan-800 font-[600] font-inter text-xs rounded-[50%] flex justify-center items-center">${Math.round(this._movie.vote_average * 10) / 10}</p>
      </a>

      <div id="modal-container" class="modal z-50 fixed h-full w-full flex justify-center items-center top-0 left-0 right-0 mx-auto bg-black/70 md:h-full md:w-full">
        <div id="modal-card" class="overflow-y-auto container p-4 rounded-lg absolute w-2/3 max-h-[90%] top-20 mx-4 bg-dark  grid grid-cols-1  border border-cyan-800 shadow-lg shadow-cyan-800 cursor-default md:grid-cols-3 md:top-1/3 md:w-[85%] lg:w-[60%] lg:-translate-y-1/4 lg:mt-8">
            <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="" class="object-cover object-center rounded-lg border border-cyan-800">
            <div class="md:col-span-2 md:px-4 lg:px-2">
              <h2 class="line-clamp-1 pt-2 px-2 text-base text-slate-200 font-inter font-[700] md:text-xl md:pt-0 md:px-4 md:col-span-2">${this._movie.title}</h2>
              <p class="text-slate-400 px-2 py-2 font-inter text-xs font-[300] md:text-base md:px-4 md:pb-3">${this._movie.overview}</p>
              <p class="text-slate-400 px-2 font-inter text-xs font-[300] md:text-base md:px-4 md:pb-3">Rating: ${Math.round(this._movie.vote_average * 10) / 10}</p>
              <p class="text-slate-400 text-right px-2 pb-2 font-inter text-xs font-[300] md:text-base md:px-4 md:pb-3 lg:text-left">${this._movie.release_date}</p>
            </div>
        </div>
        <a id="close-modal" href="#" class="overflow-visible absolute z-40 opacity-80 top-14 right-8 md:text-2xl md:right-10 md:top-20 lg:right-28 lg:top-20 hover:opacity-50">
        ❌
        </a>
      </div>
    `;

    this.querySelector('#movieElement').addEventListener('click', (e) => {
      this.querySelector('#modal-container').classList.add('active');
      e.preventDefault();
    });

    this.querySelector('#close-modal').addEventListener('click', (e) => {
      this.querySelector('#modal-container').classList.remove('active');
      e.preventDefault();
    });

    this.addEventListener('click', (e) => {
      const modalCard = this.querySelector('#modal-card');
      const movieELement = this.querySelector('#movieElement');
      const modalContainer =  this.querySelector('#modal-container');
      if (!modalCard.contains(e.target) && !movieELement.contains(e.target)) {
        modalContainer.classList.remove('active');
      };
    });

  };
};

customElements.define('movie-item', MovieItem);