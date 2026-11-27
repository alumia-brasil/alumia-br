<p align="center"><img src="imagens/alumia.jpg" width="100" alt="Marca da Alumia"></p>

# Alumia · Programação em português

**Uma linguagem de programação e uma IDE para quem está começando.** Escreva `leia` para fazer uma pergunta, `se` para tomar uma decisão e `escreval` para mostrar o resultado. Quando algo dá errado, a IDE explica o problema em português e aponta o trecho do programa.

A Alumia foi pensada para que a primeira aula comece com código. O editor, o executor, o compilador e a documentação vêm no mesmo aplicativo. Depois de baixar a IDE e os exemplos, dá para aprender e compilar offline, sem instalar C, Node.js ou Zig à parte.

**[Baixar a IDE](#baixe-para-seu-computador)** · **[Baixar os exemplos em ZIP](https://github.com/alumia-brasil/alumia-br/archive/refs/heads/main.zip)** · **[Consultar a linguagem](LINGUAGEM.md)**

[Primeiro programa](#seu-primeiro-programa) · [Conheça a IDE](#conheça-a-ide) · [Jogos e programas](#escolha-um-projeto-para-abrir-agora) · [Projetos web](#faça-um-site-rodar-no-navegador)

## Baixe para seu computador

| Sistema | Alumia 0.1.0 | Como começar |
| --- | --- | --- |
| **Windows x64** | [Baixar o instalador .exe](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-Setup.exe) | Execute o instalador e abra **Alumia** pelo menu Iniciar. |
| **macOS 14 ou posterior** | [Chip Apple M](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-macOS-arm64.zip) · [Processador Intel](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-macOS-x64.zip) | Confira o chip em **Sobre Este Mac**. Extraia o ZIP e mova o aplicativo para **Aplicativos**. |
| **Linux x64** | [Baixar o pacote .tar.gz](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-Linux-x64.tar.gz) | Extraia a pasta inteira e execute `./br-ide` dentro dela em uma sessão gráfica. |

**Sobre a primeira abertura.** O instalador do Windows ainda está sem assinatura de editor. No macOS, a versão usa assinatura ad hoc e aguarda notarização. O Gatekeeper bloqueou a abertura no teste com macOS 27.3. A execução em Mac Intel ainda precisa de validação. O guia inclui as instruções de Homebrew e a verificação do download por SHA-256. [Guia de instalação](docs/instalacao.md) · [Arquivos da versão](https://github.com/alumia-brasil/alumia-br/releases/latest)

## Seu primeiro programa

Uma oficina tem 20 lugares e 17 inscritos. Quantos lugares sobraram? Em **Arquivo → Novo**, substitua o conteúdo do editor por este programa e pressione **F5**.

```br
inteiro capacidade = 20
inteiro inscritos = 17

escreval("Vagas livres: ", capacidade - inscritos)
```

O **Terminal** mostra `Vagas livres: 3`. Mude `17` para `20` e rode de novo. O mesmo programa agora mostra `Vagas livres: 0`. Para experimentar uma pergunta pelo teclado, abra **Par ou ímpar**, execute e digite `7` no Terminal. [Código da oficina](exemplos/oficina/vagas.br) · [Par ou ímpar](exemplos/par_ou_impar.br)

## Conheça a IDE

![IDE da Alumia em tema escuro, com um programa no editor, o botão Executar e o painel inferior com quatro abas](imagens/ide-macos.jpg)

| O que você quer fazer | Onde acontece |
| --- | --- |
| **Escrever e experimentar** | Digite `esc` e use **Tab** para aceitar uma sugestão. **F5** executa o texto do editor, inclusive antes de salvar. Responda a `leia()` no **Terminal**. |
| **Entender um erro** | Abra **Problemas** e clique na mensagem em português para voltar ao trecho sublinhado. Uma falha durante a execução aparece no **Terminal**, junto da saída. |
| **Gerar um executável** | Em **Compilar**, escolha o nome e a pasta. A IDE salva o binário e o `.br` juntos. O binário roda fora da IDE em computadores do mesmo sistema e arquitetura. |
| **Estudar no seu ritmo** | O menu **Documentação** reúne 52 exemplos copiáveis em 16 assuntos. Em **Exibir**, ajuste separadamente as fontes do editor e do Terminal. A IDE lembra o tamanho e o tema escolhidos. |

[Guia da IDE e atalhos](docs/ide.md) · [Como funciona a compilação](docs/ide.md#compilacao)

## Escolha um projeto para abrir agora

Extraia o ZIP dos exemplos, escolha um arquivo `.br` em **Arquivo → Abrir** e pressione **F5**. Cada projeto abaixo tem uma pequena experiência para fazer no Terminal.

| Programa | Experimente | Você pratica |
| --- | --- | --- |
| [Calculadora](exemplos/calculadora.br) | Digite `3`, `/` e `2`, uma resposta por vez. O resultado é `1.5`. | Números decimais, operações e divisão por zero |
| [Tabuada](exemplos/tabuada.br) | Digite `7` e encontre `7 x 10 = 70` na última linha. | Repetição com `para` |
| [Adivinhe o número](exemplos/adivinhacao.br) | Comece por `50`. Use as pistas *maior* e *menor* até acertar o número sorteado. | `sorteia`, condições e `enquanto` |
| [Racha-conta](exemplos/racha_conta.br) | Divida R$ 100 com 10% de gorjeta por três pessoas. Duas pagam R$ 36,67 e uma paga R$ 36,66. | Arredondamento, resto e funções |
| [Quiz das capitais](exemplos/quiz_capitais.br) | Para o Pará, responda `BELÉM`. O quiz aceita a resposta e soma um ponto. | Listas, comparação de textos e placar |
| [Mercadinho](exemplos/mercadinho.br) | Digite `4.25`, `12.90`, `0.85` e `0`. Confira o total de R$ 18,00 e o item mais caro. | Acumuladores e comparação de preços |

**Para uma aula de lógica**, os três programas da oficina formam uma sequência. A turma começa contando lugares livres, passa a aceitar ou recusar um pedido de reserva e termina somando vagas em várias turmas. Cada etapa traz o código, a saída esperada e uma alteração para testar. [Fazer a oficina guiada](exemplos/README.md#oficina-guiada)

<details>
<summary><strong>Por que 3 / 2 às vezes resulta em 1 e às vezes em 1.5?</strong></summary>

Em `inteiro metade = 3 / 2`, a divisão inteira descarta a parte fracionária. Em `decimal metade = 3 / 2`, o contexto decimal preserva a fração. Para mostrar a fração diretamente, escreva `escreval(3.0 / 2)`. Use ponto ao digitar valores decimais. [Números e expressões na referência](LINGUAGEM.md)

</details>

## Faça um site rodar no navegador

A Alumia também serve páginas HTML no seu computador. O HTML organiza o conteúdo, o CSS dá a aparência e o JavaScript responde aos cliques. O arquivo `servidor.br` define quais páginas o navegador pode abrir.

[![Prévia dos projetos Feira do Bairro, Quiz do Brasil e Cine da Vila, nessa ordem](imagens/sites-exemplos.webp)](exemplos/README.md#sites-para-abrir-na-ide)

- **Feira do Bairro** — filtre as barracas por comida ou artesanato. Depois adicione uma barraca ao HTML e veja o filtro encontrá-la. [Abrir o projeto da feira](exemplos/sites/feira-do-bairro/README.md)
- **Quiz do Brasil** — escolha uma capital pelos botões, confira a correção e jogue outra rodada. O guia mostra como escrever sua própria pergunta em JavaScript. [Abrir o quiz web](exemplos/sites/quiz-do-brasil/README.md)
- **Cine da Vila** — clique no cartaz para abrir a programação de sábado. As duas páginas usam o mesmo CSS e têm endereços próprios. [Abrir o cineclube](exemplos/sites/cine-da-vila/README.md)

Este é o servidor inteiro do Cine da Vila. O endereço `/programacao/` entrega o arquivo `publico/programacao/index.html`.

```br
rota.get("/")
rota.get("/programacao")
servidor_http(8083, "publico")
```

Para testar, use **Arquivo → Abrir pasta** e escolha a pasta que contém `servidor.br`. No rodapé, abra **Servidor web**, clique em **Iniciar servidor web** e depois em **Abrir no navegador**. Salvar HTML, CSS ou JavaScript pela IDE recarrega a página. Para aplicar mudanças nas rotas ou na porta, pare e inicie o servidor novamente.

Quer começar em uma pasta vazia? **Arquivo → Novo projeto web** cria o servidor, a página inicial e os arquivos de estilo e script. Se for distribuir o site compilado, leve a pasta `publico/` ao lado do executável. [Tutorial do primeiro site](exemplos/site/README.md)

## Como a Alumia funciona

![C11](https://img.shields.io/badge/C11-304D73?style=flat-square&logo=c&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Electron](https://img.shields.io/badge/Electron-253D59?style=flat-square&logo=electron&logoColor=white)
![Zig](https://img.shields.io/badge/Zig-E4B84D?style=flat-square&logo=zig&logoColor=222222)

O editor de desktop usa TypeScript e Electron. Ao pressionar **F5**, o executor nativo da Alumia lê e executa o programa BR. Ao escolher **Compilar**, a IDE gera C, usa o Zig que acompanha o pacote e liga o programa à biblioteca da linguagem para produzir um executável.

A linguagem oferece tipos `inteiro`, `decimal`, `texto` e `booleano`, listas tipadas, funções com parâmetros e retorno, comparações, condições e laços. A referência inclui as regras de tipos e os limites da versão. [Consultar a linguagem](LINGUAGEM.md) · [Explorar os exemplos por assunto](exemplos/README.md)

## Participe

Este repositório reúne os pacotes de instalação, os guias e o código dos exemplos. Correções nos guias e exercícios podem ser enviadas por pull request.

Usou a Alumia em aula ou encontrou uma mensagem que ficou difícil de entender? Abra uma issue usando o modelo de dúvida, erro ou sugestão e conte qual programa estava tentando escrever. Um trecho curto de BR e o resultado esperado ajudam a reproduzir o caso. [Enviar uma dúvida ou sugestão](https://github.com/alumia-brasil/alumia-br/issues/new/choose) · [Suporte](SUPPORT.md)

A Alumia é distribuída sob a licença [PolyForm Noncommercial 1.0.0](LICENSE). As licenças dos componentes que acompanham o aplicativo estão nos [avisos de terceiros](THIRD_PARTY_NOTICES.md).
