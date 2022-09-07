// obtendo todos os seletores de classe necessários instanciando nas variáveis
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// aplica a função onkeyup aos valores recebido na constante inputBox
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //pega o valor digitado pelo usuário nos campos representados pelo iputBox que são as classe inputField input
  if(userEnteredValue.trim() != 0){ //verifica se o valor digitado pelo usuário e incluido na variável userEnteredValue não é apenas espaços removendo espaços em branco do inicio e fim do texto.
    addBtn.classList.add("active"); //ativa o botão adicionar no elemento representado pela classe inputField button
  }else{
    addBtn.classList.remove("active"); //Se as condiçoes anteriores não forem satisfeita desativa o botão adiconar
  }
}

showTasks(); //chama a fuçãoo construida na linha 33

addBtn.onclick = ()=>{ // função responsável quando o usuário clica no botão de adição 
  let userEnteredValue = inputBox.value; //obtendo o valor do campo de entrada representado pela classe inputField input guardando o resultado na variável userEnteredValue
  let getLocalStorageData = localStorage.getItem("New Todo"); //obtém o armazenamento local e passa o nome da chave para o método getItem() da interface Storage retornará o seu valor
  if(getLocalStorageData == null){ //se localstorage não tem dados ou for nulo
    listArray = []; //cria um array em vazio
  }else{
    listArray = JSON.parse(getLocalStorageData);  //Como o localStorage retorna um JSON, faz um parse para transformando o json em um objeto js
  }
  listArray.push(userEnteredValue); //adicionando novo valor no array usando como parâmetro os valores recebidos na função addBtn
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transformando o objeto js em uma string json pois o localStorage só recebe objeto  JSON utilizando o metodo stringify
  showTasks(); //chama a fuçãoo construida na linha 33
  addBtn.classList.remove("active"); //concluida a adição do conteúdo desativa o botão adicionar
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo"); //obtém o armazenamento local e passa o nome da chave para o método getItem() da interface Storage retornará o seu valor
  if(getLocalStorageData == null){ //se localstorage não tem dados ou for nulo
    listArray = []; //cria um array em vazio
  }else{
    listArray = JSON.parse(getLocalStorageData); //o localStorage retorna um JSON então, faz um parse para transformando o json em um objeto js
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks"); //intera sobre a classe pedingTasks
  pendingTasksNumb.textContent = listArray.length; //passando o tamanho do array em pendingTasks
  if(listArray.length > 0){ //verifica se o tamanho do arrey é maior que zerp
    deleteAllBtn.classList.add("active"); //sendo maior que zero, então ativa o botão delete para as clases footer button
  }else{
    deleteAllBtn.classList.remove("active"); //sendo vazio o array desativa o botão delete
  }
  let newLiTag = "";
  listArray.forEach((element, index) => { // intera sobre o array listArray recebendo o elemento desse array e o indice
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  }); // a variável nesLiTag recebe por interpolação nas LI o elemento do array 
  todoList.innerHTML = newLiTag; //adicionando nova tag li dentro da tag ul
  inputBox.value = ""; // realizada a tarefa, volta a deixar o campo de entrada em branco para nova entrada
}

// deletando tarefa
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //remove a tag li
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforma o objeto js em uma string json pois o localStorage só recebe objeto  JSON utilizando o metodo stringify
  showTasks(); //chama a função
}

//deleta todas as funções de tarefas
deleteAllBtn.onclick = ()=>{
  listArray = []; //zera o array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforma o objeto js em uma string json pois o localStorage só recebe objeto  JSON utilizando o metodo stringify
  showTasks(); //chama a função
}