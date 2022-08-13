export class Questions {
    constructor(text, choice, answer) {
        this.text = text
        this.choice = this.choice
        this.answer = this.answer
    }

    isCorrectAnswer(choice) {
        return choice === this.answer
    }
}