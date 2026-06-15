const btnEntrar = document.getElementById("btnEntrar");

const capa = document.getElementById("capa");

const convite = document.getElementById("convite");

btnEntrar.addEventListener("click", () => {

    capa.classList.add("hidden");

    convite.classList.remove("hidden");

});