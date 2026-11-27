# Quiz do Brasil

Você sabe a capital do Pará? Escolha uma cidade para conferir a resposta na hora. São três perguntas, e cada acerto vale um ponto.

## Abra na IDE

1. Na IDE Alumia, escolha **Arquivo → Abrir pasta**. Selecione a pasta **quiz-do-brasil**, onde está o arquivo [servidor.br](servidor.br).
2. No rodapé, abra **Servidor web**. Confira se a pasta pública é **publico** e clique em **Iniciar servidor web**.
3. Clique em **Abrir no navegador**. O servidor do exemplo usa o endereço `http://127.0.0.1:8082/`.

## Jogue uma rodada de teste

1. Na pergunta sobre o Pará, escolha **Manaus**. O quiz mostra a resposta correta, **Belém**, e o placar continua em zero. As alternativas ficam bloqueadas.
2. Clique em **Próxima pergunta**. Escolha **Recife**. O quiz confirma o acerto e soma um ponto.
3. Avance e escolha **Belo Horizonte**. Clique em **Ver resultado** para ver **Você acertou 2 de 3.**
4. Clique em **Jogar de novo**. A primeira pergunta volta e o placar começa em zero. Experimente usar **Tab** para chegar a uma alternativa e **Enter** para escolhê-la.

## Crie uma pergunta

Abra [script.js](publico/estaticos/scripts/script.js). No começo, cada item de `perguntas` tem um enunciado, as alternativas e o nome da cidade correta. Por exemplo, substitua o primeiro item por este. Mantenha a vírgula que o separa do segundo.

```js
{
    enunciado: "Qual é a capital da Bahia?",
    alternativas: ["Aracaju", "Salvador", "Fortaleza"],
    correta: "Salvador"
},
```

Use a mesma grafia da alternativa no campo `correta`. Salve na IDE e escolha **Salvador** no navegador para conferir o acerto. Você também pode acrescentar perguntas à lista. O quiz calcula o total com `perguntas.length`.

Para mudar a frase do resultado, procure `resumo.textContent` no mesmo arquivo. Troque `"Você acertou "` por `"Seu total de acertos foi "`. Ao terminar a rodada, a mensagem usa a nova frase e a pontuação que você fez.

O [HTML](publico/index.html) define o título, a área das perguntas e os botões de navegação. O [CSS](publico/estaticos/css/estilo.css) define as cores, os tamanhos e o destaque das respostas.

[Ver os outros exemplos](../../README.md)
