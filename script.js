function getApi() {
axios.get('https://dummy.restapiexample.com/api/v1/employees')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}