import prompt from "prompt-sync";

class Quiz {
  constructor({ id, question, answers, right }) {
    this.id = id;
    this.question = question;
    this.answers = answers; // array of object [ {option : ""}, {option : ""}]
    this.right = right;
  }

  // callback 3..2..1.. start
  start() {
    setTimeout(function () {
      console.log("Quiz is starting...");
      setTimeout(function () {
        console.log(3);
        setTimeout(function () {
          console.log(2);
          setTimeout(function () {
            console.log(1);
            setTimeout(function () {
              console.log("Start!");
              question1.showQuestion();
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 500);
  }

  restart() {
    i = 0;
    score = 0;
    this.start();
  }

  showQuestion() {
    if (i < questionArray.length) {
      console.log(
        ` ********************************************

        Frage : ${i + 1}   ${questionArray[i].question} 

        a: ${questionArray[i].answers["a"]} b : ${
          questionArray[i].answers["b"]
        } c : ${questionArray[i].answers["c"]} d : ${
          questionArray[i].answers["d"]
        }`
      );
      i++;

      this.selectAnswer();
    } else {
      console.log("Quiz Over!");
      // this.showEnd();
    }
  }

  selectAnswer() {
    const promptSync = prompt();
    const giveANumber = promptSync("Which one is right?");

    const num = giveANumber;
    let answer;

    if (num == questionArray[i - 1].right) {
      score++;
      console.log(`Wonderful! Your are right! Your score : ${score}`);
    } else {
      console.log(`You are wrong! Your score : ${score}`);
    }

    setTimeout( ()=> {
      if (i === questionArray.length) {
            reset();
          } else {
            this.next();
          }
    },1000)


    

    function reset() {
      const giveAnswer = promptSync(
        "Play again? yes (play again) / no (finished)"
      );
      answer = giveAnswer;

      if (answer.toLowerCase() === "yes") {
        question1.restart();
      } else if (answer.toLowerCase() === "no") {
        console.log("See you next time!");
      }
    }
  }

  next() {
    this.showQuestion();
  }

  // prev() {
  //   if (i > 1) {
  //     console.log(questionArray[i - 2].question);
  //     i--;
  //   } else if (i === 0) {
  //     console.log(questionArray[i - 1].question);
  //   } else {
  //     console.log("You cannot go back to the previous question.");
  //   }
  // }

  // totalScore() {
  //   console.log(`Total score : ${score}`);
  // }

  // showEnd() {
  //   if (i === questionArray.length) {
  //     console.log(`Do you want to play again or quit?   Y / n`);
  //   }
  // }
}

const questions = [
  {
    id: 1,
    question: "Wie viele Zeitzonen gibt es in Russland?",
    answers: { a: 10, b: 11, c: 12, d: 16 },
    right: "b",
  },
  {
    id: 2,
    question: "Wie viele Streifen sind auf der US-Flagge?",
    answers: { a: 13, b: 10, c: 8, d: 7 },
    right: "a",
  },
  {
    id: 3,
    question: "Welches der folgenden Reiche hatte keine Schriftsprache?",
    answers: { a: "Inka", b: "Azteken", c: "Ägypter", d: "Römer" },
    right: "a",
  },
  {
    id: 4,
    question: "Welches Land hat die meisten Inseln in der Welt?",
    answers: {
      a: "Niederlande",
      b: "Indonesien",
      c: "Schweden",
      d: "Seychellen",
    },
    right: "c",
  },
  {
    id: 5,
    question: "Welche Sprache hat die meisten Wörter?",
    answers: { a: "Bengalisch", b: "Hindi", c: "English", d: "Chinesisch" },
    right: "c",
  },
  {
    id: 6,
    question: "Wann wurde die Londoner U-Bahn eröffnet?",
    answers: { a: 1863, b: 1876, c: 1903, d: 1905 },
    right: "a",
  },
  {
    id: 7,
    question: "Wann wurde die erste Ausgabe der Vogue veröffentlicht?",
    answers: { a: 1892, b: 1960, c: 1976, d: 2000 },
    right: "a",
  },
  {
    id: 8,
    question: "Aus welcher Stadt kommen die Beatles?",
    answers: { a: "London", b: "Manchester", c: "Leeds", d: "Liverpool" },
    right: "d",
  },
  {
    id: 9,
    question: "Wie viele Tasten hat ein klassisches Klavier?",
    answers: { a: 68, b: 72, c: 82, d: 88 },
    right: "d",
  },
  {
    id: 10,
    question: "Welcher ist der längste Fluss der Welt?",
    answers: { a: "Nil", b: "Amazonas", c: "Jangtsekiang", d: "Mississippi" },
    right: "a",
  },
];

const question1 = new Quiz(questions[0]);
const question2 = new Quiz(questions[1]);
const question3 = new Quiz(questions[2]);
const question4 = new Quiz(questions[3]);
const question5 = new Quiz(questions[4]);
const question6 = new Quiz(questions[5]);
const question7 = new Quiz(questions[6]);
const question8 = new Quiz(questions[7]);
const question9 = new Quiz(questions[8]);
const question10 = new Quiz(questions[9]);

const questionArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];
let i = 0;
let score = 0;

<<<<<<< HEAD
//question1.start();
question1.showQuestion();
question1.selectAnswer("a");
question1.next();
question1.selectAnswer("a");
question1.next();
question1.selectAnswer("a");
// question1.next();
// question1.selectAnswer("c");
// question1.next();
// question1.selectAnswer("c");
// question1.next();
// question1.selectAnswer("c");
// question1.selectAnswer("a");
// question1.next();
// question1.selectAnswer("c");
// question1.next();
// question1.selectAnswer("c");
// question1.next();
// question1.selectAnswer("c");
// question1.next();
// question1.selectAnswer("c");
// question1.next();
=======
question1.start();
>>>>>>> selectAnswer
