import { QuestionChoiceView } from "./QuestionChoiceView.js"
import { QuestionTextView } from "./QuestionTextView.js"

export class QuestionView{
    constructor(that, question){
        this.that = that
        const {number, text, choices, point} = question
        this.questionTextView = new QuestionTextView(number, text, point)
        this.questionChoiceView = new QuestionChoiceView(this, choices)
    }

    getQuestionView(){
        const $div = document.createElement('div')
        $div.classList.add('question')
        const $textView = this.questionTextView.getQuestionTextView()
        const $choiceView = this.questionChoiceView.getQuestionChoiceView()
        $div.appendChild($textView)
        $div.appendChild($choiceView)
        return $div
    }

    getSelectedChoice(){
        const questionNumber = this.questionTextView.number
        const selectedChoice = this.questionChoiceView.getSelectedChoice()
        return {questionNumber: questionNumber, selectedChoice: selectedChoice}
    }

    reportSelection(){
        this.that.reportSelection()
    }
}