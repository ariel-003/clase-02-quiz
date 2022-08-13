export class Quiz {
    constructor () {
        this.questions = questions
        this.score = 0
        this.questionIndex = 0
    }

    getCurrentQuestion() {
        return this.questionIndex[this.questionIndex]
    }

    continue(answer) {
        if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++
        }   
        this.questionIndex++
    }

    isEndes() {
        return this.questions.length === this.questionIndex
    }

}
