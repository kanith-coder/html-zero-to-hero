const depositBtn = document.querySelector('#deposit-btn');
const depositTxt = document.querySelector('#deposti-input');
const balanceSpn = document.querySelector('#balance-spn');
const incentiveSpn = document.querySelector('#incentive-spn');

let depositAmount = 0;
let balance = 0;
let incentive = 0;

depositBtn.addEventListener('click', (event) => {
  balance += 10;
  deposit();
});

depositTxt.addEventListener('keyup', (event) => {
  incentive += 50;
  this.valueAsNumber;
  deposit();
});

function deposit() {
  console.log('Deposit button clicked');
  depositTxt.valueAsNumber;
  depositTxt.value;

  balanceSpn.innerText = balance;
  incentiveSpn.innerText = incentive;

  const tbody = document.querySelector('#deposit-money tbody');
  var row = document.createElement('tr');

  // Format the date using Intl.DateTimeFormat
  var formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(Date.now());
  // Date
  var tdDate = document.createElement('td');
  tdDate.textContent = formattedDate;
  row.appendChild(tdDate);

  // Amount
   // Format the number as currency using Intl.NumberFormat
   var formattedCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD' // Change this to your desired currency code
  }).format(500);
  var tdAmount = document.createElement('td');
  tdAmount.textContent = formattedCurrency;
  row.appendChild(tdAmount);
  
  tbody.appendChild(row);
}