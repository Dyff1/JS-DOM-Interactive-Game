let isGameOn = false
const notesArray = ["E-note", "A-note", "D-note", "G-note", "B-note"]
let randomNumber = Math.floor(Math.random() * notesArray.length)
let randomNote = notesArray[randomNumber]

const HIDDENNOTE = () => {
    let hidden = document.querySelector(`.${randomNote}`)
    hidden.classList.remove("hidden");
}

const STARTGAME = () => {
    let listener = document.querySelector("#input-start-game").addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        let savedWord = event.target.value;
        savedWord.toLowerCase()
        if (savedWord === "yes") {
            isGameOn = true
            console.log(isGameOn)
        } else {
            console.log("Why are you here then?")
        }
    }

})
}

