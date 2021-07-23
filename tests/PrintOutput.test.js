const PrintOutput = require('../PrintOutput');

let inputData = [
    { name: 'Ваня Иванов', birthday: new Date('June 17, 1995') }
];

let input0 = [{name: '', birthday: new Date()}]
let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');

it('return correct string', () => {
    expect(PrintOutput(inputData)).toBe('(17) - Ваня Иванов (27 лет)');
}); 

it('return correct empty string', () => {
    expect(PrintOutput(input0)).toBe(`(${dd}) -  (1 год)`);
}); 

