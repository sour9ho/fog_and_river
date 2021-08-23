export async function fetchJson(filePath){
    return await fetch(filePath)
       .then(response => response.text())
       .then(text => JSON.parse(text))
       .catch(err => console.log(err))
}