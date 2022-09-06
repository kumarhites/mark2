const readline = require("readline-sync");
const chalk = require('chalk');
const log = console.log.bind(console);

const userName = readline.question(chalk.blue.bold("Enter you nickname!\n"));
log(chalk.blue.bold(`\nHey ${userName}, how about a quiz on OCEAN?`));

let score = 0;

//data of high score
let highScores = [
  {
    name: "Hitesh",
    score: 3
  },
]

let questions = [
  {
    question: "Turtles shells are made of how many bones fused together?\n",
    options: ["a: over 500", "b: over 50", "c: exactly 30", "d: under 20"],
    answer: "b"
  },
  {
    question: "A whale shark is the largest fish in the world. They are around the same size as...\n",
    options: ["a: A school bus", "b: A train", "c: A car", "d: A bicycle"],
    answer: "a"
  },
  {
    question: "What’s the largest species of dolphin?\n",
    options: ["a: Shark", "b: Sperm whale", "c: Orca", "d: Clown fish"],
    answer: "c"
  },
  {
    question: "Female hawksbill turtles make funny sounds when nesting, which can sound like\n",
    options: ["a: A siren", "b: A blech", "c: A Bark", "d: Crying"],
    answer: "b"
  },
  {
    question: "Which of these is not a species of turtle?\n",
    options: ["a: Loggerhead", "b: Olive Ridley", "c: Green Shell", "d: Hawksbill"],
    answer: "c"
  },
  {
    question: "How many species of marine turtles are there?\n",
    options: ["a: 7", "b: 6", "c: 5", "d: 4"],
    answer: "a"
  },
  {
    question: "How many species of shark are there?\n",
    options: ["a: over 50", "b: over 300", "c: over 500", "d: over 1000"],
    answer: "c"
  },
  {
    question: "Narwhals are known as the unicorn of the sea – what is their tusk made from?\n",
    options: ["a: Unicorn dust", "b: An overgrown canine", "c: Hardend skin", "d: No one Knows"],
    answer: "b"
  },
  {
    question: "The heart of a shrimp is located on its\n",
    options: ["a: Tail", "b: Head", "c: Bottom", "d: Stomach"],
    answer: "b"
  },
  {
    question: "How many hearts does an octopus has?\n",
    options: ["a: 3", "b: 5", "c: 1", "d: 9"],
    answer: "a"
  },
]
// WELCOME
function welcome() {
  log(chalk.redBright.bold("\n!!RULES!!\n"));
  log(chalk.greenBright.bold("So here are the rules of the game:\n1. There are only 3 questions.\n2. You have to answer all correctly.\nALL THE BEST!\nLet's begin!!\n----------------------------"));
  readline.keyInPause(chalk.gray('\nPress any key to start the game...'));
  game();
}
// GAME
function game() {
  for (let i = 0; i < questions.length; i++) {
    log(chalk.bold("---------------------------"));
    console.log(chalk.cyanBright(`Q${i + 1}: `, questions[i].question, "\n"));
    questions[i].options.forEach(option => {
      log(chalk.yellowBright.bold(option));
    })
    const answer = readline.question(chalk.whiteBright.bold("\nYour answer: "), {
      limit: ["a", "b", "c", "d"],
      caseSensitive: false
    });
    checkAnswer(i, answer);
  }
}
// CHECK ANSWER
function checkAnswer(currentQuestion, answer) {
  if (answer.toLowerCase() === questions[currentQuestion].answer) {
    log(chalk.greenBright('Correct!'));
    score++;
  }
  else {
    log(chalk.redBright("Incorrect!"));
  }
  log(chalk.green.bold(`Your score is ${score}`));

}
function result() {
  if (score === 3) {
    log(chalk.green.bold('\nCongratulations! You have passed the quiz! 🥳'));
    log(chalk.green.bold('You have scored a total of 3/3'));
  }
  else if (score >= 2) {
    log(chalk.green.bold('\nCongratulations! You have passed the quiz! 🥳'));
    log(chalk.green.bold(`You have scored a total of ${score}/${questions.length}`));
  } else if (score >= 1) {
    log(chalk.green.bold(`\nYou have scored a total of ${score}/${questions.length}`));
  } else {
    log(chalk.red.bold(`\nBetter luck next time 💪`));
    log(chalk.red.bold(`\nYou have scored a total of ${score}/${questions.length}`));
  }
}
welcome();
result();