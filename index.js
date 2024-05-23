// javascript
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let scoreHomeValue = 0
let scoreGuestValue = 0
function add1home(){
    scoreHomeValue += 1
    scoreHome.innerText = scoreHomeValue
}
function add2home(){
    scoreHomeValue += 2
    scoreHome.innerText = scoreHomeValue
}
function add3home(){
    scoreHomeValue += 3
    scoreHome.innerText = scoreHomeValue
}
function add1guest(){
   scoreGuestValue += 1
    scoreGuest.innerText = scoreGuestValue
}
function add2guest(){
   scoreGuestValue += 2
    scoreGuest.innerText = scoreGuestValue
}
function add3guest(){
   scoreGuestValue += 3
    scoreGuest.innerText = scoreGuestValue
}
function newGame(){
    scoreGuestValue = 0
    scoreGuest.innerText = scoreGuestValue
    scoreHomeValue = 0
    scoreHome.innerText = scoreHomeValue
}