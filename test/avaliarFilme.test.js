import {
    calcularQuantidadeDeAvaliacoes,
    calcularMediaDeAvaliacoes,
    classificarFilmes,
    avaliarFilme
} from "../source/avaliarFilme.js";

import assert from "node:assert";

const listaDeFilmesEAvaliacoes = [
    { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
    { nome: "Saneamento Básico", avaliacoes: [3, 4, 2, 3, 4] },
    { nome: "Se eu fosse você", avaliacoes: [1, 2, 3] }
];

describe("Testando o módulo de avaliações de filmes", function() {

    it("Deve retornar a quantidade de avaliações de cada filme", function() {
        const resultadoEsperado = [5, 5, 3];

        const resultadoObtido =
            calcularQuantidadeDeAvaliacoes(listaDeFilmesEAvaliacoes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });

    it("Deve retornar a média de avaliações de cada filme", function() {
        const resultadoEsperado = [4.4, 3.2, 2];

        const resultadoObtido =
            calcularMediaDeAvaliacoes(listaDeFilmesEAvaliacoes);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });

    it("Deve classificar os filmes de acordo com suas médias", function() {
        const medias = calcularMediaDeAvaliacoes(listaDeFilmesEAvaliacoes);

        const resultadoEsperado = [
            "Filme recomendado",
            "Filme razoável",
            "Filme ruim"
        ];

        const resultadoObtido = classificarFilmes(medias);

        assert.deepStrictEqual(resultadoObtido, resultadoEsperado);
    });

    it("Deve retornar uma lista vazia quando não há filmes", function() {
        assert.deepStrictEqual(calcularQuantidadeDeAvaliacoes([]), []);
        assert.deepStrictEqual(calcularMediaDeAvaliacoes([]), []);
        assert.deepStrictEqual(classificarFilmes([]), []);
    });

    it("Deve retornar a quantidade de avaliações de um único filme", function() {
        const listaComUmFilme = [
            { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] }
        ];

        const resultadoObtido =
            calcularQuantidadeDeAvaliacoes(listaComUmFilme);

        assert.deepStrictEqual(resultadoObtido, [5]);
    });

    it("Deve retornar a média de avaliações de um único filme", function() {
        const listaComUmFilme = [
            { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] }
        ];

        const resultadoObtido =
            calcularMediaDeAvaliacoes(listaComUmFilme);

        assert.deepStrictEqual(resultadoObtido, [4.4]);
    });

    it("Deve classificar um único filme", function() {
        const resultadoObtido = classificarFilmes([4.4]);

        assert.deepStrictEqual(resultadoObtido, ["Filme recomendado"]);
    });

    it("Deve classificar como filme ruim quando a média é menor que 3", function() {
        assert.strictEqual(avaliarFilme(2.99), "Filme ruim");
    });

    it("Deve classificar como filme razoável quando a média é 3", function() {
        assert.strictEqual(avaliarFilme(3), "Filme razoável");
    });

    it("Deve classificar como filme razoável quando a média é 3.99", function() {
        assert.strictEqual(avaliarFilme(3.99), "Filme razoável");
    });

    it("Deve classificar como filme recomendado quando a média é 4", function() {
        assert.strictEqual(avaliarFilme(4), "Filme recomendado");
    });
});