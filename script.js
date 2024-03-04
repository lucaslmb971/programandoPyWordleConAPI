let attempts = 6;
let guessedWords = [];
let word; // Variable para almacenar la palabra obtenida de la API

window.addEventListener('load', initialize);

function initialize() {
    const button = document.getElementById("guess-button");
    button.addEventListener("click", guess);

    const input = document.getElementById("guess-input");
    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            guess();
        }
    });

    fetchRandomWord();
}

function fetchRandomWord() {
    fetch('https://api.datamuse.com/words?sp=?????')
        .then(response => response.json())
        .then(data => {
            // Obtener una palabra aleatoria de la respuesta
            const randomWord = data[Math.floor(Math.random() * data.length)];
            // Asignar la palabra obtenida a la variable 'word'
            word = randomWord.word.toUpperCase();
            // Mostrar la palabra en la consola
            console.log('Palabra seleccionada:', word);
        });
}

function guess() {
    const guess = getGuess();
    if (!guess) {
        return;
    }

    if (guessedWords.includes(guess)) {
        showMessage("You already guessed this word, try another one.");
        return;
    }

    guessedWords.push(guess);
    showMessage("");

    if (guess === word) {
        endGame(`<h2>YOU WIN!😀</h2><p>The correct word is: ${word}</p>`);
        return;
    }

    const grid = document.getElementById("grid");
    const row = document.createElement('div');
    row.className = 'row';

    for (let i = 0; i < word.length; i++) {
        const span = document.createElement('span');
        span.className = 'letter';
        if (guess[i] === word[i]) {
            span.innerHTML = guess[i];
            span.style.backgroundColor = '#79b851'; 
        } else if (word.includes(guess[i])) {
            span.innerHTML = guess[i];
            span.style.backgroundColor = '#f3c237'; 
        } else {
            span.innerHTML = guess[i];
            span.style.backgroundColor = '#a4aec4'; 
        }
        row.appendChild(span);
    }

    grid.appendChild(row);
    attempts--;
    updateAttempts();

    if (attempts == 0) {
        endGame(`<h2>GAME OVER!😖</h2><p>The correct word was: ${word}</p>`);
    }
}

function getGuess() {
    let guess = document.getElementById("guess-input").value.toUpperCase();
    if (guess.length !== 5) {
        alert("Please enter a 5-letter word.");
        return "";
    }
    return guess;
}

function updateAttempts() {
    document.getElementById("attempts").innerText = `Attempts Left: ${attempts}`;
}

function endGame(message) {
    const input = document.getElementById("guess-input");
    const button = document.getElementById("guess-button");
    input.disabled = true;
    button.disabled = true;
    let container = document.getElementById('guesses');
    container.innerHTML = message;
}

function showMessage(message) {
    document.getElementById("message").innerText = message;
}
