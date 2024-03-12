function getApi() {
axios.get('https://pubpup-tour-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
  .then(function (response) {
    // handle success
    // console.log(response.data);

    let data = response.data;
    // get object keys from data
    let keys = Object.keys(data);
    // console.log(keys);
    let products = [];
    keys.forEach(key => {
      products.push(data[key]);
    });
    console.log(products);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

function displayProducts(products) {

  let data = getApi(products);

  let imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';

  let showImageDiv = document.createElement('div');
  showImageDiv.className = 'showImage';
  let image = document.createElement('img');
  image.src = data.image.src;
  image.alt = data.image.alt;
  showImageDiv.appendChild(image);

  let imageDetailsDiv = document.createElement('div');
  imageDetailsDiv.className = 'image-details';

  let titleImage = document.createElement('h3');
  titleImage.className = 'textTitle';
  titleImage.textContent = data.title;

  let textDetailsDiv = document.createElement('div');
  textDetailsDiv.className = 'textDetails';

  let ratingDiv = document.createElement('div');
  ratingDiv.className = 'rating';
  let starRatingDiv = document.createElement('div');
  starRatingDiv.className = 'starRating';
  starRatingDiv.textContent = data.rating,score;
  let reviewCountspan = document.createElement('span');
  reviewCountspan.className = 'reviewCount';
  reviewCountspan.textContent = data.rating.reviewCount;
  starRatingDiv.appendChild(reviewCountspan);
  ratingDiv.appendChild(starRatingDiv);

  let fetureUl = document.createElement('ul');
  fetureUl.className = 'feture';
  let behavioursLi = document.createElement('li');
  behavioursLi.className = 'behaviours';
  behavioursLi.textContent = data.behaviours;
  let durationLi = document.createElement('li');
  durationLi.className = 'duration';
  durationLi.textContent = data.duration.day + 'Days' + data.duration.hours + 'hours' + data.duration.minutes + 'minutes';
 fetureUl.appendChild(behavioursLi);
 fetureUl.appendChild(durationLi);

  let priceDiv = document.createElement('div');
  let priceSpan = document.createElement('span');
  priceSpan.className = 'price';
  priceSpan.textContent = 'from ';
  let showPriceStrong = document.createElement('strong');
  showPriceStrong.className = 'showPrice';
  showPriceStrong.textContent = '$' + data.price.retailPrice.amount.toFixed(2);
  priceSpan.appendChild(showPriceStrong);
  priceDiv.appendChild(priceSpan);

  textDetailsDiv.appendChild(ratingDiv);
  textDetailsDiv.appendChild(fetureUl);
  imageDetailsDiv.appendChild(titleImage);
  imageDetailsDiv.appendChild(textDetailsDiv);
  textDetailsDiv.appendChild(priceDiv);

  imageContainer.appendChild(showImageDiv);
  imageContainer.appendChild(imageDetailsDiv);

  // document.body.appendChild(imageContainer);

  document.getElementsByClassName('image-container').appendChild(imageContainer);
  console.log('displayProducts');
  console.log(data);
  console.log('displayProducts');
  console.log(data);







}

displayProducts();