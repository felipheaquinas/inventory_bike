export function salvar(produtos) {
    localStorage.setItem('produtos', JSON.stringify(produtos))
}

export function recuperar() {
    const dados = localStorage.getItem('produtos')

    if (dados) {
        return JSON.parse(dados)
    } else {
        return []
    }
}