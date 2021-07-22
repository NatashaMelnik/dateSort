const SortDays = require('./SortDays');
const GetAllExistMonthes = require('./GetAllExistMonthes');
const DelSame = require('./DelSame');
const DispalyEmployees = require('./DispalyEmployees');

let birthday1 = new Date('June 17, 1995');
let birthday2 = new Date('June 12, 1993');
let birthday3 = new Date('July 16, 1992');
let birthday4 = new Date('December 19, 1995');

function main() {

    let inputData = [
        { name: 'Ваня Иванов', birthday: birthday1 },
        { name: 'Петя Петров', birthday: birthday2 },
        { name: 'Коля Новогодний', birthday: birthday3 },
        { name: 'Стас Рождественский', birthday: birthday4 }
    ];

    inputData = SortDays(inputData);

    let mapKeys = GetAllExistMonthes(inputData);

    let employees = new Map();

    for (let i = 0; i < inputData.length; i++) {
        for (let j = 0; j < mapKeys.length; j++) {

            const birthday = inputData[i].birthday.getMonth();
            const obj = inputData[i];

            if (birthday == mapKeys[j]) {
                if (!employees.get(birthday)) {
                    employees.set(birthday, [obj]);
                } else {
                    let currArr = employees.get(birthday);
                    currArr.push(obj);
                    currArr = DelSame(currArr);
                    employees.delete(birthday);
                    employees.set(birthday, currArr);
                }
            }
        }
    }

    // console.log(employees); // Delete
    DispalyEmployees(employees);
}


main();

// module.exports = calculateAge
// module.exports = GetAllExistMonthes