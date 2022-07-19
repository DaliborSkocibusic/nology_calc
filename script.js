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
    // This test makes sure its not a decimal
    if (leftOperand % 1 == 0) {
        // It fails when entering .. twice in a row
        if (!leftOperand.toString().includes(".")) {
            storeLeftValue(".");
            console.log("Decimal stored " + decimal + " .");
        }
    }
});

const equals = document.getElementById("=");
equals.addEventListener("click", () => {
    operate();
    console.log("Clicked " + equals + " =");
});

const result = document.getElementById("result");

// Setting global variables that are the in memory
// left operand and operator values for computation
var leftOperand = undefined;
var operator = undefined;
var displayValue = 0;
var storedOperand = undefined;

const update = (value) => {
    result.value = value;
};

const resetCalc = () => {
    result.innerText = 0;
    leftOperand = undefined;
    operator = undefined;
    displayValue = 0;
    storedOperand = undefined;
};

const storeOperator = (value) => {
    operator = value[0];
    storedOperand = leftOperand;
    leftOperand = undefined;
    displayValue = undefined;
    result.innerText = displayValue;
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
        // This is when the numbe is postive and % isused
        if (leftOperand < 1) {
            leftOperand = leftOperand.toFixed(8);
            result.style.fontSize = "6vh";
        }

        // This is when the number is negagive and a string
        if (leftOperand < 1 && Math.abs(leftOperand) > 100) {
            leftOperand = Number.parseFloat(leftOperand).toFixed(4);
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

const operate = () => {
    console.log("Left operand is " + leftOperand);
    console.log("Operator is " + operator);
    console.log("Stored operand is " + storedOperand);

    if (operator === "+") {
        storedOperand =
            Number.parseFloat(leftOperand) + Number.parseFloat(storedOperand);
    }

    if (operator === "*") {
        storedOperand =
            Number.parseFloat(leftOperand) * Number.parseFloat(storedOperand);
    }

    if (operator === "/") {
        storedOperand = (
            Number.parseFloat(storedOperand) / Number.parseFloat(leftOperand)
        ).toFixed(4);
    }

    if (operator === "-") {
        storedOperand =
            Number.parseFloat(storedOperand) - Number.parseFloat(leftOperand);
    }

    leftOperand = undefined;
    operator = undefined;
    displayValue = storedOperand;
    result.innerText = displayValue;
};

const doesItNeedComma = () => {
    // console.log("Doing doesnt i");
    console.log("left operand length is " + leftOperand.length);
    displayValue = leftOperand;
    if (Number.isInteger(parseInt(leftOperand))) {
        if (leftOperand.length === 4 && leftOperand % 1 == 0) {
            displayValue = leftOperand.slice(0, 1) + "," + leftOperand.slice(1);
            console.log("Adding comma");
            result.innerText = displayValue;
        }

        if (leftOperand.length === 5 && leftOperand % 1 == 0) {
            // result.innerText = ",";
            displayValue = leftOperand.slice(0, 2) + "," + leftOperand.slice(2);
            console.log("Adding comma");
            result.innerText = displayValue;
        }

        if (leftOperand.length === 6 && leftOperand % 1 == 0) {
            // result.innerText = ",";
            displayValue = leftOperand.slice(0, 3) + "," + leftOperand.slice(3);
            console.log("Adding comma");
            result.innerText = displayValue;
        }

        if (leftOperand.length === 7 && leftOperand % 1 == 0) {
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

        if (leftOperand.length === 8 && leftOperand % 1 == 0) {
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
        if (leftOperand.length === 9 && leftOperand % 1 == 0) {
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
