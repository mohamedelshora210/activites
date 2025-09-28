'use strict'

const icon = document.querySelector(".icon");
const icon2 = document.querySelector(".icon2");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const div = document.querySelector(".input-group ")
const div2 = document.querySelector(".group ")

const showPass = document.querySelector("#showPass");

$(document).ready(function(){
    setTimeout(() => {
        $('.load').fadeOut(400)
    }, 1500);
})

function focusInput(icon , div){
    icon.classList.add("focus");
    div.classList.add("animate");
}
function blurInput(icon , div){
    icon.classList.remove("focus");
    div.classList.remove("animate");
}

inputEmail.addEventListener("focus" , function(){
 focusInput(icon , div);
    
})
inputPassword.addEventListener("focus" , function(){
   focusInput(icon2 , div2);
    
})
inputEmail.addEventListener("blur" , function(){
    blurInput(icon , div);
})
inputPassword.addEventListener("blur" , function(){
  blurInput(icon2 , div2);
})


showPass.addEventListener("click" , function(){
    if(inputPassword.type == "password")
    {
        inputPassword.type="text";
        showPass.classList.replace("fa-eye" , "fa-eye-slash");
    }
    else
    {
        inputPassword.type="password";
        showPass.classList.replace( "fa-eye-slash" , "fa-eye" );
        
    }
})