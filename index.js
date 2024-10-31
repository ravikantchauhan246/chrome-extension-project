let myLinks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const linksFromLocalStorage = JSON.parse( localStorage.getItem("myLinks") )
const tabBtn = document.getElementById("tab-btn")


if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage
    render(myLinks)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs.length > 0 && tabs[0].url) {
            myLinks.push(tabs[0].url)
            localStorage.setItem("myLinks", JSON.stringify(myLinks))
            render(myLinks)
        } else {
            console.error("No active tab or URL is undefined.")
        }
    })
})


function render(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        let url = links[i]
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url
        }
        
        listItems += `
            <li>
                <a target='_blank' href='${url}'>
                    ${links[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLinks = []
    render(myLinks)
})

inputBtn.addEventListener("click", function() {
    let url = inputEl.value
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url
    }
    myLinks.push(url)
    inputEl.value = ""
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
})