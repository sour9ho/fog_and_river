import { QuestionView } from "./QuestionView.js"

export class QuestionSetView{

    constructor(that, questionSet){
        this.that = that
        this.questionViewList = this.makeQuestionViewList(questionSet)
        this.notAnswered = this.questionViewList.length
    }

    makeQuestionViewList(questionSet){
        const questionViewList = []
        for(let questionNumber in questionSet){
            const question = questionSet[questionNumber]
            const questionView = new QuestionView(this, question)
            questionViewList.push(questionView)
        }
        return questionViewList
    }

    getQuestionSetView(){
        const $questionSetView = document.createElement('div')
        $questionSetView.classList.add('question-set')
        for(let questionView of this.questionViewList){
            const $questionView = questionView.getQuestionView()
            $questionSetView.appendChild($questionView)
        }
        return $questionSetView
    }

    getAnswerFromQuestion(){
        const selectedChoices = {}
        for(let questionView of this.questionViewList){
            const {questionNumber, selectedChoice} = questionView.getSelectedChoice()
            selectedChoices[questionNumber] = selectedChoice
        }
        return selectedChoices
    }

    getNumberOfNotSolved(){
        let notAnswered = 0
        for(let questionView of this.questionViewList){
            const {questionNumber, selectedChoice} = questionView.getSelectedChoice()
            if (selectedChoice === 0){
                notAnswered++
            }
        }
        return notAnswered
    }

    reportNumberOfNotSolved(){
        const notAnswered = this.getNumberOfNotSolved()
        this.notAnswered = notAnswered
        this.that.reportNumberOfNotSolved(notAnswered)
    }

    reportSelection(){
        this.reportNumberOfNotSolved()
    }
}