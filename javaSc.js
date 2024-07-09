// second let u same then id ku xer 
let title = document.querySelector("#title")
let button = document.querySelector("#btn")
let light = document.querySelector("#light")
let onButton = document.querySelector("#onBtn")
let offButton = document.querySelector("#offBtn")

// // changing HTML using js 
// title.innerHTML = "this is js ...."

// // changing CCS style using JS
// title.style.color = "red"
// title.style.backgroundColor = "blue"

// // third step ita ka habe 
// button.addEventListener("click", function(){
//     document.body.style.backgroundColor = "green"

// })

onButton.addEventListener("click", function(){
    light.style.backgroundColor = "yellow"
    onButton.style.backgroundColor = "red"
    offButton.style.backgroundColor = ""
})

offButton.addEventListener("click", function(){
    light.style.backgroundColor = "white"
    offButton.style.backgroundColor = "red"
    onButton.style.backgroundColor = ""
})




