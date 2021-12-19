import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 tabindex="0">Detail Restaurant</h2>
  <hr>
  <img class="detail_img" src="${API_ENDPOINT.IMAGE_RESTAURANT}/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}"/>
  
  <div class="detail_item">
    <div class="detail_item_info">
      <h3 tabindex="0">${restaurant.name}</h3>
      <p tabindex="0">⭐️ ${restaurant.rating}</p>
      <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
      <h4>Description : </h4>
      <p tabindex="0">${restaurant.description}</p>
    </div>

    <div class="detail_item_menu">
      <h4 tabindex="0">Food menu : </h4>
      <p tabindex="0">${restaurant.menus.foods.map((food) => `
        <span class="food_menu">${food.name}</span>
      `)}</p>

      <h4 tabindex="0">Beverage menu : </h4>
      <p tabindex="0">${restaurant.menus.drinks.map((drink) => `
        <span class="drink_menu">${drink.name}</span>
      `)}</p>
    </div>
    
    <div class="reviews">
      <h2 tabindex="0">Customer Reviews</h2>
      ${restaurant.customerReviews.map((review) => `
        <div class="review-item" tabindex="0">
          <h4 class="review_name"><i class="fa fa-user" aria-hidden="true"></i> ${review.name}</h4>
          <p class="review_date">${review.date}</p>
          <p class="review_desc">${review.review}</p>
        </div>
      `).join('')}
    </div>
  </div>`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="list_item">
    <img class="list_item_img lazyload" data-src="${API_ENDPOINT.IMAGE_RESTAURANT}/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
    <div class="list_item_city">${restaurant.city}</div>
    <div class="list_item_content">
      <p class="list_item_rating">Rating: 
        <span>⭐️ ${restaurant.rating}</span>
      </p>
      <h3 class="list_item_name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p class="list_item_desc">${restaurant.description.slice(0, 100)}...</p>
    </div>
  </div>`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>`;

const createFormReviewTemplate = () => `
  <form>
    <label for="inputName">Name</label>
    <input type="text" name="name" id="inputName" placeholder="name">
    <label for="inputReview">Review</label>
    <textarea name="review" id="inputReview" placeholder="your review" aria-label="input your review"></textarea>
    <button type="submit" class="submit" aria-label="send this review">Send</button>
  </form>`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createFormReviewTemplate,
};
