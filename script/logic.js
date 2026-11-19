let isGameOn = false
const notesArray = ["E-note", "A-note", "D-note", "G-note", "B-note"]
let randomNumber = Math.floor(Math.random() * notesArray.length)
let randomNote = notesArray[randomNumber]
let guesses;
let userGuess = ""


const HIDDENNOTE = (hidden) => {
    hidden = document.querySelector(`.${randomNote}`)
    hidden.classList.remove("hidden");
}

const HIDDENSTARTINPUT = (hidden) => {
    hidden = document.querySelectorAll(".input__area, .input")
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].classList.add("hidden")
    }
}

const HIDDENGAMEINPUT = (hidden) => {
    hidden = document.querySelector(".game")
    hidden.classList.remove("hidden");
}

const STARTGAME = () => {
    document.querySelector("#input-start-game").addEventListener("keyup", (event) => {
        if(event.key !== "Enter") return;
        let savedWord = event.target.value.toLowerCase();
        if (savedWord === "yes") {
            isGameOn = true
            HIDDENSTARTINPUT()
            HIDDENGAMEINPUT()
            HIDDENNOTE()
            gamePlay()
        } else {
            let inputText = document.querySelector("#input-target-text")
            inputText.textContent = "Why are you here then? Go play the game!"
            inputText.classList.remove("hidden")
        }
    }
    )
}

const GUESS = () => {
    
}

STARTGAME()
//while game is on hide startgame
const gamePlay = () => {
    while(isGameOn) {
        break;
    }
}

