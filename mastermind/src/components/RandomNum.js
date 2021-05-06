import React from 'react';
import getRandomNumber from './getRandom';
import Confetti from "react-dom-confetti";
import ParticlesBg from 'particles-bg';
import won from "../audio/won.wav";
import lost from "../audio/lost.wav";
import wrongAnswer from "../audio/wrongAnswer.wav";

const wonGame = new Audio(won);
const lostGame = new Audio(lost);
const wrong = new Audio(wrongAnswer);

function RandomNumber() {
    const [randomNumber, setRandomNumber] = React.useState();
    const [guessesLeft, setGuessesLeft] = React.useState(10);
    const hiddenNumber = " _ ".repeat(4); //changed
    const [party,setParty] = React.useState(false);
    const gameOver = guessesLeft <= 0;
    const [guess, setGuess] = React.useState("")
    let isMatch = false;
    let [guessedNumber, setGuessedNumber] = React.useState(new Set([]));

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
            wonGame.play()
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

        if(guess !== randomNumber){
            wrong.play()
            setGuessedNumber(guessedNumber.add(guess))
            // user feedback
            for(let i = 0; i < guess.length-1; i++){
                //found correct num
                if(guess[i] === randomNumber.charAt(0) || guess[i] === randomNumber.charAt(1) || guess[i] === randomNumber.charAt(2) || guess[i] === randomNumber.charAt(3)){ 
                    const foundNumber = document.getElementById('correct');
                    foundNumber.innerHTML = `A number was guessed correctly`
                }else if(guess[0] === randomNumber.charAt(0) || guess[1] === randomNumber.charAt(1) || guess[2] === randomNumber.charAt(2) || guess[3] === randomNumber.charAt(3)){
                    const foundLocation = document.getElementById('correct');
                    foundLocation.innerText = `You guessed a correct number in its correct location`
                }else{ //no numbers matched
                    const notFound = document.getElementById('correct')
                    notFound.innerText = `No numbers matched`
                }
            }
        }        
    }

    const handleHints = (e) => { 
        e.preventDefault();
        const hint = document.getElementById("hint");
        hint.innerText = `Hint: Only ${guess.split("").map(num => (randomNumber.includes(num) ? num : ""))} was correct`
    }

    const handleGuess = (e) => {
        const value = e.target.value;
        setGuess(value)
    }

    const handleRestart = () => {
        window.location.reload(true);
    }

    if(gameOver){
        lostGame.play()
        const mainGame = document.getElementById("mainGame");
        mainGame.style.display = "none";
        const restartbtn = document.getElementById("restartbtn");
        restartbtn.style.display = "block";
    }

    return (
        <div>
            <div style={{textAlign: "center", color: '#D7841D', marginTop: '80px'}}>
            <h1 style={{fontSize: '38px'}}>Mastermind Game <Confetti active={ party } config={ config } /></h1>
        
                <div id="mainGame">
                    <div><p id="guesses" style={{color: '#C5791B', fontWeight: 'bold'}}> Number of Guesses Remaining: {guessesLeft}</p></div>
                    <p style={{color: '#C5791B', fontWeight: 'bold'}}>Guess the Number: {console.log(randomNumber)}</p>
                    <p id="hiddenNumber"> {hiddenNumber} </p>

                    <p id="correct" style={{color: '#C5791B', fontWeight: 'bold'}}></p>
                    
                    <p id="hint" style={{color: '#C5791B', fontWeight: 'bold'}}> </p>
                    <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="enter guess" maxLength="4" value={guess} onChange={handleGuess}></input>
                    <br />
                    <input id="submitbtn" type="submit" value="Submit Guess" style={{backgroundColor: '#FFBF70', position: 'center', marginTop: '10px', width: '100px', height: '50px', borderRadius: '10px', borderColor: '#333333'}}></input>
                    </form>
                    <button id="hintbtn" onClick={handleHints} style={{backgroundColor: '#FFBF70', position: 'center', marginTop: '10px', width: '100px', height: '50px', borderRadius: '10px', borderColor: '#333333', margin: '10px'}}>Hint</button>
                </div>
            </div>

            <div style={{textAlign: "center", color: '#D7841D', marginTop: '60px'}}>
                <p style={{color: '#C5791B', fontWeight: 'bold', fontSize: '24px'}}>
                <p id="outcome"> </p>
                {!gameOver ? '': `The correct number was ${randomNumber}`}
                </p>
                <button id="restartbtn" onClick={handleRestart} style={{backgroundColor: '#FFBF70', marginTop: '10px', marginLeft: '45%', width: '100px', height: '50px', borderRadius: '10px', borderColor: '#333333', display: 'none'}}>New Game</button>    
            </div>

            <div style={{color: '#C5791B', fontWeight: 'bold', backgroundColor: '#FFD6AD', textAlign: 'center' , width: '700px', height: '100px', marginLeft: '20%', marginRight: '20%'}}>
                <h2>Your Guesses:</h2>
                <p id="guessedNumbers"> {[...guessedNumber].join(' ')}</p>
            </div>

            <ParticlesBg type="cobweb" bg={true} />
        </div>
    )
}

export default RandomNumber;