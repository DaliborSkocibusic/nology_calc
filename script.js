const AC = document.getElementById("AC");
AC.addEventListener("click", () => {
    resetCalc();
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
    storeLeftValue("7");
    console.log("Clicked " + seven + " 7");
});

const eight = document.getElementById("8");
eight.addEventListener("click", () => {
    storeLeftValue("8");
    console.log("Clicked " + eight + " 8");
});

const nine = document.getElementById("9");
nine.addEventListener("click", () => {
    storeLeftValue("9");
    console.log("Clicked " + nine + " 9");
});

const multiply = document.getElementById("*");
multiply.addEventListener("click", () => {
    storeOperator("*");
    console.log("Clicked " + multiply + " x");
});

const four = document.getElementById("4");
four.addEventListener("click", () => {
    storeLeftValue("4");
    console.log("Clicked " + four + " 4");
});

const five = document.getElementById("5");
five.addEventListener("click", () => {
    storeLeftValue("5");
    console.log("Clicked " + five + " 5");
});

const six = document.getElementById("6");
six.addEventListener("click", () => {
    storeLeftValue("6");
    console.log("Clicked " + six + " 6");
});

const minus = document.getElementById("-");
minus.addEventListener("click", () => {
    storeOperator("-");
    console.log("Clicked " + minus + " -");
});

const one = document.getElementById("1");
one.addEventListener("click", () => {
    storeLeftValue("1");
    console.log("Clicked " + one + " 1");
});

const two = document.getElementById("2");
two.addEventListener("click", () => {
    storeLeftValue("2");
    console.log("Clicked " + two + " 2");
});

const three = document.getElementById("3");
three.addEventListener("click", () => {
    storeLeftValue("3");
    console.log("Clicked " + three + " 3");
});

const plus = document.getElementById("+");
plus.addEventListener("click", () => {
    storeOperator("+");
    console.log("Clicked " + plus + " +");
});

const zero = document.getElementById("Zero");
zero.addEventListener("click", () => {
    storeLeftValue("0");
    console.log("Clicked " + zero + " 0");
});

const decimal = document.getElementById(".");
decimal.addEventListener("click", () => {
    storeLeftValue(".");
    console.log("Clicked " + decimal + " .");
});

const equals = document.getElementById("=");
equals.addEventListener("click", () => {
    storeLeftValue("=");
    console.log("Clicked " + equals + " =");
});

const result = document.getElementById("result");

// Setting global variables that are the in memory
// left operand and operator values for computation
var leftOperand = undefined;
var operator = undefined;
var displayValue = 0;

const update = (value) => {
    result.value = value;
};

const resetCalc = () => {
    result.innerText = 0;
    leftOperand = undefined;
    operator = undefined;
    displayValue = 0;
};

const storeOperator = (value) => {
    operator = value[0];
    console.log("Operator store " + operator);
};

const negate = () => {
    if (leftOperand !== undefined) {
        console.log(leftOperand);
        leftOperand = -1 * leftOperand;
        result.innerText = leftOperand;
    }
};

const percentageFunction = () => {
    // console.log(leftOperand);
    // resize();
    leftOperand = leftOperand / 100;

    // Test to se if it has decimal values
    if (leftOperand % 1 !== 0) {
        // this determines how long the decimal value is
        if (leftOperand < 1) {
            leftOperand = leftOperand.toFixed(8);
            result.style.fontSize = "6vh";
        }
        displayValue = leftOperand;
        // resize();
    }

    // This is for large number
    else if (leftOperand.length > 8) {
        displayValue = leftOperand.substring(leftOperand.length - 8);
    } else {
        displayValue = leftOperand;
    }
    result.innerText = displayValue;
    // resize();
};

const storeLeftValue = (value) => {
    if (leftOperand !== undefined && leftOperand.length > 8) {
        // Do nothing
        leftOperand = leftOperand;
    } else if (leftOperand == 0) {
        // Do nothing
        leftOperand = leftOperand;
    } else if (leftOperand === undefined || leftOperand === "NaN") {
        leftOperand = value;
        result.innerText = leftOperand;
    } else if (leftOperand.length <= 8) {
        leftOperand += value;
        doesItNeedComma();
        result.innerText = displayValue;
        console.log("Left operand is " + leftOperand);
    }

    removeZero();
    resize();
};

const doesItNeedComma = () => {
    // console.log("Doing doesnt i");
    console.log("left operand length is " + leftOperand.length);
    displayValue = leftOperand;
    if (Number.isInteger(parseInt(leftOperand))) {
        if (leftOperand.length === 4) {
            displayValue = leftOperand.slice(0, 1) + "," + leftOperand.slice(1);
            console.log("Adding comma");
            result.innerText = displayValue;
        }

        if (leftOperand.length === 5) {
            // result.innerText = ",";
            displayValue = leftOperand.slice(0, 2) + "," + leftOperand.slice(2);
            console.log("Adding comma");
            result.innerText = displayValue;
        }

        if (leftOperand.length === 6) {
            // result.innerText = ",";
            displayValue = leftOperand.slice(0, 3) + "," + leftOperand.slice(3);
            console.log("Adding comma");
            result.innerText = displayValue;
        }

        if (leftOperand.length === 7) {
            // result.innerText = ",";
            displayValue =
                leftOperand.slice(0, 1) +
                "," +
                leftOperand.slice(1, 4) +
                "," +
                leftOperand.slice(4);
            console.log("Adding comma");
            result.innerText = displayValue;
        }

        if (leftOperand.length === 8) {
            // result.innerText = ",";
            displayValue =
                leftOperand.slice(0, 2) +
                "," +
                leftOperand.slice(2, 5) +
                "," +
                leftOperand.slice(5);
            console.log("Adding comma");
            result.innerText = displayValue;
        }
        if (leftOperand.length === 9) {
            // result.innerText = ",";
            displayValue =
                leftOperand.slice(0, 3) +
                "," +
                leftOperand.slice(3, 6) +
                "," +
                leftOperand.slice(6);
            console.log("Adding comma");
            result.innerText = displayValue;
        }
    }
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

const removeZero = () => {
    if (leftOperand[0] == 0) {
    }
};
