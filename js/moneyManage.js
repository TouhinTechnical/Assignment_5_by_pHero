// Input Value Function
function inputField(input){
    const inputField = document.getElementById(input);
    const valueAmount = parseInt(inputField.value);
    inputField.value = '';
    return valueAmount;
};
// main function
document.getElementById('calculationBtn').addEventListener('click', function(){
    // Input Value Function call
    const incomeInputField = inputField('incomeInputValue');
    const foodInputField = inputField('foodInputValue');
    const rentInputField = inputField('rentInputValue');
    const clothesInputField = inputField('clothesInputValue');
    // total
    const totalExpenses = foodInputField + rentInputField + clothesInputField;
    // total Expenses
    const totalExpensesAmount = document.getElementById('totalExpensesAmount');
    totalExpensesAmount.innerText = totalExpenses;
    // Balance
    const balanceAmount = document.getElementById('balanceAmount');
    const totalBalanceAmount = incomeInputField - totalExpenses;
    balanceAmount.innerText = totalBalanceAmount;
    
    //saving Part
    document.getElementById('saveAmountBtn').addEventListener('click', function(){
        const saveInputField = document.getElementById('saveInputField');
        const saveInputAmount = saveInputField.value;
        const savingResult = incomeInputField * (saveInputAmount/100); 
        saveInputField.value = '';
        const savingAmount = document.getElementById('saveAmount');
        savingAmount.innerText = savingResult;
        const remainBalance = document.getElementById('remainBalance');
        remainBalance.innerText = totalBalanceAmount - savingResult; 
    });   
});