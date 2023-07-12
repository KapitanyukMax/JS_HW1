//1
const currentYear = 2023;

let year = +prompt("Enter your birth year");
if (year > +0 && year <= currentYear) {
    let age = currentYear - year;
    alert(`Your age is ${age}`);
}
else
    alert("Invalid input");

//2
const fileSize = 820;

let fullSize = prompt("Enter you flash drive size in GB") * 1024;
if (fullSize >= 0) {
    let filesNumber = Math.floor(fullSize / fileSize);
    alert(`Your flash drive can contain ${filesNumber} file(s) with size ${fileSize} MB`);
}
else
    alert("Invalid input!");