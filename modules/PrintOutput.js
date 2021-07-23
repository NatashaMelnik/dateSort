const GetWordForm = require('./getWordForm');
const SortDays = require('./SortDays');
const calculateAge = require('./calculateAge');

function Print(employees) {
    employees = SortDays(employees);
    let output;
    employees.forEach(employee => {
        let age = calculateAge(employee.birthday);
        output = `(${employee.birthday.getDate()}) - ${employee.name} (${age} ${GetWordForm(age)})`
        console.log(output);
    });
    return output;
}

module.exports = Print