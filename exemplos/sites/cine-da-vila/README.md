# Cine da Vila

Um cineclube fictício com duas páginas. No cartaz, conheça o filme em destaque. Na programação, consulte os horários dos três curtas de sábado. Os links funcionam com HTML e duas rotas da Alumia.

## Abrir na IDE

1. Em **Arquivo → Abrir pasta**, escolha a pasta `cine-da-vila`, que contém [servidor.br](servidor.br).
2. Na aba **Servidor web**, clique em **Iniciar servidor web** e em **Abrir no navegador**. O endereço é `http://127.0.0.1:8083`.
3. No cartaz, clique em **Ver horários das sessões**. O endereço passa para `/programacao/`. Encontre **A última bicicleta** às **18h** e use **Voltar ao cartaz** para voltar.

## Como a navegação funciona

O link `<a href="/programacao/">` aponta para a página de horários. No [servidor.br](servidor.br), `rota.get("/programacao")` faz a Alumia entregar o arquivo [publico/programacao/index.html](publico/programacao/index.html). A rota `/` abre o [cartaz](publico/index.html). As páginas compartilham a mesma [folha de estilos](publico/estaticos/css/estilo.css).

## Experimente

Na [programação](publico/programacao/index.html), altere a primeira sessão de `<time datetime="16:00">16h</time>` para `<time datetime="16:30">16h30</time>`. Salve pela IDE. A página aberta mostra **16h30** ao lado de **Rádio da esquina**. O filme em cartaz continua às 18h.

Para criar sua própria seleção, edite os títulos e as durações na lista `<ol>`. Você também pode trocar o [cartaz da bicicleta](publico/estaticos/imagens/bicicleta.webp) por uma imagem sua e ajustar o texto alternativo no atributo `alt`.

[Ver os outros exemplos](../../README.md)
