function calculateAge(date) {
    let ageDifMs = Date.now() - date;
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970)+1;
}

module.exports = calculateAge
