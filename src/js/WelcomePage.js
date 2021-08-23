export class WelcomePage{
    constructor(that, title, info){
        this.that = that
        this.$coverTitle = this.makeCoverTitle(title)
        this.$infoList = this.makeInfoList(info)
        this.$applyButton = this.makeApplyButton()
    }

    getPage(){
        const $div = document.createElement('div')
        $div.style.display = "none"
        $div.classList.add('welcome-page')

        const $cover = document.createElement('div')
        $cover.classList.add('exam-cover')
        $cover.appendChild(this.$coverTitle)
        $cover.appendChild(this.$infoList)

        $div.appendChild($cover)
        $div.appendChild(this.$applyButton)
        return $div
    }

    makeCoverTitle(title){
        const $div = document.createElement('div')
        $div.classList.add('cover-title')
        let text = ""
        for(let t of title){
            text += t
            text += "\n"
        }        
        $div.innerText = text
        return $div
    }

    makeInfoList(info){
        const $div = document.createElement('div')
        $div.classList.add('info')
        for(let i of info){
            const $li = document.createElement('li')
            const text = "- " + i
            $li.innerText = text
            $div.appendChild($li)
        }
        return $div
    }

    makeApplyButton(){
        const $btn = document.createElement('button')
        $btn.classList.add('apply-button')
        $btn.innerText = "응시하기"

        $btn.onclick = () => {
            this.reportButtonClick()
        }
        return $btn
    }

    reportButtonClick(){
        this.that.reportEndOfWelcomePage()
    }
}