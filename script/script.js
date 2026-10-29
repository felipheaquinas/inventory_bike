let nome_produto = window.document.getElementById("nome_produto")
let formulario = window.document.getElementById("formulario")
let pesquisa = window.document.getElementById("pesquisa")
let res = window.document.getElementById("res")

let registros = []

function naoEspaco(){
    if (nome_produto.value.trim() == ''){
        nome_produto.value = ''
    }
}

function cadastrar(event) {
    event.preventDefault();

    let cod_barra = window.document.getElementById("cod_barra").value
    let quantidade = window.document.getElementById("quantidade").value
    let categoria = window.document.getElementById("categoria").value
    let valor = window.document.getElementById("valor").value

    let tbody = window.document.getElementById('lista_produtos')
    let tr = window.document.createElement('tr')
    let td_nome_produto = window.document.createElement('td')
    let td_cod_barra = window.document.createElement('td')
    let td_quantidade = window.document.createElement('td')
    let td_categoria = window.document.createElement('td')
    let td_valor = window.document.createElement('td')
    let td_acoes = window.document.createElement('td')

    td_nome_produto.textContent = nome_produto.value
    td_cod_barra.textContent = cod_barra
    td_quantidade.textContent = quantidade
    td_categoria.textContent = categoria
    td_valor.textContent = valor
    td_acoes.textContent = 'acoes'

    tr.appendChild(td_nome_produto)
    tr.appendChild(td_cod_barra)
    tr.appendChild(td_quantidade)
    tr.appendChild(td_categoria)
    tr.appendChild(td_valor)
    tr.appendChild(td_acoes)

    tbody.appendChild(tr)

    registros.push([nome_produto.value,
        cod_barra,
        quantidade,
        categoria,
        valor,
        acoes
    ])

    res.innerText = registros
}


function alterar() {

}

function visualizar() {

}

function deletar() {

}

nome_produto.addEventListener('change', naoEspaco)

formulario.addEventListener("submit", cadastrar)