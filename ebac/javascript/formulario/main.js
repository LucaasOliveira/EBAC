let nomeBeneficiario = document.querySelector('#nome-beneficiario');
let botao = document.querySelector('#btn-depositar');

console.log(nomeBeneficiario.value);
console.log(nomeBeneficiario.type);
console.log(nomeBeneficiario.id);
console.log(nomeBeneficiario.required);
console.log(nomeBeneficiario.placeholder);

nomeBeneficiario.value = 'Lucas Almeida de Oliveira';
botao.disable = nomeBeneficiario.value.split(' ').length < 3;
console.log(botao.disable)