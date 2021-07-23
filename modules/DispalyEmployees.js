const Print = require('./PrintOutput');


let monthNamesArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',];
let output = ['month'];

function DispalyEmployees(employees, planingIndex) { // test
    let date = new Date;
    let year = date.getFullYear();
    let currIndex = +date.getMonth();
    for (let j = currIndex; j <= currIndex + planingIndex; j++) {
        let currMonth;
        for (const [key, value] of employees) {
            if (key === j) {
                let tempMonth = monthNamesArr[key - 1] + ' ' + year;
                if (tempMonth !== currMonth) {
                    console.log(tempMonth);
                    output.push('+month');
                }
                Print(value);
                output.push(value);
                currMonth = tempMonth;
            }
        }
    }

    return output.length;
}

module.exports = DispalyEmployees;