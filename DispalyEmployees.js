const Print = require('./PrintOutput');


let monthNamesArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',];

function DispalyEmployees(employees) { // set plans for testing
    for (let j = 1; j < 12; j++) {
        let currMonth;
        for (const [key, value] of employees) {
            if (key == j) {
                let tempMonth = monthNamesArr[key - 1];
                if (tempMonth !== currMonth) {
                    console.log(tempMonth);
                }
                Print(value)
                currMonth = tempMonth;
            }
        }
    }

    // return ;
}

module.exports = DispalyEmployees;