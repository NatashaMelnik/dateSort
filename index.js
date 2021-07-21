// console.log(123)

// Декабрь 2020
// (20) - Ваня Иванов (23 года)
// (23) - Петя Петров (25 лет)
// Январь 2021
// (01) - Коля Новогодний (21 год)
// (07) - Стас Рождественский (30 лет)

let birthday1 = new Date(1995, 11, 17);
let birthday2 = new Date(1995, 5, 23);
let birthday3 = new Date(1995, 5, 14);
let birthday4 = new Date(1995, 10, 14);

function main() {
    let employees = new Map();
    employees.set('Ваня Иванов', birthday1);
    employees.set('Петя Петров', birthday2);
    employees.set('Коля Новогодний', birthday3);
    employees.set('Стас Рождественский', birthday4);

    Display(employees);

}

function Display(map) {
    console.log(calculateAge(map.get('Коля Новогодний')));

}

function calculateAge(date) {
    var ageDifMs = Date.now() - date;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

main();
