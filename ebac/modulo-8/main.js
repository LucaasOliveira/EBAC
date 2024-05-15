const form = document.querySelector("#form-atividade");
const imgAprovado = document.createElement('img');
imgAprovado.src = "./images/aprovado.png";
imgAprovado.alt = "emoji celebrando";

const imgReprovado = document.createElement('img');
imgReprovado.src = "./images/reprovado.png";
imgReprovado.alt = "emoji triste";

const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`

const atividades = [];
const notas = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const linha = adicionaLinha();
  atualizaLinha(linha);
  atualizaMediaFinal();
  form.reset();
});

function adicionaLinha() {
  const inputNomeAtividade = document.querySelector("#nome-atividade");
  const inputNotaAtividade = document.querySelector("#nota-atividade");

  if(atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`);
    form.reset();
  } else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    const linha = document.createElement('tr');
    const colNome = document.createElement('td');
    colNome.textContent = inputNomeAtividade.value;
    const colNota = document.createElement('td');
    colNota.textContent = inputNotaAtividade.value;
    const colStatus = document.createElement('td');
    colStatus.appendChild(inputNotaAtividade.value >= 7 ? imgAprovado.cloneNode(true) : imgReprovado.cloneNode(true));

    linha.appendChild(colNome);
    linha.appendChild(colNota);
    linha.appendChild(colStatus);

    return linha;
  };
};

function atualizaLinha(linha) {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.appendChild(linha);
};

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();
  document.querySelector("#media-final-nota").textContent = mediaFinal.toFixed(2);
  document.querySelector("#media-final-resultado").innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado; 

  console.log(mediaFinal);
};

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  };

  return somaDasNotas / notas.length;
};