console.log('i am linked :)');

// for(let i = 0; i < 10; i++){
    
// }

// do while loop


let i = 5;

// while(i < 10){
//     console.log(i);
// }



// do{
//     console.log(i);
//     i++
// } while (i < 10)


const clickMe = document.querySelector('#game');
console.log(clickMe);




// guessingGame();
function startGame(){
    
    function guessingGame(){
        let computerNumber = Math.floor(Math.random() *10);
        let playerGuess;
    
        playerGuess = prompt('pick a number between 1 and 10');
        console.log(playerGuess, computerNumber);
    
        do{
            console.log(playerGuess, computerNumber);
            if(playerGuess > computerNumber){
               playerGuess = prompt("your answer is too high");
            } else if(playerGuess < computerNumber){
              playerGuess =  prompt("your guess is too small");
            }
    
        } while(playerGuess != computerNumber);
        document.write('<h1>you win :)</h1>');
    
        // console.log(computerNumber);
    }
    guessingGame();
}


clickMe.addEventListener('click', startGame);





