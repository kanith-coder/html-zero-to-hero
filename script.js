
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
  costPrice: 0,
  vatPrice: 0,
  totalPrice: 0,
  passengers: [
    // {
    //   passengerNo: 'Passenger 1',
    //   passportNo: 'A1234567',
    //   titleName: 'Mr.',
    //   firstName: 'John',
    //   middleName: '',
    //   lastName: 'Doe',
    //   gender: '',
    //   email: '',
    //   mobile: ''
    // }, {
    //   passengerNo: 'Passenger 2',
    //   passportNo: 'A1234567',
    //   titleName: 'Mrs.',
    //   firstName: 'Jane',
    //   middleName: '',
    //   lastName: 'Doe',
    //   gender: '',
    //   email: '',
    //   mobile: ''
    // }
  ],
  calculateTotalPrice: function () {

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
  const costPrice = document.getElementById('costPrice');
  costPrice.innerText = itinerary.costPrice.toLocaleString('en-US', { style: 'currency', currency: 'THB' });;

  const vatPrice = document.getElementById('vatPrice');
  vatPrice.innerText = itinerary.vatPrice.toLocaleString('en-US', { style: 'currency', currency: 'THB' });;


  const totalAmount = document.getElementById('totalAmount');
  totalAmount.innerText = itinerary.totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'THB' });;
}


function updateItinerary() {

  itinerary.departureDate.date = document.getElementById('departureDate').value;

  //เวลาออก
  itinerary.origin = document.getElementById('originAirport').value;
  //เวลาถึง
  itinerary.destination = document.getElementById('destinationAirport').value;
  //เวลาออก
  itinerary.returnDate.date = document.getElementById('returnDate').value;
  //เวลาถึง

  itinerary.passengerCount = document.getElementById('passengerCount').value;
  itinerary.totalPrice = itinerary.calculateTotalPrice();

  itinerary.passengers.passportNo = document.getElementsByName('passportNo').value;

  let calVat = itinerary.totalPrice;
  let costPrice = (calVat * 100) / 107;
  let vatPrice = calVat - costPrice;

  itinerary.costPrice = costPrice;
  itinerary.vatPrice = vatPrice;

  splitValue();
  showItinerary();
}


const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  updateItinerary();
  // saveDropdownValue();
  // document.getElementById('bookingForm').style.display = 'none';          //page1
  // document.getElementById('personalInfoForm').style.display = 'block';    //page2
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

  itinerary.calculateTotalPrice()
}

// **ขากลับ** ให้checkbox ได้ 1รายการ
function limitCheckReturn(checkbox) {
  var checkboxes = document.getElementsByName('returnCheck');

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkbox) {
      checkboxes[i].checked = false;
    }
  }

  itinerary.calculateTotalPrice()
}



function splitValue() {
  //split value
  let departureValue = document.querySelector('input[name="departureCheck"]:checked').value;
  let returnValue = document.querySelector('input[name="returnCheck"]:checked').value;

  if (departureValue && returnValue) {
    let departureArray = departureValue.split('/');
    let returnArray = returnValue.split('/');

    let departureTimeGo = departureArray[0];
    let departureTimeBack = departureArray[1];
    let departurePrice = departureArray[2];
    let arrivalTimeGo = returnArray[0];
    let arrivalTimeBack = returnArray[1];
    let returnPrice = returnArray[2];

    itinerary.departureDate.departTime = departureTimeGo;
    itinerary.departureDate.arriveTime = departureTimeBack;

    itinerary.returnDate.departTime = arrivalTimeGo;
    itinerary.returnDate.arriveTime = arrivalTimeBack;

  }

};

const addPassengerBtn = document.getElementById('addPassenger')

function addPassenger () {
  //**เพิ่ม Passenger Form */
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
    inputElements.forEach(function (input) {
      input.value = '';
    });
  
    // Append the new passenger fieldset to the container
    passengerContainer.appendChild(newPassengerFieldset);
  
    console.log('Added passenger form');
};
addPassengerBtn.addEventListener('click', addPassenger);


function displayPassengerData() {
  
  let passengerFieldsets = document.querySelectorAll('#passengerContainer fieldset');

  // Loop through each passenger fieldset
  passengerFieldsets.forEach(function(passengerFieldset, index) {

    // Get input values from the passenger fieldset
    let passengerNo = (`Passenger ${index + 1}`);
    let passportNo = passengerFieldset.querySelector('[name="passportNo"').value;
    let gender = passengerFieldset.querySelector('[name="gender"]').value;
    let titleName = passengerFieldset.querySelector('[name="titleName"]').value;
    let firstName = passengerFieldset.querySelector('[name="firstName"]').value;
    let middleName = passengerFieldset.querySelector('[name="middleName"]').value;
    let lastName = passengerFieldset.querySelector('[name="lastName"]').value;
    let email = passengerFieldset.querySelector('[name="email"]').value;
    let mobile = passengerFieldset.querySelector('[name="mobile"]').value;

    // Display the data (you can customize how to display it)
    console.log(`Passenger: ${passengerNo}`);
    console.log(`PassportNo: ${passportNo}`);
    console.log(`Gender: ${gender}`);
    console.log(`Title: ${titleName}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Middle Name: ${middleName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Mobile: ${mobile}`);

    let passenger = {
      passengerNo: passengerNo,
      passportNo: passportNo,
      titleName: titleName,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: email,
      mobile: mobile
    };
  
  itinerary.passengers.push(passenger);
  });
};
 
const personalInfoForm = document.getElementById('personalInfoForm');

personalInfoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  displayPassengerData();
  console.log(itinerary.passengers);
  showPassengerName()
}
);

function showPassengerName() {

  let passengerPath = document.getElementById('passengerNo'); 
  passengerPath.innerHTML = '';

  itinerary.passengers.forEach(function (passenger) {
    let passengerDiv = document.createElement('div');
    passengerDiv.innerHTML = `${passenger.passengerNo} - ${passenger.firstName} ${passenger.lastName}`;

    passengerPath.appendChild(passengerDiv);

  });
};
