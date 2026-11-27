# Guia da linguagem Alumia

Referência da sintaxe atual para estudo e consulta. Os programas usam a extensão `.br` e a codificação UTF-8, com ou sem BOM. Arquivos com quebras de linha LF, CRLF e CR têm o mesmo comportamento. Escapes hexadecimais em textos devem formar UTF-8 válido, como `"\xC3\xA9"` para `"é"`.

[Voltar à apresentação](README.md) · [Oficina e exemplos por assunto](exemplos/README.md) · [Usar a IDE](docs/ide.md)

## O que já funciona

- Funções com retorno inferido e parâmetros tipados
- Comandos fora de funções, executados em ordem
- `funcao principal()` como entrada automática quando não há comandos externos
- Tipos `inteiro`, `decimal`, `texto`, `booleano` e listas tipadas
- Variáveis, atribuições, literais e expressões `+ - * / %`
- Comparações `== != < <= > >=`, lógica `e ou nao`, `se/senao`, `enquanto` e `para`
- Entrada `leia`, conversões, operações com texto e funções matemáticas
- `escreva()` e `escreval()`
- `retorna()` e `retorna(valor)` com inteiro, decimal, texto, booleano ou lista
- Comentários `//` e `/* */`
- Mensagens de erro em português

As palavras `e`, `ou` e `nao` são operadores lógicos e não podem ser usadas como nomes de variáveis. `verdadeiro` e `falso` são valores booleanos. `e` e `ou` usam curto-circuito: o segundo operando só é avaliado quando necessário.

Ao inicializar uma variável `decimal`, as contas com `+`, `-`, `*` e `/` são feitas em decimal, inclusive dentro de parênteses: `decimal resultado = 3 / 2` guarda `1.5`, e `decimal terco = 1 / 3` imprime `0.333333333333333`. O ponto é o separador decimal no código e na saída; a impressão usa até 15 algarismos significativos, sem acrescentar zeros desnecessários.

Literais com expoente são decimais. Por exemplo, `2e3` vale 2000 e `2.5E-1` vale 0.25. Comparações entre inteiro e decimal consideram o valor de cada operando, inclusive para inteiros acima de 2⁵³.

Em uma expressão de inteiros sem esse contexto, a divisão trunca em direção a zero: `inteiro resultado = 3 / 2` guarda `1`. Para obter uma fração diretamente em `escreval`, use um operando decimal: `escreval(3.0 / 2)`. O operador `%` e suas subexpressões continuam exigindo aritmética inteira. Divisão por zero gera erro em português tanto para inteiros quanto para decimais.

`retorna(valor)` devolve um valor a quem chamou a função e encerra somente aquela chamada. `retorna()` encerra uma função sem devolver valor. A chamada usa parênteses: `escreval(calcular())`. O tipo é inferido pelos retornos, ou pode ser declarado antes do nome: `funcao decimal metade(decimal numero) { retorna(numero / 2) }`. Funções podem ser declaradas antes ou depois de quem as chama. Argumentos e operandos são avaliados da esquerda para a direita.

Quando existem comandos fora das funções, esses comandos são o início do programa. Nesse formato, `principal` pode ser chamada como qualquer outra função e devolver decimal ou texto. Se não há comandos externos, `principal()` continua sendo a entrada automática: `retorna()` ou o fim da função indicam sucesso, e `retorna(inteiro)` preserva os códigos de saída 0 a 255. Assim, programas anteriores continuam funcionando.

Variáveis declaradas diretamente fora das funções são globais. Variáveis e parâmetros locais pertencem à função, e blocos possuem escopos próprios. Ler uma global antes de sua declaração ser executada gera erro em português. Recursão e funções aninhadas ainda são diagnosticadas como não suportadas. `retorna` fora de uma função, retornos incompatíveis e uso de uma função sem retorno como valor também são erros. A grafia `retorne` permanece reservada.

## Declarações agrupadas

Para criar várias variáveis do mesmo tipo, escreva o tipo uma vez e separe os nomes por vírgulas:

```br
inteiro largura = 10, altura = 20, profundidade = 5
decimal preco = 19.90, desconto = 2.50
texto nome = "Ana", cidade = "Recife"
booleano ativo = verdadeiro, aprovado = falso
```

