class GalleryContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="other__content">
      <h2 tabindex="0">Show Us What You Got!</h2>
      <h3 tabindex="0">share your images #Foody_Indonesia</h3>
      <div class="gallery__content">
        <div class="image">
          <img data-src="./images/heros/1-large.jpg"
              class="lazyload"
              data-src="./images/heros/1-small.jpg 480w, ./images/heros/1-large.jpg 800w"
              sizes="(max-width: 600px) 480px, 800px"
              alt="pancake">

          <img data-src="./images/heros/2-large.jpg"
              class="lazyload"
              data-src="./images/heros/2-small.jpg 480w, ./images/heros/2-large.jpg 800w"
              sizes="(max-width: 600px) 480px, 800px"
              alt="cooking">

          <img data-src="./images/heros/3-large.jpg"
              class="lazyload"
              data-src="./images/heros/3-small.jpg 480w, ./images/heros/3-large.jpg 800w"
              sizes="(max-width: 600px) 480px, 800px"
              alt="salmon">

          <img data-src="./images/heros/5-large.jpg"
              class="lazyload"
              data-src="./images/heros/5-small.jpg 480w, ./images/heros/5-large.jpg 800w"
              sizes="(max-width: 600px) 480px, 800px"
              alt="pancake fruit">
        </div>
      </div>
    </section>`;
  }
}

customElements.define('gallery-content', GalleryContent);
