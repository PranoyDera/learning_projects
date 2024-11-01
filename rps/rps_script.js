const choices=document.querySelectorAll(".choice");
let userScore=0;
let compScore=0;
let userScorePara=document.querySelector(".userScorePara");
let compScorePara=document.querySelector(".compScorePara");
let msg=document.querySelector(".msg");
let note=document.querySelector(".note");

choices.forEach((choice) => {
   choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    gamePlay(userChoice);

   }) 
});

const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="Game Draw";
    msg.style.color="White";
    note.innerText="Everyone lives"
}

const gamePlay=(userChoice)=>{
    const compChoice=gencompChoice();
    console.log(compChoice);
    console.log(userChoice);
    let userWin=true;
    let compWin=false;
    if(userChoice===compChoice)
    {
        drawGame();
        userWin=false;
        compWin=false;
    }
    else
    {
    if(userChoice==="rock")
    {
        if(compChoice==="paper")
        {
            console.log("computer wins");
            userWin=false;
            compWin=true;
        }
        else
        {
            console.log("You win");
            userWin=true;
            compWin=false;
        }
    }
    else if(userChoice==="paper")
    {
        if(compChoice==="scissor")
        {
            console.log("comp wins");
            userWin=false;
            compWin=true;
        }
        else
        {
            console.log("you win");
            userWin=true;
            compWin=false;
        }
    }
    else if(userChoice==="scissor")
    {
        if(compChoice==="paper")
        {
            console.log("you win");
            userWin=true;
            compWin=false;
        }
        else
        {
            console.log("comp wins");
            userWin=false;
            compWin=true;
        }
    }
    }
    winnerSelect(userWin,compWin,userChoice,compChoice);
};
const gencompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
};
const winnerSelect=(userWin,compWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=`User Score: ${userScore}`;
        msg.innerText="You Win";
        msg.style.color="green";
        note.innerText=`Your ${userChoice} beats computer's ${compChoice}`;
    }
    else if(compWin)
    {
        compScore++;
        compScorePara.innerText=`Comp Score: ${compScore}`;
        msg.innerText="Computer Wins";
        msg.style.color="red";
        note.innerText=`Computer's ${compChoice} beats your ${userChoice}`;
    }
}
