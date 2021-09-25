var readlineSync = require('readline-sync');
const chalk = require ("chalk");

//High scorers
var highScores = [
  {
    name : "Sankar",
    points : 3
  },
  {
    name : "Krishnan",
    points : 2
  }
];

var questions = [];

//The yes or no queation and answer bank
var yesOrNoQuestions = [
  {
    question : "Is my native place TamilNadu?",
    answer : "Y",
  },
  {
    question : "Am I a Marvel fan?",
    answer : "Y",
  },
  {
    question : "Am I older than 25 years?",
    answer : "N",
  },
  {
    question : "Do I like Non-Veg?",
    answer : "N",
  },
  {
    question : "Do I like to travel?",
    answer : "Y",
  }
]

//The mcq queation and answer bank
var mcqQuestions = [
  {
    question : "Where do I live?\n1.TamilNadu\n2.Karnataka\n3.Kerala\n\n",
    answer : "1",
  },
  {
    question : "My favourite?\n1.Marvel\n2.DC\n\n",
    answer : "1",
  },
  {
    question : "Which game is my favourite?\n1.Cricket\n2.Football\n3.Tennis\n\n",
    answer : "1"
  },
  {
    question : "My favourite IPL team?\n1.MI\n2.CSK\n3.RCB\n\n",
    answer : "2"
  },
  {
    question : "My favourite cricketer?\n1.Rohit\n2.Kohli\n3.Dhoni\n\n",
    answer : "3"
  }
]

//game logic
var score = 0;

function game(question,answer){
  var userAnswer=readlineSync.question(chalk.blue(question));

  if(userAnswer.toLowerCase()==answer.toLowerCase()){
    console.log(chalk.bold.green("Right!"));
    score++;
  }else{
    console.log(chalk.bold.red("Wrong!"));
  }
  
//display the current score
  console.log("Current Score : "+score);
  console.log("--------------\n");
}

//calling the game logic
function play(){
  console.log("Level 1\n");

  for (var i=0; i<questions.length; i++){

    if(i==2){
      if(score==2){
        console.log("YAY! You have cleared Level 1. Proceeding to Level 2\n");
      }
      else{
        console.log("\nOops! You did not clear Level 1. Better luck next time!")
        break;
      }
    }
    game(questions[i].question,questions[i].answer);
    
  }

  //display final scores
  if(score>0){
    console.log("\nYAY! You scored "+score +"\n\nCheck out the high scores!");

    //display the high scorers
    highScores.map(score => console.log(chalk.blue(score.name)," : ",score.points));

    highScoreCheck();
  }
  else{
    console.log("You scored 0.Better luck next time!")
  }
}

function highScoreCheck(){

  var firstScore=3;
  var secondScore=2;
  if((score>=firstScore) || (score>=secondScore)){
    console.log("\nWow! You have cracked a high score. Send a screenshot and I will update it.")
  }

   if (score>=4){
    console.log("You scored more than 3. So you do know me well!")
  }
}

//greet,get the player name, decide game type
function welcome(){
  userName = readlineSync.question(chalk.blue("Hello there! Welcome to the quiz\n 'How well do you know me'\nPlease provide your name.\n\n"));

  console.log("\nHello "+userName+"! \n\nGood luck for the game and let's see if you make it to the the top scorers list\n\nNote:There will be two levels and 2 questions for level 1 and 3 questions for level 2\n");

  var gameType = readlineSync.question(chalk.green("Choose your game \n 1.Y/N type questions (press 1) \n 2.Multiple choice (press 2)\n\n"));

 if(gameType=='1'){
    questions = yesOrNoQuestions.slice();
    console.log("\nHere you go! Give your answer as y or n and press enter.\n");
    play();
   }
   else if(gameType=='2'){
    questions = mcqQuestions.slice();
    console.log("\nHere you go! Give your answer as 1, 2 or 3 according to the options and press enter.\n");
    play();
   }
   else{
     console.log("You did not press 1 or 2. Please restart the game if you want to play again.");
   }
}

function thankYou(){
    console.log("\n---Thank you for playing the game "+userName+"!---");
  }


welcome();
thankYou();