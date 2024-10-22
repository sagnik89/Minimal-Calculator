
function validateInput() {
}


const operationButtonElements = document.querySelectorAll(".op-buttons");

const numButtonElements = document.querySelectorAll(".num-buttons");

const inputElement = document.querySelector("#input-text");

const equalToButtonElement = document.querySelector(".equal-to");

let num1 = 0, num2 = 0, result = 0;

let operation = '';


//Making the keypad work 
numButtonElements.forEach(button => {
    button.onclick = () => {
        inputElement.value = inputElement.value + button.innerHTML
    }
});


// Making the operations work

operationButtonElements.forEach(button => {
    button.onclick = () => {
        operation = button.innerHTML;
        num1 = Number(inputElement.value);
        inputElement.value = '';
    }
});

// Finally showing the result 

equalToButtonElement.onclick = () => {

    num2 = Number(inputElement.value);

    switch (operation) {
        case'+':
            result=num1+num2;
            break;
        case'-':
            result=num1-num2;
            break;
        case'x':
            result=num1*num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    inputElement.value = result;
    num1 = result;
}




function updateNum1() {
    if (firstTime) {
        num1 = inputElement.value;
        firstTime = false;
    }
}