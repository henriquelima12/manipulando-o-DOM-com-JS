const ConcludeButton = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')

    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concludeTask)

    return botaoConclui
}

const concludeTask = (event) => {
    const botaoConcluiInfo = event.target

    const completeTask = botaoConcluiInfo.parentElement

    completeTask.classList.toggle('done')
}

export default ConcludeButton