// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Sophia Matos" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let votesforGingTd = document.querySelector("#qty-gb")
let votesforChocTd = document.querySelector("#qty-cc")
let votesforSprinkTd = document.querySelector("#qty-sugar")

console.log("Votes for ging td", votesforGingTd)
console.log("Votes for choc td", votesforChocTd)
console.log("Votes for sprink td", votesforSprinkTd)

//refrence
let addG = document.querySelector("#add-gb")

//function add

addG.addEventListener("click", function(){
    //window.alert("add button clicked!")
    
    gb = gb + 1;
    
    votesforGingTd.textContent = gb
})


// refrence 
let minusG = document.querySelector("#minus-gb")

// function minus

minusG.addEventListener("click", function(){

    if (gb > 0){
        gb = gb - 1
        
        votesforGingTd.textContent = gb
    }
}
)


//refrence
let addCo = document.querySelector("#add-cc")

//function add

addCo.addEventListener("click", function(){
    //window.alert("add button clicked!")
    
    cc = cc + 1;
    
    votesforChocTd.textContent = cc
})


// refrence 
let minusCo = document.querySelector("#minus-cc")

// function minus

minusCo.addEventListener("click", function(){

    if (cc > 0){
        cc = cc - 1
        
        votesforChocTd.textContent = cc
    }
}
)

//refrence
let addSp = document.querySelector("#add-sugar")

//function add

addSp.addEventListener("click", function(){
    //window.alert("add button clicked!")
    
    sugar = sugar + 1;
    
    votesforSprinkTd.textContent = sugar
})


// refrence 
let minusSp = document.querySelector("#minus-sugar")

// function minus

minusSp.addEventListener("click", function(){

    if (sugar > 0){
        sugar = sugar - 1
        
        votesforSprinkTd.textContent = sugar
    }
}
)