class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<p>Foody &#169; 2021, <span>Abighail Shafira Ihsani</span></p>';
  }
}

customElements.define('footer-bar', FooterBar);
