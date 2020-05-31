let findTheOldest = function(people) {
    const orderOldest = people.sort((a, b) => {
        let aAge, bAge;
        (!a.yearOfDeath) ? aAge = new Date().getFullYear() - a.yearOfBirth : aAge = a.yearOfDeath - a.yearOfBirth;
        (!b.yearOfDeath) ? bAge = new Date().getFullYear() - b.yearOfBirth : bAge = b.yearOfDeath - b.yearOfBirth;
        return (aAge > bAge) ? -1 : 1;
    });
    return orderOldest[0];
}

module.exports = findTheOldest