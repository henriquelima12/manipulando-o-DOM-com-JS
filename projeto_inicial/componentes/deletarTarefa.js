const DeleteButton = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'

    botaoDeleta.addEventListener('click', deleteTask)

    return botaoDeleta
}

const deleteTask = (event) => {
    const botaoDeleteInfo = event.target

    const taskGeneral = botaoDeleteInfo.parentElement 

    taskGeneral.remove()
}

export default DeleteButton