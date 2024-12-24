var person = 
{
    firstName: "John",
    lastName: "Doe",
    child: 
    [
        { firstName: "Jack", age: 20,gender:"M" },
        { firstName: "Lilly", age: 7,gender:"F" },
        { firstName: "MEEN", age:19,gender:"M" }
    ]
};


console.log(person.child[2].firstName);
console.log(person.child[2].gender);

/*
var childName2 = person.child[1].firstName;
console.log(childName2);

console.log(person.child);

console.log(person.child[3]);
*/
