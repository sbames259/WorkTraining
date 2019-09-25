

function personCreate(fname, lname, eyeColor, hairColor, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    this.age = age;
}

const person1 = new personCreate("Sam", "Ames", "Brown", "Brown", 22);

console.log(person1);











/*
const person2 = new personCreate("Olivia", "Aguillon", "Brown", "Brown", 21);
const person3 = new personCreate("Rayna", "Ames", "Hazel", "Brown", 21);

const people =[person1, person2, person3];

console.log(people)
*/