let btn=document.querySelector("#btn");
let mode="light";

btn.addEventListener("click",()=>{
    let a=document.querySelector("body");
    if(mode==="light")
    {
        
        a.style.backgroundColor="black";
        a.style.color="white";
        mode="dark";
    }
    else {
        a.style.backgroundColor = "white";
        a.style.color = "black";
        mode = "light";
    }
})