// challenge
// good practice with template strings in message

function calculateGrade(studentScore, totalPossibleScore) {
    let result = studentScore / totalPossibleScore * 100;
    let letter = null;
    if (result >= 90) {
        letter = "A";
    } else if (result >= 80) {
        letter = "B";
    } else if (result >= 70) {
        letter = "C";
    } else if (result >= 60) {
        letter = "D";
    } else {
        letter = "F";
    }
    let message = `${studentScore}/${totalPossibleScore} -> You got a ${letter} (${result}%)`;
    return message;
}
console.log( calculateGrade(15, 20) )
console.log( calculateGrade(62, 100) )
console.log( calculateGrade(59, 100) )
console.log( calculateGrade(21, 25) )
