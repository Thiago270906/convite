const btnEntrar = document.getElementById("btnEntrar");
const capa = document.getElementById("capa");
const convite = document.getElementById("convite");
const btnMais = document.getElementById('btnMais');
const conviteExtra = document.getElementById('conviteExtra');


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

btnMais.addEventListener('click', () => {
    conviteExtra.classList.remove('hidden');

    conviteExtra.scrollIntoView({
        behavior: 'smooth'
    });
});

// Data da festa
const dataEvento = new Date("December 4, 2026 20:00:00").getTime();

function atualizarContador() {

    const agora = new Date().getTime();
    const distancia = dataEvento - agora;

    if (distancia <= 0) {

        document.getElementById("contador").innerHTML =
            "<span class='text-[#d4af37] text-xl'>Chegou o grande dia!</span>";

        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);