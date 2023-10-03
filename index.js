let inputBtn = document.getElementById("save-btn")
let myLeads =[]
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myleads") )
// localStorage.setItem("myName", "Per Harald Borgen")
// localStorage.getItem("myName")
// localStorage.clear()

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}



// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function(){
    // Grab the URL of the current tab!
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderLeads(myLeads)
    })
   
})



function renderLeads(leads){
    let listItems = ""
    for(let i = 0; i<myLeads.length; i++){
        // listItems += "<li> <a href='" + myLeads[i] + " ' target='_blank'>"+ myLeads[i] +"</a></li>"
        listItems += `<li>
         <a  target="_blank" href='${myLeads[i]}' >
          ${myLeads[i]}  
          </a>
          </li>`
    }
    ulEl.innerHTML = listItems
    }

inputBtn.addEventListener("click", function(){
    inputEl.value
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads",JSON.stringify(myLeads))
    renderLeads(myLeads)
    

})

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})


