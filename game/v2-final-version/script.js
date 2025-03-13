(function () {
    'use strict';
    console.log('reading js');

    // waiting for DOM to be loaded
    document.addEventListener('DOMContentLoaded', function () {
        // sounds
        const flipCard = new Audio("audio/flipcard.mp3");
        const win = new Audio("audio/win.mp3");
        const lose = new Audio("audio/lose.mp3")

        // all the cards
        const suits = ['diamonds', 'hearts', 'clubs', 'spades'];
        const values = ['one', 'two', 'three', 'four'];
        const cards = {
            diamonds: {
                color: 'red',
                one: {
                    image: 'images/d-1.png',
                    value: 1
                },
                two: {
                    image: 'images/d-2.png',
                    value: 2
                },
                three: {
                    image: 'images/d-3.png',
                    value: 3
                },
                four: {
                    image: 'images/d-4.png',
                    value: 4
                }
            },

            hearts: {
                color: 'red',
                one: {
                    image: 'images/h-1.png',
                    value: 1
                },
                two: {
                    image: 'images/h-2.png',
                    value: 2
                },
                three: {
                    image: 'images/h-3.png',
                    value: 3
                },
                four: {
                    image: 'images/h-4.png',
                    value: 4
                }
            },

            clubs: {
                color: 'black',
                one: {
                    image: 'images/c-1.png',
                    value: 1
                },
                two: {
                    image: 'images/c-2.png',
                    value: 2
                },
                three: {
                    image: 'images/c-3.png',
                    value: 3
                },
                four: {
                    image: 'images/c-4.png',
                    value: 4
                }
            },

            spades: {
                color: 'black',
                one: {
                    image: 'images/s-1.png',
                    value: 1
                },
                two: {
                    image: 'images/s-2.png',
                    value: 2
                },
                three: {
                    image: 'images/s-3.png',
                    value: 3
                },
                four: {
                    image: 'images/s-4.png',
                    value: 4
                }
            }
        };

        // dom
        const gameContainer = document.querySelector('.game-container');
        const round1 = document.querySelector('.round1');
        const round2 = document.querySelector('.round2');
        const round3 = document.querySelector('.round3');
        const round4 = document.querySelector('.round4');
        const gameOver = document.querySelector('.gameOver');
        const cardDisplay = document.getElementById('cardDisplay');

        // game data
        let currentRound = 1;
        let drawnCards = [];

        // buttons
        setupButtons();

        // starting the game
        startGame();

        // setting up all the buttons
        function setupButtons() {
            // round 1 buttons
            const redButton = createButton('Red');
            const blackButton = createButton('Black');
            redButton.addEventListener('click', function () { handleRound1('red'); });
            blackButton.addEventListener('click', function () { handleRound1('black'); });
            round1.appendChild(redButton);
            round1.appendChild(blackButton);

            // round 2 buttons
            const higherButton = createButton('Higher');
            const lowerButton = createButton('Lower');
            higherButton.addEventListener('click', function () { handleRound2('higher'); });
            lowerButton.addEventListener('click', function () { handleRound2('lower'); });
            round2.appendChild(higherButton);
            round2.appendChild(lowerButton);

            // round 3 buttons
            const inBetweenButton = createButton('In-between');
            const outsideButton = createButton('Outside');
            inBetweenButton.addEventListener('click', function () { handleRound3('between'); });
            outsideButton.addEventListener('click', function () { handleRound3('outside'); });
            round3.appendChild(inBetweenButton);
            round3.appendChild(outsideButton);

            // round 4 buttons
            suits.forEach(suit => {
                const suitButton = createButton(suit.charAt(0).toUpperCase() + suit.slice(1));
                suitButton.addEventListener('click', function () { handleRound4(suit); });
                round4.appendChild(suitButton);
            });

            // game over button
            const playAgainButton = createButton('Play Again');
            playAgainButton.addEventListener('click', startGame);
            gameOver.appendChild(playAgainButton);
        }

        function startGame() {
            // reset rounds and clears the display
            currentRound = 1;
            drawnCards = [];
            cardDisplay.innerHTML = '';

            // start the game by only showing round 1
            round1.style.display = 'block';
            round2.style.display = 'none';
            round3.style.display = 'none';
            round4.style.display = 'none';
            gameOver.style.display = 'none';
        }

        // creating the button
        function createButton(text) {
            const button = document.createElement('button');
            button.textContent = text;
            button.classList.add('game-button');
            return button;
        }

        // drawing a random card
        function drawRandomCard() {
            const suit = suits[Math.floor(Math.random() * suits.length)];
            const value = values[Math.floor(Math.random() * values.length)];
            const card = {
                suit: suit,
                value: cards[suit][value].value,
                color: cards[suit].color,
                image: cards[suit][value].image
            };
            return card;
        }

        // displays card
        function displayCard(card) {
            flipCard.play();
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');

            const img = document.createElement('img');
            img.src = card.image;
            img.alt = `${card.value} of ${card.suit}`;

            cardElement.appendChild(img);
            cardDisplay.appendChild(cardElement);
        }

        // round 1: red or black
        function handleRound1(guess) {
            const card = drawRandomCard();
            // push the new drawn card to the end of the array
            drawnCards.push(card);
            displayCard(card);

            if (guess === card.color) {
                // correct guess, move to round 2
                currentRound = 2;
                round1.style.display = 'none';
                round2.style.display = 'block';
            } else {
                // wrong guess, game over
                endGame(false);
            }
        }

        // round 2: higher or lower
        function handleRound2(guess) {
            const card = drawRandomCard();
            drawnCards.push(card);
            displayCard(card);

            const prevValue = drawnCards[0].value;
            const currentValue = card.value;
            let isCorrect = false;

            if (guess === 'higher' && currentValue > prevValue) {
                isCorrect = true;
            } else if (guess === 'lower' && currentValue < prevValue) {
                isCorrect = true;
            } else if (currentValue === prevValue) {
                // if same value, then it'll be correct
                isCorrect = true;
            }

            //check if isCorrect is true
            if (isCorrect) {
                // correct, move to round 3
                currentRound = 3;
                round2.style.display = 'none';
                round3.style.display = 'block';
            } else {
                // wrong guess, game over
                endGame(false);
            }
        }

        // round 3: in between or outside
        function handleRound3(guess) {
            const card = drawRandomCard();
            drawnCards.push(card);
            displayCard(card);

            const value1 = drawnCards[0].value;
            const value2 = drawnCards[1].value;
            const currentValue = card.value;

            const min = Math.min(value1, value2);
            const max = Math.max(value1, value2);

            let isBetween = (currentValue > min && currentValue < max);
            let isCorrect = false;

            if (guess === 'between' && isBetween) {
                isCorrect = true;
            } else if (guess === 'outside' && !isBetween) {
                isCorrect = true;
            }

            if (isCorrect) {
                // correct guess, move to round 4
                currentRound = 4;
                round3.style.display = 'none';
                round4.style.display = 'block';
            } else {
                // game over
                endGame(false);
            }
        }

        // round 4: guess the suit
        function handleRound4(guess) {
            const card = drawRandomCard();
            drawnCards.push(card);
            displayCard(card);

            if (guess === card.suit) {
                // correct
                endGame(true);
            } else {
                // game over
                endGame(false);
            }
        }

        // end game
        function endGame(isWin) {
            // hide the rounds
            round1.style.display = 'none';
            round2.style.display = 'none';
            round3.style.display = 'none';
            round4.style.display = 'none';

            // show game over section
            gameOver.style.display = 'block';

            // win or loss
            const gameOverText = gameOver.querySelector('p');
            if (isWin) {
                win.play();
                gameOverText.textContent = 'Congratulations! You won the game!';
                gameOverText.style.color = 'gold';

                setTimeout(() => {
                    console.log("playing win sound");
                    win.play();
                }, 1000);
            } else {
                gameOverText.textContent = `Game Over! You made it to round ${currentRound}`;
                gameOverText.style.color = 'red';

                setTimeout(() => {
                    console.log("playing lose sound");
                    lose.play();
                }, 1000);
            }
        }
    });
})();
