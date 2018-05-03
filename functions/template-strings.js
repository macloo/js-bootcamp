let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

let getScoreText = function (name = 'Anonymous', score = 0) {
    // here are the template string - NOTE that statement MUST be
    // enclosed in back ticks!
    // also NOTE the dollar signs 
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    // here are the template string - NOTE that statement MUST be
    // enclosed in back ticks!
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(60)
console.log(tip)
