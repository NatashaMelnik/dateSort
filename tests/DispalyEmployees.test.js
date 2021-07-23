const DispalyEmployees = require('../modules/DispalyEmployees');

let today = new Date();
let mm = +today.getMonth() + 1;

let testMap = new Map();
testMap.set(mm, [{ name: 'quas', birthday: today }, { name: 'wex', birthday: today }, { name: 'exort', birthday: today }]);

let testMap2 = new Map();



describe('return rigth number of strings', () => {
    it('return 3', () => {
        expect(DispalyEmployees(testMap, 1)).toStrictEqual(3);
    });

    // it('return 3', () => {
    //     expect(DispalyEmployees(testMap2, 0)).toStrictEqual(1);
    // });
    // console.log(testMap2)

});