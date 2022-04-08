const terrestrials = ["fox", "lion", "elephant"];
const aquatics = ["shark", "whale", "octopus"];
const allAnimals = [...terrestrials, ...aquatics];
console.log(allAnimals);

// TODO: create the array allAnimals that contains all animals from terrestrials and aquatics arrays

//don't change this line
if (typeof module !== "undefined") {
    module.exports = { allAnimals };
}

// TODO: create the function sumAll
const sumAll = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
};
console.log(sumAll(1, 2)); // expected output: 3
console.log(sumAll(1, 2, 3)); // expected output: 6
console.log(sumAll(1, 2, 3, 4)); // expected output: 10

//don't change this line
if (typeof module !== "undefined") {
    module.exports = { sumAll };
}