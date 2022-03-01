/*
Write your first function
- open the functions-01 folder,
- In add.js, complete the body of the function between the comments
- make sure to return the sum of x and y
*/
function add() {
    //your code goes here
    return number1 + number2; 
}
//open the browser console to check results
console.log('add results: ', add(3, 2));

//don't change this line
if (typeof module !== 'undefine') {
    module.exports = add;
}