const testGrade = [];

sorter = mySort('P+ABCDF-'); This was to specify sort order, but it didn't work like I wanted.


 This function's purpose was to take the values specified in sorter and put + grades before and - grades after.
 function mySort(alphabet) {
    return function(a, b) {
        var index_a = alphabet.indexOf(a[0]),
        index_b = alphabet.indexOf(b[0]);
        if (index_a === index_b) {
        if (a < b) {return -1;}
        else if (a > b) {return 1;}
        return 0;}
        else {return index_a - index_b;};
    }
}



 This was meant to be a more advanced grading scale, but I couldn't find a way to correctly sort the grades.
function scoreConversion(score) {
    if (score >= 101) {grade = 'Please provide a valid test score.'}
    else if (score == 100) {grade = 'A+'}
    else if (score >= 93) {grade = 'A'}
    else if (score >= 90) {grade = 'A-'}
    else if (score >= 87) {grade = 'B+'}
    else if (score >= 83) {grade = 'B'}
    else if (score >= 80) {grade = 'B-'}
    else if (score >= 77) {grade = 'C+'}
    else if (score >= 73) {grade = 'C'}
    else if (score >= 70) {grade = 'C-'}
    else if (score >= 67) {grade = 'D+'}
    else if (score >= 65) {grade = 'D'}
    else if (score >= 0) {grade = 'F'}
    else {grade = 'Please provide a valid test score.'};

    //console.log(grade);
}


function testArray(score) {
    scoreConversion(score)
    
    testGrade.push(grade);

    testGrade.sort();

    testGrade.reverse();
}

testArray(91);

testArray(100);

testArray(-5);

testArray(101);

testArray(-20);

testArray(99);

testArray(78);

console.log(testGrade);