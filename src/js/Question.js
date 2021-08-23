export class Question{
    
    constructor(questionContent){
        const {number, text, choices, answer, point} = questionContent
        this.valid = true
        if (number && (number > 0) && text && choices && answer && point && (point > 0)) {
            this.number = number
            this.text = text
            this.choices = this.shuffleArray(choices)
            this.answer = this.getNumberOfAnswer(this.choices, answer)
            this.point = point
        } else{
            this.valid = false
        }
        
    }

    shuffleArray(array){
        return array.sort(() => Math.random() - 0.5);
    }

    getNumberOfAnswer(choices, answer){
        let numberOfAnswer = 0
        const numberOfChoices = choices.length
        for(let i=0; i<numberOfChoices; i++){
            if(choices[i] === answer){
                // the number of answer is index + 1: normal numbering
                numberOfAnswer = i+1
                break
            }
        }
        return numberOfAnswer;
    }

    getQuestion(){
        return {
            number: this.number,
            text: this.text,
            choices: this.choices,
            point: this.point
        }
    }

    getPossiblePoint(){
        return this.point
    }

    getEarnedPoint(selectedAnswer){
        let point = 0
        if(this.answer === selectedAnswer){
            point = this.point
        }
        return point
    }
}