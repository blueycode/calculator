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
    // We take the input under the "numbers" div
    // and use it as a param for the eval function...
    let result = eval(numbers.innerText);
    panel.innerText = result;
    numbers.innerText = "";
});

// Now, the clean up buttons...
clear.addEventListener("click", (e) => {
    numbers.innerText = "";
    panel.innerText = "0";
});

clearPanel.addEventListener("click", (e) => {
    panel.innerText = "0";
});