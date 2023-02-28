const btnNumbers = document.querySelectorAll(".number");
const numbers = document.querySelector("#numbers");
const panel = document.querySelector("#panel");
const backspace = document.querySelector(".backspace");
const dot = document.querySelector(".dot");

const clear = document.querySelector(".clear"); 
const clearPanel = document.querySelector(".clear-panel"); 

const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const equals = document.querySelector(".equals");

let res = 0;

// Since in "btnNumbers" var we have multiple items, a foreach
// is needed to apply the event listener to all of them.
btnNumbers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        numbers.innerText += e.target.innerText;
    });
});

backspace.addEventListener("click", (e) => {
    numbers.innerText = numbers.innerText.slice(1);
});

dot.addEventListener("click", (e) => {
    // A dot may be added, if no dot has been added yet...
    if (!numbers.innerHTML.includes(".")) {
        numbers.innerText += e.target.innerText;
    }
});

[add, subtract, divide].forEach((btn) => {
    btn.addEventListener("click", (e) => {
        numbers.innerText += e.target.innerText;
    });
});

// However, we'll come across an issue with the "multiply" operator
// Our application will not understand "X" as the operator,
// So, we'll need to convert from "X" -> "*"
multiply.addEventListener("click", (e) => {
    numbers.innerText += "*";
});

equals.addEventListener("click", (e) => {
    let result;
    // Just to let you know, now we are building that feature
    // where the previous operation can be used in "chain"...
    
    // Also, we are adding a validation to prevent the operation
    // to start with an operator, such as "+" and "-". Look:
    if (res && panel.innerText && ["+", "-", "/", "*"].includes(
        numbers.innerHTML.charAt(0)
    )) {
        result = eval(res + numbers.innerText);
    } else {
        result = eval(numbers.innerText);
    }

    if (result) {
        numbers.innerText = "";
        panel.innerText = result;
        // Remember "res" is our var that keeps storing our results
        res = result;
    }
});

// Now, the clean up buttons...
clear.addEventListener("click", (e) => {
    numbers.innerText = "";
    panel.innerText = "0";
    res = 0;
});

clearPanel.addEventListener("click", (e) => {
    panel.innerText = "0";
});