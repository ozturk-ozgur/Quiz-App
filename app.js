class Quiz {
  constructor(id, question, answers, right) {
    this.id = id;
    this.question = question;
    this.answers = answers; // array of object [ {option : ""}, {option : ""}]
    this.right = right;
  }

  start() {
    //callback 3..2..1.. start
  }

  showNextQuestion() {}

  selectAnswer() {
    // evaluate answer
    
  }

  next() {}

  prev() {}

  totalScore() {}

  timer() {
    // Am Ende wird QuizTime angezeigt
  }

  showEnd() {
    // result -> You scored ... totalScore , Congratulations! Button Try agaein
  }

  restart() {}
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
];
