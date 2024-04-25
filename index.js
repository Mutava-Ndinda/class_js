a.
class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}
const toyota = new Car("Audi", "A3", 2003, true);
console.log(toyota.isAvailable);
toyota.toggleAvailability();
console.log(toyota.isAvailable);

//b.
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration() {
      const durationInMs = this.rentalEndDate - this.rentalStartDate;
      const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));
      return durationInDays;
    }
  }
  const audi = new Car("Audi", "Q7", 2004, true);
  const newaudi = new Rental(audi, "A6", new Date("2022-01-01"), new Date("2022-01-10"));
  console.log(newaudi.calculateRentalDuration());

  //c.
  const car = new Car("Audi", "A5", 2006, true);
console.log({car});
const rental = new Rental(car, "A7", new Date("2024-02-28"), new Date("2024-04-26"));
const rentalDuration = rental.calculateRentalDuration();
console.log(rentalDuration);

//2.
class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }

}
//b
class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
    addQuestion(question) {
      this.questions.push(question);
    }
    nextQuestion() {
      this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
    }
  }
  const question1 = new Question("Who iare the main characters in My Demon?", ["Jimin & Suga", "Song Kang & Kim-yoo jung", "Felix & Han"], "Song Kang & Kim-yoo jung");
const question2 = new Question("Which series did Cha-Eun-Woo act?", ["Love Alarm", "True Beauty", "King the Land" ], "True Beauty");
const myQuiz = new Quiz();
myQuiz.addQuestion(question1);
myQuiz.addQuestion(question2);
myQuiz.submitAnswer("Song Kang & Kim-yoo jung");
myQuiz.submitAnswer("Jimin");
myQuiz.nextQuestion();
myQuiz.submitAnswer("True Beauty");
console.log(`Your final score is: ${myQuiz.score}`);















