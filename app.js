let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genComputerchoice = () => {
const options=  ["rock","paper","scissors"];
const indx=Math.floor(Math.random()*3);
return options[indx];
};

const drawGame= () =>{
    console.log("The game was a draw");
    msg.innerText="The game was a draw. Play again";
}


const showWinner =(userWin,userchoice,compchoice) => {
if(userWin)
{
    userscore++;
    userscorepara.innerText=userscore;
    console.log("You won the game");
    msg.innerText=`You won the game! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
}
else{
    compscore++;
    compscorepara.innerText=compscore;
    console.log("You lost the game");
    msg.innerText=`You lost the game. ${compchoice} beats your ${userchoice} `;
    msg.style.backgroundColor="red";
}
};

const playGame= (userchoice) => {
    console.log("User choice =",userchoice);
    const compchoice=genComputerchoice();
    console.log("Computer choice =",compchoice);

    if(userchoice === compchoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice === "rock"){
            userWin = compchoice === "paper" ? false:true;
        }
        else if(userchoice === "paper")
        {
            userWin = compchoice === "scissors"?false:true;
        }
        else
        {
            userWin = compchoice === "rock"?false:true;  
        }
showWinner(userWin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
choice.addEventListener("click",() =>{
const userchoice = choice.getAttribute("id");
playGame(userchoice);
})
});