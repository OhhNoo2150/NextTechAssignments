// TODO: decalre a const names lacroix1 and initialized it to the value 'grapefruit'

function testBestFlavor() {
    // TODO: declare a const names lacroix2 and initialized it to the value 'orange'
    
    const lacroix1 = "gragefruit"
    const lacroix2 = "orange"
    return 'Ana says, lacroix ' + lacroix2 + 'is a better flavor than lacroix ' + lacroix1;
}

//check results in the console browser
console.log('results: ', testBestFlavor());

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = testBestFlavor;
}