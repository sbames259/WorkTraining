function M(Num1, Num2, OP) {
    if (OP == '+') {return Num1 + Num2}
    else if (OP == '-') {return Num1 - Num2}
    else if (OP == '*') {return Num1 * Num2}
    else if (OP == '/') {return Num1 / Num2}
    else { return 'Please provide a valid operator.'}
};

const D = M(5, 3, '+');    //equation

console.log(D);