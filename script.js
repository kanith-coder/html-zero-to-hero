 //ไปยัง form หน้าที่ 2
function nextStep() {
  document.getElementById('bookingForm').style.display = 'none';
  document.getElementById('personalInfoForm').style.display = 'block';
}

// ย้อนกลับไปยัง form หน้าที่ 1
function prevStep() {
  document.getElementById('bookingForm').style.display = 'block';
  document.getElementById('personalInfoForm').style.display = 'none';
}

// ไปยัง form หน้าที่ 3
function nextStep2() {
  document.getElementById('personalInfoForm').style.display = 'none';
  document.getElementById('additionalInfoForm').style.display = 'block';
}

// ย้อนกลับไปยัง form หน้าที่ 2
function prevStep2() {
  document.getElementById('personalInfoForm').style.display = 'block';
  document.getElementById('additionalInfoForm').style.display = 'none';
}

// function submitForm() {
//   // จัดการการส่งข้อมูลหลังจากกรอก form หน้าที่ 3
//   alert('Booking successful!'); // สามารถแทนที่ด้วยโค้ดที่จัดการการส่งข้อมูล
// }
1
