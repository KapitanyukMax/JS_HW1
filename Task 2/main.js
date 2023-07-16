Problem1();
Problem2();
Problem3();

function isLeap(year) {
    return year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
}

function getDaysInMonth(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return isLeap(year) ? 29 : 28;
        default:
            return null;
    }
}

function isDateValid(day, month, year) {
    if (year > 2023 || year <= 0)
        return false;

    return day > 0 && day <= getDaysInMonth(month, year);
}

function Problem1() {
    let digit = +prompt("Enter a digit");

    let symbol;
    switch (digit) {
        case 1: symbol = '!'; break;
        case 2: symbol = '@'; break;
        case 3: symbol = '#'; break;
        case 4: symbol = '$'; break;
        case 5: symbol = '%'; break;
        case 6: symbol = '^'; break;
        case 7: symbol = '&'; break;
        case 8: symbol = '*'; break;
        case 9: symbol = '('; break;
        case 0: symbol = ')'; break;
        default: alert("Invalid input"); return;
    }

    alert(`The special symbol on this key is ${symbol}`);
}

function Problem2() {
    let year = +prompt("Enter any year");

    if (!Number.isInteger(year))
        alert("Invalid input");

    alert(`The year ${year} is ${isLeap(year) ? "leap" : "not leap"}`);
}

function Problem3() {
    let date = prompt("Enter a date in format dd/mm/yyyy");
    let [day, month, year, ...rest] = date.split('/').map(elem => +elem);

    if (!(day && month && year && rest.length == 0)) {
        alert("Invalid date format");
        return;
    }

    if (!isDateValid(day, month, year)) {
        alert("Invalid date");
        return;
    }

    let nextDate;
    if (day != getDaysInMonth(month, year))
        nextDate = `${++day}/${month}/${year}`;
    else if (month != 12)
        nextDate = `01/${++month}/${year}`;
    else
        nextDate = `01/01/${++year}`;
    
    alert(`The next date is ${nextDate}`);
}