const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear(); // Get the current year

    const oldestPerson = people.reduce((oldest, current) => {
        // Calculate age for both people, considering missing yearOfDeath
        const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return currentAge > oldestAge ? current : oldest; // Return the older person
    });

    console.log(
        `The oldest person is ${oldestPerson.name} with age ${(oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth
        }.`
    );

    return oldestPerson; // Return the oldest person
};

// Do not edit below this line
module.exports = findTheOldest;
