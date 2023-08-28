const imagem = document.querySelector("img");
const botao = document.querySelectorAll("button");
let idIntervalo = 0;
let automaticoAtivado = false;
let contador = 0;

for (const botaoIndividual of botao) {
    botaoIndividual.addEventListener("click", () => {
        if (botaoIndividual.classList.contains("automatico")) {
            if (automaticoAtivado) {
                clearInterval(idIntervalo);
                automaticoAtivado = false;
                alert("O modo automático foi desativado")
            } else {
                automaticoAtivado = true;
                alert("O modo automático foi ativado")
                console.log(contador)
                console.log(automaticoAtivado)
                console.log(idIntervalo)
                idIntervalo = setInterval(() => {
                    if (contador === 0) {
                        imagem.setAttribute('src', './img/vermelho.png');
                    } else if (contador === 1) {
                        imagem.setAttribute('src', './img/amarelo.png');
                    } else if (contador === 2) {
                        imagem.setAttribute('src', './img/verde.png');
                    }

                    contador++;
                    if (contador === 3 | idIntervalo === 5000) {
                        contador = 0;
                    }
                },1000)
            }
        } else {
            imagem.setAttribute('src', `./img/${botaoIndividual.id}.png`);
            automaticoAtivado=false;
        }
    })
}
