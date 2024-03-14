let boxes=document.querySelectorAll('.box');
let resetButton=document.querySelector('.rest-btn');
let newgameButton=document.querySelector('.new-btn');
let msgblock=document.querySelector('.msg-container');
let msg=document.querySelector('#mymsg');

let turnO=false;

const win_pat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener('click',()=>
    {
        console.log('box clicked');
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });

});
const showWinner=(winner) => {
    msg.innerText = `Congratulations! \n <br> ${winner} Won.`;
    msgblock.classList.remove('hide');
    disableBtn();

}

const checkWinner = () => {
    for(let pattern of win_pat){
        p1=boxes[pattern[0]].innerText;
        p2=boxes[pattern[1]].innerText;
        p3=boxes[pattern[2]].innerText;
        //console.log(p1,p2,p3);
        if(p1!='' && p2!='' && p3!=''){if(p1===p2 && p1===p3){
            console.log('Winner',p1);
            showWinner(p1);
        }}
    }
}

const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBtn = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetB = ()=>{
    enableBtn();
    turnO=false;
    msgblock.classList.add("hide");
}

newgameButton.addEventListener("click",resetB);
resetButton.addEventListener("click",resetB);