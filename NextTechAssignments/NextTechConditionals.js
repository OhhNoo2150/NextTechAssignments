/* 
instructions

Create a conditional that checks if you're old enough to vote. 
- isOldEnoughToVote(age)
- response will store true or false values

*/
let response;

// add your code here
function isOldEnoughToVote(age) {
    if (age >= 18) response = true;
    else response = false;
    //return true or false based on the age

    return response;
}
//open the browser console to check results
console.log('results: ', isOldEnoughToVote(18));
// Don't edit the code below here
if (typeof module !== 'undefined') {
    module.exports = isOldEnoughToVote;
}