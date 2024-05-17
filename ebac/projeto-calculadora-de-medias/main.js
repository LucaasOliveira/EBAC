const listaContato = [];
let linha;

const form = document.querySelector("#form-contatos");
form.addEventListener("submit", function(e){
  e.preventDefault();

  cadastrarContato();
  atualizaLista();

});


function cadastrarContato() {
  const inputNomeContato = document.querySelector("#nome-contato");
  const inputTelefoneContato = document.querySelector("#telefone-contato");
  
  if (listaContato.includes(inputNomeContato.value)){
    alert(`Contato ${inputNomeContato.value} já estava cadastrado.`);
    form.reset();
  } else {
    listaContato.push(inputNomeContato.value);
    listaContato.push(inputTelefoneContato.value);
    
    linha = document.createElement("tr");
    const colNome = document.createElement("td");
    colNome.textContent = inputNomeContato.value;
    const colTelefone = document.createElement("td");
    colTelefone.textContent = inputTelefoneContato.value;
    
    linha.appendChild(colNome);
    linha.appendChild(colTelefone);
    form.reset();
  };
};

function atualizaLista() {
  const ConteudoTabela = document.querySelector("#linha-contato");
  ConteudoTabela.appendChild(linha)
};