let nome_produto = window.document.getElementById("nome_produto");
let formulario = window.document.getElementById("formulario");
let pesquisa = window.document.getElementById("pesquisa");

let registros = [];

function naoEspaco() {
  if (nome_produto.value.trim() == "") {
    nome_produto.value = "";
  }
}

function cadastrar(event) {
  event.preventDefault();

  let cod_barra = window.document.getElementById("cod_barra").value;
  let quantidade = window.document.getElementById("quantidade").value;
  let categoria = window.document.getElementById("categoria").value;
  let valor = window.document.getElementById("valor").value;

  let tbody = window.document.getElementById("lista_produtos");
  let tr = window.document.createElement("tr");
  let td_nome_produto = window.document.createElement("td");
  let td_cod_barra = window.document.createElement("td");
  let td_quantidade = window.document.createElement("td");
  let td_categoria = window.document.createElement("td");
  let td_valor = window.document.createElement("td");
  let td_acao = window.document.createElement("td");
  let div_quantidade = window.document.createElement("div");
  let div_valor = window.document.createElement("div");
  let div_acao = window.document.createElement("div");
  let span_quntidade_numero = window.document.createElement("span");
  let span_quntidade_sigla = window.document.createElement("span");
  let span_valor_sigla = window.document.createElement("span");
  let span_valor_numero = window.document.createElement("span");
  let span_acao_editar = window.document.createElement("span");
  let span_acao_excluir = window.document.createElement("span");

  td_nome_produto.textContent = nome_produto.value;
  td_cod_barra.textContent = cod_barra;

  span_quntidade_numero.textContent = quantidade;
  span_quntidade_sigla.textContent = 'UN';

  div_quantidade.appendChild(span_quntidade_numero);
  div_quantidade.appendChild(span_quntidade_sigla);
  td_quantidade.appendChild(div_quantidade);

  td_categoria.textContent = categoria;

  span_valor_sigla.textContent = 'R$';

  if (valor.includes(',') || valor.includes('.')){
    span_valor_numero.textContent = valor;
  } else {
    span_valor_numero.textContent = Number(valor).toFixed(2);
  }
  
  
  div_valor.appendChild(span_valor_sigla);
  div_valor.appendChild(span_valor_numero);
  td_valor.appendChild(div_valor);

  span_acao_editar.textContent = '+';
  span_acao_excluir.textContent = '-';
  
  div_acao.appendChild(span_acao_editar);
  div_acao.appendChild(span_acao_excluir);
  td_acao.appendChild(div_acao);


  tr.appendChild(td_nome_produto);
  tr.appendChild(td_cod_barra);
  tr.appendChild(td_quantidade);
  tr.appendChild(td_categoria);
  tr.appendChild(td_valor);
  tr.appendChild(td_acao);

  tbody.appendChild(tr);

  formulario.reset();

  if (tbody.scrollHeight > tbody.clientHeight) {
    tbody.scrollTop = tbody.scrollHeight;
  }
}

function alterar() {}

function visualizar() {}

function deletar() {}

nome_produto.addEventListener("change", naoEspaco);

formulario.addEventListener("submit", cadastrar);
