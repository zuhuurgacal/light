// second let u same then id ku xer 
let slider = document.querySelector("#slider")
let nextbutton = document.querySelector("#nextBtn")
let prevbutton = document.querySelector("#prevBtn")
let end = document.querySelector("#end")

let images = [
"https://img.freepik.com/free-photo/majestic-lion-undisputed-king-jungle-resting-regally-sunlit-rock_1268-34999.jpg?t=st=1721128819~exp=1721132419~hmac=73dcf0c24ad449260a98c9861a4ceb5cd662a215f2c294fe2f550a75d160450d&w=996",
    "https://img.freepik.com/free-photo/lion-dry-forest-landscape_23-2151661802.jpg?t=st=1721128970~exp=1721132570~hmac=236dd533784322a7f5cc4f520bca86b6c6bbb76b29a467af02ca453b4d0354fa&w=360",
    "https://img.freepik.com/free-photo/closeup-shot-male-lion-jungle-daytime_181624-46469.jpg?t=st=1721128985~exp=1721132585~hmac=1d81fe4dcaa9aebfcea10dc78e7df250f8db9b9a89feef4cd38ded53d337ad41&w=360",
    "https://img.freepik.com/free-photo/majestic-lion-undisputed-king-jungle-resting-regally-sunlit-rock_1268-35007.jpg?t=st=1721129064~exp=1721132664~hmac=70230ad077515cd06d6fa3c496966c8d79b60e624a6addc8df7b7d96b6abe65f&w=996",
    "https://img.freepik.com/free-vector/end_23-2147506150.jpg?t=st=1721130564~exp=1721134164~hmac=36ba16b9a8b599453f56eb24dd7ca613975f2ed1f3af87e3b0fffab1897b1935&w=740",

    ]


let indexNumber = 0
slider.src = images[indexNumber]

nextbutton.addEventListener("click", function(){
    if(indexNumber <images.length -1){
        indexNumber++
        slider.src = images[indexNumber]
    }
    if(indexNumber == images.length -1){
        end.innerHTML = "dhamaadka la gaaray"
        end.style.backgroundColor = "red"
        end.style.color = "white"
    }
})

    
prevbutton.addEventListener("click", function(){
    if(indexNumber > 0){
        indexNumber--
        slider.src = images[indexNumber]
    }

})

