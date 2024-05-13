const form = document.querySelector("#form-deposito");

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2;
};

form.addEventListener("submit", function(e){
  e.preventDefault();
  let formIsValid = false;
  
  const nomeBeneficiario = document.querySelector("#nome-beneficiario");
  const numeroContaBeneficiario = document.querySelector("#numero-conta");
  const valorDepositoBeneficiario = document.querySelector("#valor-deposito");
  const mensagemSucesso = `Deposito feito na conta ${numeroContaBeneficiario.value} em nome de ${nomeBeneficiario.value}, no valor de R$ ${valorDepositoBeneficiario.value}`;
  
  formIsValid = validaNome(nomeBeneficiario.value);
  if (formIsValid) {
    alert(mensagemSucesso);

    nomeBeneficiario.value = "";
    numeroContaBeneficiario.value = "";
    valorDepositoBeneficiario.value = "";

  } else {
    alert("O nome não está completo"); 
  };
});

console.log(form);