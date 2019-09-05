let myAccount = {
    name: 'Bea',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}

let addExpense = function (account, amount) {
    account = {}
    // account.expenses = account.expenses + amount
    console.log(account)
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
}

// getAccountSummary
// Account for Bea has $900. $1000 in income. $100 in expenses.

addExpense(myAccount, 2.50)
console.log(myAccount)