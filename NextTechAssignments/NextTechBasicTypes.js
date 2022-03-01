/*
Basic types activity
- Create 3 variables and set them up to the given instructions. Also, type check them 
with the typeof operator in the console.
*/

let myFirstName = 'Danny'
let numberOfCities = 6
let havingFun = true

////////////////////////////////////
// check results in browser console
console.log('myFirstName: ', myFirstName);
console.log('numberOfCities: ', numberOfCities);
console.log('havingFun: ', havingFun);

// Do not edit code past this point
if (typeof module !== 'undefined') {
    module.export = {myFirstName, numberOfCities, havingFun};
}