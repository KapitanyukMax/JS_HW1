//1
let num = +prompt("Enter a digit");

let symb;
switch (num) {
    case 1: symb = '!'; break;
    case 2: symb = '@'; break;
    case 3: symb = '#'; break;
    case 4: symb = '$'; break;
    case 5: symb = '%'; break;
    case 6: symb = '^'; break;
    case 7: symb = '&'; break;
    case 8: symb = '*'; break;
    case 9: symb = '('; break;
    case 0: symb = ')'; break;
    default: symb = '-'; break;
}

symb == '-' ? alert("Invalid input") : alert(`The special symbol on this key is ${symb}`);

//2
let year = +prompt("Enter any year");

if (!Number.isInteger(year))
    alert("Invalid input");

alert(`The year ${year} is ${isLeap(year) ? "leap" : "not leap"}`);

function isLeap(year) {
    return year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
}

//3
let date = prompt("Enter a date in format dd/mm/yyyy");

(nextDate = getNextDate(date)) ? alert(`The next date is ${nextDate}`) : alert("Invalid input");

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

function getNextDate(date) {
    let [dateDay, dateMonth, dateYear, ...rest] = date.split('/').map(elem => +elem);

    if (!(dateDay && dateMonth && dateYear && rest.length == 0))
        return null;

    if (!isDateValid(dateDay, dateMonth, dateYear))
        return null;

    if (dateDay != getDaysInMonth(dateMonth, dateYear))
        return `${++dateDay}/${dateMonth}/${dateYear}`;
    else if (dateMonth != 12)
        return `01/${++dateMonth}/${dateYear}`;
    else
        return `01/01/${++dateYear}`;
}