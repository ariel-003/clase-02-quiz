import { data } from './data.js'
import { Questions } from './models/Questions.js'


const questionsArray = data.map(q => new Questions(q.question, q.choices, q.answerS))

const questions = new Questions (data[0].question, data[0].choices, data[0].answer)
const result = questions.isCorrectAnswer('High Level Languages')

console.log(questionsArray)

 