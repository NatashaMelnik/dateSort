function DelSame(a) {
    if (a.length > 0) {
        for (var q = 1, i = 1; q < a.length; ++q) {
            if (a[q] !== a[q - 1]) {
                a[i++] = a[q];
            }
        }

        a.length = i;
        return a;
    }

}

module.exports = DelSame;