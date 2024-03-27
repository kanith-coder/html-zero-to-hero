document.addEventListener("DOMContentLoaded", function() {
  const tableBody = document.getElementById('table-body');
  const incomeSummary = document.getElementById('income-summary');
  const expenseSummary = document.getElementById('expense-summary');
  const balance = document.getElementById('balance');

  let totalIncome = 0;
  let totalExpense = 0;

  function updateSummary() {
      incomeSummary.textContent = `รวมรายรับ: ${totalIncome}`;
      expenseSummary.textContent = `รวมรายจ่าย: ${totalExpense}`;
      balance.textContent = `ยอดคงเหลือ: ${totalIncome - totalExpense}`;
  }

  function addTransaction(date, description, income, expense) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td>${date}</td>
          <td>${description}</td>
          <td>${income}</td>
          <td>${expense}</td>
      `;
      tableBody.appendChild(newRow);

      totalIncome += income;
      totalExpense += expense;

      updateSummary();
  }

  
  // เพิ่มรายการรายรับ-รายจ่ายตัวอย่าง
  addTransaction('2024-03-27', 'เงินเดือน', 30000, 0);
  addTransaction('2024-03-28', 'ชำระค่าเช่า', 0, 7000);
});

// สมมติให้ income และ expense เป็นตัวแปรที่เก็บยอดรวมรายรับและรายจ่ายตามลำดับ
const income = 50000;
const expense = 20000;

// เลือก canvas element ที่เราสร้างขึ้นมาให้แสดงผล
const ctx = document.getElementById('myChart').getContext('2d');

// สร้างข้อมูลสำหรับกราฟวงกลม
const data = {
  labels: ['รายรับ', 'รายจ่าย'],
  datasets: [{
    label: 'รายรับและรายจ่าย',
    data: [income, expense],
    backgroundColor: [
      'rgba(75, 192, 192, 0.2)', // สีสำหรับรายรับ
      'rgba(255, 99, 132, 0.2)' // สีสำหรับรายจ่าย
    ],
    borderColor: [
      'rgba(75, 192, 192, 1)',
      'rgba(255, 99, 132, 1)'
    ],
    borderWidth: 1
  }]
};

// กำหนดค่าอื่น ๆ ของกราฟ
const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// สร้างกราฟวงกลม
const myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});