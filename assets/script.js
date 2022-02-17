// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Sophia Matos" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 1 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let quantityText = document.querySelector("#qty.gb")



// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
let upButton = document.querySelector("#add-gb")
let downButton = document.querySelector("#minus-gb")

// Code to update name display
credit.textContent = `Created by ${yourName}`


// Event listener for clicks on the "+" button for Gingerbread cookies
upButton.addEventListener("click", function(){
    window.alert("up button clicked!")
    gb = gb + 1

    quantityText.textContent = "totalQuantity: "+ gb
})

downButton.addEventListener("click", function(){
    window.alert("down button clicked!")
    if (gb > 0 ){
    gb = gb - 1
    quantityText.textContent = "totalQuantity: "+ gb
}
})


// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons