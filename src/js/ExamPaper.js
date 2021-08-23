import {Question} from './Question.js'

export class ExamPaper{
    
    constructor(questionData){
        this.questionSet = this.setExamPaper(questionData)
    }

    setExamPaper(questionData){
        const questionSet = {}
        for(let qd of questionData){
            const question = new Question(qd)
            if (question.valid){
                const {number} = question
                questionSet[number] = question
            }
        }
        return questionSet
    }

    getQuestionSet(){
        let questionSet = {}
        for(let questionNumber in this.questionSet){
            const question = this.questionSet[questionNumber]
            questionSet[questionNumber] = question.getQuestion()
        }
        return questionSet
    }

    getPossiblePoint(){
        let points = 0
        for(let questionNumber in this.questionSet){
            const question = this.questionSet[questionNumber]
            points += question.getPossiblePoint()
        }
        return points
    }

    getEarnedPoint(selectedAnswers){
        let points = 0
        for(let questionNumber in this.questionSet){
            const question = this.questionSet[questionNumber]
            const selectedAnswer = selectedAnswers[questionNumber]
            points += question.getEarnedPoint(selectedAnswer)
        }
        return points
    }

    printExamPaper(){
        for(let questionNumber in this.questionSet){
            const question = this.questionSet[questionNumber]
        }
    }
}
