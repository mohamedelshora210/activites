'use strict'

const icon = document.querySelector(".icon");
const div = document.querySelector(".input-group ")
const inputEmail = document.getElementById("emailInput");
const btn = document.querySelector('.btn');
const form = document.querySelector('form')

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

inputEmail.addEventListener("focus" , function(){
 focusInput(icon , div);
    
})

inputEmail.addEventListener("blur" , function(){
    blurInput(icon , div);
})
btn.addEventListener('click' , ()=>{
    location.href='newPassword.html'
})
$(document).ready(function(){
    setTimeout(() => {
        $('.load').fadeOut(400)
    }, 1500);
})