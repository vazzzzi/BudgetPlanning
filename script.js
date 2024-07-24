let budgetData = {
    income: [],
    expenses: []
};

function showOverview() {
    const totalIncome = budgetData.income.reduce((sum, item) => sum + item.amount, 0);
    const totalExpenses = budgetData.expenses.reduce((sum, item) => sum + item.amount, 0);
    const balance = totalIncome - totalExpenses;

    const content = `
        <h2>Overview</h2>
        <p>Total Income: $${totalIncome}</p>
        <p>Total Expenses: $${totalExpenses}</p>
        <p>Balance: $${balance}</p>
    `;

    document.getElementById('mainContent').innerHTML = content;
}

function showIncome() {
    let content = `
        <h2>Income</h2>
        <table id="incomeTable">
            <tr>
                <th>Source</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            ${budgetData.income.map((item, index) => `
                <tr>
                    <td>${item.source}</td>
                    <td>$${item.amount}</td>
                    <td><button onclick="removeIncome(${index})">Remove</button></td>
                </tr>
            `).join('')}
            <tr>
                <td><input type="text" id="incomeSource" placeholder="Income Source"></td>
                <td><input type="number" id="incomeAmount" placeholder="Amount"></td>
                <td><button onclick="addIncome()">Add Income</button></td>
            </tr>
        </table>
    `;

    document.getElementById('mainContent').innerHTML = content;
}

function showExpenses() {
    let content = `
        <h2>Expenses</h2>
        <table id="expensesTable">
            <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            ${budgetData.expenses.map((item, index) => `
                <tr>
                    <td>${item.category}</td>
                    <td>$${item.amount}</td>
                    <td><button onclick="removeExpense(${index})">Remove</button></td>
                </tr>
            `).join('')}
            <tr>
                <td><input type="text" id="expenseCategory" placeholder="Expense Category"></td>
                <td><input type="number" id="expenseAmount" placeholder="Amount"></td>
                <td><button onclick="addExpense()">Add Expense</button></td>
            </tr>
        </table>
    `;

    document.getElementById('mainContent').innerHTML = content;
}

function addIncome() {
    const source = document.getElementById('incomeSource').value;
    const amount = parseFloat(document.getElementById('incomeAmount').value);
    if (source && amount) {
        budgetData.income.push({source, amount});
        showIncome();
    }
}

function removeIncome(index) {
    budgetData.income.splice(index, 1);
    showIncome();
}

function addExpense() {
    const category = document.getElementById('expenseCategory').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    if (category && amount) {
        budgetData.expenses.push({category, amount});
        showExpenses();
    }
}

function removeExpense(index) {
    budgetData.expenses.splice(index, 1);
    showExpenses();
}

// Event listeners
document.getElementById('overviewBtn').addEventListener('click', showOverview);
document.getElementById('incomeBtn').addEventListener('click', showIncome);
document.getElementById('expensesBtn').addEventListener('click', showExpenses);

// Initial load
showOverview();
