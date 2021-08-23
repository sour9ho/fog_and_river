import { fetchJson } from "./FileFetching.js"
import { TestPage } from "./TestPage.js"
import { WelcomePage } from "./WelcomePage.js"
import { PageTurner } from "./PageTurner.js"
import { ResultPage } from "./ResultPage.js"



async function main(){
    const $body = document.getElementsByTagName('body')[0]
    const data = await fetchJson("./src/data/test.json")

    const pageTurner = new PageTurner($body, data)

    
}

main()
