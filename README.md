# Avaliação de Filmes

## Sobre o projeto

Este projeto foi desenvolvido como parte de um desafio de estudos em programação e testes de software.

O objetivo é trabalhar com avaliações de filmes, calculando a quantidade de avaliações, a média das notas e a classificação de cada filme de acordo com sua média.

As classificações são:
- **Filme recomendado:** média maior ou igual a 4.
- **Filme razoável:** média maior ou igual a 3 e menor que 4.
- **Filme ruim:** média menor que 3.

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/): ambiente de execução JavaScript.
- [Mocha](https://mochajs.org/): framework utilizado para executar os testes automatizados.
- JavaScript: linguagem utilizada no desenvolvimento das funções e dos testes.

## Como executar o projeto

1. Clone o repositório.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes automatizados:

   ```bash
   npm test
   ```

## Testes automatizados

Os testes verificam o cálculo da quantidade de avaliações, o cálculo das médias e a classificação dos filmes, incluindo cenários de entrada vazia e valores próximos aos limites das classificações.
