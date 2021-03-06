// #!/usr/bin/env node

const GetAllExistMonthes = require('./modules/GetAllExistMonthes');
const DelSame = require('./modules/DelSame');
const DispalyEmployees = require('./modules/DispalyEmployees');

const { Client } = require('pg');
const config = require('./config');

// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let filePath = process.argv[2]; // 'something.csv'
// let index = process.argv[3]; // index

// const csv = require('csv-parser')
// const fs = require('fs')
// let file = [];

// fs.createReadStream(filePath)// filePath
//     .pipe(csv())
//     .on('data', (data) => { 
//         let day = new Date(data.birthday);
//         file.push({name: data.name, birthday: day}) 
//     })
//     .on('end', () => {
//         main(file, index);
//     });

async function getData() {
    const client = new Client(config);
    client.connect();
    return client.query('SELECT * FROM public.birthdays;')
        .then(data => {
            if (data.rows.length > 0) {
                return data.rows;
            }
        });
}

function main(inputData, index) {

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

    // let planing = 1; // set monthes to show
    DispalyEmployees(employees, +index);
}

// main(3);
getData().then(data => {
    // console.log(data);
    main(data, 4);
})

// let birthday1 = new Date('June 17, 1995');
// let birthday2 = new Date('June 12, 1993');
// let birthday3 = new Date('July 16, 1992');
// let birthday4 = new Date('December 19, 1995');
// let birthday5 = new Date('August 13, 2001');
// let birthday6 = new Date('September 14, 2006');
// let birthday7 = new Date('September 11, 1842');

// let inputData = [
//     { name: '???????? ????????????', birthday: birthday1 },
//     { name: '???????? ????????????', birthday: birthday2 },
//     { name: '???????? ????????????????????', birthday: birthday3 },
//     { name: '???????? ????????????????????????????', birthday: birthday4 },
//     { name: '???????? ??????????????????????', birthday: birthday5 },
//     { name: '?????????????????? ??????????????????????', birthday: birthday6 },
//     { name: '??????????????', birthday: birthday7 }
// ];
