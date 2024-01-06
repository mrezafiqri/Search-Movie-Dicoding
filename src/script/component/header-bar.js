class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  };

  set clickEvent(e) {
    this._clickEvent = e;
    this.render();
  };

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
    <header class="fixed bg-dark top-0 left-0 right-0 z-10 border-b-2 border-cyan-800">
      <nav class="flex relative justify-between items-center m-auto p-4 w-full md:w-11/12 md:px-0 lg:w-10/12">
        <h1 class="text-slate-300 font-inter text-3xl font-[700] cursor-default lg:text-4xl">NEM<span class="text-cyan-600">TIX</span></h1>

        <a id="toggleSearchElement" href="#" class="flex justify-center items-center p-1 text-slate-300 hover:text-slate-500">
          <svg role="img" class="fill-current" width="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Search</title><path d="m13.716 17.261 6.873 6.582L24 20.282l-6.824-6.536a9.11 9.11 0 0 0 1.143-4.43c0-5.055-4.105-9.159-9.16-9.159S0 4.261 0 9.316c0 5.055 4.104 9.159 9.159 9.159a9.11 9.11 0 0 0 4.557-1.214ZM9.159 2.773a6.546 6.546 0 0 1 6.543 6.543 6.545 6.545 0 0 1-6.543 6.542 6.545 6.545 0 0 1-6.542-6.542 6.545 6.545 0 0 1 6.542-6.543ZM7.26 5.713a4.065 4.065 0 0 1 4.744.747 4.064 4.064 0 0 1 .707 4.749l1.157.611a5.376 5.376 0 0 0-.935-6.282 5.377 5.377 0 0 0-6.274-.987l.601 1.162Z"/></svg>
        </a>

        <div id="search-container" class="nav-search absolute container m-auto flex justify-end pr-4 mt-4 z-10 gap-2 top-full right-0 md:pr-0 lg:w-1/2">
          <input type="search" placeholder="Search Movie..." id="searchElement" class="w-1/2 px-2 py-1 rounded-md text-slate-600 font-inter md:p-2 focus:outline-none focus:ring-cyan-600 focus:ring-2 focus:border-cyan-600">
          <button class="text-slate-300 bg-dark px-4 rounded-md border-slate-500 border font-inter text-base font-[600] hover:text-slate-100 hover:bg-primary lg:text-lg lg:px-6" id="btnSearchElement" type="submit">Search</button>
      </nav>
    </header>
    `;

    this.querySelector('#toggleSearchElement').addEventListener('click', (e) => {
      const searchContainer = this.querySelector('#search-container');
      searchContainer.classList.toggle('active');

      this.querySelector('#searchElement').focus();
      e.preventDefault();
    });

    this.querySelector('#btnSearchElement').addEventListener('click', this._clickEvent);

    this.addEventListener('click', (e) => {
      const toggleSearch = this.querySelector('#toggleSearchElement');
      const searchContainer = this.querySelector('#search-container');

      if (!toggleSearch.contains(e.target) && !searchContainer.contains(e.target)) {
        searchContainer.classList.remove('active');
      };
    });
  };
};

customElements.define('header-bar', HeaderBar);