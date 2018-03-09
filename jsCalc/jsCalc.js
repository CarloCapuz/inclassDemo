function addNumbers(first, second) {
    console.log("Adding numbers: " + (first + second));
}

function subtractNumbers(first, second) {
    console.log("Subtracting numbers: " + first - second);
}

function multiplyNumbers(x, y) {
    console.log("Multiplying numbers: " + x * y);
}

function divideNumbers(a, b) {
    console.log("Dividing numbers: " + a / b);
}

function myDriver() {

    console.log("We want to add: " + 1 + "," + 2);
    console.log(addNumbers(1,2));

    console.log("We want to subtract: " + 4 + "," + 2);
    console.log(subtractNumbers(4,2));

    console.log("We want to multiply: " + 6 + "," + 3);
    console.log(multiplyNumbers(6,3));

    console.log("We want to divide: " + 12 + "," + 4);
    console.log(divideNumbers(12,4));
}

myDriver();
