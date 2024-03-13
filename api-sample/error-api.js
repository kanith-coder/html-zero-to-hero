function getApiError() {
    axios.get('http://103.113.178.149:30501/api/claims?pageSize=4&currentPageNumber=-1').then(response => {
        console.log(response);
        console.log('GET Response:', response.data);
    })
    .catch(error => {
        console.log(error);
        console.error('GET Error:', error);
    });
}

function getApiOK() {
    axios.get('http://103.113.178.149:30501/api/claims?pageSize=4&currentPageNumber=1')
    .then(response => {
        console.log(response);
        console.log('GET Response:', response.data);
    })
    .catch(error => {
        console.log(error);
        console.error('GET Error:', error);
    });
}

function putApi() {
    axios.put('https://pubpup-tour-default-rtdb.asia-southeast1.firebasedatabase.app/products/545445AC45.json', {
    "category": "Day Trips",
    "code": "545445AC45",
    "title": "Private tour to Floating & Railway Market (Optional Erawan Fall)",
    "image": {
      "elementType": "img",
      "src": "https://media.tacdn.com/media/attractions-splice-spp-360x240/08/6b/e6/d4.jpg",
      "srcSet": "",
      "sizes": "",
      "alt": "Private tour to Floating & Railway Market (Optional Erawan Fall)"
    },
    "price": {
      "retailPrice": {
        "currencyCode": "USD",
        "currencySymbol": "$",
        "amount": 109
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
    })
    .then(response => {
        console.log('PUT Response:', response.data);
    })
    .catch(error => {
        console.error('PUT Error:', error);
    });
}


function patchApi() {
    axios.patch('https://pubpup-tour-default-rtdb.asia-southeast1.firebasedatabase.app/products/545445AC45.json', {
        "category": "Night Trips",
        "code": "112223ABCD",
    })
    .then(response => {
        console.log('PATCH Response:', response.data);
    })
    .catch(error => {
        console.error('PATCH Error:', error);
    });
}

function deleteApi() {
    axios.delete('https://pubpup-tour-default-rtdb.asia-southeast1.firebasedatabase.app/products/545445AC45.json')
    .then(response => {
        console.log('DELETE Response:', response.data);
    })
    .catch(error => {
        console.error('DELETE Error:', error);
    });
}