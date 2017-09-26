$(document).ready(function() {
    // Function that executes code after the whole webpage has finished loading

    // Create lottery ball random number generator and have it generate 7 
    //random numbers - 6 for the lottery, and one "bonus ball". 
    //The bonus ball will need to be stored in a seperate variable/arr I think

    createLotteryRngNumber();
    

});

// returns a random Number from 1 to 59
function createLotteryRngNumber() {
    var rngNum = Math.round(Math.random() * 59) + 1;
    return rngNum; //TODO: Test this if it's truly a number between 1 and 59
};