# Meu primeiro site

1. Na IDE, use **Arquivo → Abrir pasta** e escolha esta pasta `site`.
2. A IDE abre `publico/index.html`. Na lateral, expanda `publico/estaticos` para ver os estilos, os scripts e as imagens.
3. Abra a aba **Servidor web** do rodapé. A porta `8080` e a pasta `publico` estão definidas em `servidor.br`.
4. Clique em **Iniciar servidor web** e depois em **Abrir no navegador**.
5. Clique em **Quem somos**. O navegador abre `/sobre/` e mostra a página `publico/sobre/index.html`. Use **Voltar ao início** para retornar.
6. Altere o título de `publico/index.html` e salve na IDE. A página inicial recarrega e mostra o novo título.

Também é possível abrir `servidor.br` e usar **Executar / F5**. Nesse caso, abra o endereço que aparece na saída e encerre pelo botão **Parar** da execução. Inicie apenas uma dessas opções na mesma porta.

## Arquivos do site

```text
site/
├── servidor.br
└── publico/
    ├── index.html
    ├── sobre/
    │   └── index.html
    └── estaticos/
        ├── css/estilo.css
        ├── scripts/script.js
        └── imagens/sol.svg
```

Em `servidor.br`, `rota.get("/")` registra a página inicial e `rota.get("/sobre")` usa a pasta `publico/sobre/`. A página inicial é `index.html`, e os links relativos usam essa mesma pasta. Declare as rotas antes de chamar `servidor_http`. Se remover a rota de Sobre, tanto `/sobre/` quanto `/sobre/index.html` retornam 404.

Na página Sobre, `<img src="sol.svg">` pede `/sobre/sol.svg`. A Alumia busca `publico/estaticos/imagens/sol.svg`, a mesma imagem usada na home. Edite `/estaticos/css/estilo.css` para mudar a aparência das duas páginas. Para mudar a saudação da página inicial, edite `publico/estaticos/scripts/script.js`. O JavaScript roda no navegador.

## Compilar

Abra `servidor.br` e use **Compilar**. Salve o executável nesta pasta, ao lado de `publico`. Para distribuir, copie o executável e a pasta `publico` juntos. Os arquivos do site não são embutidos nem copiados automaticamente pela compilação.

O servidor fica disponível neste computador em `http://127.0.0.1:8080`.
