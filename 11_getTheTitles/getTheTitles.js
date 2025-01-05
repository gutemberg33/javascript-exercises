// Returns a new array given an array of objects
const getTheTitles = function (books) {
    const titleList = books.map((element) => element.title);

    return titleList;
};


// Do not edit below this line
module.exports = getTheTitles;
