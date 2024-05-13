const form = document.querySelector("#form-deposito");
const nomeBeneficiario = document.querySelector("#nome-beneficiario");
let formIsValid = false;
const containerMensagemErro = document.querySelector(".mensagem-erro");
const mensagemErro = `O nome precisa estar completo.`

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2;
};

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  const numeroContaBeneficiario = document.querySelector("#numero-conta");
  const valorDepositoBeneficiario = document.querySelector("#valor-deposito");
  const mensagemSucesso = `Deposito feito na conta: <b>${numeroContaBeneficiario.value}</b> em nome de <b>${nomeBeneficiario.value}</b>, no valor de R$ <b>${valorDepositoBeneficiario.value}</b>`;
  
  formIsValid = validaNome(nomeBeneficiario.value);
  if (formIsValid) {
    const containerMensagemSucesso = document.querySelector(".mensagem-sucesso");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    nomeBeneficiario.value = "";
    numeroContaBeneficiario.value = "";
    valorDepositoBeneficiario.value = "";

  } 
});

nomeBeneficiario.addEventListener("keyup", function(e){
  console.log(e.target.value);
  formIsValid = validaNome(e.target.value);

  if(!formIsValid){
    nomeBeneficiario.classList.add("input-error")
    containerMensagemErro.style.display = "block";
    containerMensagemErro.innerHTML = mensagemErro;
  } else {
    nomeBeneficiario.classList.remove("input-error")
    containerMensagemErro.style.display = "none";
  }

});