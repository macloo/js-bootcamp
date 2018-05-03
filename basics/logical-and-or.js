// section 3 lecture 17
// I like how he introduced if-statements with true/false, using
// === , < , > , etc. and
// saving and/or for later (now)

let temp = 65

if (temp >= 60 && temp <= 90) {
    console.log("It's nice outside!")
}

if (temp < 0 || temp > 100) {
    console.log("Do not go outside!")
}

// challenge: write if, if else, else to account for:
// two, one, or no vegan diners at a restaurant
// I'm adding not (!) - he didn't
let vegan = true
let guestOne = vegan
let guestTwo = !vegan
if (guestOne && guestTwo) {
    console.log("Only vegan food for this couple.")
} else if (guestOne || guestTwo) {
    console.log("Bring one vegan menu and one regular menu.")
} else {
    console.log("No vegans here.")
}
