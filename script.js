const AC = document.getElementById("AC");
AC.addEventListener("click", () => {
    clearScreen();
    // storeValue("AC");
    console.log("Clicked " + AC + " AC");
});

const plusMinus = document.getElementById("+-");
plusMinus.addEventListener("click", () => {
    // storeValue("+-");
    negate();
    console.log("Clicked " + plusMinus + " +-");
});

const percentage = document.getElementById("%");
percentage.addEventListener("click", () => {
    // storeOperator("%");
    percentageFunction();
    console.log("Clicked " + percentage + " %");
});

const divide = document.getElementById("/");
divide.addEventListener("click", () => {
    storeOperator("/");
    console.log("Clicked " + divide + " /");
});

const seven = document.getElementById("7");
seven.addEventListener("click", () => {
    storeValue("7");
    console.log("Clicked " + seven + " 7");
});

const eight = document.getElementById("8");
eight.addEventListener("click", () => {
    storeValue("8");
    console.log("Clicked " + eight + " 8");
});

const nine = document.getElementById("9");
nine.addEventListener("click", () => {
    storeValue("9");
    console.log("Clicked " + nine + " 9");
});

const multiply = document.getElementById("*");
multiply.addEventListener("click", () => {
    storeOperator("*");
    console.log("Clicked " + multiply + " x");
});

const four = document.getElementById("4");
four.addEventListener("click", () => {
    storeValue("4");
    console.log("Clicked " + four + " 4");
});

const five = document.getElementById("5");
five.addEventListener("click", () => {
    storeValue("5");
    console.log("Clicked " + five + " 5");
});

const six = document.getElementById("6");
six.addEventListener("click", () => {
    storeValue("6");
    console.log("Clicked " + six + " 6");
});

const minus = document.getElementById("-");
minus.addEventListener("click", () => {
    storeOperator("-");
    console.log("Clicked " + minus + " -");
});

const one = document.getElementById("1");
one.addEventListener("click", () => {
    storeValue("1");
    console.log("Clicked " + one + " 1");
});

const two = document.getElementById("2");
two.addEventListener("click", () => {
    storeValue("2");
    console.log("Clicked " + two + " 2");
});

const three = document.getElementById("3");
three.addEventListener("click", () => {
    storeValue("3");
    console.log("Clicked " + three + " 3");
});

const plus = document.getElementById("+");
plus.addEventListener("click", () => {
    storeOperator("+");
    console.log("Clicked " + plus + " +");
});

const zero = document.getElementById("Zero");
zero.addEventListener("click", () => {
    storeValue("0");
    console.log("Clicked " + zero + " 0");
});

const decimal = document.getElementById(".");
decimal.addEventListener("click", () => {
    storeValue(".");
    console.log("Clicked " + decimal + " .");
});

const equals = document.getElementById("=");
equals.addEventListener("click", () => {
    storeValue("=");
    console.log("Clicked " + equals + " =");
});

const result = document.getElementById("result");

// Setting global variables that are the in memory
// left operand and operator values for computation
var leftOperand = undefined;
var operator = undefined;

const update = (value) => {
    result.value = value;
};

const clearScreen = () => {
    result.innerText = 0;
    leftOperand = undefined;
};

const storeOperator = (value) => {
    operator = value[0];
    console.log("Operator store " + operator);
};

const negate = () => {
    console.log(leftOperand);
    result.innerText = -1 * Math.abs(leftOperand);
};

const percentageFunction = () => {
    console.log(leftOperand);
    leftOperand = leftOperand / 100;
    if (leftOperand.length > 8) {
        leftOperand = leftOperand.substring(leftOperand.length - 8);
    }
    result.innerText = leftOperand;
    resize();
};

const storeValue = (value) => {
    if (leftOperand !== undefined && leftOperand.length > 8) {
        // Do nothing
        leftOperand = leftOperand;
    } else if (leftOperand === undefined) {
        leftOperand = value;
    } else if (leftOperand.length <= 8) {
        leftOperand += value;
        result.innerText = leftOperand;
        console.log("Left operand is " + leftOperand);
    }

    resize();
};

const resize = () => {
    if (leftOperand.length > 6 && leftOperand.length < 8) {
        result.style.fontSize = "7.5vh";
    }
    if (leftOperand.length > 8) {
        result.style.fontSize = "6vh";
    }

    if (leftOperand.length < 6) {
        result.style.fontSize = "9vh";
    }
};
