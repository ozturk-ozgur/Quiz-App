import prompt from "prompt-sync";

function Game() {
  const promptSync = prompt();
  const giveANumber = promptSync("What's your number? (4 caracthers)");

  const num = giveANumber;
  let answer;

  if (num.toString().length > 3) {
    reset();
  }

  function reset() {
    const giveAnswer = promptSync(
      "play again? yes (play again) / no (finished)"
    );
    answer = giveAnswer;

    if (answer.toLowerCase() === "yes") {
      Game();
    } else if (answer.toLowerCase() === "no") {
      console.log("See you next time");
    }
  }
}

Game();