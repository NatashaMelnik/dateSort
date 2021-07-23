const GetWordForm = require('../getWordForm');


describe('return correct word form', () => {
    it('return 0 age', () => {
        expect(GetWordForm(0)).toStrictEqual('лет');
    });

    it('return undefined', () => {
        expect(GetWordForm(null)).toStrictEqual(undefined);
    });

    it('return undefined', () => {
        expect(GetWordForm(undefined)).toStrictEqual(undefined);
    });

    it('return undefined', () => {
        expect(GetWordForm(NaN)).toStrictEqual(undefined);
    });

    it('return 1', () => {
        expect(GetWordForm(1)).toStrictEqual('год');
    });

    it('return 22', () => {
        expect(GetWordForm(22)).toStrictEqual('года');
    });

    it('return 101', () => {
        expect(GetWordForm(101)).toStrictEqual('год');
    });


});