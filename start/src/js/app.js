// Write your code here
import { getWord, isInDictionary } from "./words";
import { gameWon, gameOver, addTile } from "./tiles";

let inputElement = document.getElementById("userInput");
let level = 5;
let word = getWord(level);
console.log(word);
let totalChances = 6;

inputElement.addEventListener('keyup', (event) => {
    let guess = inputElement.value.toLowerCase();
    let keyPressed = event.key;
    console.log(keyPressed)
    if(keyPressed === "Enter" && guess.length === 5 && totalChances>0){
        if(guess===word){
            gameWon(guess);
            return;
        }
        if(isInDictionary(guess)){
            for(let i=0; i<guess.length; i++){
                if(guess[i]===word[i])
                    addTile(guess[i], 'green')
                else if (word.includes(guess[i]))
                    addTile(guess[i], 'orange')
                else
                    addTile(guess[i], 'grey')
            }
            totalChances--;
        }
        event.target.value = ''
    }
    if(totalChances===0){
        gameOver()
        return;
    }
})

// while (totalChances>0){
//     if()
// }