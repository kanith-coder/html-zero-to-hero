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

