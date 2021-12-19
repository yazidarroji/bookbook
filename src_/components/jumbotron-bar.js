class JumbotronBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Hi, <span>Foody!</span></h1>
        <p class="hero__tagline">Get the best restaurant in town</p>
      </div>
    </div>`;
  }
}

customElements.define('jumbotron-bar', JumbotronBar);
