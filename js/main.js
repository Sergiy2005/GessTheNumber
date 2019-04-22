;(function(){

})();

function guessTheNumber() {
    let randomNumber = Math.floor(Math.random()*100 +1);
    checkNumber(randomNumber);
}

function checkNumber(randomNumber) {
    let userNumber = parseInt(prompt("Guess my Number!", 0));

    console.log(userNumber);

    if ( userNumber > randomNumber ) {
        alert("My number is less");
        checkNumber(randomNumber);
    } else  if ( userNumber < randomNumber ) {
        alert("My number is bigger");
        checkNumber(randomNumber);
    } else {
        alert("Your right, dude!!!");
    }
}