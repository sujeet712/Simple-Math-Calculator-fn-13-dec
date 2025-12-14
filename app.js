const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const resultEl = document.getElementById("result");

// let a = (num1El.value);
// const firstNumber = parseInt(num1El.value);
// console.log(firstNumber);


const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");

let calculationstepsEl = document.getElementById("calculation-steps");

addBtn.addEventListener("click", function() {
    let a = (num1El.value);
    const f = parseInt(a);
    console.log(f);
    let b = (num2El.value);
    const s = parseInt(b);
    console.log(s);
    if (f > 0 && s > 0) {
        let sum = f + s;
        // const s2 = sum;
        console.log(sum);
        // ans = String(sum);
        resultEl.textContent = sum;
        calculationstepsEl = "";
    } else {
        resultEl.textContent = "Error";
        calculationstepsEl = "";
    }
})
subtractBtn.addEventListener("click", function() {
    let a = (num1El.value);
    const f = parseInt(a);
    console.log(f);
    let b = (num2El.value);
    const s = parseInt(b);
    console.log(s);
    if (f > 0 && s > 0) {
        let diff = f - s;

        resultEl.textContent = diff;
        calculationstepsEl = "";
    } else {
        resultEl.textContent = "Error";
        calculationstepsEl = "";
    }
})
multiplyBtn.addEventListener("click", function() {
    let a = (num1El.value);
    const f = parseInt(a);
    console.log(f);
    let b = (num2El.value);
    const s = parseInt(b);
    console.log(s);
    if (f > 0 && s > 0) {
        let mul = f * s;

        resultEl.textContent = mul;
        calculationstepsEl = "";
    } else {
        resultEl.textContent = "Error";
        calculationstepsEl = "";
    }
})
