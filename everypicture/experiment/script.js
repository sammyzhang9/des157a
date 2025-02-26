// (function () {
//     'use strict';

//     const container = document.querySelector('.container');
//     // const baseImage = document.querySelector('.base');
//     const overlayImage = document.querySelector('.overlay');

//     container.addEventListener('click', function() {
//         if (overlayImage.style.display === 'block') {
//             overlayImage.style.display = 'none';
//         } else {
//             overlayImage.style.display = 'block';
//         }
//     });
// })();

(function () {
    'use strict';

    const container = document.querySelector('div');
    const theImg = document.querySelector('div img');
    const percent = container.offsetWidth / 100;
    let prevLoc = 0;

    container.addEventListener('mousemove', reportPos);

    function reportPos(event) {
        const mousePosX = Math.ceil((event.clientX - (container.getBoundingClientRect().left)) / percent);
        
        if (prevLoc !== mousePosX) {
            const addedPx = mousePosX * 30;
            theImg.style.width = (800 + addedPx) + 'px';
            prevLoc = mousePosX;
            console.log(prevLoc);
        }
    }
})();