Cada inicializador é avaliado da esquerda para a direita. `inteiro base = 10, dobro = base * 2` é válido; ler uma variável antes de sua inicialização continua sendo erro. Todas as variáveis do grupo recebem o mesmo tipo e pertencem ao mesmo escopo das declarações separadas. Tipos diferentes exigem outra declaração. Também funciona com listas (`lista<inteiro> a = [1, 2], b = a`) e no início de `para` (`para (inteiro i = 0, limite = 3; i < limite; i = i + 1) { ... }`).

O valor padrão continua disponível quando `=` é omitido: zero para números, texto vazio, `falso` ou lista vazia. Assim, `inteiro a, b = 2` cria `a` com zero e `b` com dois. Prefira inicializadores explícitos para facilitar a leitura. Veja o programa completo em `exemplos/declaracoes_multiplas.br` e em Documentação → Variáveis. O formatador e o autocomplete também reconhecem os nomes agrupados.

## Recursos básicos

O exemplo interativo completo está em [exemplos/basico.br](exemplos/basico.br). Abra o arquivo pela IDE, pressione **F5** e responda no Terminal. Para gerar um executável, use o menu **Compilar**.

```br
texto nome = leia("Seu nome: ")
inteiro idade = para_inteiro(leia("Sua idade: "))
booleano adulto = idade >= 18
se (adulto) {
    escreval("Olá, " + maiusculas(nome) + "!")
} senao {
    escreval("Olá, jovem!")
}

lista<decimal> notas = [7, 8.5, 10]
notas[0] = 9
decimal soma = 0
para (inteiro i = 0; i < tamanho(notas); i = i + 1) {
    soma = soma + notas[i]
}
escreval("Média: ", soma / tamanho(notas))

inteiro contador = 1
enquanto (contador <= 3) {
    escreval(contador)
    contador = contador + 1
}
```

A atribuição atualiza uma variável já declarada. `se`, `enquanto` e a condição de `para` exigem booleanos. `senao se` permite encadear condições. Os dois `;` são obrigatórios no cabeçalho do `para`; cada parte pode ser vazia. Uma variável criada no cabeçalho só existe dentro do laço. `retorna` sai da função, mesmo dentro de um laço. Funções que devolvem valores precisam retornar em todos os caminhos; um retorno somente dentro de `se` ou de um laço não basta sem um caminho alternativo.

O **condicional ternário** escolhe um valor pela forma `condicao ? valor_se_verdadeiro : valor_se_falso`, sem a palavra `se`:

```br
inteiro idade = 18
texto mensagem = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade"
escreval(mensagem)
```

A condição precisa ser booleana. Apenas o ramo escolhido é executado, mas os dois são verificados e devem ter tipos compatíveis. Inteiro e decimal podem ser combinados; o resultado passa a decimal. O contexto decimal também preserva a fração em `decimal valor = verdadeiro ? 1 / 3 : 0`. Listas precisam ter o mesmo tipo de elemento. O ternário tem precedência menor que `ou` e pode ser encadeado: `nota >= 7 ? "aprovado" : nota >= 5 ? "recuperação" : "reprovado"`. Veja [exemplos/ternario.br](exemplos/ternario.br).

Também pode ser usado sozinho para executar uma das chamadas:

```br
inteiro idade = 17
idade >= 18 ? escreval("maior") : escreval("menor")
```

Nesse caso, os dois ramos podem ser funções sem retorno. Uma expressão sem retorno não pode inicializar uma variável nem ser usada como argumento ou valor de `retorna`.

Listas aceitam `lista<inteiro>`, `lista<decimal>`, `lista<texto>` e `lista<booleano>`. As posições começam em zero; índices fora dos limites geram erro em português. O tamanho é fixo, mas os elementos podem ser substituídos. Atribuições, parâmetros e retornos copiam a lista por valor: alterar a cópia não altera a original. `lista<texto> nomes = []` cria uma lista vazia. Para mostrar uma lista, percorra e imprima seus elementos. Listas aninhadas e impressão direta da lista ainda não são suportadas.

