
function getExpenseTotalAmountById(totalExpenses){
    const expensesElement = document.getElementById(totalExpenses);
    const expensesString = expensesElement.value;
    const expensesAmount = parseInt(expensesString);
    return expensesAmount;
}
function getTextElementById(expensesTotal){
    const totalExpensesElement = document.getElementById(expensesTotal);
    const totalExpensesElementString = totalExpensesElement.innerText;
    const totalExpenseCost = parseInt(totalExpensesElementString);
    return totalExpenseCost;
}
function setTextElementById(expensesTotal, newValue){
    const totalExpensesElement = document.getElementById(expensesTotal);
    totalExpensesElement.innerText = newValue;
}