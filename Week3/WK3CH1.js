function Drinking(age) {
    let drink = age >= 21
        ? 'This person may drink.'
        : 'This person may not drink';

    return drink;
}

console.log(Drinking(30))