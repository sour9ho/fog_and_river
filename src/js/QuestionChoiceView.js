export class QuestionChoiceView{

    constructor(that, choices){
        this.that = that
        this.choiceList = this.makeChoiceButtonList(choices)
        this.selectedChoiceNumber = 0
    }

    getQuestionChoiceView(){
        const $div = document.createElement('div')
        $div.classList.add('question-choice')
        for(let choiceNumber in this.choiceList){
            const $choice = this.choiceList[choiceNumber]
            $div.appendChild($choice)
        }
        return $div
    }

    makeChoiceButtonList(choices){
        const choiceList = {}
        let i=1;
        for(let choice of choices){
            const $choiceView = this.makeChoiceButton(choice, i)
            choiceList[i] = $choiceView
            i++
        }
        return choiceList
    }

    makeChoiceButton(choice, choiceNumber){
        const $btn = document.createElement('button')
        $btn.classList.add('choice')
        $btn.innerText = choice
        $btn.onclick = () => {
            this.setSelectedChoice(choiceNumber)
        }
        return $btn
    }

    setSelectedChoice(choiceNumber){
        const selectedChoice = this.choiceList[choiceNumber]
        if (this.selectedChoiceNumber === 0){
            // if there is no selected choice
            this.selectedChoiceNumber = choiceNumber
            selectedChoice.classList.add('selected')
            this.reportSelection()
        } else if(this.selectedChoiceNumber === choiceNumber){
            // if selected one is selected again
            this.selectedChoiceNumber = 0
            selectedChoice.classList.remove('selected')
            this.reportSelection()
        } else{
            // if new one is selected
            const previousSelectedChoiceNumber = this.selectedChoiceNumber
            const previousSelectedChoice = this.choiceList[previousSelectedChoiceNumber]
            previousSelectedChoice.classList.remove('selected')
            this.selectedChoiceNumber = choiceNumber
            selectedChoice.classList.add('selected')
        }
    }

    getSelectedChoice(){
        return this.selectedChoiceNumber
    }

    reportSelection(){
        this.that.reportSelection()
    }
}