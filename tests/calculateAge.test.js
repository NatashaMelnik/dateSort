const calculateAge = require('../calculateAge');

let date1 = new Date('2000, 03, 03');
let date2 = new Date();

describe('calculate age wright', () => {
    it('return correct age', () => {
        expect(calculateAge(date1)).toStrictEqual(22);
    });

    it('return correct age from now', () => {
        expect(calculateAge(date2)).toStrictEqual(1);
    });
});


