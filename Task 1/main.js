Problem1();
Problem2();

function Problem1() {
    const currentYear = 2023;

    let year = +prompt("Enter your birth year");

    if (!Number.isFinite(year) || year <= 0 || year > currentYear) {
        alert("Invalid year");
        return;
    }

    alert(`Your age is ${currentYear - year}`);
}

function Problem2() {
    const fileSize = 820;

    let fullSize = prompt("Enter you flash drive size in GB") * 1024;

    if (!Number.isFinite(fullSize)) {
        alert("Not a number");
        return;
    }

    if (fullSize < 0) {
        alert("Flash drive size cannot be negative");
        return;
    }

    let filesNumber = Math.floor(fullSize / fileSize);
    alert(`Your flash drive can contain ${filesNumber} file(s) with size ${fileSize} MB`);
}