// console.log(123)

// Декабрь 2020
// (20) - Ваня Иванов (23 года)
// (23) - Петя Петров (25 лет)
// Январь 2021
// (01) - Коля Новогодний (21 год)
// (07) - Стас Рождественский (30 лет)

let birthday1 = new Date(1994, 11, 4);
let birthday2 = new Date(1995, 5, 23);
let birthday3 = new Date(1993, 5, 14);
let birthday4 = new Date(1995, 10, 14);

let monthNamesArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',];

function main() {
    let employees = new Map();
    employees.set('Ваня Иванов', birthday1);
    employees.set('Петя Петров', birthday2);
    employees.set('Коля Новогодний', birthday3);
    employees.set('Стас Рождественский', birthday4);

    Display(employees);

}

function Display(map) {
    // let monthArr = GetAllExistMonthes(map);

    for (let j = 0; j < 13; j++) {
        let currMonth;
        for (const [key, value] of map) {
            if (value.getMonth() == j) {
                let tempMonth = monthNamesArr[value.getMonth() - 1];
                if (tempMonth !== currMonth) {
                    console.log(tempMonth);
                }
                console.log(`(${value.getDay()}) - ${key} (${calculateAge(map.get(key))})`);
                currMonth = tempMonth;
            }
        }
    }
}

// function GetAllExistMonthes(map) {
//     const iterator = map.values();
//     let monthArr = [];

//     for (let i = 0; i < map.size; i++) {
//         monthArr.push(iterator.next().value.getMonth())
//     }

//     monthArr.sort(function (a, b) {
//         return a - b;
//     });

//     return monthArr;
// }

function calculateAge(date) {
    var ageDifMs = Date.now() - date;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

main();
