import { salvar, recuperar } from "./banco.js"


function estrutura(
	campo_nome_produto,
	campo_cod_barra,
	campo_quantidade,
	campo_categoria,
	campo_valor,
) {
	let tbody = window.document.getElementById("lista_produtos")
	let tr = window.document.createElement("tr")
	let td_nome_produto = window.document.createElement("td")
	let td_cod_barra = window.document.createElement("td")
	let td_quantidade = window.document.createElement("td")
	let td_categoria = window.document.createElement("td")
	let td_valor = window.document.createElement("td")
	let td_acao = window.document.createElement("td")

	let div_quantidade = window.document.createElement("div")
	let div_valor = window.document.createElement("div")
	let div_acao = window.document.createElement("div")

	let span_quntidade_numero = window.document.createElement("span")
	let span_quntidade_sigla = window.document.createElement("span")
	let span_valor_sigla = window.document.createElement("span")
	let span_valor_numero = window.document.createElement("span")
	let button_acao_editar = window.document.createElement("button")
	let button_acao_excluir = window.document.createElement("button")

	td_nome_produto.textContent = campo_nome_produto
	td_cod_barra.textContent = campo_cod_barra

	span_quntidade_numero.textContent = campo_quantidade
	span_quntidade_sigla.textContent = "UN"

	div_quantidade.appendChild(span_quntidade_numero)
	div_quantidade.appendChild(span_quntidade_sigla)
	td_quantidade.appendChild(div_quantidade)

	td_categoria.textContent = campo_categoria

	span_valor_sigla.textContent = "R$"

	if (campo_valor.includes(",") || campo_valor.includes(".")) {
		span_valor_numero.textContent = campo_valor
	} else {
		span_valor_numero.textContent = Number(campo_valor).toFixed(2)
	}

	div_valor.appendChild(span_valor_sigla)
	div_valor.appendChild(span_valor_numero)
	td_valor.appendChild(div_valor)

	button_acao_editar.textContent = ""
	button_acao_excluir.textContent = ""

	div_acao.appendChild(button_acao_editar)
	div_acao.appendChild(button_acao_excluir)
	td_acao.appendChild(div_acao)

	tr.appendChild(td_nome_produto)
	tr.appendChild(td_cod_barra)
	tr.appendChild(td_quantidade)
	tr.appendChild(td_categoria)
	tr.appendChild(td_valor)
	tr.appendChild(td_acao)

	tbody.appendChild(tr)

	if (tbody.scrollHeight > tbody.clientHeight) {
		tbody.scrollTop = tbody.scrollHeight;
	}
}


export function naoEspaco(campo) {
	if (campo.value.trim() == "") {
		campo.value = ""
	}
}


export function cadastrar(formulario, evento) {
	evento.preventDefault();

	

	let cod_barra = window.document.getElementById("cod_barra").value
	let quantidade = window.document.getElementById("quantidade").value
	let categoria = window.document.getElementById("categoria").value
	let valor = window.document.getElementById("valor").value

	let registro = recuperar();

	let produto = {
		nome: nome_produto.value,
		cod_barra: cod_barra,
		quantidade: quantidade,
		categoria: categoria,
		valor: valor,
	}

	registro.push(produto);

	estrutura(
		produto.nome,
		produto.cod_barra,
		produto.quantidade,
		produto.categoria,
		produto.valor
	)

	salvar(registro);

	formulario.reset();
}


export function visualizar() {
	let registro = recuperar();

	for (let indicador_registro = 0; indicador_registro < registro.length; indicador_registro ++) {
		let produto = registro[indicador_registro]
			estrutura(produto.nome, produto.cod_barra, produto.quantidade, produto.categoria, produto.valor)
		}
}
