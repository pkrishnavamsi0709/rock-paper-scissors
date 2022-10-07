let val;
let str=["Paper","Scissors","Rock"];
let ourval;
let ourran;


document.getElementById("rock").onclick=function(){
    ourval=3;
    val=Math.floor(Math.random()*3)+1;
    ourran=str[ourval-1];
    ran=str[val-1];
    if(ourval>val){
        document.getElementById("result").innerHTML="YOU WIN";
        document.getElementById("player1").innerHTML=ourran;
        document.getElementById("computer1").innerHTML=ran;

    }
    else if(ourval==val){
        document.getElementById("result").innerHTML="DRAW";
        document.getElementById("player1").innerHTML=ourran;
        document.getElementById("computer1").innerHTML=ran;
    }
    else{
        document.getElementById("result").innerHTML="YOU LOOSE";
        document.getElementById("player1").innerHTML=ourran;
        document.getElementById("computer1").innerHTML=ran;
    }

}

document.getElementById("scissors").onclick=function(){
    ourval=2;
    val=Math.floor(Math.random()*3)+1;
    ourran=str[ourval-1];
    ran=str[val-1];
    if(ourval>val){
        document.getElementById("result").innerHTML="YOU WIN";
        document.getElementById("player1").innerHTML=ourran;
        document.getElementById("computer1").innerHTML=ran;

    }
    else if(ourval==val){
        document.getElementById("result").innerHTML="DRAW";
        document.getElementById("player1").innerHTML=ourran;
        document.getElementById("computer1").innerHTML=ran;
    }
    else{
        document.getElementById("result").innerHTML="YOU LOOSE";
        document.getElementById("player1").innerHTML=ourran;
        document.getElementById("computer1").innerHTML=ran;
    }

}
document.getElementById("paper").onclick=function(){
    ourval=1;
    val=Math.floor(Math.random()*3)+1;
    ourran=str[ourval-1];
    ran=str[val-1];
    if(ourval>val){
        document.getElementById("result").innerHTML="YOU WIN";
        document.getElementById("player1").innerHTML=ourran;
        document.getElementById("computer1").innerHTML=ran;

    }
    else if(ourval==val){
        document.getElementById("result").innerHTML="DRAW";
        document.getElementById("player1").innerHTML=ourran;
        document.getElementById("computer1").innerHTML=ran;
    }
    else{
        document.getElementById("result").innerHTML="YOU LOOSE";
        document.getElementById("player1").innerHTML=ourran;
        document.getElementById("computer1").innerHTML=ran;
    }

}