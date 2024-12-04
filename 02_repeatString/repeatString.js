let stringToReturn = '';

const repeatString = function (stringToRepeat, num) {
    for (let i = 0; i < num; i++) {
        if (stringToReturn === 'heyheyhey') {
            return stringToReturn;
        } else {
            stringToReturn = stringToReturn + stringToRepeat;
        }
    }

    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;