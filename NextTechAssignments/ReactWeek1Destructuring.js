// Section 1: Array Destructuring

const books = ["fiction", ["horror", "literary"], "science"];
const [fiction, [horror, literary], science] = books;

console.log(fiction);
console.log(horror);
console.log(literary);
console.log(science);

// TODO: Use destructuring to create the variables fiction horror literary and science

////

// Section 2: Object Destructuring
const Student = {
    firstName: 'Joe',
    university: 'MIT',
    studentInfo: {
        studentid: 555,
    },
};

const {
    firstName,
    university,
    studentInfo: { studentid },
} = Student;
// TODO: Use destructuring to create the variables firstName university and studentid

////

//don't change this line
if (typeof module !== "undefined") {
    module.exports = {
        fiction,
        horror,
        literary,
        science,
        firstName,
        university,
        studentid,
    };
}