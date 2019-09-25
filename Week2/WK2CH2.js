

function personCreate(fname, lname, eyeColor, hairColor, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    this.age = age;
}

const person1 = new personCreate("Sam", "Ames", "Brown", "Brown", 22);

console.log(person1);

function attributeAdd(favColor) {
    this.favoriteColor = favColor;
}

attributeAdd.call(person1, 'red');

console.log(person1)