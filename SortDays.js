function SortDays(arr) {
    arr.sort(compare);

    function compare(a, b) {
        return a.birthday.getDate() - b.birthday.getDate();
    }

    return arr;
}


module.exports = SortDays