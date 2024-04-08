
//referenciando elementos do index.html
                                        //id de cada elemento
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");
//referenciando elementos do index.html


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" //caracteres que podem ser utilizados para criação das senhas
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// função atribuida ao botão para gerar a senha
function generatePassword(){
    alert('VAMOS GERAR A SENHA')
    let pass = ""; //variavel que armazenará a senha
        
    // i é a variavel criada pelo for e começa em 0
    //n recebe charset que é a variavel que recebe todos os caracteres possiveis
    // se i menor que sliderElement, i recebe i + um elemento
    //sliderElement é a variavel que recebe o numero de caracteres que o usuário escolher
    // n recebe o tamanho do charset
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){ 
        pass += charset.charAt(Math.floor(Math.random() * n)) //pass recebe pass + um caracter
        // o charAt pega com base na posição o item 
        //então, se  a função Math retornar 0, o caracter escolhido sera "a"
        //(Math.random() * n) gera um numero aleatório de 0 até o nunmero de digitos que estão armazenados
        
        //charAt pega uma posição
        //Math.floor gera um numero inteiro
        //Math.random gera um numero aleatório
    }
    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass

}
//função atribuida à div que armazena a senha para copiar a senha ao clicar nela
function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
}