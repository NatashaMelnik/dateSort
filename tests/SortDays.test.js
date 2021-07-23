const SortDays = require('../SortDays');

const date1 = new Date('May 17, 1995');
const date2 = new Date('July 18, 1995');
const date3 = new Date('August 11, 1995');
const date4 = new Date('October 12, 1995');

const inputData = [
    { name: 'Qwe', birthday: date1 },
    { name: 'Yui', birthday: date2 },
    { name: 'Zxc', birthday: date3 },
    { name: 'Weq', birthday: date4 }
];

const inputDataSingle = [
    { name: 'Qwe', birthday: date1 }
];

const outputData = [
    { name: 'Zxc', birthday: date3 },
    { name: 'Weq', birthday: date4 },
    { name: 'Qwe', birthday: date1 },
    { name: 'Yui', birthday: date2 }
];

const outputDataSingle = [
    { name: 'Qwe', birthday: date1 }
];

it('sort object due days', () => {
    expect(SortDays(inputData)).toStrictEqual(outputData);
});

it('sort one day', () => {
    expect(SortDays(inputDataSingle)).toStrictEqual(outputDataSingle);
});