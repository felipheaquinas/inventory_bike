import { cadastrar, naoEspaco, visualizar } from "./produtos.js";

visualizar()

let nome_produto = window.document.getElementById("nome_produto");

nome_produto.addEventListener("change", () => {
    naoEspaco(nome_produto)
});


let formulario = window.document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    cadastrar(formulario, evento);
});