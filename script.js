
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
      
      displayProducts(products)
      
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
  // let data = products;

  // console.log(products);
  // console.log(data);
  products.forEach(function(product) {

    let imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
  
    let showImageDiv = document.createElement('div');
    showImageDiv.className = 'showImage';
    let image = document.createElement('img');
    image.src = product.image.src;
    image.alt = product.image.alt;
    showImageDiv.appendChild(image);
  
    let imageDetailsDiv = document.createElement('div');
    imageDetailsDiv.className = 'image-details';
  
    let titleImage = document.createElement('h3');
    titleImage.className = 'textTitle';
    titleImage.textContent = product.title;
  
    let textDetailsDiv = document.createElement('div');
    textDetailsDiv.className = 'textDetails';
  
    let ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating';
    let starRatingDiv = document.createElement('div');
    starRatingDiv.className = 'starRating';
    starRatingDiv.textContent = product.rating.score;
    let reviewCountspan = document.createElement('span');
    reviewCountspan.className = 'reviewCount';
    reviewCountspan.textContent = product.rating.reviewCount;
    starRatingDiv.appendChild(reviewCountspan);
    ratingDiv.appendChild(starRatingDiv);
  
    let fetureUl = document.createElement('ul');
    fetureUl.className = 'feture';
    let behavioursLi = document.createElement('li');
    behavioursLi.className = 'behaviours';
    behavioursLi.textContent = product.behaviours.hasFreeCancellation ? 'Free Cancellation' : '';
    let durationLi = document.createElement('li');
    durationLi.className = 'duration';
    durationLi.textContent = product.duration.days + 'Days' + product.duration.hours + 'hours' + product.duration.minutes + 'minutes';
    fetureUl.appendChild(behavioursLi);
    fetureUl.appendChild(durationLi);
  
    let priceDiv = document.createElement('div');
    let priceSpan = document.createElement('span');
    priceSpan.className = 'price';
    priceSpan.textContent = 'from ';
    let showPriceStrong = document.createElement('strong');
    showPriceStrong.className = 'showPrice';
    showPriceStrong.textContent = '$' + product.price.retailPrice.amount.toFixed(2);
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
  
    document.querySelector('.image-grid').appendChild(imageContainer); // Use querySelector to select the first element with the class name 'image-container'
    console.log('displayProducts');
    console.log(product);

  });


};

getApi(); // Call the getApi function to display the products on the page


function addProduct() {

  const productCode = document.getElementById('productCode').value;
  const productTitle = document.getElementById('productTitle').value;
  const productImage = document.getElementById('imageFile').value;
  const productPrice = document.getElementById('productPrice').valueAsNumber;

  const productData = {
    "category": "day Trips",
    "code": productCode,
    "title": productTitle,
    "image": {
      "elementType": "img",
      "src": "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/71/e0/e6.jpg",
      "srcSet": "",
      "sizes": "",
      "alt": productTitle 
    },
    "price": {
      "retailPrice": {
        "currencyCode": "USD",
        "currencySymbol": "$",
        "amount": productPrice
      }
    },
    "rating": {
      "score": 5,
      "reviewCount": 465
    },
    "duration": {
      "days": 0,
      "hours": 6,
      "minutes": 55
    },
    "behaviours": {
      "hasFreeCancellation": true
    }
  }

  axios.put(`https://pubpup-tour-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productCode}.json`, productData)
  .then(response => {
    alert('Product added successfully!');

    console.log('Product added:', response);

    let products = [];
    products.push(productData);
    displayProducts([productData]);
})
.catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
});
}
 

function deleteProduct() {
  const productCode = document.getElementById('inputProductDelete').value;

  axios.delete(`https://pubpup-tour-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productCode}.json`)
  .then(response => {
    alert('Product deleted successfully!');
    console.log('Product deleted:', response);
})
}

