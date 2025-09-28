'use strict'

const icon = document.querySelector(".icon");
const lIcon = document.querySelector(".licon");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const iconId = document.querySelector(".iconId");
const phoneicon = document.querySelector(".phoneicon");
const usericon = document.querySelector(".usericon");
const inputEmail = document.getElementById("emailInput");
const inputName = document.getElementById("nameInput");
const lInputName = document.getElementById("lNameInput");
const inputPassword = document.getElementById("passwordInput");
const inputNumber = document.getElementById("inputNumber");
const userName = document.getElementById("userName");
const phone = document.getElementById("phone");
const div = document.querySelector(".group ");
const lDiv = document.querySelector(".lgroup ");
const div1 = document.querySelector(".group1 ");
const div2 = document.querySelector(".group2");
const groupId = document.querySelector(".groupId");
const phonegroup = document.querySelector(".phonegroup");
const usergroup = document.querySelector(".usergroup");
const form = document.querySelector("form");
const btnSignUp = document.getElementById("btnSignUp");
const correctParagraph = document.querySelector(".correct");
const showPass = document.querySelector("#showPass");

form.addEventListener("submit",(e)=>{
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
}

inputName.addEventListener("focus" , function(){
 focusInput(icon , div);
    
})
lInputName.addEventListener("focus" , function(){
 focusInput(lIcon , lDiv);
    
})
userName.addEventListener("focus" , function(){
 focusInput(usericon , usergroup);
    
})
inputNumber.addEventListener("focus" , function(){
 focusInput(iconId , groupId);
    
})
phone.addEventListener("focus" , function(){
 focusInput(phoneicon , phonegroup);
    
})

inputEmail.addEventListener("focus" , function(){
   focusInput(icon1 , div1); 
})
inputPassword.addEventListener("focus" , function(){
   focusInput(icon2 , div2); 
})
inputName.addEventListener("blur" , function(){
    blurInput(icon , div);
})
lInputName.addEventListener("blur" , function(){
 blurInput(lIcon , lDiv);
    
})
userName.addEventListener("blur" , function(){
 blurInput(usericon , usergroup);
    
})
phone.addEventListener("blur" , function(){
 blurInput(phoneicon , phonegroup);
    
})

inputNumber.addEventListener("blur" , function(){
 blurInput(iconId , groupId);
    
})
inputEmail.addEventListener("blur" , function(){
  blurInput(icon1 , div1);
})
inputPassword.addEventListener("blur" , function(){
  blurInput(icon2 , div2);
})

function validationForm(input){
    var regex = {
        inputNumber :/^[0-9]{3,15}$/ ,
        nameInput :/^[a-z0-9_-]{3,15}$/ ,
        lNameInput :/^[a-z0-9_-]{3,15}$/ ,
        userName :/^[a-z0-9_-]{3,15}$/ ,
        phone :/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ ,
        emailInput : /^[\w-]{3,50}\@[a-z]{3,10}\.[a-z]{1,8}$/ ,
        passwordInput : /^[\w\W-]{8,30}$/
    }
    if(regex[input.id].test(input.value) == false)
    {
        
    
        return false ;
    }
    else
    {
 
        return true ;
    }

}

inputNumber.addEventListener("input" , function(){
    validationForm(inputNumber)
})
lInputName.addEventListener("input" , function(){
    validationForm(lInputName)
})
inputName.addEventListener("input" , function(){
    validationForm(inputName)
})
userName.addEventListener("input" , function(){
    validationForm(userName)
})
phone.addEventListener("input" , function(){
    validationForm(phone)
})
inputEmail.addEventListener("input" , function(){
    validationForm(inputEmail)
})
inputPassword.addEventListener("input" , function(){
    validationForm(inputPassword)
})


//add input
function addInput(){
    if(validationForm(inputName) 
        && validationForm(lNameInput) 
        && validationForm(inputEmail) 
        && validationForm(inputPassword) 
        && validationForm(inputNumber) 
        && validationForm(phone) 
        && validationForm(userName) )
    {

            correctParagraph.innerHTML = "تسجيل الدخول بنجاح ";
            correctParagraph.classList.remove("text-danger");
            correctParagraph.classList.add("text-success");
            clearInput()
            location.href = 'logIn.html'
    }
    else if(validationForm(inputNumber) == false   )
    {
         correctParagraph.innerHTML = "أدخل معرف الطالب";
        correctParagraph.classList.add("text-danger");
        correctParagraph.classList.remove("text-success");
       
    }
    else if(validationForm(phone) == false   )
    {
         correctParagraph.innerHTML = "أدخل هاتف الطالب";
        correctParagraph.classList.add("text-danger");
        correctParagraph.classList.remove("text-success");
       
    }
    else if(validationForm(userName) == false   )
    {
         correctParagraph.innerHTML = "أدخل اسم المستخدم";
        correctParagraph.classList.add("text-danger");
        correctParagraph.classList.remove("text-success");
       
    }
    else if(validationForm(inputName) == false || validationForm(lNameInput) == false   )
    {
         correctParagraph.innerHTML = "الاسم على الأقل 3 حروف باللغة الإنجليزية";
        correctParagraph.classList.add("text-danger");
        correctParagraph.classList.remove("text-success");
       
    }
    else if(validationForm(inputEmail) == false)
    {
        correctParagraph.innerHTML = "الرجاء إدخال بريد إلكتروني صالح";
        correctParagraph.classList.add("text-danger");
        correctParagraph.classList.remove("text-success");
        
    }
    else if(validationForm(inputPassword) == false)
    {
        correctParagraph.innerHTML = "كلمة المرور على الأقل 8 حروف";
        correctParagraph.classList.add("text-danger");
        correctParagraph.classList.remove("text-success");
        
    }
    else
    {
    
        correctParagraph.innerHTML = "الرجاء إدخال معلومات صحيحة";
        correctParagraph.classList.add("text-danger");
        correctParagraph.classList.remove("text-success");
        
    }
}


//clear input
function clearInput(){
    inputName.value = null;
    inputEmail.value = null;
    inputPassword.value = null;
}


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

btnSignUp.addEventListener("click" , addInput);


                       