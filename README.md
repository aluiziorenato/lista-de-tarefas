COMETÁRIOS AO CÓDIGO JAVASCRIPT
 Iniciamos obtendo todos os seletores de classe necessários instanciando nas variáveis.

Inicializamos 4 constante passando para ela document.querySelector com as classes inseridas no html. O document.querySelector retorna o primeiro elemento dentro do documentoque corresponde ao grupo especificado de seletores para que seja possível manipular posteriormente.

O evento onkeyup ocorre quando o usuário libera uma tecla no teclado. é possível obter três eventos relacionados evento relacionados ao teclado:
onkeyup: - Dispara o evento quando a tecla é pressionada e solta, ou seja, quando a tecla sobe;
onkeydown - Dispara o evento quando quando o usuário está pressiona uma tecla e a tecla chega ao final do curso, dispara apenas uma vez;
onkeypress - Ocorre quando o usuário está pressionando, se maner a tecla pressionada ira disparar varios eventos. O evento onkeypress não é acionado para todas as teclas (por exemplo, ALT, CTRL, SHIFT, ESC), 


  pegamos o valor digitado pelo usuário nos campos representados pelo iputBox que são as classe inputField input. o objeto value retorna especificamente o valor contido em inputBox.
    
  verifica se o valor digitado pelo usuário e incluido na variável userEnteredValue não é apenas espaços, ou seja, diferente de zero, removendo espaços em branco do inicio e fim do texto.
  Importante observar que o método trim() remove espaços em branco de ambos os lados da string, porém não altera a string original.
  Para remover espaços em branco no inicio podemos usar o método trimStart() e, para remover apenas no final da string o método trimEnd()
  
  
 ativa o botão adicionar no elemento representado pela classe inputField button. Sendo o classList uma alternativa para acessar a lista de classes de um elemento e, através do método add adicione valores de classe especificada. neste caso a classe recebida na vriável addBtn.
  

Se as condiçoes anteriores não forem satisfeita desativa o botão adiconar utilizando o método classList.remove.

A função recebe o evento onclick que ocorre quando o usuário clica em um elemento , neste caso quando o usuário clica no botão de adição.
Um evento HTML pode ser algo que o navegador faz ou algo que um usuário faz ou, Uma página da Web HTML terminou de carregar, Um campo de entrada HTML foi alterado
Um botão HTML foi clicado.
Os eventos podem ser: 
onchange	 - Um elemento HTML foi alterado;
onclick	 - O usuário clica em um elemento HTML;
onmouseover	- O usuário move o mouse sobre um elemento HTML;
onmouseout	- O usuário move o mouse para longe de um elemento HTML;
onkeydown	- O usuário pressiona uma tecla do teclado;
onload	- O navegador terminou de carregar a página.

obtendo o valor do campo de entrada representado pela classe inputField input guardando o resultado na variável userEnteredValue

obtém o armazenamento local e passa o nome da chave para o método getItem() da interface Storage retornará o seu valor.
A propriedade localStorage permite acessar um objeto Storage local. Os dados armazenados no localStorage não expiram, quando a página (aba ou janela) é fechada.
Para ver todos os dados gravados no localStorage no browser, basta abrir o inspect, clicar na aba Application, e depois, na sidebar, clicar em Local Storage.
O localStorage pode fazer basicamente 4 ações, usando 4 métodos:
localStorage.setItem() -  para criar um novo valor;
localStorage.getItem() - para recuperar o valor;
localStorage.removeItem()  - para remover um valor;
localStorage.clear() - apaga TODOS os pares gravados naquele domínio;


  O localStorage retorna um JSON (JavaScript Object Notation), faz um parse para transformando o json em um objeto js.
  O objeto JSON, disponível em todos os navegadores modernos, possui dois métodos úteis para lidar com o conteúdo formatado em JSON: parse e stringify. JSON.parse() recebe uma string JSON e a transforma em um objeto JavaScript. JSON.stringify() recebe um objeto JavaScript e o transforma em uma string JSON.
JSON.parse() pode receber uma função como um segundo argumento que transforma os valores do objeto antes de serem retornados.
  
  listArray.push(userEnteredValue);
  
 adicionando novo valor no array usando como parâmetro os valores recebidos na função addBtn. o método de array push() adiciona novo valor ao final do array, existindo ainda outras formas de incluir valores no array como o método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos.
 

 
 transformando o objeto js em uma string json pois o localStorage só recebe objeto  JSON utilizando o metodo stringify. O método setItem() da interface Storage, quando passado irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já exista.
 

concluida a adição do conteúdo desativa o botão adicionar a função classList pode receber os seguintes métodos:

add( String [, String] ) - Adicione valores de classe especificados. Se essas classes já existem no atributo do elemento, elas são ignoradas.
remove( String [,String] ) - Remover valores de classe específicos.
item ( Number ) - Retorna o valor da classe por índice na coleção.
toggle ( String [, force] ) - Quando apenas um argumento está presente: Toggle class value; Ou seja, se a classe existir, em seguida, removê-lo e retornar false, se não, então adicioná-lo e retornar true.
Quando um segundo argumento está presente: Se o segundo argumento é avaliado como true, adicione o valor especificado da classe e, se ele for avaliado como false, remova-o.
contains( String ) - Verifica se o valor da classe especificado existe no atributo de classe do elemento.

btém o armazenamento local e passa o nome da chave para o método getItem() da interface Storage retornará o seu valor
se localstorage não tem dados ou for nulo
cria um array em vazio
o localStorage retorna um JSON então, faz um parse para transformando o json em um objeto js
intera sobre a classe pedingTasks
 passando o tamanho do array em pendingTasks
verifica se o tamanho do arrey é maior que zerp
sendo maior que zero, então ativa o botão delete para as clases footer button
sendo vazio o array desativa o botão delete
 
interamos sobre o array listArray recebendo o elemento desse array e o indice
a variável nesLiTag recebe por interpolação nas LI o elemento do array 
dicionando nova tag li dentro da tag ul
realizada a tarefa, volta a deixar o campo de entrada em branco para nova entrada

Deletando tarefa
transforma o objeto js em uma string json pois o localStorage só recebe objeto  JSON utilizando o metodo stringify
deleta todas as funções de tarefas
zera o array
transforma o objeto js em uma string json pois o localStorage só recebe objeto  JSON utilizando o metodo stringify
chama a função

