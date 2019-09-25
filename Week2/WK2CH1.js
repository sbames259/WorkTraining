const scores = []

function testScores(score1, score2, score3) {

    scores.push(score1, score2, score3);

    scores.sort(function(a, b){return b-a});

    return scores
}

console.log(testScores(94.5, 81.3, 98.9))
