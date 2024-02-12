console.log('Paper Airlines is ready to take off! 🛫');

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