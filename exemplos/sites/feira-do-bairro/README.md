# Feira do Bairro

Monte o catálogo de uma feira fictícia na Praça da Mangueira. A Alumia serve a página no computador. O visitante pode escolher entre comida e artesanato para ver as barracas de cada categoria.

## Abra a feira

1. Na IDE Alumia, escolha **Arquivo → Abrir pasta**. Dentro de `exemplos/sites`, selecione a pasta **feira-do-bairro**, que contém [servidor.br](servidor.br) e a pasta `publico`.
2. No rodapé, abra **Servidor web**. Confira se a pasta pública é **publico**. Clique em **Iniciar servidor web**. Quando aparecer o endereço na porta **8081**, clique em **Abrir no navegador**.
3. O **Guia de barracas** começa com quatro barracas. Clique em **Comida**. Aparecem **Milho da Cida** e **Pomar do Zeca**. Em **Artesanato**, aparecem **Linha da Lúcia** e **Barro da Vila**. Clique em **Todas** para ver as quatro novamente.

## Experimente adicionar uma barraca de comida

1. Abra [publico/index.html](publico/index.html). Encontre a linha `</ul>` e cole este trecho logo acima dela.

   ```html
   <li data-categoria="comida">
       <p class="categoria">Comida</p>
       <h3>Bolos da Rosa</h3>
       <p>Fatias de bolo de fubá com goiabada.</p>
   </li>
   ```

2. Salve e volte ao navegador. Em **Todas**, a contagem passa a **5 barracas**. Em **Comida**, aparecem **3 barracas**, incluindo **Bolos da Rosa**. Em **Artesanato**, continuam aparecendo duas.

O título e a descrição vêm do HTML. O [CSS](publico/estaticos/css/estilo.css) define as cores e organiza as barracas em colunas. O [JavaScript](publico/estaticos/scripts/script.js) compara a categoria do botão com o atributo `data-categoria` de cada barraca para atualizar a lista.

[Ver os outros exemplos](../../README.md)
