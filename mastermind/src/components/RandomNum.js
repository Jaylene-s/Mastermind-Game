import React from 'react';
import getRandomNumber from './getRandom';
import Confetti from "react-dom-confetti";

function RandomNumber() {
    const [randomNumber, setRandomNumber] = React.useState();
    const [guessesLeft, setGuessesLeft] = React.useState(10);
    const [hiddenNumber, setHiddenNumber] = React.useState();
    const [party,setParty] = React.useState(false);
    const gameOver = guessesLeft <= 0;
    const [guess, setGuess] = React.useState("")
    let isMatch = false;
    let [guessedNumber, setGuessedNumber] = React.useState(new Set([]));
    // let [correctNumber, setCorrectNumber] = React.useState(false)
    let correctNumber;

    React.useEffect(() => {
        let mounted = true;
        getRandomNumber()
        .then((number) => {
            if(mounted){
                setRandomNumber(number)
            }
        })
        .catch(err => console.log(err))
        return () => mounted = false;
    }, []);

    const config = {
        angle: "184",
        spread: 360,
        startVelocity: "87",
        elementCount: "135",
        dragFriction: "0.09",
        duration: "7050",
        stagger: "7",
        width: "23px",
        height: "15px",
        perspective: "804px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        setGuessesLeft(guessesLeft-1)
        isMatch = guess == randomNumber;
        
        if(isMatch === true){
            setParty(true)
            const hidden = document.getElementById("hiddenNumber");
            hidden.style.display = "none";
            e.target.style.display = "none";
            const outcome = document.getElementById("outcome");
            const p = document.createElement("p")
            p.innerText = `You won`;
            outcome.appendChild(p);
            const button = document.getElementById("submitbtn");
            button.style.display= "none";
        }
        //user guessed a right number only

        const hint = document.getElementById("hint");
        hint.innerText = `Hint: Only ${guess.split("").map(num => (randomNumber.includes(num) ? num : ""))} was correct`
        const correctlyGuessed = document.getElementById("correct");

        
        // console.log(guess)
        if(guess !== randomNumber){
            setGuessedNumber(guessedNumber.add(guess))
        }        

        // for(let i=0; i<guess.length; i++){
        //     if(guess[i] === randomNumber[i]){
        //         console.log(guess[i])
        //         console.log(randomNumber[i])
        //         correctNumber = true
        //     }else if(guess[i] !== randomNumber[i]){
        //         correctNumber = false
        //     }
        //     console.log(correctNumber)
        // }
    }

    const handleStart = (e) => {
        //set a timer for api to load then the user can click generate number
        const startbtn = document.getElementById("startbtn");
        startbtn.style.display = "none";
        setGuessesLeft(10)
        isMatch = false;
        setHiddenNumber(randomNumber.split("").map(num =>  " _ "));
        console.log('started game')
        console.log(randomNumber)
        
    }

    const handleGuess = (e) => {
        const value = e.target.value;
        setGuess(value)
    }
    const handleRestart = (e) => {
        window.location.reload(true);
    }
 
    return (
        <div>
            <div className="Hangman container" style={{textAlign: "center"}}>
            <h1 className='text-center'>Mastermind Game <Confetti active={ party } config={ config } /></h1>
            <div id="startbtn"><button onClick={handleStart}>Generate A Number</button></div>
        
                <div>
                    <div id="restart">
                        <button id="restartbtn" onClick={handleRestart}>New Game</button>
                    </div>
                    <div><p id="guesses"> Number of Guesses Remaining: {guessesLeft} </p></div>
                    <p>Guess the Number: </p>
                    <p id="hiddenNumber"> {hiddenNumber} </p>
                    <p>
                    <p id="outcome"> </p>
                    {!gameOver ? '': `The correct number was ${randomNumber}`}
                    </p>
                    <p id="correct"> </p>
                    <p id="hint"> </p>
                    <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="enter guess" maxLength="4" value={guess} onChange={handleGuess}></input>
                    <br />
                    <input id="submitbtn" type="submit" value="Submit Guess"></input>
                    </form>
                    <div className="container" >
                        <p id="guessedNumbers"> Your Guesses: {[...guessedNumber].join(' ')}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RandomNumber;