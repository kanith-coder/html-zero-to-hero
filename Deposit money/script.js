// const depositBtn = document.querySelector('.deposit-btn');
// const depositTxt = document.querySelector("#deposit-input");
// const balanceSpn = document.querySelector("#balance-spn");
// const incentiveSpn = document.querySelector("#incentive-spn");

// let depositAmount= 0;
// let balance= 0;
// let incentive= 0;

// depositBtn.addEventListener('click', (event) => {
//     balance += 10;
//     // deposit();
//   });
  
// depositTxt.addEventListener('keyup', (event) => {
//     event.preventDefault; 
//     incentive += 50;
//     // deposit();
//     if (event.key === 'Enter'){
//       console.log('enter');

//     }
//       console.log('OK')
//   });
  

  // function deposit() {
  //   console.log('Deposit button clicked');
  //   depositTxt.valueAsNumber;
  //   depositTxt.value;
  
  //   balanceSpn.innerText = balance;
  //   incentiveSpn.innerText = incentive;
  
  //   const tbody = document.querySelector('#deposit-money tbody');
  //   var row = document.createElement('tr');
  
  //   // Format the date using Intl.DateTimeFormat
  //   var formattedDate = new Intl.DateTimeFormat('en-US', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric'
  //   }).format(Date.now());
  //   // Date
  //   var tdDate = document.createElement('td');
  //   tdDate.textContent = formattedDate;
  //   row.appendChild(tdDate);
  
  //   // Amount
  //    // Format the number as currency using Intl.NumberFormat
  //    var formattedCurrency = new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency: 'THB' // Change this to your desired currency code
  //   }).format(100);
  //   var tdAmount = document.createElement('td');
  //   tdAmount.textContent = formattedCurrency;
  //   row.appendChild(tdAmount);
    
  //   tbody.appendChild(row);
  // }

let transactions = [];
let totalAmount = 0;

function deposit() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);

    if (amount > 0) {
        transactions.push(amount);

        // Update transaction table
        updateTransactionTable();

        // Update total amount
        totalAmount += amount;
        document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);

        // Update total multiplied by 5%
        const totalMultiply = totalAmount * 0.05;
        document.getElementById("totalMultiply").innerText = totalMultiply.toFixed(2);

        // Clear input field
        amountInput.value = "";
    }
}

function updateTransactionTable() {
    const tableBody = document.getElementById("transactionBody");
    const newRow = tableBody.insertRow();

    const transactionNumber = transactions.length;
    const transactionCell = newRow.insertCell(0);
    transactionCell.textContent = transactionNumber;

    const amountCell = newRow.insertCell(1);
    amountCell.textContent = transactions[transactions.length - 1].toFixed(2);
}