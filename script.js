let budgetInput = document.getElementById("budget");
const setBudgetBtn = document.getElementById("set_budget");
const due_date = document.getElementById("due_date");
const total_amount = document.getElementById("amount");
const category = document.getElementById("expense_type");
const desc = document.getElementById("desc");
const pay_date = document.getElementById("pay_date");
const add_expense_btn = document.getElementById("add_expense_btn");
const total_budget = document.getElementById("total_budget");
const totalExpensesElement = document.getElementById("total_expenses");
const balanceElement = document.getElementById("balance");
const expenseListContainer = document.getElementById("listt");

let monthlyBudget = 0;
let totalExpenses = 0;

// Add event listener to the Set Budget button
setBudgetBtn.addEventListener("click", addBudget);

// Add event listener to the Add Expense button
add_expense_btn.addEventListener("click", addExpense);

// Function to add monthly budget
function addBudget() {
  const budgetValue = parseFloat(budgetInput.value);

  if (isNaN(budgetValue) || budgetValue < 0) {
    alert("Budget amount cannot be empty or negative.");
    return;
  }

  monthlyBudget = budgetValue;

  // Set Budget amount
  total_budget.innerText = monthlyBudget;

  // Update Balance
  updateBalance();

  // Clear budget input field
  budgetInput.value = "";
}

// Function to add an expense
function addExpense() {
  const expenseDate = due_date.value;
  const expenseAmount = parseFloat(total_amount.value);
  const expenseCategory = category.value;
  const expenseDescription = desc.value;
  const expensePaymentDate = pay_date.value;

  if (isNaN(expenseAmount) || expenseAmount < 0) {
    alert("Expense amount cannot be empty or negative.");
    return;
  }

  // Create expense item element
  const expenseItem = document.createElement("div");
  expenseItem.classList.add("expense-item");

  // Create expense details HTML
  const expenseDetails = `
    <p><strong>Due Date:</strong> ${expenseDate}</p>
    <p><strong>Total Amount:</strong> ${expenseAmount}</p>
    <p><strong>Category:</strong> ${expenseCategory}</p>
    <p><strong>Description:</strong> ${expenseDescription}</p>
    <p><strong>Payment Date:</strong> ${expensePaymentDate}</p>
  `;

  // Add expense details HTML to expense item
  expenseItem.innerHTML = expenseDetails;

  // Append expense item to expense list container
  expenseListContainer.appendChild(expenseItem);

  // Update total expenses
  totalExpenses += expenseAmount;
  totalExpensesElement.innerText = totalExpenses;

  // Update balance
  updateBalance();

  // Clear expense input fields
  due_date.value = "";
  total_amount.value = "";
  category.value = "";
  desc.value = "";
  pay_date.value = "";
}

// Function to update the balance
function updateBalance() {
  const balance = monthlyBudget - totalExpenses;
  balanceElement.innerText = balance;
}
