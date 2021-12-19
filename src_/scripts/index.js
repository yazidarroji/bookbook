import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../components/skip-to-content';
import '../components/navigation-bar';
import '../components/jumbotron-bar';
import '../components/gallery-content';
import '../components/footer-bar';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

li.forEach((element) => {
  element.addEventListener('click', () => {
    ul.querySelector('.active').classList.remove('active');
    element.classList.add('active');
  });
});

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
