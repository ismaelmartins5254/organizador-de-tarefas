var arrTodos = []
var arrFeito = []
var arrAfazer = []
var item 
var btnE
var btn
let div

function adicionar(){
    var tarefa = document.getElementById('addtarefa')
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
        btn.classList.add('btn1')
        btn.innerHTML = '✔'
        

        btnE = document.createElement('button') //botao para excluir
        btnE.classList.add('btn2')
        btnE.innerHTML = `❌`
        
        div = document.createElement('div')
        div.classList.add('item')
        botao.appendChild(div)
        div.appendChild(item)
        div.appendChild(btn)
        div.appendChild(btnE)


       
    }
    tarefa.focus()
    tarefa.value = ''
}

document.addEventListener('click', (e) => {
    let targetEl = e.target
    let parent = targetEl.closest("div") //elemento pai mais perto

    if(targetEl.classList.contains('btn1')){  //se clicar no botao com class btn1
        parent.classList.toggle('feito') //toggle tira ou coloca a class 

    }else if(targetEl.classList.contains('btn2')){
        
        arrTodos.splice(arrTodos.indexOf(targetEl)) //remover item do array 
    } 
})