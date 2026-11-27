# Guia da IDE Alumia

[Apresentação do projeto](../README.md) · [Guia da linguagem](../LINGUAGEM.md) · [Instalação](instalacao.md)

A IDE reúne editor, executor, compilador e documentação da linguagem em uma janela. A implementação e os pacotes locais ainda usam o nome **BR IDE** durante a transição para Alumia.

## Usar o aplicativo

Escolha o pacote no [guia de instalação](instalacao.md). Depois de abrir a IDE, use **Arquivo → Novo** para começar ou **Arquivo → Abrir** para carregar um exemplo `.br`.

- **Arquivo:** Novo, Abrir, Salvar, Salvar como e Sair. Se outra janela ou aplicativo alterar o arquivo, a IDE oferece **Salvar uma cópia…**, **Recarregar do disco** ou **Cancelar**. Cancelar mantém o rascunho aberto.
- **Executar / F5:** usa o texto atual, mesmo sem salvar. A saída aparece na aba **Terminal**. **Parar** interrompe a execução, inclusive durante `leia()` e `espera()`.
- **Entrada:** quando `leia()` pedir uma resposta, use o campo da aba **Terminal** e pressione Enter ou Enviar.
- **Autocomplete:** a partir de três letras, uma sugestão aparece em cinza. Tab aceita, Esc dispensa e Alt+↓/↑ troca as alternativas. Tab e Shift+Tab percorrem os campos dos modelos de código. Cmd/Ctrl+Z desfaz a inserção. `se` também sugere blocos completos.
- **Sair do editor pelo teclado:** pressione Esc e, em seguida, Tab para ir ao próximo controle. Com Esc e Shift+Tab, o foco volta ao controle anterior.
- **Diagnósticos:** erros de sintaxe e tipos aparecem em vermelho e sublinhados. Abra **Problemas** e clique na mensagem para selecionar o trecho. A análise não executa o programa.
- **Exibir → Tamanho da fonte:** ajuste separadamente o editor e o Terminal entre 10 e 72 px. O padrão do editor varia entre 17 e 28 px conforme a janela. O Terminal e o log do servidor usam 14 px por padrão e compartilham o mesmo ajuste. As duas preferências são lembradas.
- **Exibir → Formatar código:** Cmd+F no Mac e Ctrl+F nos demais sistemas. Funciona para BR, HTML, CSS, JavaScript, Markdown, JSON e YAML. Ao selecionar todo o texto ou clicar com o botão direito no editor, use Copiar, Recortar ou Formatar código. Salvar e Salvar como também formatam programas BR; código incompleto é preservado. A operação pode ser desfeita.
- **Claro / Escuro:** mudam editor, saída, menus, documentação e diálogos suportados pelo Electron. A preferência é lembrada na próxima abertura.
- **Documentação:** 16 assuntos e 52 exemplos completos, com explicações, saída esperada e botão de copiar. Funciona offline.

O exemplo inicial e os documentos novos mostram **Sem alterações** enquanto contêm o texto original. Se você editar e depois desfizer a edição, pode trocar de arquivo ou sair sem confirmação. A bolinha verde indica um arquivo salvo. A amarela indica edições pendentes. O tempo de execução aparece junto ao botão Executar e no rodapé da saída, alinhado à direita: `400 ms` ou `1,350 s`. O total inclui pausas e espera por respostas do usuário.

## Painel inferior

Escolha **Terminal** para a entrada, a saída e o resultado do programa BR. **Problemas** lista os diagnósticos do arquivo aberto. F5 direciona erros de sintaxe e tipo para essa aba. Uma falha durante a execução aparece no Terminal junto da saída do programa. **Compilação** mostra o progresso e o destino do executável. **Servidor web** reúne os controles do site e seu log de acessos. Limpar o terminal e limpar o log são ações independentes.

Arraste a borda superior do painel para ajustar a altura. Pelo teclado, use Tab para focar a divisória e ↑ ou ↓ para movê-la. A seta no canto direito recolhe o painel. Clique em uma aba para abri-lo novamente. A IDE lembra a altura e a aba selecionada.

## Projetos e sites HTML

Use **Arquivo → Abrir pasta** para mostrar o explorador. Expanda as pastas e clique em um arquivo para editá-lo. Os controles do explorador permitem criar arquivos e pastas e atualizar a lista. Ao trocar de arquivo ou projeto, alterações pendentes continuam protegidas pela confirmação de salvamento.

O editor reconhece BR, HTML, CSS e JavaScript. Arquivos web são salvos sem a formatação BR. Diagnósticos, sugestões BR e Compilar se aplicam aos programas `.br`. Executar/F5 executa BR; se um programa já estiver rodando, Parar continua disponível mesmo após selecionar outro arquivo.

