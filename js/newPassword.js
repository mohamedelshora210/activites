'use strict'

const ricon2 = document.querySelector(".ricon2");
const icon2 = document.querySelector(".icon2");
const rgroup = document.querySelector(".rgroup ")
const group = document.querySelector(".group ")
const rePasswordInput = document.getElementById("rePasswordInput");
const passwordInput = document.getElementById("passwordInput");
const btn = document.querySelector('.btn');
const form = document.querySelector('form')
const showPass = document.querySelector("#showPass");
const reShowPass = document.querySelector("#reShowPass");

form.addEventListener('submit', (e)=>{
    e.preventDefault()
})

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
};

rePasswordInput.addEventListener("focus" , function(){
 focusInput(ricon2 , rgroup);
    
})

rePasswordInput.addEventListener("blur" , function(){
    blurInput(ricon2 , rgroup);
})
passwordInput.addEventListener("focus" , function(){
 focusInput(icon2 , group);
    
})

passwordInput.addEventListener("blur" , function(){
    blurInput(icon2 , group);
})
btn.addEventListener('click' , ()=>{
    location.href='logIn.html'
})

function showPassword(){
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
}

showPass.addEventListener('click' , showPassword)
reShowPass.addEventListener('click' , showPassword)
