let isGameOn = false
const notesArray = ["E-note", "A-note", "D-note", "G-note", "B-note"]
let randomNumber;
let randomNote = ""; 
let toggleState = false
let attempsRight;
let attempsWrong;
let userGuess = ""
let attempState = 0;

const HIDDENATTEMPS = (hidden) => {
    console.log("hidden attemp state")
    hidden = document.querySelector(".attemps__toggle__text")
    hidden.classList.add("hidden");
}

const VISIBLEATTEMPS = (hidden) => {
    console.log("visible attemp state")
    if (attempState === 1) {
        hidden = document.querySelector(".attemps__toggle__text")
        hidden.classList.remove("hidden")
    }
    else if (attempState === 0) {
        for (let i = 0 ; i < 1 ; i++) {
            const p = document.createElement('p')
            p.textContent = "testtesttest";
            p.classList.add("attemps__toggle__text")
            p.classList.add("hidden")
            document.querySelector(".attemps").append(p)
            attempState = 1
            hidden = document.querySelector(".attemps__toggle__text")
            hidden.classList.remove("hidden")
        }
    }
}

const RANDOMNUMBERSELECTOR = () => {
    randomNumber = Math.floor(Math.random() * notesArray.length)
    randomNote = notesArray[randomNumber]
    console.log(`debug. random note is ${randomNote}`)
}

const VISIBLENOTE = (hidden) => {
    hidden = document.querySelector(`.${randomNote}`)
    hidden.classList.remove("hidden");
}

const HIDDENNOTE = (hidden) => {
    hidden = document.querySelector(`.${randomNote}`)
    hidden.classList.add("hidden");
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

const VISIBLENEXTBUTTON = (hidden) => {
    hidden = document.querySelector("#play-again")
    hidden.classList.remove("hidden");
}

const HIDDENNEXTBUTTON = (hidden) => {
    hidden = document.querySelector("#play-again")
    hidden.classList.add("hidden");
}

const PLAY = () => {
        isGameOn = true
        HIDDENNEXTBUTTON()
        RANDOMNUMBERSELECTOR()
        HIDDENSTARTINPUT()
        HIDDENGAMEINPUT()
        VISIBLENOTE()
        gamePlay()
}

const STARTGAME = () => {
    document.querySelector("#input-start-game").addEventListener("keyup", (event) => {
        if(event.key !== "Enter") return;
        let savedWord = event.target.value.toLowerCase();
        if (savedWord === "yes") {
            PLAY()
        } else {
            let inputText = document.querySelector("#input-target-text")
            inputText.textContent = "Why are you here then? Go play the game!"
            inputText.classList.remove("hidden")
        }
    }
    )
}

const GUESS = () => {
    document.querySelector("#user-guess").addEventListener("keyup", (event) => {
        if(event.key !== "Enter") return;
        console.log(event.target.value)
        if(event.target.value.toLowerCase() === randomNote.toLowerCase()) {
            console.log("your guess is right")
            attempsRight++
            let inputText = document.querySelector("#input-target-guess-text")
            inputText.textContent = "Your guess is right! Would you like to play again?"
            VISIBLENEXTBUTTON()
            document.querySelector("#play-again").addEventListener("click", () => {
                HIDDENNOTE()
                randomNote = ""
                console.log(`random note should be cleared. test if clear ${randomNote}`)
                inputText.textContent = "Guess the right note that is being played!"
                PLAY()
            })


        } else {
            console.log("your guess is wrong")
            attempsWrong++
            let inputText = document.querySelector("#input-target-guess-text")
            inputText.textContent = "Your guess is wrong. Guess again!"
        }
    })
}

const gamePlay = () => {
    GUESS()
}

STARTGAME()

const toggle = document.querySelector("#attemps");

toggle.addEventListener("click", () => {
    console.log(toggle)
    if (toggleState == false) {
        console.log(`debug, current attemps are:${attempsRight}`)
        VISIBLEATTEMPS()
        toggleState = true
    }
    else if (toggleState == true) {
        HIDDENATTEMPS()
        toggleState = false
    }
})
