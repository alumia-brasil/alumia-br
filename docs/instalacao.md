# Instalar a Alumia

A IDE já inclui as ferramentas para executar e compilar programas BR. A instalação baixa o pacote uma vez. Depois você pode usar o editor, a documentação e o compilador offline. [Baixar a versão mais recente](https://github.com/alumia-brasil/alumia-br/releases/latest)

## Windows x64

Baixe `Alumia-Setup.exe` e execute o instalador. Ele pede permissão para instalar a IDE em Arquivos de Programas. Na última tela, marque **Criar atalho na área de trabalho** se quiser. Abra **Alumia** pelo menu Iniciar ou pelo atalho. O instalador da versão 0.1.0 ainda não tem assinatura de editor e o Windows pode exibir um aviso.

## macOS 14 ou posterior

No menu **Apple → Sobre Este Mac**, confira o campo **Chip** ou **Processador**. Para chips Apple M, baixe `Alumia-macOS-arm64.zip`. Para um processador Intel, baixe `Alumia-macOS-x64.zip`. Extraia o ZIP e mova **Alumia.app** para **Aplicativos**.

Se você usa Homebrew, o cask seleciona a arquitetura automaticamente. Na primeira instalação com uma versão do Homebrew que exige confiança explícita, use estes comandos.

```sh
brew tap juanfontes/tap
brew trust --cask juanfontes/tap/alumia
brew install --cask juanfontes/tap/alumia
```

Uma instalação pelo Homebrew pode terminar com sucesso e o macOS ainda bloquear a primeira abertura. A versão 0.1.0 usa assinatura ad hoc e aguarda notarização da Apple. O Gatekeeper bloqueou a abertura no teste com macOS 27.3. A execução em um Mac Intel ainda precisa de validação. [Sobre os avisos do macOS](https://support.apple.com/pt-br/102445)

## Linux x64

Baixe `Alumia-Linux-x64.tar.gz`. Em uma sessão gráfica, abra um terminal na pasta do download e execute:

```sh
tar -xzf Alumia-Linux-x64.tar.gz
cd Alumia-linux-x64
./br-ide
```

Guarde a pasta extraída inteira. O executável usa as bibliotecas e os recursos que ficam ao lado dele.

## Conferir seu download

A página da versão inclui `SHA256SUMS.txt`. Compare a linha do seu pacote com o SHA-256 calculado no seu computador. No Windows, use `Get-FileHash .\Alumia-Setup.exe -Algorithm SHA256` no PowerShell. No Mac, use `shasum -a 256` seguido do nome do ZIP. No Linux, use `sha256sum Alumia-Linux-x64.tar.gz`.

Com a IDE aberta, você já pode calcular as vagas de uma turma e conferir sua primeira saída no Terminal. [Fazer o primeiro exercício](../exemplos/README.md) · [Conhecer os controles da IDE](ide.md)
