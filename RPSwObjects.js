let score={
    win:0,
    lose:0,
    draw:0,
}
function computerMove(){
    let computerChoice=''
        let randomNumber=Math.random();
        if(randomNumber<=1/3){
             computerChoice='rock';
        }
        else if(randomNumber>1/3 && randomNumber<=2/3){
           computerChoice='paper'
        }
        else{
            computerChoice='Scissors'
        }
        return computerChoice;
}
function playGame(playerMove){
   
    let compychoice= computerMove();
    let result=''
    if(playerMove=='rock'){
        if(compychoice=='rock'){
            result='draw';}
       else if(compychoice=='paper'){
           result='lose'
       }   
       else{
          result='win'
       }
    }

    else if(playerMove=='paper'){
        if(compychoice=='rock'){
            result='win';}
        else if(compychoice=='paper'){
            result='draw'
        }   
        else{
           result='lose'
        }

        // if(result=='lose'){
        //     score.lose+=1
        // }
        // else if(result=='draw'){
        //     score.draw+=1
        // }
        // else{
        //     score.win+=1;
        // }
    }
    else{
        if(compychoice=='rock'){
            result='lose';}
        else if(compychoice=='paper'){
            result='win'
        }   
        else{
           result='draw'
        }


    }
    if(result=='lose'){
        score.lose+=1
    }
    else if(result=='draw'){
        score.draw+=1
    }
    else{
        score.win+=1;
    }
    let scoreStr=JSON.stringify(score)
    localStorage.setItem('score',scoreStr)
    console.log(score)
    alert(`You chose: ${playerMove}. Computer chose: ${compychoice}.
        Result: ${result}. 
        YOUR SCORE: ${score.win} won, ${score.lose} lost, ${score.draw} drawed`);
}

    