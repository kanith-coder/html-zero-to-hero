console.log('Paper Airlines is ready to take off! 🛫');


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



function submitForm() {
  const originAirport = document.getElementById('originAirport').value;
  const destinationAirport = document.getElementById('destinationAirport').value;
  const dateElement = document.getElementById('departureDate');
  const departureDate = dateElement.value;
  const returnDate = document.getElementById('returnDate').value;



  // นำข้อมูลไปแสดงในหน้าสรุป
  displaySummary(originAirport, destinationAirport, departureDate);

}

function displaySummary(originAirport, destinationAirport, departureDate) {
  // นำข้อมูลไปแสดงในหน้าสรุป
  document.getElementById("originGo").innerText = originAirport;
  document.getElementById("destinatGo").innerText = destinationAirport;
  document.getElementById("dateTripGo").innerText = formatDate(departureDate);

}

