let isGameOn = false
const notesArray = ["E-note", "A-note", "D-note", "G-note", "B-note"]
let randomNumber = Math.floor(Math.random() * notesArray.length)
let randomNote = notesArray[randomNumber]

const HIDDENNOTE = () => {
    let hidden = document.querySelector(`.${randomNote}`)
    hidden.classList.remove("hidden");
}

const STARTGAME = () => {
    document.querySelector("#input-start-game").addEventListener("keyup", (event) => {
        if(event.key !== "Enter") return;
        let savedWord = event.target.value.toLowerCase();
        if (savedWord === "yes") {
            isGameOn = true
            console.log(isGameOn)
            gamePlay()
        } else {
            console.log("Why are you here then?")
        }
    }
    )
}

const gamePlay = () => {
    while(isGameOn) {
        console.log(isGameOn)
        break;
    }
}

STARTGAME()