| Função | Uso e resultado |
| --- | --- |
| `leia()` / `leia("Pergunta: ")` | Lê uma linha e devolve texto, inclusive vazio. Fim da entrada sem resposta gera erro. Na IDE, use o campo do painel de saída. |
| `para_inteiro(valor)` | Converte texto inteiro válido ou número; decimais truncam em direção a zero. Verifica os limites de 64 bits. |
| `para_decimal(valor)` | Converte texto numérico ou número. Aceita ponto e expoente, rejeita texto inválido, NaN e infinito em texto. |
| `para_texto(valor)` | Converte inteiro, decimal, booleano ou texto para o mesmo formato usado na saída. |
| `tamanho(texto_ou_lista)` | Conta pontos de código Unicode no texto, ou elementos na lista. Um acento combinante conta separadamente. |
| `maiusculas(texto)` | Converte Unicode para maiúsculas sem depender do sistema: `ação` vira `AÇÃO`, `straße` vira `STRASSE`. |
| `minusculo(texto)` | Converte para minúsculas: `AÇÃO` vira `ação`. Preserva acentos e não altera o texto original. Assim como `maiusculas`, usa mapeamentos Unicode por ponto de código, sem regras contextuais de idioma. |
| `minimo(lista)` / `maximo(lista)` | Devolve o menor/maior elemento de uma lista numérica. Lista de inteiros devolve inteiro; lista de decimais devolve decimal. Não altera a lista. Lista vazia gera erro. |
| `sorteia(inicio, fim)` | Sorteia um inteiro entre os dois limites, **incluindo ambos**: `sorteia(1, 6)` simula um dado. Exige dois inteiros; aceita negativos. Limites iguais devolvem o próprio número; início maior que fim gera erro. |
| `arredondar(numero)` | Devolve decimal arredondado; metades se afastam de zero: `2.5` vira `3`, `-2.5` vira `-3`. |
| `raiz(numero)` | Raiz quadrada; rejeita números negativos. |
| `potencia(base, expoente)` | Potência; rejeita domínio inválido ou resultado fora do intervalo. |
| `aleatorio()` | Decimal maior ou igual a zero e menor que um; adequado a exercícios e jogos, não a criptografia. |
| `espera(segundos)` | Pausa antes do próximo comando: `espera(5)`, `espera(0.5)` ou `espera(1.99)`. Aceita número não negativo com até duas casas decimais; não devolve um valor. Parar na IDE também interrompe a espera. |

Textos podem ser unidos com `+`, como `"Olá, " + nome`. Para juntar número com texto, use `para_texto(numero)`. Comparações numéricas e textuais aceitam `== != < <= > >=`; booleanos aceitam `== !=`. Textos seguem ordem lexicográfica, sem ordenação regional. Listas não são comparáveis.

Exemplo das novas funções em [exemplos/utilitarias.br](exemplos/utilitarias.br):

```br
escreval(minusculo("OLÁ, BRASIL!"))
lista<decimal> notas = [7, 8.5, 10]
escreval("Menor: ", minimo(notas), " | Maior: ", maximo(notas))
escreval("Dado: ", sorteia(1, 6))
```

`sorteia` e `aleatorio` usam um gerador pseudoaleatório para exercícios e jogos; não são funções criptográficas.

`espera(1.99)` corresponde a 1 segundo e 990 milissegundos. Valores como `1.999`, negativos, infinitos ou de tipo texto geram erro em português. A duração aceita também pode vir de uma variável ou expressão, como `espera(0.1 + 0.2)`. O sistema pode retomar o programa um pouco depois do tempo solicitado. Veja [exemplos/espera.br](exemplos/espera.br).

Atribuições decimais, elementos de listas decimais e argumentos de `arredondar`, `raiz`, `potencia` e `para_decimal` preservam frações: `raiz(1 / 4)` resulta em `0.5`. Comparações e `para_inteiro`/`para_texto` preservam os tipos originais das expressões. Conversões aceitam espaços ASCII nas extremidades do texto. Entradas são UTF-8 e limitadas a 1 MiB por linha; a IDE limita o fonte a 8 MiB e a saída acumulada, incluindo respostas exibidas, a 4 MiB.


## Servidor HTTP estático

```br
rota.get("/")
servidor_http(8080, "publico")
```

