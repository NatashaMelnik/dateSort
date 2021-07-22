const GetAllExistMonthes = require('../GetAllExistMonthes');

let date1 = new Date('May 17, 1995');
let date2 = new Date('July 17, 1995');
let date3 = new Date('August 17, 1995');
let date4 = new Date('October 17, 1995');
let date5 = new Date();

let inputData = [
    { name: 'Qwe', birthday: date1 },
    { name: 'Yui', birthday: date2 },
    { name: 'Zxc', birthday: date3 },
    { name: 'Weq', birthday: date4 }
];

let inputDataEmpty = [{name: 'Qwe', birthday: date5}]

describe('return necessary array of months without repeat', () => {
    it('return all monthes', () => {
        expect(GetAllExistMonthes(inputData)).toStrictEqual([4, 6, 7, 9]);
    });


    it('return correct age from now', () => {
        expect(GetAllExistMonthes(inputDataEmpty)).toStrictEqual([6]);
    });
});