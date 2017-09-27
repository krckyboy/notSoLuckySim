
$(document).ready(function() {
    // Function that executes code after the whole webpage has finished loading

    // Create lottery ball random number generator and have it generate 7
    //random numbers - 6 for the lottery, and one "bonus ball".
    //The bonus ball will need to be stored in a seperate variable/arr I think

    // lotteryMath.rollLotto();
    // lotteryMath.luckyDip();
    // lotteryMath.findMatches();
    // lotteryMath.returnPayouts();
    lotteryMath.runSimulator(5);
    UIcontroller.consoleLogAllData();


});

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
    //call createLotteryRngNumber*6 and store to array
    this.camelot(strings.rollLotto, strings.lotteryResults);
    this.camelot(strings.rollBonus, strings.lotteryResults);
  },
  luckyDip: function(){
    this.camelot(strings.luckyDip, strings.playerNumbers);
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
    //create switch case conditional that rewards different amounts for matchCount
    //if matchCount > 1 alert user (via console)
    //add payouts to player budget
    switch(data.lotteryResults.matchCount){
        case 2:
            data.lotteryResults.payout = 1
            UIcontroller.consoleLogPayout();
            break;
        case 3:
            data.lotteryResults.payout = 25
            UIcontroller.consoleLogPayout();
            break;
        case 4:
            data.lotteryResults.payout = 100
            UIcontroller.consoleLogPayout();
            break;
        case 5:
          if(data.lotteryResults.bonusBallMatch = true){
            data.lotteryResults.payout = 50000
            UIcontroller.consoleLogPayout();
          } else {
            data.lotteryResults.payout = 1000
            UIcontroller.consoleLogPayout();
          };
            break;
        case 6:
            data.lotteryResults.payout = 2053984
            UIcontroller.consoleLogPayout();
            break;
        default:
            data.lotteryResults.payout = 0
    }
  },
  findMatches: function(){
    data.lotteryResults.lottoArr;
    data.lotteryResults.bonusBall;
    data.playerNumbers.lottoArr;
    data.playerNumbers.bonusBall;

    //cycle through lotteryResults.lottoArr comparing each index to to each playerNumber.lottoArr
    data.lotteryResults.lottoArr.forEach(function(){
      data.playerNumbers.lottoArr.forEach(function(){
        if(this.data.lotteryResults.lottoArr === this.data.playerNumbers.lottoArr){
          //if match = true add one to data.matchCount
          data.lotteryResults.matchCount++
        }
      });
    });

    //cycle through player numbers again and check for bonus ball matchCount
    data.playerNumbers.lottoArr.forEach(function(){
      if(this.data.lotteryResults.bonusBall === this.data.playerNumbers.lottoArr)
        data.lotteryResults.bonusBallMatch = true;
    });


  },
  runSimulator: function(num){
    debugger;
    for(var i = 0; i < num; i++){
      this.rollLotto();
      this.luckyDip();
      this.findMatches();
      this.returnPayouts();
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
  },
  lotteryResults: {
    lottoArr: [],
    bonusBall: 0,
    matchCount: 0,
    bonusBallMatch: false,
    payout: 0
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

  },
  consoleLogPayout: function(){
    console.log(data.lotteryResults.payout);
  }
}
