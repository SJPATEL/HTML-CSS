score = 0;
cross = true;

audioM = new Audio('music.mp3')
audioGO = new Audio('gameover.mp3')
setTimeout(() => {
    audioM.play()
}, 1000);
// That mine if  any one key preess in keyboard that fucntion is execute 
document.onkeydown  = function(e) {
    // The key code is use for get key code in keyboard 
    // console.log("Key code is :", e.keyCode);
    if(e.keyCode == 38){
        mario = document.querySelector('.mario');
        mario.classList.add('animateMario');
        setTimeout(() => {
            mario.classList.remove('animateMario')
        }, 700);
    }
    if(e.keyCode == 39){
        mario = document.querySelector('.mario');
        mariox = parseInt( window.getComputedStyle(mario ,null).getPropertyValue('left'));
        mario.style.left = mariox + 112 + "px";

    }
    if(e.keyCode == 37){
        mario = document.querySelector('.mario');
        mariox = parseInt( window.getComputedStyle(mario ,null).getPropertyValue('left'));
        mario.style.left = mariox - 112 + "px";

    }
    
}

setInterval(() => {
    mario = document.querySelector('.mario');
    gameover = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

// That is use current get value for element 
// That is get biadefault px value 
    dx = parseInt( window.getComputedStyle(mario ,null).getPropertyValue('left'));
    dy = parseInt( window.getComputedStyle(mario ,null).getPropertyValue('top'));
    ox = parseInt( window.getComputedStyle(obstacle ,null).getPropertyValue('left'));
    oy = parseInt( window.getComputedStyle(obstacle ,null).getPropertyValue('top'));


    offesetX = Math.abs(dx-ox);
    offesetY = Math.abs(dy-oy);
    // console.log(offesetX,offesetY);
    
    if(offesetX < 73 && offesetY < 52){
        // That property is use for visible element 
        gameover.innerText = "Game Over - Relode to agine Start";
        obstacle.classList.remove('bostacleany');
        // audio start 
        audioGO.play();          
        setTimeout(() => {
            // audio puse 
            audioGO.pause();
            audioM.pause();
        }, 1000);
    }
    else if(offesetX < 145 &&  cross){
        score += 100;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            
            aniDur = parseFloat( window.getComputedStyle(obstacle ,null).getPropertyValue('animation-Duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur +'s';
        }, 500);
    }

}, 100);

function updateScore(score){
    scoreCount.innerHTML = "Your score : " + score;
}