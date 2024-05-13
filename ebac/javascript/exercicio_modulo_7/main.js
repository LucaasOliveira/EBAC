const campoA = document.querySelector("#campo-a");
const campoB = document.querySelector("#campo-b");
const formNumeros = document.querySelector("#form-numeros");
const containerMensagem = document.querySelector("#container-mensagem");

formNumeros.addEventListener("submit", function(e){
    e.preventDefault();
    const mensagemSucesso = `Muito bem, o número ${campoA.value} é maior que o número ${campoB.value}`;
    const mensagemErro = `Algo deu errado, o número ${campoA.value} não é maior que o número ${campoB.value}, inverta as ordens ou altere o número do CampoA.`;


   if (campoA.value > campoB.value) {
    containerMensagem.classList.add("msg-sucesso");
    containerMensagem.style.background = "green"
    containerMensagem.style.padding = "8px"
    containerMensagem.style.color = "white"
    containerMensagem.innerHTML = mensagemSucesso;
   } else {
    containerMensagem.classList.add("msg-erro");
    containerMensagem.style.background = "red"
    containerMensagem.style.padding = "8px"
    containerMensagem.style.color = "white"
    containerMensagem.innerHTML = mensagemErro;
   }
});
