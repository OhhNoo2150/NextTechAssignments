var animal = 'dog';

function myPet(){
    // you should not need to modify this function
    return animal;
}

function yourPet(){
    //the expectation for this function is to return `animal` just like the previous function
    //however, you cannot simply modify the existing variable declared in the global scope
    // note: writing return 'cat' below will not work
    ////////////////////////
    let animal = 'cat';

    ///////////////////////
    return animal;
}

// Open your browser console to check the results
console.log('myPet result: ' + myPet());
console.log('yourPet result:' + yourPet());

// Don't change this line
module.exports = { myPet: myPet, yourPet: yourPet };