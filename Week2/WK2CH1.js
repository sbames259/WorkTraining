//score1 = 81.3
//score2 = 94.5
//score3 = 98.9

const scores = []

function testScores(score1, score2, score3) {

    scores.push(score1, score2, score3)

    scores.sort(function(a, b){return b-a})

    return scores
}

const S = testScores(94.5, 81.3, 98.9)

console.log(S)