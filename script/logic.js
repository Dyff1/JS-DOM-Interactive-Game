let isGameOn = false
const notesArray = ["E-note", "A-note", "D-note", "G-note", "B-note"]
let randomNumber = Math.floor(Math.random() * notesArray.length)
let randomNote = notesArray[randomNumber]

const HIDDENNOTE = (hidden) => {
    hidden = document.querySelector(`.${randomNote}`)
    hidden.classList.remove("hidden");
}

const HIDDENINPUT = (hidden) => {
    hidden = document.querySelector(".input__area")
    hidden.classList.add("hidden")
}

const STARTGAME = () => {
    document.querySelector("#input-start-game").addEventListener("keyup", (event) => {
        if(event.key !== "Enter") return;
        let savedWord = event.target.value.toLowerCase();
        if (savedWord === "yes") {
            isGameOn = true
            HIDDENINPUT()
            gamePlay()
        } else {
            let inputText = document.querySelector("#input-target-text")
            inputText.textContent = "Why are you here then? Go play the game!"
            inputText.classList.remove("hidden")
        }
    }
    )
}

STARTGAME()
//while game is on hide startgame
const gamePlay = () => {
    while(isGameOn) {
        break;
    }
}

