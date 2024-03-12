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

}
