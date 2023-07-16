Problem1();
Problem2();
Problem3();
Problem4();

function Problem1() {
    let from = +prompt("Enter the lower bound (inclusive) of a range");
    
    if (!Number.isFinite(from)) {
        alert("Not a number");
        return;
    }

    let to = +prompt("Enter the upper bound (exclusive) of a range");
    if (!Number.isFinite(to)) {
        alert("Not a number");
        return;
    }

    if (from > to) {
        alert("The upper bound has to be greater than the lower");
        return;
    }

    let sum = 0;
    for (let i = from; i < to; i++)
        sum += i;
    
    alert(`The sum of all numbers in the range is ${sum}`);
}

function Problem2() {
    let number_str = prompt("Enter a positive number");
    let number = +number_str;

    if (!Number.isFinite(number)) {
        alert("Not a number");
        return;
    }

    if (number <= 0) {
        alert("Number must be positive");
        return;
    }

    alert(`The number ${number_str} contains ${number_str.length} digits (simple calculation)`);

    let digits = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        digits++;
    }

    alert(`The number ${number_str} contains ${digits} digits (loop calculation)`);
}

function Problem3() {
    let number;

    let positive = 0,
        negative = 0,
        zeros = 0,
        even = 0,
        odd = 0;

    let i = 0;
    while (i < 10) {
        number = +prompt("Enter a number");
        if (!Number.isFinite(number)) {
            alert("Not a number");
            continue;
        }

        if (number > 0)
            positive++;
        else if (number < 0)
            negative++;
        else zeros++;

        if (number % 2 == 0)
            even++;
        else
            odd++;

        i++;
    }

    alert(`Statistics:\nPositive - ${positive}\nNegative - ${negative}\nZeros - ${zeros}\n` +
          `Even - ${even}\nOdd - ${odd}`);
}

function Problem4() {
    let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let dayNumber = 0;

    let isContinue;
    do {
        isContinue = confirm(`${weekDays[dayNumber]}. Do you want to see the next day?`);
        
        dayNumber == 6 ? dayNumber = 0 : dayNumber++;
    } while (isContinue);
}