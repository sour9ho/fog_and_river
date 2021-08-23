import { TestPage } from "./TestPage.js"
import { WelcomePage } from "./WelcomePage.js"
import { ResultPage } from "./ResultPage.js"

export class PageTurner{
    constructor($body, data){
        this.data = data
        this.welcomePage = new WelcomePage(this, data["Description"], data["Info"])
        this.testPage = new TestPage(this, data["Title"], data["Question"])

        this.$welcomePage = this.welcomePage.getPage()
        this.$testPage = this.testPage.getPage()

        this.$body = $body
        this.$body.appendChild(this.$welcomePage)
        this.$body.appendChild(this.$testPage)
        

        this.showPage(this.$welcomePage)
    }

    showPage($page){
        $page.style.display = "block"
    }

    hidePage($page){
        $page.style.display = "none"
    }

    reportEndOfWelcomePage(){
        this.hidePage(this.$welcomePage)
        this.showPage(this.$testPage)
    }

    reportEndOfTestPage(score){
        this.hidePage(this.$testPage)
        console.log(score)

        this.resultPage = new ResultPage(score, this.data["Description"], this.data["Result"])
        this.$resultPage = this.resultPage.getPage()
        this.showPage(this.$resultPage)
        this.$body.appendChild(this.$resultPage)
    }
}