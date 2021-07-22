const calculateAge = require('./calculateAge');
const SortDays = require('./SortDays');


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

function Print(employees) {
    employees = SortDays(employees);
    employees.forEach(employee => {
        let age = calculateAge(employee.birthday);
        let output = `(${employee.birthday.getDate()}) - ${employee.name} (${age} ${wordForm(age)})`
        console.log(output);
        return output;
    });
}

function wordForm(n) {  
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return 'лет'; }
    if (n1 > 1 && n1 < 5) { return 'года'; }
    if (n1 == 1) { return 'год'; }
    return 'лет';
}

module.exports = DispalyEmployees;