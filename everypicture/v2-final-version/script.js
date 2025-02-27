// add event listeners
(function () {
    'use strict';

    console.log('reading js');
    
    // variables
    const rectangleWater = document.querySelector('.rectangle-water');
    const rectangleBridge = document.querySelector('.rectangle-bridge');
    const rectangleOcean = document.querySelector('.rectangle-ocean')
    const waterVideo = document.querySelector('#water-vid');
    const bridgeVideo = document.querySelector('#bridge-vid');
    const oceanVideo = document.querySelector('#ocean-vid')

    // water hover events
    rectangleWater.addEventListener('mouseenter', function() {
        console.log("mouse enter");
        waterVideo.style.display = 'block';
        waterVideo.play();
    });
    
    rectangleWater.addEventListener('mouseleave', function() {
        waterVideo.pause();
        // setting video back to start
        waterVideo.currentTime = 0; 
        waterVideo.style.display = 'none';
    });
    
    // bridge hover events
    rectangleBridge.addEventListener('mouseenter', function() {
        bridgeVideo.style.display = 'block';
        bridgeVideo.play();
        console.log("mouse enter");
    });
    
    rectangleBridge.addEventListener('mouseleave', function() {
        bridgeVideo.pause();
        bridgeVideo.currentTime = 0;
        bridgeVideo.style.display = 'none';
    });

    // ocean hover events
    rectangleOcean.addEventListener('mouseenter', function() {
        oceanVideo.style.display = 'block';
        oceanVideo.play();
        console.log("mouse enter");
    });
        
    rectangleOcean.addEventListener('mouseleave', function() {
        oceanVideo.pause();
        oceanVideo.currentTime = 0;
        oceanVideo.style.display = 'none';
    });

    // console.log(rectangleWater);
})();