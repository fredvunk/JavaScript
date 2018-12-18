const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

let guessCount = 1;
let randomNumber = Math.floor(Math.random() * 100) +1; 

const checkGuess = () => {
    let userGuess = Number(guessField.value);
    
    if(guessCount === 1) {
        guesses.textContent = 'Eelnevad pakkumised : ';
        
    }
    //array
//    var guessedNumbers = []
//    guesseedNumbers.push(userGuess);
//    if (userGuess.includes(userGuess)) {
//        lastResult.textContent = 'Samat numbrit ei saa pakkuda'
//    }
    guesses.textContent += `${userGuess} `;
    //kui kasutaja pakub õigesti
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Paljue õnne, võitsid!';
        lastResult.style.backgroundColor='blue';
        lowOrHigh.textContent = '';
        setGameOver();
    // kui 3 korda vastanud 
    } else if (guessCount === 3) {
               lastResult.textContent = 'Mäng läbi';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Vale vastus';
        lastResult.style.backgroundColor='red';
        
        const lowOrHighText = 'Viimane pakkumine oli liiga ';
        
    //kui number liiga madal    
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = lowOrHighText + 'madal';
    }
            else if (userGuess > randomNumber) {
            lowOrHigh.textContent = lowOrHighText + 'kõrge';
    }
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
};



guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Alusta uut mängu';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
    location.reload();
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
