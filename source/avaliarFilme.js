
export function calcularQuantidadeDeAvaliacoes(listaDeFilmesEAvaliacoes) {
    let listaComQuantidadeDeAvaliacoes = [];

    for (let i = 0; i < listaDeFilmesEAvaliacoes.length; i++) {
        let quantidadeDeAvaliacoes =
            listaDeFilmesEAvaliacoes[i].avaliacoes.length;

        listaComQuantidadeDeAvaliacoes.push(quantidadeDeAvaliacoes);
    }

    return listaComQuantidadeDeAvaliacoes;
}

export function calcularMediaDeAvaliacoes(listaDeFilmesEAvaliacoes) {
    let listaComMedias = [];

    for (let i = 0; i < listaDeFilmesEAvaliacoes.length; i++) {
        let somaDasAvaliacoes = 0;

        for (
            let j = 0;
            j < listaDeFilmesEAvaliacoes[i].avaliacoes.length;
            j++
        ) {
            somaDasAvaliacoes +=
                listaDeFilmesEAvaliacoes[i].avaliacoes[j];
        }

        let quantidadeDeAvaliacoes =
            listaDeFilmesEAvaliacoes[i].avaliacoes.length;

        let media = 0;

        if (quantidadeDeAvaliacoes > 0) {
            media = somaDasAvaliacoes / quantidadeDeAvaliacoes;
        }

        listaComMedias.push(media);
    }

    return listaComMedias;
}

export function avaliarFilme(media) {
    if (media >= 4) {
        return "Filme recomendado";
    } else if (media < 3) {
        return "Filme ruim";
    } else {
        return "Filme razoável";
    }
}

export function classificarFilmes(medias) {
    let listaDeAvaliacoes = [];

    for (let i = 0; i < medias.length; i++) {
        let classificacao = avaliarFilme(medias[i]);

        listaDeAvaliacoes.push(classificacao);
    }

    return listaDeAvaliacoes;
}
