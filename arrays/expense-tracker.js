// challenge
// even though this is in the arrays folder, it is really an objects exercise
/* build an account object that includes methods to:
   - add a new expense
   - add new income
   - write out an account summary
*/

const account = {
    name: 'Mindy McAdams',
    expenses: [
        {
            description: 'coffee',
            amount: 3.45
        },{
            description: 'bills',
            amount: 150.00
        }
    ],
    income: [],
    // add a new expense
    newExpense: function(descrip, amt) {
        this.expenses.push({ description: descrip, amount: amt});
    },
    // add new income
    newIncome: function(descrip, amt) {
        this.income.push({ description: descrip, amount: amt});
    },
    // get account summary and write a sentence about it
    accountSummary: function() {
        let expenseTotal = 0;
        let incomeTotal = 0;
        this.expenses.forEach(function(item) {
            expenseTotal += item.amount;
        });
        this.income.forEach(function(item) {
            incomeTotal += item.amount;
        });
        const combined = incomeTotal - expenseTotal;
        console.log(`${this.name} has $${combined}: $${incomeTotal} in income and $${expenseTotal} in expenses.`);
    }
};
// run the methods
account.newExpense('vet', 500.00);
account.newExpense('Target shopping', 150.00);
account.accountSummary();
account.newIncome('paycheck', 2000.00);
account.newIncome('freelance', 400.00);
account.accountSummary();
