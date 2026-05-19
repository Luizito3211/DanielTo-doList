const input = document.getElementById('input')
const display = document.getElementById('lista-tarefas')
const button = document.getElementById('button')

function inserirTarefa(){
    display.innerHTML = input.value
}

button.addEventListener("click", inserirTarefa)
