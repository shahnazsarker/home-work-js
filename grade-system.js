/*grade Calculation with Function*/

function gradeCalculation(mark) {
    if (mark >= 80) {
        if (mark >= 90) {
            console.log("Congrats! you got Stars Marks", mark);

        }
        else {
            console.log("Congrats! you got A+", mark)
        }
    }
    else if (mark < 80 && mark >= 70) {
        console.log("You got an A!", mark);
    }
    else if (mark < 70 && mark >= 60) {
        console.log("Bravo you got A-", mark);
    }
    else if (mark < 60 && mark >= 50) {
        console.log("You got B!Keep Trying", mark);
    }
    else if (mark < 50 && mark >= 40) {
        console.log("You got C! Keep Trying", mark);

    }
    else if (mark < 40 && mark >= 33) {
        console.log("You've passed with a D! Try harder", mark);
    }
    else {
        console.log("You've got an F! Better luck next time", mark);
    }
    return mark;
}
var studentResult = gradeCalculation(90);
console.log("result is:", studentResult);