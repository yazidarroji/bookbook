/* LOGIN */
// import UrlParser from '../../routes/url-parse';
import RestaurantDbSource from '../../data/restaurantdb-source';
// import { createRestaurantDetailTemplate } from '../templates/template-creator';
// import LikeButtonPresenter from '../../utils/like-button-presenter';
import FormReviewInitiator from '../../utils/form-review-initiator';
// import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div class="card-body">
    <h4 class="title text-center mt-5" tabindex="0">
      Selamat datang di BooKu!
    </h4>
    </div>

    <div id="formReviewContainer"></div>`;
  },

  async afterRender() {
    // const url = UrlParser.parseActiveUrlWithoutCombiner();
    // console.log(url);
    // const restaurantContainer = document.querySelector('.detail');
    // const loading = document.querySelector('.loader');
    // const review = document.querySelector('.detail-form');

    // review.style.display = 'none';
      
    const data = await RestaurantDbSource.detailRestaurant('rqdv5juczeskfw1e867');
    // restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);

    // loading.style.display = 'none';
    // review.style.display = 'block';

    // const skipLinkElem = document.querySelector('skip-to-content');
    // skipLinkElem.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   document.querySelector('#item').focus();
    // });

    await FormReviewInitiator.init({
      formReviewContainer: document.querySelector('#formReviewContainer'),
      id: data.restaurant.id,
    });
    console.log(data.restaurant.id,'HARUSNYA BISA DAPET');
  },
};

export default Detail;
