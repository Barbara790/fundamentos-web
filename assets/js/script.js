/*
tag: getElementByTagName()
 let nome = window.document.getElementById('nome')
id: getElementById()
nome: getElementByName()
classe: getElementByClassName()
selector: querySelector()

*/

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk =false
let emailOk =false
let assuntoOk =false
let mapa =document.querySelector('#mapa')


nome.style.width = '50%'
email.style.width = '50%'
assunto.style.width = '50%'

function validaNome() {
    let txt=document.querySelector('#textoNome')
    if(nome.value.length <3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    }
    else{
        txt.innerHTML = 'Nome válido'
        txt.style.color='green'
        nomeOk =true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#textoEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf ('.') == -1){
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'Email valido'
        txtEmail.style.color='green'
        emailOk = true
    }
}

function validaAssunto() {
        let txtAssunto = document.querySelector('#textoAssunto')
        if(assunto.value.length >=100){
            txtAssunto.innerHTML = 'Máximo de 100 caracteres'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'
        }
        else{
            txtAssunto.style.display = 'none'
            assuntoOk = true

        }

    }

    function enviar() {
        if(nomeOk == true && emailOk == true && assuntoOk == true){
            alert('Formulário enviado com sucesso')
        }
        else{
            alert('Erro no preenchimento do formulário')
        }
        
    }


    function mapaZoom() {
        mapa.style.width = '800px'
        mapa.style.height = '600px'
    }

    function mapaNormal() {
        mapa.style.width = '400px'
        mapa.style.height = '250px'
        
    }
    


