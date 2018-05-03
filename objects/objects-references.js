// when we pass an object into a function, we are actually passing in
// a REFERENCE to the real object - just like with an array -
// so you are changing the real object

let myAccount = {
    name: 'Mary Poppins',
    expenses: 0,
    income: 0
}

function addExpense(account, amount) {
    account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.50)
// proof that myAccount object was changed
console.log(myAccount)

// challenge - more functions to manage the account
// ++++++++++++++++++++++++++++++++++++++++++++++++
function addIncome(account, amount) {
    account.income = account.income + amount
}
function acctSummary(account) {
    let balance = account.income - account.expenses
    console.log(`The balance for ${account.name} is $${balance}. Income: $${account.income}. Expenses: $${account.expenses}.`)
}
function resetAcct(account) {
    account.income = 0
    account.expenses = 0
}
// run things
resetAcct(myAccount)
addIncome(myAccount, 500)
addExpense(myAccount, 60)
addExpense(myAccount, 5)
acctSummary(myAccount)
resetAcct(myAccount)
acctSummary(myAccount)

// NOTE also that this returns false:
console.log( {} === {} )
// why? Because those are automatically two completely separate
// objects in memory - it doesn't mean the same as '' === ''
