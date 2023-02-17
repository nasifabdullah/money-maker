
//first button for calculation and validation:
document.getElementById('calculate').addEventListener('click',function(){
    const foodExpenses = getExpenseTotalAmountById('food');
    const rentExpense = getExpenseTotalAmountById('rent');
    const clothExpense = getExpenseTotalAmountById('cloth');

    
    if(isNaN(foodExpenses, rentExpense, clothExpense) || foodExpenses < 0 || rentExpense < 0 || clothExpense < 0){
        alert('please provide a only valid number');
    }
    else{
        const totalExpenseAmount = foodExpenses + rentExpense + clothExpense;

        const incomeTotal = getExpenseTotalAmountById('income');
        const totalBalance = incomeTotal - totalExpenseAmount;

        if(totalExpenseAmount > incomeTotal){
            alert('Cut Your Coat According to Your Cloth');
            // return;
        }
        else{
            setTextElementById('expenses', totalExpenseAmount);
            setTextElementById('balance', totalBalance);
        }
    }
})  

//for savings amount from total income

document.getElementById('btn-save').addEventListener('click',function(){
    const incomeTotal = getExpenseTotalAmountById('income');
    const saveTotal = getExpenseTotalAmountById('save')
    const totalSaveAmount = (incomeTotal * saveTotal) / 100;

    const totalBalance = getTextElementById('balance');

    if(isNaN(saveTotal) || saveTotal < 0 || saveTotal >= 100 || totalSaveAmount > totalBalance){
        alert('savings not a possible')
    }
    else{
        const finalBalance = totalBalance - totalSaveAmount;

        setTextElementById('saving-amount', totalSaveAmount);
        setTextElementById('remaining-amount', finalBalance);
    }
})