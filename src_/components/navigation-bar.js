class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="header_menu">
      <button id="menu" href="#" aria-label="click to show navigation bar">☰</button>
    </div>

    <div class="header_logo">
      <a href="#" aria-label="homepage">F<span>oo</span>dy</a>
    </div>

    <nav id="drawer" class="header_navigation">
      <ul>
      <li class="active"><a href="#/home">Home</a></li>
      <li><a href="#/favorite">Favorite</a></li>
      <li><a href="https://www.linkedin.com/in/abighail-shafira-ihsani/" target="_blank" rel="noreferrer">About Us</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define('navigation-bar', NavigationBar);
