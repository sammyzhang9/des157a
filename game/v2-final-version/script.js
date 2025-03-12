(function() {
    'use strict';
    console.log('reading js');

    // all the cards
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
                image: 'images/d-4.png',
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
    }

    // dom
    const gameContainer = document.querySelector('.game-container');
    const round1 = document.querySelector('.round1');
    const round2 = document.querySelector('.round2');
    const round3 = document.querySelector('.round3');
    const round4 = document.querySelector('.round4');



})();