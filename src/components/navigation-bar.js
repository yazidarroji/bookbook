class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // console.log(localStorage.getItem("auth"),'INI NAVIGATION BAR');
    // if(localStorage.getItem("auth") === "1"){
      
    // }console.log('APAKAH INI MASUK');
      this.innerHTML = `
      <div class="main">
        <div class="navigation-bar">
          <div class="user">
            <a href="profile.html"></a>
            <p>dicoding</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
