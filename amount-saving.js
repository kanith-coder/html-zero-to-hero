const inputSaving = document.querySelector('#input-saving');
inputSaving.value = 0;
let amount = 0;


inputSaving.addEventListener('keyup', function (event) {
    console.log(event.key === 'Enter');
    if (event.key === 'Enter') {
        event.preventDefault();
        // console.log(this.valueAsNumber);
        // alert('Amount saving: ' + this.valueAsNumber);
        addAmount();
    }
});

const deposit = document.querySelector('#btn-deposit');

deposit.addEventListener('click', function (event) {
    console.log('addEventListener');
    event.preventDefault();
    addAmount();
});

function addAmount() {
    const tbody = document.querySelector('#amount-saving tbody');
    const row = document.createElement('tr');
    const td = document.createElement('td');
     // Format the number as currency using Intl.NumberFormat
     var formattedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD' // Change this to your desired currency code
      }).format(inputSaving.valueAsNumber);
    td.textContent = formattedCurrency;
    row.appendChild(td);
    tbody.appendChild(row);
    amount += inputSaving.valueAsNumber;
    inputSaving.value = 0;
}