`servidor_http(porta, pasta)` atende arquivos HTML, CSS, JavaScript, imagens e outros recursos estáticos. `porta` deve ser um inteiro de 1 a 65535; `pasta` deve ser texto e apontar para um diretório existente. A porta também pode vir de uma variável inteira, como em `servidor_http(porta, "publico")`, inclusive na aba **Servidor web** da IDE. A função não retorna valor. O programa permanece atendendo até ser interrompido com Parar na IDE ou Ctrl+C no terminal.

Com a porta 8080, o endereço anunciado é `http://127.0.0.1:8080`, somente neste computador. Também é possível usar `localhost` na mesma porta. O servidor verifica o nome de destino antes de entregar os arquivos. A mensagem de início aparece depois que a porta está pronta. A saída registra os acessos ao site. Porta ocupada, pasta ausente e argumentos inválidos produzem erro em português.

Na IDE, caminhos relativos partem da pasta do arquivo `.br` salvo (ou da pasta do projeto quando não há caminho salvo). No executor por arquivo, partem da pasta do fonte; ao receber código pela entrada padrão, partem do diretório de trabalho. No executável compilado, partem da pasta do próprio executável. Para distribuir um site, copie `publico` junto do binário; o menu Compilar não copia os arquivos web automaticamente.

Cada rota registrada sem página personalizada procura primeiro `index.html` e depois `index.htm`. Arquivos ausentes retornam 404. O servidor aceita GET e HEAD, escolhe o tipo de conteúdo pela extensão e lê os arquivos a cada acesso. Na prévia iniciada pela IDE, salvar HTML, CSS ou JavaScript da pasta pública recarrega a página aberta. Ao rodar o servidor pelo executável independente, atualize a página no navegador após editar os arquivos. O JavaScript roda no navegador.

`rota.get(...)` registra uma página para requisições HTTP GET. O caminho da rota segue o nome da pasta dentro de `publico`. Declare cada página antes de iniciar o servidor, inclusive a inicial com `rota.get("/")`.

```br
rota.get("/")
rota.get("/sobre")
servidor_http(8080, "publico")
```

Para registrar várias pastas, passe uma `lista<texto>` como único argumento de `rota.get()`. Cada item pode vir com ou sem a barra inicial. A lista conserva os textos e a ordem. Neste exemplo, `paginas[0]` continua valendo `"galeria"`, e `/galeria/` abre `publico/galeria/index.html`.

```br
lista<texto> paginas = ["galeria", "oficina", "sobre"]
rota.get(paginas)
servidor_http(8080, "publico")
```

Ao abrir `/sobre`, o navegador vai para `/sobre/` e recebe `publico/sobre/index.html`. Uma página sem rota responde 404, mesmo com um `index.html` na pasta. Acessar o arquivo HTML pelo nome também responde 404, inclusive dentro de `estaticos/`. CSS, JavaScript, imagens e outros recursos em `publico/estaticos/` podem ser acessados diretamente. Para escolher outra página inicial na própria pasta, use `rota.get("/sobre", "equipe.html")`. Duas declarações para a mesma pasta geram erro. As requisições de imagens usam sempre `publico/estaticos/imagens/`. Por exemplo, este HTML em `/sobre/` pede `/sobre/equipe.jpg` ao navegador. O servidor busca `publico/estaticos/imagens/equipe.jpg`, mesmo que exista uma cópia em `publico/sobre/`. Se a imagem central estiver ausente, o servidor responde 404. Para um álbum em uma subpasta, use o endereço completo, como `/estaticos/imagens/turma/equipe.jpg`.

```html
<img src="equipe.jpg" alt="Equipe">
```

Apenas a pasta pública é servida. Caminhos com travessia, arquivos ocultos e links simbólicos são recusados; não há listagem de diretórios. Esta primeira versão é destinada a sites locais de aprendizado, sem rotas dinâmicas, HTTPS ou APIs. Requisições têm limites de tamanho e tempo, e são atendidas uma por vez.

Veja o projeto completo em [exemplos/site](exemplos/site/README.md).

## Limites atuais

Recursão, funções aninhadas, `pare`/`continue`, `escolha`/`caso`, listas redimensionáveis, listas aninhadas e classes ainda não estão implementados.
