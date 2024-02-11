//การทำงานปุ่ม
function nextPage2() {
  document.getElementById('bookingForm').style.display = 'none';
  document.getElementById('personalInfoForm').style.display = 'block';
}

function prevPage1() {
  document.getElementById('bookingForm').style.display = 'block';       //page1
  document.getElementById('personalInfoForm').style.display = 'none';   //page2
}

function nextPage3() {
  document.getElementById('personalInfoForm').style.display = 'none';
  document.getElementById('additionalInfoForm').style.display = 'block';
}

function prevPage2() {
  document.getElementById('personalInfoForm').style.display = 'block';       //page1
  document.getElementById('additionalInfoForm').style.display = 'none';   //page2
}


// **ขาไป** ให้checkbox ได้ 1รายการ
function limitCheckDeparture(checkbox) {
  var checkboxes = document.getElementsByName("departureCheck");

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkbox) {
          checkboxes[i].checked = false;
      }
  }

  updateTotalPrice();
}

// **ขากลับ** ให้checkbox ได้ 1รายการ
function limitCheckReturn(checkbox) {
  var checkboxes = document.getElementsByName("returnCheck");

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkbox) {
          checkboxes[i].checked = false;
      }
  }

  updateTotalPrice();
}

// ราคาตั๋ว
function updateTotalPrice() {
  var departurePrice = getCheckedOptionValue("departureCheck");
  var returnPrice = getCheckedOptionValue("returnCheck");
  var passengerCount = parseInt(document.getElementById("passengerCount").value);

  var totalPrice = (departurePrice + returnPrice) * passengerCount;

  document.getElementById("totalPrice").innerHTML = "<strong>" + totalPrice.toLocaleString('en-US', {style: 'currency', currency: 'THB'}) + "</strong>";
}

function getCheckedOptionValue(name) {
  var checkboxes = document.getElementsByName(name);

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          return parseInt(checkboxes[i].value);
      }
  }

  return 0;
}



