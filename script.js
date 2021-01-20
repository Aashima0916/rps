// const prompt = require("prompt-sync")();
let resultDiv = document.getElementById('result');
let scoreDiv = document.getElementById('scoreBoard');
let moveDiv = document.getElementById('moveBoard');

let rockDiv = document.getElementById('rock');
let paperDiv = document.getElementById('paper');
let scissorDiv = document.getElementById('scissor');

let resetBtn = document.getElementById('reset');



class refree {
    legalMove(user) {
        if (user !== "r" && user !== "s" && user !== "p") {
            return false;
        } else {
            return true;
        }
    }
    updateScore(arr, userChoice, compChoice) {
        switch (userChoice + compChoice) {
            case "rs":
            case "pr":
            case "sp":
                arr[0]++;
                console.log('User Wins!');
                resultDiv.textContent = 'User Won!';
                break;
            case "rp":
            case "ps":
            case "sr":
                arr[1]++;
                console.log('Computer Wins!');
                resultDiv.textContent = 'Computer Won!';
                break;
            case "rr":
            case "ss":
            case "pp":
                console.log('Draw!');
                resultDiv.textContent = 'Draw!';
                break;
        }
    }
};   


class gameState{
    constructor() {
        this.scoreBoard = [0, 0];
    }

    resetBoard(){
        this.scoreBoard = [0, 0];
    }
};

class game{
    constructor(){
        this.computerScore = 0;
        this.TotalMoves = 3;
        this.rfre = new refree();
        this.b = new gameState();
    }

    /*
    newGame(){
        console.clear();
        
        console.log("Valid Inputs are : r, p, s and q for quit");
        while(this.TotalMoves > 0){
            console.log("\nUser: " + String(b.scoreBoard[0]) + " Computer: " + String(b.scoreBoard[1]));
            console.log("User Input");
            let move = prompt();
            //console.log(move);
            move = String(move);
            let randComp = Math.floor(Math.random() * 3);
            let choices = ['r', 'p', 's'];

            if(move=='q' || move=='Q') return;
            while(rfre.legalMove(move) === false){
                console.log("Please enter a valid input!");
                move = prompt();
                if(move=='q' || move=='Q') return;
            }
            console.log(move + " vs " + choices[randComp]);
            rfre.updateScore(b.scoreBoard, move, choices[randComp]);
            
            this.TotalMoves -= 1;

            console.log('----------------');
        }
        
        console.log('\nFinal Result:')
        if(b.scoreBoard[0] > b.scoreBoard[1]) console.log("User Won");
        else if(b.scoreBoard[0] < b.scoreBoard[1]) console.log("Computer Won");
        else console.log("Draw");
    }
    */

    makeMove(move) {
        if(this.TotalMoves === 0) {
            return;
        }
        let randComp = Math.floor(Math.random() * 3);
        let choices = ['r', 'p', 's'];
        moveDiv.textContent = move + " vs " + choices[randComp];
        this.rfre.updateScore(this.b.scoreBoard, move, choices[randComp]);
        scoreDiv.textContent = 'User: ' + String(this.b.scoreBoard[0]) + ' Computer: ' + String(this.b.scoreBoard[1]); 
        this.TotalMoves -= 1;
        if(this.TotalMoves === 0) {
            if(this.b.scoreBoard[0] > this.b.scoreBoard[1]) {
                resultDiv.textContent = 'Final: User Won!';
            } 
            else if(this.b.scoreBoard[0] < this.b.scoreBoard[1]) {
                resultDiv.textContent = 'Final: Computer Won!';
            }
            else resultDiv.textContent = 'Final: Draw!';
        }
    }
    resetGame() {
        this.computerScore = 0;
        this.TotalMoves = 3;
        this.b.resetBoard();   
        resultDiv.textContent = ' ';
        moveDiv.textContent = ' ';
        scoreDiv.textContent = ' ';
    }
}

let game1 = new game();

rockDiv.addEventListener('click', () => {
    game1.makeMove('r')
});
paperDiv.addEventListener('click', () => {
    game1.makeMove('p')
});
scissorDiv.addEventListener('click', () => {
    game1.makeMove('s')
});
resetBtn.addEventListener('click', () => {
    game1.resetGame()
})