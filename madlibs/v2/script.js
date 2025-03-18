(function() {
    'use strict';
    console.log('reading js');

    const form = document.querySelector('#madlibs-form');
    const overlay = document.querySelector('#story-overlay');
    const story = document.querySelector('#story')
    const closeBtn = document.querySelector('.close-btn');


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // form values
        const adjective = document.querySelector('#adjective').value;
        const object = document.querySelector('#object').value;
        const verb = document.querySelector('#verb').value;
        const name = document.querySelector('#name').value;
        const time = document.querySelector('#time').value;
        const weapon = document.querySelector('#weapon').value;
        const direction = document.querySelector('#direction').value;

        const madlib = `Your mission is to steal the <span class='highlight'>${adjective}</span> casino's <span class='highlight'>${object}</span>, but first you need to <span class='highlight'>${verb}</span> past the security. Disguise yourself as <span class='highlight'>${name}</span> and join the high-stakes poker game. When the clock strikes <span class='highlight'>${time}</span>, use the <span class='highlight'>${weapon}</span> to break into the vault and retrieve the <span class='highlight'>${object}</span>. Don't forget to escape by slipping out through the <span class='highlight'>${direction}</span>.`;

        story.innerHTML = madlib;
        overlay.classList.remove('hidden');
    })

    overlay.addEventListener('click', function() {
        overlay.classList.add('hidden');
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.add('hidden');
    });
})();