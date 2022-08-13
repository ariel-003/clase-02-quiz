import { questionsArray } from "./questions.js"
import { Quiz } from "./models/Quiz.js"
import { UI } from "./models/Ul.js"

const renderPage = (quiz, ui) => {
    ui.showQuestion(quiz.getCurrentQuestion().text)
    ui.showChoices(quiz.getCurrentQuestion().choices, (currentChoice) => {
        quiz.valodateAndContinue(currentChoice)
        renderPage(quiz,ui)
    })
}


const main = () => {
    const quiz = new Quiz(questionsArray)
    const ui = new UI()
    renderPage(quiz, ui)
   
   
}

main()

 