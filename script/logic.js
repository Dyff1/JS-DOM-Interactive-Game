const notesArray = ["E-note", "A-note", "D-note", "G-note", "B-note"]
let randomNumber = Math.floor(Math.random() * notesArray.length)
let randomNote = notesArray[randomNumber]


let hidden = document.querySelector(`.${randomNote}`)
hidden.classList.remove("hidden");

/*
1. Array with notes
2. Random floor, lenght of an array. Return a string
3. Remove class hidden. Show on page


*/