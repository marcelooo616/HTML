

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("mensagem");

nome.style.width = "65%";
email.style.width = "65%";

function ValidarCampos () {
    if(nome.value == ""){
        alert('O Campo seu nome Precisa ser Preenchido');
    }if ( email.value == "") {
        alert('O Campo seu E-mail Precisa ser Preenchido');
    }if ( message.value == "") {
        alert('O Campo Mensagem Precisa ser Preenchido');
    } else {
        alert('Mensagem enviada com sucesso');
    }
};
/*
function validaNome(){
    let txt = document.querySelector("#txtNome");
         if(nome.nodeValue > 0 && nome.nodeValue < 3){ 
            alert("Nome Invalido");

        }else{
            alert("Nome Valido!")
            };
};
*/
function validacaoMensagem(){

    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Campos não podem ser nulos ou estar vazios");
    }
    else{
        
        alert("Mensagem enviada com sucesso");
    };

};