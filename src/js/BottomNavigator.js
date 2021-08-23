import { ScrollChecker } from "./ScrollChecker.js"

export class BottomNavigator{
    constructor(that, initialText){
        this.that = that

        this.$btn = this.makeButton()
        this.$nav = this.makeNav(this.$btn)
        this.setButtonText(initialText)

        this.scrollChecker = new ScrollChecker(this)
    }

    makeNav($btn){
        const $nav = document.createElement('div')
        $nav.classList.add('bottom-nav')
        $nav.appendChild($btn)
        return $nav
    }

    makeButton(){
        const $btn = document.createElement('button')
        $btn.classList.add('bottom-nav-button');
        $btn.onclick = () => {
            this.reportButtonclick()
        }
        return $btn
    }

    getNav(){
        return this.$nav
    }

    reportButtonclick(){
        this.that.reportButtonclick()
    }

    setButtonText(text){
        this.$btn.innerText = text
    }

    updateButtonText(text){
        this.setButtonText(text)
    }

    reportScroll(increase){
        if(increase === 1){
            this.$nav.classList.add('show')
        } else if(increase === -1){
            this.$nav.classList.remove('show')
        }
    }

    stopNavigator(){
        this.scrollChecker.turnOff()
    }
}