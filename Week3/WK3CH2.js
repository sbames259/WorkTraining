const testGrade = [];

function scoreConversion(score) {
    if (score >= 101) {grade = 'Please provide a valid test score.'}
    else if (score >= 90) {grade = 'A'}
    else if (score >= 80) {grade = 'B'}
    else if (score >= 70) {grade = 'C'}
    else if (score >= 60) {grade = 'D'}
    else if (score >= 0) {grade = 'F'}
    else {grade = 'Please provide a valid test score.'};

    //console.log(grade);
}

function pushScore(score) {
    scoreConversion(score)
    
    testGrade.push(grade);

    testGrade.sort();

    testGrade.reverse();

    return '0-59 is an F, 60-69 is a D, 70-79 is a C, 80-89 is a B, 90-100 is an A \n' + testGrade;
   
}

pushScore(78);
pushScore(98);

pushScore(90);
pushScore(72);

pushScore(20);
pushScore(80);

pushScore(45);
pushScore(89);

console.log(pushScore(70))