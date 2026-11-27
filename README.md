<p align="center"><img src="imagens/alumia.jpg" width="128" alt="Símbolo da Alumia em verde e amarelo"></p>

# Alumia 🇧🇷

Aprenda a programar em português. Escreva seu primeiro `escreval`, descubra como uma condição muda o resultado e crie um site que roda no seu computador. A IDE traz editor, executor, compilador e documentação para estudar offline.

[![Baixar a IDE](https://img.shields.io/badge/Baixar_a_IDE-187451?style=for-the-badge)](https://github.com/alumia-brasil/alumia-br/releases/latest)
[Guia de instalação](docs/instalacao.md) · [Como usar a IDE](docs/ide.md) · [Linguagem](LINGUAGEM.md) · [Exemplos](exemplos/)

![C11](https://img.shields.io/badge/C11-304D73?style=flat-square&logo=c&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Electron](https://img.shields.io/badge/Electron-253D59?style=flat-square&logo=electron&logoColor=white)
![Zig](https://img.shields.io/badge/Zig-E4B84D?style=flat-square&logo=zig&logoColor=222222)

## Comece em um minuto

1. Instale o pacote do seu sistema e abra **Alumia**.
2. Em **Arquivo → Novo**, digite o programa abaixo.
3. Pressione **F5**. No Terminal da IDE, digite seu nome e pressione **Enter**.

```br
texto nome = leia("Como você se chama? ")
escreval("Olá, ", nome, "!")
```

Se você digitar `Ana`, o programa escreve `Olá, Ana!`. Salve o arquivo como `saudacao.br`. Para transformar o exercício em um programa independente, abra **Compilar** e escolha onde salvar o executável.

## Escolha seu download

| Sistema | Pacote da versão 0.1.0 |
| --- | --- |
| Windows x64 | [Instalador da Alumia (.exe)](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-Setup.exe) |
| macOS 14 ou posterior · Apple Silicon | [Aplicativo para chips Apple M (.zip)](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-macOS-arm64.zip) |
| macOS 14 ou posterior · Intel | [Aplicativo para processadores Intel (.zip)](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-macOS-x64.zip) |
| Linux x64 | [Aplicativo para Linux (.tar.gz)](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-Linux-x64.tar.gz) |

**No Mac**, também dá para instalar pelo Homebrew. A versão 0.1.0 usa assinatura ad hoc e ainda aguarda notarização da Apple. O Gatekeeper bloqueou a abertura no teste com macOS 27.3. Consulte os [passos de instalação e limites desta versão](docs/instalacao.md).

## O que experimentar depois

- **Variáveis e contas.** Calcule o volume de uma caixa declarando largura, altura e profundidade na mesma linha. [Exemplo de declarações](exemplos/declaracoes_multiplas.br)
- **Condições e listas.** Leia valores pelo teclado, percorra uma lista de notas e calcule a média. [Programa interativo](exemplos/basico.br)
- **Funções.** Chame uma função e imprima o valor que ela devolve com `retorna`. [Exemplos de funções](exemplos/funcoes.br)
- **Seu primeiro site.** Sirva HTML, CSS, JavaScript e imagens em `localhost` e registre uma página com `rota.get("/sobre")`. [Projeto web completo](exemplos/site/README.md)

<details>
<summary>Ver uma captura da IDE</summary>

![Versão inicial da IDE com uma função no editor e o resultado da divisão na saída](imagens/ide-macos.jpg)

Na captura, a interface ainda usa o nome BR IDE. Na versão atual, o Terminal e a aba Problemas ficam no rodapé.

</details>

## Participar

Encontrou um erro ou tem uma ideia de exercício? Conte o que tentou, sua versão da IDE e o resultado esperado em [Issues](https://github.com/alumia-brasil/alumia-br/issues). Sugestões e correções nos guias e exemplos são bem-vindas.

A Alumia usa a licença [PolyForm Noncommercial 1.0.0](LICENSE). As licenças dos componentes distribuídos com a IDE estão nos [avisos de terceiros](THIRD_PARTY_NOTICES.md).
