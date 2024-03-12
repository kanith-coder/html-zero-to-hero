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