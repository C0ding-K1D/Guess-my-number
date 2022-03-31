'use strict';
//class selector
/*document.querySelector('.message').textContent;*/
////ELEMENT TEXT DOM MANIPULATION
/*document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
//VALUE DOM MANIPULATION
document.querySelector('.guess').value = 23;*/
//CLICK EVENTS
let number = Math.trunc(Math.random()* 20) + 1;
let startScore = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
//let startScoreRefresh = 20;
//let scoreRefresh = 0;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);


// WHEN THERE IS NO INPUT VALUE
    if(!guess){
        displayMessage('🚫 No Number!');
    } else if(guess !== number){
        //GUESS LOGIC
        if( startScore > 1){
            document.querySelector('.message').textContent = guess < number ? 'Guess is too low': 'Guess is too high';
            startScore--;
            document.querySelector('.score').textContent = startScore;
        }else{
            document.querySelector('.message').textContent = ' Game Over!';
            document.querySelector('.score').textContent = 0;
        }   
    } else if(guess === number){
        //WHEN PLAYER WINS 
            displayMessage('🎉 Correct Number!') ;
            document.querySelector('.number').textContent = number;
            //document.body.style.backgroundColor = '#82c91e';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            
            if(startScore > highScore){
                highScore = startScore;
                document.querySelector('.highscore').textContent = highScore;
            }
    }
})
    //WHEN GUESS IS TOO LOW 
   /* else if (guess < number){
        if( startScore > 1){
            document.querySelector('.message').textContent = ' Guess is too low';
            startScore--;
            document.querySelector('.score').textContent = startScore;
        }else{
            document.querySelector('.message').textContent = ' Game Over!';
            document.querySelector('.score').textContent = 0;
        }   
    } else if (guess > number){
        //WHEN GUESS IS TOO HIGH
        if(startScore > 1){
            document.querySelector('.message').textContent = ' Guess is too high';
            startScore--;
            document.querySelector('.score').textContent = startScore;
        }else{
            document.querySelector('.message').textContent = 'Game Over!';
            document.querySelector('.score').textContent = 0;
        }*/
        
       

document.querySelector('.again').addEventListener('click', function(){
    startScore = 20;
    number = Math.trunc(Math.random()* 20) + 1;
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = startScore;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').textContent = '?';

    
})

/*document.querySelector('.class').addEventListener('click', function() {

})*/