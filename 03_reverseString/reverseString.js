let stringToReturn = '';

const reverseString = function(stringToReverse) {
    const stringArray = stringToReverse.split("").reverse();
    stringToReturn = stringArray.join("");
    return stringToReturn;
};

// Do not edit below this line
module.exports = reverseString;
