const people = {};
people.sort(people);
console.log(people);

people.sort((a, b) => b.localeCompare(a));
console.log(people);
