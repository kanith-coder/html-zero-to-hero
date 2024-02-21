
console.log('Paper Airlines is ready to take off! 🛫');
let totalAmount = 0;

const itinerary = {
  origin: 'DMK">กรุงเทพ(ดอนเมือง) - ไทย [DMK]',
  destination: 'ไทเป - ไต้หวัน [TPE]',
  departureDate: {
    flightNumber: 'PG271',
    date: '2022-10-01',
    departTime: '08:15',
    arriveTime: '10:00'
  },
  returnDate: {
    flightNumber: 'PG272',
    date: '2022-10-10',
    departTime: '12:00',
    arriveTime: '14:00'
  },
  passengerCount: 1,
  totalPrice: 0,
  passengers: [
    {
      passportNo: 'A1234567',
      titleName: 'Mr.',
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      gender: '',
      email: '',
      mobile: ''
    },{
      passportNo: 'A1234567',
      titleName: 'Mrs.',
      firstName: 'Jane',
      middleName: '',
      lastName: 'Doe',
      gender: '',
      email: '',
      mobile: ''
    }
  ],
  calculateTotalPrice: function() {

    var departureCheckbox = document.querySelector('input[name="departureCheck"]:checked');
    var returnCheckbox = document.querySelector('input[name="returnCheck"]:checked');
  
    if (departureCheckbox && returnCheckbox) {
      var departureValue = departureCheckbox.value.split('/');
      var return_value = returnCheckbox.value.split('/');
  
      var departurePrice = parseFloat(departureValue[2]);
      var returnPrice = parseFloat(return_value[2]);

    }
    
    let passengerCount = parseInt(document.getElementById("passengerCount").value);

    let totalPrice = (departurePrice + returnPrice) * passengerCount;

    return totalPrice;
    
}
};

// แสดงข้อมูลที่ถูกบันทึก
function showItinerary() {
  //ขาไป
  const dateTripGo = document.getElementById('dateTripGo');    //วันที่เดินทางไป
  dateTripGo.innerText = formatDate(itinerary.departureDate.date);

  const originTimeGo = document.getElementById('originTimeGo');  //เวลาออก
  originTimeGo.innerText = itinerary.departureDate.departTime;

  const originGo = document.getElementById('originGo');   //สนามบินต้นทาง
  originGo.innerText = itinerary.origin;

  const destinationTimeGo = document.getElementById('destinatTimeGo');  //เวลาถึง
  destinationTimeGo.innerText = itinerary.departureDate.arriveTime;

  const destinationGo = document.getElementById('destinatGo'); //สนามบินปลายทาง
  destinationGo.innerText = itinerary.destination;

  //ขากลับ
  const dateTripBack = document.getElementById('dateTripBack');    //วันที่เดินทางกลับ
  dateTripBack.innerText = formatDate(itinerary.returnDate.date);

  const originTimeBack = document.getElementById('originTimeBack');  //เวลาออก
  originTimeBack.innerText = itinerary.returnDate.departTime;

  const originBack = document.getElementById('originBack');   //สนามบินต้นทาง
  originBack.innerText = itinerary.destination;

  const destinatTimeBack = document.getElementById('destinatTimeBack');  //เวลาถึง
  destinatTimeBack.innerText = itinerary.returnDate.arriveTime;

  const destinatBack = document.getElementById('destinatBack'); //สนามบินปลายทาง
  destinatBack.innerText = itinerary.origin;

  //ค่าตั๋ว
  const totalAmount = document.getElementById('totalAmount');
  totalAmount.innerText = itinerary.totalPrice; //.toLocaleString('en-US', {style: 'currency', currency: 'THB'});

  //ผู้โดยสาร
  const titleName = document.getElementById('titleName');
  titleName.innerText = itinerary.passengerCount.titleName;

  
}


function updateItinerary()  {

  itinerary.departureDate.date = document.getElementById('departureDate').value;

  //เวลาออก
  itinerary.origin = document.getElementById('originAirport').value;
  //เวลาถึง
  itinerary.destination = document.getElementById('destinationAirport').value;
  //เวลาออก
  itinerary.returnDate.date = document.getElementById('returnDate').value;
  //เวลาถึง
  itinerary.totalPrice = document.getElementById('totalPrice').value;

  itinerary.passengerCount = document.getElementById('passengerCount').value;
  itinerary.totalPrice = itinerary.calculateTotalPrice().toLocaleString('en-US', {style: 'currency', currency: 'THB'});

  itinerary.passengers.passportNo = document.getElementById('passportNo').value;
  
  showItinerary();

}

function updateItineraryPassenger() {
  let dropdownGender = document.getElementById("gender");
  let selectedValueGender = dropdownGender.options[dropdownGender.selectedIndex].value; 
  itinerary.passengerCount.gender = selectedValueGender;

  let dropdownTitleName = document.getElementById("titleName");
  let selectedValueTitleName = dropdownTitleName.options[dropdownTitleName.selectedIndex].value;
  itinerary.passengerCount.titleName = selectedValueTitleName;

  showItinerary();
}





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
    splitValue()
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
    splitValue()
  }
  
  
  // ราคาตั๋ว
  function updateTotalPrice() {
      var departureCheckbox = document.querySelector('input[name="departureCheck"]:checked');
      var returnCheckbox = document.querySelector('input[name="returnCheck"]:checked');
    
      if (departureCheckbox && returnCheckbox) {
        var departureValue = departureCheckbox.value.split('/');
        var return_value = returnCheckbox.value.split('/');
    
        var departurePrice = parseFloat(departureValue[2]);
        var returnPrice = parseFloat(return_value[2]);
  
      }
      
      let passengerCount = parseInt(document.getElementById("passengerCount").value);

      let totalPrice = (departurePrice + returnPrice) * passengerCount;
      let vatPrice = totalPrice * 0.07;
      let costPrice = totalPrice - vatPrice;


      
    // document.getElementById('totalPrice').innerHTML = '<strong>' + totalPrice.toLocaleString('en-US', {style: 'currency', currency: 'THB'}) + '</strong>';
    // document.getElementById('vatPrice').innerHTML = '<strong>' + vatPrice.toLocaleString('en-US', {style: 'currency', currency: 'THB'}) + '</strong>';
    // document.getElementById('costPrice').innerHTML = '<strong>' + costPrice.toLocaleString('en-US', {style: 'currency', currency: 'THB'}) + '</strong>';
  };


  function splitValue() {
        //split value
        let departureValue = document.querySelector('input[name="departureCheck"]:checked');
        let returnValue = document.querySelector('input[name="returnCheck"]:checked');

        if (departureValue && returnValue) {
        let departureArray = departureValue.value.split('/');
        let returnArray = returnValue.value.split('/');
      
        let departureTimeGo = departureArray[0];
        let departureTimeBack = departureArray[1];
        let departurePrice = departureArray[2];
        let arrivalTimeFo = returnArray[0];
        let arrivalTimeBack = returnArray[1];
        let returnPrice = returnArray[2];
  }
};

  

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

