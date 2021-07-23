const DelSame = require('../DelSame');

describe('return correct word form', () => {
    it('return same', () => {
        expect(DelSame([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
    });

    it('return one item', () => {
        expect(DelSame([1])).toStrictEqual([1]);
    });

    it('return same', () => {
        expect(DelSame([null])).toStrictEqual([null]);
    });

    it('return undefined', () => {
        expect(DelSame([])).toStrictEqual(undefined);
    });


});