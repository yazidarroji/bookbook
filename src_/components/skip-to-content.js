class SkipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<a href="content" class="skip-link">Skip to content</a>';
  }
}

customElements.define('skip-to-content', SkipToContent);
