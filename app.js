// NOTE: renamed app.js to fit node conventions
// NOTE: moved to root folder

// $(document).ready(function() {
//     // Function that executes code after the whole webpage has finished loading
//
//     // Create lottery ball random number generator and have it generate 7
//     //random numbers - 6 for the lottery, and one "bonus ball".
//     //The bonus ball will need to be stored in a seperate variable/arr I think
//
//     lotteryMath.rollLotto();
//     lotteryMath.luckyDip();
//     UIcontroller.consoleLogAllData();
//
// });


//=============================================================================
//App global variables
var strings = {
  rollLotto: 'rollLotto',
  rollBonus: 'rollBonus',
  luckyDip: 'luckyDip',
  lotteryResults: 'lotteryResults',
  playerNumbers: 'playerNumbers'
}

//=============================================================================
//The Brain
var lotteryMath = {
  createLotteryRngNumber: function(){
    // returns a random Number from 1 to 59
  var rngNum = Math.round(Math.random() * 59) + 1;
  return rngNum;
  },
  rollLotto: function(){
    debugger;
    //call createLotteryRngNumber*6 and store to array
    this.camelot(strings.rollLotto, strings.lotteryResults);
    this.camelot(strings.rollBonus, strings.lotteryResults);
    budgetMath.placeBet(1);
  },
  luckyDip: function(){
    this.camelot(strings.luckyDip, strings.playerNumbers);
    this.camelot(strings.rollBonus, strings.playerNumbers);
    budgetMath.placeBet(1);
  },
  camelot: function(type, storage){ //NOTE: 'camelot' is the name of a famous lottery machine
    var storage = storage;
    if(type === 'rollLotto'){
      for (i = 0; i < 6; i++){
        data[storage].lottoArr.push(this.createLotteryRngNumber())
      };
    } else if (type === 'luckyDip'){
      for (i = 0; i < 6; i++){
        data[storage].lottoArr.push(this.createLotteryRngNumber())
      };
    } else {
      data[storage].bonusBall = this.createLotteryRngNumber();
    }
  },
  returnPayouts: function(){

  },
  findMatches: function(){

  },
  runSimulator: function(num){
    for(i = 0; i < num; i++){
      this.rollLotto();
      this.rollBonus();

    }

  }
}

//=============================================================================
//Controls Budget calculations
var budgetMath = {
  placeBet: function(bet){
    data.playerBudget -= bet;
  }

}

//=============================================================================
//Stores simulator data
var data = {
  playerNumbers: {
    lottoArr: [],
    bonusBall: 0
  },
  lotteryResults: {
    lottoArr: [],
    bonusBall: 0
  },
  playerBudget: 100
}

//=============================================================================
//Handles UI control
var UIcontroller = {
  consoleLogAllData: function(){
    console.log(data)
  },
  getPlayerNumbers: function(){

  }
}

lotteryMath.rollLotto();
lotteryMath.luckyDip();
UIcontroller.consoleLogAllData();
