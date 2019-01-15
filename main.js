var btnDecimal = document.getElementById('btn-decimal');
var btnClear = document.getElementById('btn-clear');
var btnBackSpace = document.getElementById('btn-backspace');
var displayResultElement = document.getElementById('result-display');

var displayResult = '0';
var pendingResult;
var evalStringArray = [];

var btnNums = document.getElementsByClassName('btn-num');
var btnOps = document.getElementsByClassName('btn-operator');

var updateDisplayResult = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if(displayResult === '0')
        displayResult = '';

    displayResult += btnText;
    displayResultElement.innerText = displayResult;
}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch(operator) {
        case '+':
            pendingResult = displayResult;
            displayResult = '0';
            displayResultElement.innerText = displayResult;
            evalStringArray.push(pendingResult);
            evalStringArray.push('+');
            break;

        case '-':
            pendingResult = displayResult;
            displayResult = '0';
            displayResultElement.innerText = displayResult;
            evalStringArray.push(pendingResult);
            evalStringArray.push('-');
            break;

        case 'x':
            pendingResult = displayResult;
            displayResult = '0';
            displayResultElement.innerText = displayResult;
            evalStringArray.push(pendingResult);
            evalStringArray.push('*');
            break;

        case '÷':
            pendingResult = displayResult;
            displayResult = '0';
            displayResultElement.innerText = displayResult;
            evalStringArray.push(pendingResult);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayResult);
            var evaluation = eval(evalStringArray.join(' '));
            displayResult = evaluation + '';
            displayResultElement.innerText = displayResult;
            evalStringArray = [];
            break;

        default:
            break;
    }
}

for (let i = 0; i < btnNums.length; i++) {
    btnNums[i].addEventListener('click', updateDisplayResult, false );
}

for (let i = 0; i < btnOps.length; i++) {
     btnOps[i].addEventListener('click', performOperation, false );
}

btnClear.onclick = () => {
    displayResult = '0';
    pendingResult = undefined;
    evalStringArray = [];
    displayResultElement.innerHTML = displayResult;
}

btnBackSpace.onclick = () => {
    let lengthOfDisplayResult = displayResult.length;
    displayResult = displayResult.slice(0, lengthOfDisplayResult - 1);

    if(displayResult === '')
    displayResult = '0';
    displayResultElement.innerHTML = displayResult;
}

btnDecimal.onclick = () => {
    if(!displayResult.includes('.'))
    displayResult += '.';
    displayResultElement.innerText = displayResult;
}