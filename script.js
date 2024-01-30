const depositBtn = document.querySelector('.deposit-btn');
const depositTxt = document.querySelector("#deposit-input");
depositTxt.value >0;
const balanceSpn = document.querySelector("#balance-spn");
const incentiveSpn = document.querySelector("#incentive-spn");

let depositAmount= 0;
let balance= 0;
let incentive= 0;

depositBtn.addEventListener('click', function (event){
  addRow();
  });
  
depositTxt.addEventListener('keyup', function (event){
    let valueAsnumber = this.valueAsnumber;
    let value = this.value;
    if (event.key === 'Enter'){
      event.preventDefault;
      addRow();
    };
    //@TODO ใน textbox > 0 ถึงจะ addrow ได้
  });
  
function addRow() {
  //  <tbody></tbody>
  const tbody = document.querySelector('#deposit-money tbody');
  //  <tr></tr>
  const row = document.createElement('tr');
  //  <td></td>
  const tdDate = document.createElement('td');
  //  <td>01/01/2567</td>
  const currentDate = new Date().toLocaleDateString();
  tdDate.textContent = currentDate;
  //  <tr>
  //  <td>01/01/2567</td>
  //  </tr>
  row.appendChild(tdDate);

  const tdMoney = document.createElement('td');
  //  <td>2000</td>
  tdMoney.textContent = 2000;
  //  <tr>
  //  <td>01/01/2567</td>
  //  <td>2000</td>
  //  </tr>
  row.appendChild(tdMoney);
  tbody.appendChild(row);
}

