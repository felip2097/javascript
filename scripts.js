const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobselect = document.querySelector("#job")
const messageTextarea = document.querySelector("message")

form.addEventListener("submit",(Event) => {

    Event.preventDefault();



    if(nameInput.value ==="") {
        alert("Preencha seu nome")
        return;
    }

    if(emailInput.value === "" ||  !isEmailValid(emailInput.value)) {
        alert("Preencha seu email");
        return;
    }

    if(validatePassoword(passwordInput.value, 8)){
        alert ("A senha tem quer ter no minimo 8 digitos")
    }


    if(jobselect.value === ""){
        alert ("Selecione sua situação");
        return;
    }

    if (messageTextarea.value === ""){
        alert ("Escreva uma mensagem");
        return;
    }

    form.submit();

});

function isEmailValid(email) {


const emailRegex = new RegExp(
    //felipin12@host.com.br
    /^[a-zA-Z0-9. -]+@[A-zA-Z0-9. -]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;

    function validatePassoword(passoword, minDigits) {
    if(passoword.lenght >= minDigits){

        return true
    }

    return false


    }
   
}