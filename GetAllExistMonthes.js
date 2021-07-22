function GetAllExistMonthes(inputData) {
    let mapKeys = [];
    for (let i = 0; i < inputData.length; i++) {
        let temp = inputData[i].birthday.getMonth();
        if (mapKeys.indexOf(temp)) {
            mapKeys.push(temp);
        }
    }
    return mapKeys;
}

module.exports = GetAllExistMonthes