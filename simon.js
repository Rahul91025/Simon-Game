let gameSeq=[];
let userSeq=[];

let btns =["yellow" ,"red" ,"purple" , "green"];

let started =false;
let level=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" ,function(){
    if(started==false){
        console.log("game was started");
        started=true;
        levelup();
    }

});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userbtnflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randInx = Math.floor(Math.random()*3);
    let randcolor =btns[randInx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randInx);
    // console.log(randcolor);
    // console.log(randbtn);

    gameSeq.push(randcolor);
    console.log(gameSeq);

    gameflash(randbtn);
};
s
function checkAns(idx){
    
    if(gameSeq[idx]===userSeq[idx]){
         setTimeout(levelup,1000);
    }
    else{
        h2.innerHTML =`Game over !  your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn = this;
    userbtnflash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);

};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" ,btnpress);

}
function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}
