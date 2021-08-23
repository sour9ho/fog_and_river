export class ScrollChecker{
    constructor(that){
        this.that = that
        this.hasScrolled = false
        this.scrollCheckerId = null
        this.lastScrollTop = 0
        this.delta = 5
        this.setScrollEvent()
        this.turnOn()
    }

    setScrollEvent(){
        // If scrolled, set hasScrolled as true
        window.onscroll = () => {
            this.hasScrolled = true
        }
    }

    getScrollDirection(){
        let direction = 0
        const currentScrollTop = window.scrollY
        if(Math.abs(this.lastScrollTop - currentScrollTop) > this.delta){
            if(currentScrollTop > this.lastScrollTop){
                direction = -1
            } else if(currentScrollTop + window.innerHeight < document.body.offsetHeight){
                direction = 1
            }
            this.lastScrollTop = currentScrollTop
        }
        return direction
    }

    reportScroll(increase){
        this.that.reportScroll(increase)
    }

    turnOn(){
        this.scrollCheckerId = setInterval(() => {
            if (this.hasScrolled){
                const direction = this.getScrollDirection()
                this.reportScroll(direction)
                this.hasScrolled = false
            }
        }, 250)
    }

    turnOff(){
        if(this.scrollCheckerId != null){
            clearInterval(this.scrollCheckerId)
        }
        this.scrollCheckerId = null
    }
}