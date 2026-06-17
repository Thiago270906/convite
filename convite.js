const btnEntrar = document.getElementById("btnEntrar");
const capa = document.getElementById("capa");
const convite = document.getElementById("convite");
const envelope = document.getElementById("envelope");

const mascara = document.getElementById("mascara");
const logo = document.getElementById("logoConvite");
const conteudo = document.getElementById("conteudoConvite");
const poeira = document.getElementById("poeiraDourada");
const borda = document.getElementById("borda");

btnEntrar.addEventListener("click", () => {

    // anima envelope
    envelope.classList.add("envelope-open");

    setTimeout(() => {

        // desaparece capa
        capa.classList.add("fade-out");

        setTimeout(() => {

            // troca de telas
            capa.classList.add("hidden");
            convite.classList.remove("hidden");

            poeira.classList.add("poeira-animar");
            borda.classList.add("borda-animar");
            // máscara entra primeiro
            mascara.classList.add("mascara-animar");

            // logo entra depois
            setTimeout(() => {
                logo.classList.add("logo-animar");
            }, 400);

            // conteúdo aparece por último
            setTimeout(() => {

                conteudo.classList.add("conteudo-animar");

            }, 1000);

        }, 1000);

    }, 700);

});