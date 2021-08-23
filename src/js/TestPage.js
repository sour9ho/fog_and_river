import { ExamPaper } from "./ExamPaper.js"
import { QuestionSetView } from "./QuestionSetView.js"
import { BottomNavigator } from "./BottomNavigator.js"


export class TestPage{
    constructor(that, title, questionData){
        this.that = that
        this.$title = this.makeTitle(title)

        this.examPaper = new ExamPaper(questionData)
        this.examPaper.printExamPaper()
        this.questionSet = this.examPaper.getQuestionSet()
        this.questionSetView = new QuestionSetView(this, this.questionSet)
        
        this.bottomNavigator = new BottomNavigator(this, "문제를 풀어주세요")
    }

    makeTitle(title){
        const $div = document.createElement('div')
        $div.classList.add('page-title')
        $div.innerText = title
        return $div
    }

    reportNumberOfNotSolved(notAnswered){
        let text = ""
        if(notAnswered === 0){
            text = "제출하기"
        } else{
            text = `${notAnswered} 문제 남았습니다`
        }
        this.bottomNavigator.updateButtonText(text)
    }

    getScore(answer){
        const totalPoint = this.examPaper.getPossiblePoint()
        const earnedPoint = this.examPaper.getEarnedPoint(answer)
        const text = `${earnedPoint}/${totalPoint}`
        return text
    }

    getPage(){
        const $div = document.createElement('div')
        $div.style.display = "none"
        $div.classList.add('test-page')
        $div.appendChild(this.$title)
        $div.appendChild(this.questionSetView.getQuestionSetView())
        $div.appendChild(this.bottomNavigator.getNav())
        return $div
    }

    reportButtonclick(){
        const notAnswered = this.questionSetView.getNumberOfNotSolved()
        if(notAnswered === 0){
            const answer = this.questionSetView.getAnswerFromQuestion()
            const score = this.getScore(answer)
            this.bottomNavigator.stopNavigator()
            this.that.reportEndOfTestPage(score)
        }
    }
}

