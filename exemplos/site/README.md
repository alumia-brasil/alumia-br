# Seu primeiro site com a Alumia

Você vai abrir um site no navegador, testar um formulário e criar uma página com o endereço `/agenda/`. O projeto já vem com a página inicial e a página **Quem somos** prontas.

## Abra o site

1. [Baixe os exemplos em ZIP](https://github.com/alumia-brasil/alumia-br/archive/refs/heads/main.zip) e extraia o arquivo. Na IDE, escolha **Arquivo → Abrir pasta** e selecione **exemplos/site**, a pasta que contém `servidor.br`.
2. No rodapé, abra **Servidor web**. Confira se a pasta pública é **publico** e clique em **Iniciar servidor web**. Quando o endereço aparecer, clique em **Abrir no navegador**.
3. Na página inicial, digite **Ana** e clique em **Dizer olá**. O JavaScript escreve **Olá, Ana! Você fez seu primeiro site.**
4. Clique em **Quem somos**. O navegador abre `/sobre/`. Use **Voltar ao início** para voltar ao formulário.

## Mude uma coisa de cada vez

| Para experimentar… | Abra no editor | Faça a mudança e salve |
| --- | --- | --- |
| HTML muda o conteúdo | [publico/index.html](publico/index.html) | Troque o texto dentro de `<h1>` por **Oficinas do bairro**. O título grande muda na página. |
| CSS muda a aparência | [estilo.css](publico/estaticos/css/estilo.css) | Na regra `button`, troque a cor de fundo `#226b4c` por `#3156a3`. O botão fica azul. |
| JavaScript responde a uma ação | [script.js](publico/estaticos/scripts/script.js) | Troque **Você fez seu primeiro site.** por **Sua inscrição chegou!**. Preencha o nome e clique novamente. |

Ao salvar esses arquivos pela IDE, a página aberta no navegador recarrega. As duas páginas usam a mesma [imagem do sol](publico/estaticos/imagens/sol.svg).

## Como o endereço encontra a página?

O arquivo [servidor.br](servidor.br) registra as páginas e inicia o servidor na porta `8080`. O endereço padrão é `http://127.0.0.1:8080`, acessível neste computador.

```br
rota.get("/")
rota.get("/sobre")
servidor_http(8080, "publico")
```

| Endereço que o navegador pede | Arquivo que a Alumia entrega |
| --- | --- |
| `/` | [publico/index.html](publico/index.html) |
| `/sobre/` | [publico/sobre/index.html](publico/sobre/index.html) |
| `/estaticos/css/estilo.css` | [publico/estaticos/css/estilo.css](publico/estaticos/css/estilo.css) |
| `/sobre/sol.svg` | [publico/estaticos/imagens/sol.svg](publico/estaticos/imagens/sol.svg) |

Cada página HTML precisa de uma `rota.get`. CSS, scripts e imagens ficam em `publico/estaticos/` e podem ser pedidos diretamente. Em **Quem somos**, a imagem usa `src="sol.svg"`. O navegador pede `/sobre/sol.svg` e a Alumia busca o arquivo na pasta compartilhada de imagens.

## Desafio: publique a agenda da oficina

1. No explorador da IDE, crie a pasta `agenda` dentro de `publico`. Nela, crie `index.html` com o conteúdo abaixo e salve.
2. Com o servidor ligado, tente abrir `/agenda/` na mesma aba. Você recebe **404** porque a página ainda precisa de uma rota.
3. Em `servidor.br`, acrescente `rota.get("/agenda")` **antes** de `servidor_http(8080, "publico")` e salve. Na IDE, clique em **Parar servidor** e depois em **Iniciar servidor web** para carregar a nova rota.
4. Abra `http://127.0.0.1:8080/agenda/`. A página agora mostra **Agenda das oficinas** com o estilo do restante do site.

```html
<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <title>Agenda das oficinas</title>
    <link rel="stylesheet" href="/estaticos/css/estilo.css">
</head>
<body>
    <main>
        <h1>Agenda das oficinas</h1>
        <p>Sábado, às 10h: introdução à programação.</p>
        <a href="/">Voltar ao início</a>
    </main>
</body>
</html>
```

Para chegar à nova página por um clique, inclua `<a href="/agenda/">Agenda</a>` junto ao link **Quem somos** em `publico/index.html`.

**Quer levar o site para outro computador?** Abra `servidor.br`, use **Compilar** e salve o executável ao lado de `publico/`. Copie os dois juntos para um computador do mesmo sistema e arquitetura. [Como compilar pela IDE](../../docs/ide.md#compilacao)

[Voltar aos exemplos](../README.md) · [Referência da linguagem](../../LINGUAGEM.md)
