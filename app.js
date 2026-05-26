const input = document.getElementById('input')
const display = document.getElementById('lista-tarefas')
const button = document.getElementById('button')

function inserirTarefa(){
    let tarefa = input.value
    if (tarefa == ''){
        alert("insira uma tarefa, por favor")
        return
    }
    display.innerHTML += 
    `<div class="tarefa">
        ${tarefa} 
        <div class="buttons">
            <button class="delete">Apagar</button>
            <button class="edit">Editar</button>
        </div>
    </div>`

    input.value = ''
}
function gerenciarTarefa(event){
    if(event.target.classList.contains("delete")){
        event.target.parentElement.parentElement.remove()
    }
    if(event.target.classList.contains("edit")){
        tarefa = prompt("Edite o seu Texto aqui:")
        display.innerHTML = 
    `<div class="tarefa">
        ${tarefa} 
        <div class="buttons">
            <button class="delete">Apagar</button>
            <button class="edit">Editar</button>
        </div>
    </div>`

    }

}

button.addEventListener("click", inserirTarefa)

display.addEventListener("click", gerenciarTarefa)
