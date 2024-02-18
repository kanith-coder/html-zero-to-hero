// function formatDate(date) {
//     // Input string date
//     // var dateString = "2024-02-15"; // Assuming the format is YYYY-MM-DD

//     // Convert string to Date object
//     let date  = new Date(dateString);

//     // Define the desired date format with month name and day of the week
//     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//     // Format the date using Intl.DateTimeFormat
//     var formattedDate = date.toLocaleDateString('th-TH', options);

//     return formattedDate;
// }

function formatDate(dateString) {
    const options = { weekday: 'long',year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


// เพิ่มฟังก์ชั่นเพื่อรับรหัสสนามบินและคืนชื่อเต็มของต้นทาง
function getFulloriginName(originAirport) {
    switch (originAirport) {
      case "BKK":
        return "กรุงเทพ(สุวรรณภูมิ) - ไทย [BKK]";
      case "DMK":
        return "กรุงเทพ(ดอนเมือง) - ไทย [DMK]";
      default:
        return "";
    }
  }

// เพิ่มฟังก์ชั่นเพื่อรับรหัสสนามบินและคืนชื่อเต็มของปลายทาง
function getFullDestinationName(destinationAirport,) {
    switch (destinationAirport) {
      case "TPE":
        return "ไทเป - ไต้หวัน [TPE]";
      case "HKG":
        return "ฮ่องกง - ฮ่องกง [HKG]";
      default:
        return "";
    }
  }

  
  function getFullDestinatBackName (destinatBack) {
    switch (destinatBack) {
      case "BKK":
        return "กรุงเทพ(สุวรรณภูมิ) - ไทย [BKK]";
      case "DMK":
        return "กรุงเทพ(ดอนเมือง) - ไทย [DMK]";
      default:
        return "";
    }
  }

// เพิ่มฟังก์ชั่นเพื่อรับรหัสสนามบินและคืนชื่อเต็มของปลายทาง
function getFullorigiBackName (originBack,) {
    switch (originBack) {
      case "TPE":
        return "ไทเป - ไต้หวัน [TPE]";
      case "HKG":
        return "ฮ่องกง - ฮ่องกง [HKG]1";
      default:
        return "";
    }
  }