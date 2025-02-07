
document.querySelector("#submitBtn").addEventListener("click",()=>{

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword=document.querySelector("#confirmPassword").value;

    let nameError=document.querySelector("#nameError");
    let pswdError=document.querySelector("#passwordError");
    let conPswdError=document.querySelector("#confirmPasswordError");

    nameError.innerHTML = "";
    pswdError.innerHTML = "";
    conPswdError.innerHTML = "";

    let len =name.length;
    let pswd=password.length;

    if(name === "" || len < 3){
        nameError.innerHTML="Invalid Name (must be at least 3 characters)";
    }
    if(pswd <= 6){
        pswdError.innerHTML="Password Length must be greater than 6.";
    }

    if(confirmPassword !== password){
        conPswdError.innerHTML="Password doesn't Match!";
    }
});
