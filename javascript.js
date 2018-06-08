var exerciseOne = function(){

  var numAsk = "Enter a Number"

  var facPrompt = parseInt(prompt(numAsk));

  var retNum = 0;

  for(var i = facPrompt; i > 0; i--){
    retNum = i + retNum;
  }

console.log(retNum);

};

var exerciseTwo = function(){

  var playAsk = "\'Do you want to play?\'";

  var str = "";

  var playPrompt = prompt(playAsk);

  var againAsk = "\'Do you want to play again?\'"

  do{

    var enter = "Enter a word.";

    if(playPrompt.toUpperCase().trim() === 'YES'){

      var entPrompt = prompt(enter);

      str = str + " " + entPrompt;

      console.log("\'" + str + "\'");

      playPrompt = prompt(againAsk);

    }
}
  while(playPrompt.toUpperCase().trim() === 'YES');


}

var exerciseThree = function(){

  var nameAsk = "What is your name?";

  var name = prompt(nameAsk);

  var playAsk = "Would you like to print your name?";

  var playPrompt = prompt(playAsk);

  var againAsk = "Would you like to print this again?";

  var exclam = "";

  while(playPrompt.toUpperCase().trim() === 'YES'){

    var output = "\'Hello. My name is " + name + exclam + "\'";

    console.log(output);

    exclam = exclam + "!";

    playPrompt = prompt(againAsk);

  }

}

var exerciseFour = function(){

  var timeAsk = "\'What time of day is it?";

  var timePrompt = prompt(timeAsk);

  var output = "";

  switch(timePrompt.toUpperCase()){

    case "MORNING":

      output = "\'Since it is morning, you should be eating breakfast. We suggest eggs and toast.\'";

      console.log(output);

      break;

    case "NOON":

      output = "\'Since it is noon, you should be eating lunch. We suggest a salad.\'";

      console.log(output);

      break;

    case "EVENING":

      output = "\'Since it is evening, you should be eating dinner. We suggest chicken and rice.\'";

      console.log(output);

      break;

    default:

      output = "\'Please enter either morning, noon, or evening.\'"

      console.log(output)

      exerciseFour();

      break;
  }

}

exerciseOne();

exerciseTwo();

exerciseThree();

exerciseFour();