export class QuestionTextView{
    constructor(number, text, point){
        this.number = number
        this.text = text
        this.point = point
    }

    getQuestionTextView(){
        const $div = document.createElement('div')
        $div.classList.add('question-text')
        $div.innerText = `Q${this.number}. ${this.text} (${this.point}점)`
        return $div
    }
}