Para começar um site, use **Arquivo → Novo projeto web…**. Selecione a pasta que deve receber `servidor.br` e `publico/`. A IDE abre `publico/index.html`, com o CSS, o JavaScript e a imagem já vinculados. Se algum arquivo do modelo já existir, a IDE avisa e preserva o conteúdo da pasta.

O explorador mostra a pasta escolhida como raiz expansível. Nos projetos novos, o JavaScript fica em `publico/estaticos/scripts/`. O exemplo registra `rota.get("/")` e `rota.get("/sobre")` em `servidor.br`. Cada página exige uma rota. Os recursos em `publico/estaticos/`, como CSS, scripts e imagens, têm acesso direto. A URL `/sobre/` abre `publico/sobre/index.html`. Guarde as imagens em `publico/estaticos/imagens/`. Mesmo quando o navegador pede `/sobre/equipe.jpg`, o servidor lê `equipe.jpg` dessa pasta compartilhada.

**Iniciar servidor web** executa o `servidor.br` da raiz na pasta pública do painel. O primeiro argumento de `servidor_http` define a porta. Use um número como `8080` ou uma variável inteira, como em `servidor_http(porta, "publico")`. Se esse arquivo estiver aberto, a IDE usa o texto do editor. Projetos sem `servidor.br` usam uma prévia com `rota.get("/")` na porta 8080. Para publicar outras páginas, registre as rotas no seu `servidor.br`. Para aplicar uma mudança de porta ou rota, pare e inicie o servidor. Para usar `leia()` ou a pasta escrita no programa, execute o arquivo com F5.

Para abrir um site existente, use **Abrir pasta…** na aba **Servidor web**. A IDE procura `index.html`, depois `index.htm`, na pasta pública ou na raiz do projeto quando ainda não há pasta pública. Em **Projetos web recentes**, você pode reabrir os dez últimos sites usados. A IDE restaura a pasta pública e o último HTML aberto, inclusive em subpastas. Se esse arquivo foi removido, ela procura a página inicial novamente.

Para ver o site no navegador, siga estes passos.

1. Selecione uma pasta pública. Quando existe `publico` dentro do projeto, ela é sugerida; você pode escolher outra explicitamente.
2. Clique em **Iniciar servidor web**. O painel mostra o endereço assim que a porta estiver aberta.
3. Aguarde a confirmação de início e clique em **Abrir no navegador**.
4. Edite um HTML, CSS ou JavaScript da pasta pública e salve na IDE. As abas abertas no site recarregam na mesma URL, inclusive em subpastas. A prévia também funciona com `servidor_http` executado pela IDE com F5.
5. Use **Parar servidor** para encerrar a prévia. Os servidores iniciados pelo painel ou pelo F5 também liberam a porta ao trocar de projeto, fechar a IDE ou forçar seu encerramento.

O servidor usa o executor nativo da Alumia e fica independente da execução BR. Sua pasta, endereço e registro de acessos aparecem na interface. Somente a pasta escolhida é publicada, em `127.0.0.1`, com acesso restrito a este computador.

Também é possível usar `servidor_http(8080, "publico")` em um `.br` e clicar em Executar; nesse fluxo, o endereço e os acessos aparecem na saída BR e o botão Parar da execução encerra o servidor. Não inicie as duas opções na mesma porta.

Abra [exemplos/site](../exemplos/site/README.md) para experimentar. Ao compilar seu servidor, mantenha a pasta pública ao lado do executável. Os arquivos do site não são embutidos nem copiados automaticamente por Compilar.

<a name="compilacao"></a>

## Compilação

No menu **Compilar**, escolha nome e pasta. Para `idade`, a IDE salva o executável `idade` e o fonte `idade.br` juntos; no Windows, o executável usa `.exe`. Ela confirma substituições e não publica um par incompleto em caso de erro ou cancelamento.

A barra avança 20 pontos percentuais por etapa concluída:

1. Analisar o programa e gerar C.
2. Compilar o programa.
3. Preparar a biblioteca da linguagem, que já vem compilada no pacote.
4. Ligar o executável.
5. Salvar o binário e o fonte.

A porcentagem corresponde a etapas concluídas, não a uma estimativa do tempo restante. A compilação usa as ferramentas incluídas no pacote. O resultado se destina ao mesmo sistema e arquitetura de construção; não é compilação cruzada.

A gravação do par exige links físicos na pasta de destino, como em APFS e NTFS. Para um volume sem esse recurso, como FAT/exFAT, compile na unidade local e depois copie os dois arquivos.
