var arrTodos = []
var arrFeito = []
var arrAfazer = []
var item 
var btnE
var btn

function adicionar(){
    var tarefa = document.getElementById('addtarefa')
    var res = document.getElementById('res')
    var botao = document.getElementById('btn')

    if (tarefa.value == 0) {
        alert('Escreva uma tarefa antes de adicionar')
    }else if(arrTodos.indexOf(tarefa.value) != -1){
        alert('Tarefa ja adicionada')
    }else{
        arrTodos.push(tarefa.value)
        item = document.createElement('span')
        item.innerHTML = `<br>${tarefa.value}`
        btn = document.createElement('button') //botao para marcar como feito
        btn.addEventListener('click', feito)
        btn.classList.add('btn1')
        btn.innerHTML = '✔'
        

        btnE = document.createElement('button') //botao para excluir
        btnE.addEventListener('click', excluir)
        btnE.classList.add('btn2')
        btnE.innerHTML = `❌`

        botao.appendChild(item)
        botao.appendChild(btn)
        botao.appendChild(btnE)
       
    }
    tarefa.focus()
    tarefa.value = ''
}

function feito() {
    alert(1)
}

function excluir() {
    alert(2)
}