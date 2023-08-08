const accesskey ="-YXz4CTCvRZhxp2NOFh6aWs2_nvfhMGqY4yc6MDspUM"
const formEl = document.querySelector("form")
const inputE1 = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById(show-more-button)

let inputData = ""
let page = 1;
async function searchImage(){
    inputData = inputData.valueOf;
    const url = 'https//api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey'
    const response = await fetch(url)
    const data = await response.json()
    
    if(page ===1){
        searchResults.innerHTML=""
    }
    searchResults.map((result)=>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.url.small
        image.alt = result.alt_description

        const imagelink = document.createElement('a')
        imagelink.href = result.links.html
        imagelink.target = "_blank"
        imagelink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imagelink)
        imageWrapper.appendChild(imageWrapper)

    });
    page++
    if(page>1){
        showMore.style.display ="block"
    }
    
}
formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page = 1;
    searchImage()
})
showMore.addEventListener("click",(event)=>{
    event.preventDefault()
    page = 1;
    searchImage()
})