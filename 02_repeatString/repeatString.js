const repeatString = function (stringToRepeat, num) {
    if (num < 0) return "ERROR";
    let stringToReturn = '';
    for (let i = 0; i < num; i++) {
        stringToReturn += stringToRepeat;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;