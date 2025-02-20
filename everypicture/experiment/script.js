(function () {
    'use strict';

    const container = document.querySelector('#exp1');
    const theImg1 = document.querySelector('#exp1 img');
    const theImg2 = document.querySelector('#exp2 img');
    const percent = container.offsetWidth / 100;
    let prevLoc = 0;

    container.addEventListener('mousemove', reportPos);
    container.addEventListener('click', function (event) {
        event.preventDefault();
        theImg1 = theImg2;
    });

    function reportPos(event) {
        const mousePosX = Math.ceil((event.clientX - (container.getBoundingClientRect().left)) / percent);
        
        if (prevLoc !== mousePosX) {
            const addedPx = mousePosX * 30;
            theImg1.style.width = (800 + addedPx) + 'px';
            prevLoc = mousePosX;
            console.log(prevLoc);
        }
    }
})();