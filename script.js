console.log('Paper Airlines is ready to take off! 🛫');
const form = document.getElementById('bookingForm');

form.addEventListener("submit", function(event) {
  e.preventDefault();
  saveDropdownValue();
  document.getElementById('bookingForm').style.display = 'none';          //page1
  document.getElementById('personalInfoForm').style.display = 'block';    //page2
});
//การทำงานปุ่ม
// function nextPage2() {
//   document.getElementById('bookingForm').style.display = 'none';          //page1
//   document.getElementById('personalInfoForm').style.display = 'block';    //page2
// }

function prevPage1() {
  document.getElementById('bookingForm').style.display = 'block';       //page1
  document.getElementById('personalInfoForm').style.display = 'none';   //page2
}

function nextPage3() {
  document.getElementById('personalInfoForm').style.display = 'none';
  document.getElementById('additionalInfoForm').style.display = 'block';
}

function prevPage2() {
  document.getElementById('personalInfoForm').style.display = 'block';       
  document.getElementById('additionalInfoForm').style.display = 'none';   //page2
}


// **ขาไป** ให้checkbox ได้ 1รายการ
function limitCheckDeparture(checkbox) {
    var checkboxes = document.getElementsByName('departureCheck');
  
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkbox) {
            checkboxes[i].checked = false;
        }
    }
  
    updateTotalPrice();
  }
  
  // **ขากลับ** ให้checkbox ได้ 1รายการ
  function limitCheckReturn(checkbox) {
    var checkboxes = document.getElementsByName('returnCheck');
  
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkbox) {
            checkboxes[i].checked = false;
        }
    }
  
    updateTotalPrice();
  }
  
  // ราคาตั๋ว
  function updateTotalPrice() {
    var departurePrice = getCheckedOptionValue('departureCheck');
    var returnPrice = getCheckedOptionValue('returnCheck');
    var passengerCount = parseInt(document.getElementById("passengerCount").value);
  
    var totalPrice = (departurePrice + returnPrice) * passengerCount;
  
    document.getElementById('totalPrice').innerHTML = '<strong>' + totalPrice.toLocaleString('en-US', {style: 'currency', currency: 'THB'}) + '</strong>';
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

//เก็บค่าข้อมูล bookingForm
let saveInputBooking = ['', '', '', '']

function saveDropdownValue() {
  //ดึงข้อมูลที่ถูกเลือกจาก Dropdown
  const dropdownGo = document.getElementById('originAirport');
  const dropdownTo = document.getElementById('destinationAirport');
  const dateGo = document.getElementById('departureDate');
  const dateBack = document.getElementById('returnDate');


  saveInputBooking[0] = dropdownGo.value;
  saveInputBooking[1] = dropdownTo.value;
  saveInputBooking[2] = dateGo.value;
  saveInputBooking[3] = dateBack.value;

    // แสดงค่าที่ถูกบันทึก
  console.log('Next:', saveInputBooking);
}


//เก็บค่าข้อมูล Add Passenger
let savedInputs = ['', '', '','', '', '', '', ''];

function saveInputs() {
  // ดึงค่าจาก input fields
  const inputPassportNo = document.getElementById('passportNo');
  const inputGender = document.getElementById('gender')
  const inputTitleName = document.getElementById('titleName')
  const inputFirstName = document.getElementById('firstName');
  const inputMiddleName = document.getElementById('middleName');
  const inputLastName = document.getElementById('lastName');
  const inputEmail = document.getElementById('email');
  const inputMobile = document.getElementById('mobile');

  // บันทึกค่า
  savedInputs[0] = inputPassportNo.value;
  savedInputs[1] = inputGender.value;
  savedInputs[2] = inputTitleName.value;
  savedInputs[3] = inputFirstName.value;
  savedInputs[4] = inputMiddleName.value;
  savedInputs[5] = inputLastName.value;
  savedInputs[6] = inputEmail.value;
  savedInputs[7] = inputMobile.value;


  // แสดงค่าที่ถูกบันทึก
  console.log('Next:', savedInputs);
}


//**เพิ่ม Passenger Form */
document.getElementById('addPassenger').addEventListener('click', function() {
  // Clone the existing passenger fieldset
  let passengerContainer = document.getElementById('passengerContainer');
  let lastPassengerFieldset = passengerContainer.lastElementChild;
  let newPassengerFieldset = lastPassengerFieldset.cloneNode(true);

  // Update the legend and ID for the new passenger fieldset
  let passengerCount = passengerContainer.childElementCount + 1;
  newPassengerFieldset.querySelector('legend').innerText = 'Passenger ' + passengerCount;
  newPassengerFieldset.id = 'passenger' + passengerCount;

  // Clear input values in the new passenger fieldset
  let inputElements = newPassengerFieldset.querySelectorAll('input, select');
  inputElements.forEach(function(input) {
    input.value = '';
  });

  // Append the new passenger fieldset to the container
  passengerContainer.appendChild(newPassengerFieldset);

  console.log('Added passenger form');
});