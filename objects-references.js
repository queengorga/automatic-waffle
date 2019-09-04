let myAccount = {
    name: 'Bea',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

