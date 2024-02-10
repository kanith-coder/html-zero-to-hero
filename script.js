console.log('Paper Airlines is ready to take off! 🛫');

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is ready!");
    // สร้าง object Date
    var currentDate = new Date();

    // สร้าง object Intl.DateTimeFormat ด้วย locale เป็น "th-TH" (ไทย)
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateFormatter = new Intl.DateTimeFormat('th-TH', options);

    // ให้รูปแบบวันที่
    var formattedDate = dateFormatter.format(currentDate);

    // แสดงข้อความวันที่ใน HTML
    document.getElementById("dateDisplay").innerHTML = formattedDate;
});
