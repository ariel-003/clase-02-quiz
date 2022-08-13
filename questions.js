import { data } from './data.js'
import { Questions } from './models/Questions.js'


export const questionsArray = data.map(q => new Questions(q.question, q.choices, q.answerS))