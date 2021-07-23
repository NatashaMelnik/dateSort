// #!/usr/bin/env node

const GetAllExistMonthes = require('./modules/GetAllExistMonthes');
const DelSame = require('./modules/DelSame');
const DispalyEmployees = require('./modules/DispalyEmployees');

const csv = require('csv-parser')
const fs = require('fs')
let file = [];

fs.createReadStream('something.csv')
    .pipe(csv())
    .on('data', (data) => file.push(data))
    .on('end', () => {
        for (let i = 0; i < file.length; i++) {
            let date = new Date(file[i].birthday);
            file[i].birthday = date;
        }
        main(file)
    });


let birthday1 = new Date('June 17, 1995');
let birthday2 = new Date('June 12, 1993');
let birthday3 = new Date('July 16, 1992');
let birthday4 = new Date('December 19, 1995');
let birthday5 = new Date('August 13, 2001');
let birthday6 = new Date('September 14, 2006');
let birthday7 = new Date('September 11, 1842');

// let inputData = [
//     { name: 'Ваня Иванов', birthday: birthday1 },
//     { name: 'Петя Петров', birthday: birthday2 },
//     { name: 'Коля Новогодний', birthday: birthday3 },
//     { name: 'Стас Рождественский', birthday: birthday4 },
//     { name: 'Саша Вакулинский', birthday: birthday5 },
//     { name: 'Олександр Вакулінский', birthday: birthday6 },
//     { name: 'Марічка', birthday: birthday7 }
// ];


function main(inputData) {

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



    let planing = 1; // set monthes to show
    DispalyEmployees(employees, planing);
}


