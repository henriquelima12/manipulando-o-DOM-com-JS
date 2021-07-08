import ConcludeButton from './componentes/concluirTarefa.js'
import DeleteButton from './componentes/deletarTarefa.js'

const createTask = (event) => {
    event.preventDefault()

    const input = document.querySelector("[data-form-input]")
    const valueInput = input.value

    const list = document.querySelector("[data-list]")

    const task = document.createElement('li')
    task.classList.add('task')

    const content = `<p class="content">${valueInput}</p>`

    task.innerHTML = content
    task.appendChild(ConcludeButton())
    task.appendChild(DeleteButton())

    list.appendChild(task)

    input.value = ""
}

const newTask = document.querySelector("[data-form-button]")
newTask.addEventListener('click', createTask)


