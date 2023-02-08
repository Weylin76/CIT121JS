const music = function() {
    let musicChoice = document.getElementById('music').value;
    let audio = '';
        if (musicChoice === 'Yes'){
        audio = document.getElementById("coolMusic");
        audio.play();} else{audio = document.getElementById("coolMusic");
        audio.pause();}
        };
    
    document.querySelector('#music').addEventListener('change', music);