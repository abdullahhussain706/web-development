let btn=document.querySelectorAll(".btn");
let res=document.querySelector(".reset");
let msg=document.querySelector(".msgContainer");

let turnx=true;
let patternWin=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

btn.forEach(box => {
    box.addEventListener("click",()=>{
        if(turnx){
            box.innerText="X";
            turnx=false;
        }
        else{
            box.innerText="O";
            turnx=true;
        }
        box.disabled=true;

        checkWinner();
    })
});

const checkWinner=()=>{
    for(pattern of patternWin)
    {
        let pos1=btn[pattern[0]].innerText;
        let pos2=btn[pattern[1]].innerText;
        let pos3=btn[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="") {
            if(pos1===pos2 && pos2===pos3){
                msg.innerText=`Congratulations! Winner is ${pos1}`;
                msg.classList.remove("hide");
                disableButtons();
            }
        }
    }
}

const disableButtons= ()=>{
    btn.forEach(box=> box.disabled=true);
}

res.addEventListener("click",()=>{
    btn.forEach(box=>{
        box.innerText = "";
        box.disabled = false;
    })
    turnx=true;
    msg.classList.add("hide");
})