<p align="center"><img src="imagens/alumia.jpg" width="96" height="96" alt="Símbolo da Alumia"></p>

# Alumia 🇧🇷

**Aprenda a programar em português.** Na Alumia, `leia` recebe uma resposta, `se` toma uma decisão e `escreval` mostra o resultado. A IDE traz editor, executor, compilador e exemplos para estudar offline.

[**⬇ Baixar a IDE**](https://github.com/alumia-brasil/alumia-br/releases/latest) · [**📘 Fazer o primeiro exercício**](exemplos/README.md) · [**🌐 Criar um site**](exemplos/site/README.md)

## Baixe para seu computador

| Sistema | Download da versão 0.1.0 |
| --- | --- |
| Windows · 64 bits (x64) | [Instalador para Windows (.exe)](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-Setup.exe) |
| macOS 14 ou posterior · chip Apple M | [Alumia para Apple Silicon (.zip)](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-macOS-arm64.zip) |
| macOS 14 ou posterior · Intel | [Alumia para Mac Intel (.zip)](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-macOS-x64.zip) |
| Linux · 64 bits (x64) | [Alumia para Linux (.tar.gz)](https://github.com/alumia-brasil/alumia-br/releases/download/v0.1.0/Alumia-Linux-x64.tar.gz) |

O instalador Windows ainda está sem assinatura de editor. No Mac, a versão 0.1.0 tem assinatura ad hoc e aguarda notarização. O Gatekeeper bloqueou a abertura no teste com macOS 27.3, e a execução em Mac Intel ainda precisa de validação. O guia inclui a instalação via Homebrew e os passos para conferir seu download. [Guia de instalação](docs/instalacao.md)

## Seu primeiro programa

Uma oficina tem 20 lugares e 17 pessoas inscritas. Quantas vagas sobraram? Abra **Arquivo → Novo**, substitua o conteúdo do editor pelo código abaixo e clique em **Executar** ou aperte **F5**.

```br
inteiro capacidade = 20
inteiro inscritos = 17

escreval("Vagas livres: ", capacidade - inscritos)
```

O **Terminal** mostra `Vagas livres: 3`. Troque `17` por `20` e execute de novo. Na próxima etapa, você vai perguntar quantas vagas a pessoa quer reservar e decidir se o pedido cabe na turma. [Continuar a oficina de programação](exemplos/README.md)

![IDE em tema escuro, com um programa BR no editor, o botão Executar e as abas Terminal, Problemas, Compilação e Servidor web](imagens/ide-macos.jpg)

## O que você quer fazer agora?

| Quero… | Por onde começar |
| --- | --- |
| Praticar condições, repetições e funções | [Oficina guiada e catálogo de exemplos](exemplos/README.md) |
| Ver uma página minha no navegador | [Site com duas páginas, CSS, JavaScript e uma imagem](exemplos/site/README.md) |
| Transformar meu arquivo `.br` em executável | [Compilação pela IDE](docs/ide.md#compilacao) |
| Consultar a sintaxe de um comando | [Referência da linguagem](LINGUAGEM.md) |
| Relatar um erro ou sugerir um exercício | [Suporte e participação](SUPPORT.md) |

## Por dentro da Alumia

![C11](https://img.shields.io/badge/C11-304D73?style=flat-square&logo=c&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Electron](https://img.shields.io/badge/Electron-253D59?style=flat-square&logo=electron&logoColor=white)
![Zig](https://img.shields.io/badge/Zig-E4B84D?style=flat-square&logo=zig&logoColor=222222)

A linguagem e o executor usam C11. A IDE usa TypeScript e Electron. O Zig acompanha o aplicativo para compilar seus programas no próprio computador.

A Alumia é distribuída sob a licença [PolyForm Noncommercial 1.0.0](LICENSE). Os componentes de terceiros têm [licenças próprias](THIRD_PARTY_NOTICES.md).
