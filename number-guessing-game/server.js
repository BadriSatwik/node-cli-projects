import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 100) + 1;

let chances;
let attempts = 0;

console.log("Welcome to Number Guessing Game!");
console.log("Guess the number between 1 and 100.\n");

rl.question(
  "Select difficulty:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\nEnter choice: ",
  (level) => {
    if (level === "1") chances = 10;
    else if (level === "2") chances = 5;
    else if (level === "3") chances = 3;
    else {
      console.log("Invalid choice. Exiting...");
      rl.close();
      return;
    }

    console.log(`\nYou have ${chances} chances. Let's start!\n`);
    askGuess();
  }
);

function askGuess() {
  if (chances === 0) {
    console.log(`Game Over! The number was ${randomNumber}`);
    rl.close();
    return;
  }

  rl.question("Enter your guess: ", (input) => {
    const guess = Number(input);
    attempts++;
    chances--;

    if (guess === randomNumber) {
      console.log(
        `Correct! You guessed it in ${attempts} attempts.`
      );
      rl.close();
    } else if (guess > randomNumber) {
      console.log("Too high!");
      console.log(`Remaining chances: ${chances}\n`);
      askGuess();
    } else {
      console.log("Too low!");
      console.log(`Remaining chances: ${chances}\n`);
      askGuess();
    }
  });
}