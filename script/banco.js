export function salvar(registro) {
    localStorage.setItem('produtos', JSON.stringify(registro))
}

export function recuperar() {
    const dados = localStorage.getItem('produtos')

    if (dados) {
        return JSON.parse(dados)
    } else {
        return []
    }
}