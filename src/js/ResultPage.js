export class ResultPage{
    constructor(score, title, info){
        this.$resultTitle = this.makeResultTitle(title)
        this.$score = this.makeScore(score)
        this.$info = this.makeInfo(info)
    }

    getPage(){
        const $div = document.createElement('div')
        $div.style.display = "none"
        $div.classList.add('result-page')

        const $result = document.createElement('div')
        $result.classList.add('exam-result')
        $result.appendChild(this.$resultTitle)
        $result.appendChild(this.$score)
        $result.appendChild(this.$info)

        $div.appendChild($result)
        return $div
    }

    makeResultTitle(title){
        const $div = document.createElement('div')
        $div.classList.add('result-title')
        let text = ""
        for(let t of title){
            text += t
            text += "\n"
        }
        $div.innerText = text
        return $div
    }

    makeScore(score){
        const $div = document.createElement('div')
        $div.classList.add('score')
        $div.innerText = `점수:${score}`
        return $div
    }

    makeInfo(info){
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
}