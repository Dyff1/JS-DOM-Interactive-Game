let isGameOn = false
const notesArray = ["E-note", "A-note", "D-note", "G-note", "B-note"]
let randomNumber;
let randomNote = ""; 
let toggleState = false
let attempsRight = 0;
let attempsWrong = 0;
let attempsTotal = 0;
let userGuess = ""
let attempState = 0;
let isAttempsCreated = false

const ATTEMPSAPPEND = () => {
    if (isAttempsCreated === false) {
        const p = document.createElement('p')
        p.classList.add("attemps__toggle__text", "center")
        document.querySelector(".attemps").append(p)
        isAttempsCreated = true
        attempState = 1
    }
    const attempsContent = document.querySelector(".attemps__toggle__text")
    attempsContent.textContent = "Your total attemps are: " + attempsTotal;
    document.querySelector(".attemps").append(attempsContent)
}

const HIDDENATTEMPS = (hidden) => {
    hidden = document.querySelector(".attemps__toggle__text")
    hidden.classList.add("hidden");
}

const VISIBLEATTEMPS = (hidden) => {
    console.log(attempsTotal)
    if (attempState === 1) {
        console.log("should print this?")
        hidden = document.querySelector(".attemps__toggle__text")
        hidden.classList.remove("hidden")
        ATTEMPSAPPEND()
    }
    else if (attempState === 0 && isAttempsCreated === false) {
        for (let i = 0 ; i < 1 ; i++) {
            const p = document.createElement('p')
            p.textContent = "Your total attemps are: " + attempsTotal;
            p.classList.add("attemps__toggle__text", "center", "hidden")
            document.querySelector(".attemps").append(p)
            attempState = 1
            hidden = document.querySelector(".attemps__toggle__text")
            hidden.classList.remove("hidden")
            isAttempsCreated = true
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

const VISIBLEGAMEINPUT = (hidden) => {
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

const VISIBLEUSERINPUT = (hidden) => {
    hidden = document.querySelector("#user-guess")
    hidden.classList.remove("hidden");
}

const HIDDENUSERINPUT = (hidden) => {
    hidden = document.querySelector("#user-guess")
    hidden.classList.add("hidden");
}

const PLAY = () => {
        isGameOn = true
        HIDDENNEXTBUTTON()
        RANDOMNUMBERSELECTOR()
        HIDDENSTARTINPUT()
        VISIBLEGAMEINPUT()
        VISIBLENOTE()
        //gamePlay()
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
)}

const GUESS = (event) => {
        if(event.key !== "Enter") return;
        if(event.target.value.toLowerCase() === randomNote.toLowerCase()) {
            HIDDENUSERINPUT()
            console.log("your guess is right")
            attempsRight++
            attempsTotal++
            if (isAttempsCreated === true) {
                ATTEMPSAPPEND()
            }
            //ATTEMPSAPPEND()
            console.log(attempsTotal)
            let inputText = document.querySelector("#input-target-guess-text")
            inputText.textContent = "Your guess is right! Would you like to play again?"
            VISIBLENEXTBUTTON()
            document.querySelector("#play-again").addEventListener("click", () => {
                PLAYAGAIN()
                })
        } else if (event.target.value.toLowerCase() !== randomNote.toLowerCase()) {
            console.log("your guess is wrong")
            attempsWrong++
            attempsTotal++
            if (isAttempsCreated === true) {
                ATTEMPSAPPEND()
            }
            console.log("debug: is attempt created: " + isAttempsCreated)
            console.log("debug: attemps total: " + attempsTotal)
            let inputText = document.querySelector("#input-target-guess-text")
            inputText.textContent = `Your guess (${event.target.value}) is wrong. Guess again!`
        }
}

const PLAYAGAIN = () => {
    VISIBLEUSERINPUT()
    HIDDENNOTE()
    randomNote = ""
    console.log(`random note should be cleared. test if clear ${randomNote}`)
    document.querySelector("#input-target-guess-text").textContent = "Guess the right note that is being played!"
    PLAY()
}

STARTGAME()

const toggle = document.querySelector("#attemps");

toggle.addEventListener("click", () => {
    if (isAttempsCreated == false) {
        ATTEMPSAPPEND()
        attempState = 1
        VISIBLEATTEMPS()
    }
    console.log(toggle)
    if (toggleState == false) {
        console.log(`debug, current attemps are:${attempsTotal}`)
        VISIBLEATTEMPS()
        toggleState = true
    }
    else if (toggleState == true) {
        HIDDENATTEMPS()
        toggleState = false
    }
    console.log("debug: is attempt created on button toggle: " + isAttempsCreated)
})

document.querySelector("#user-guess").addEventListener("keyup", GUESS)
document.querySelector("#play-again").addEventListener("click", PLAYAGAIN)
