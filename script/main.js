import { cadastrar, naoEspaco } from "./produtos.js";

let nome_produto = window.document.getElementById("nome_produto");
nome_produto.addEventListener("change", naoEspaco);

let formulario = window.document.getElementById("formulario");
formulario.addEventListener("submit", cadastrar);