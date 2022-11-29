var arrTodos = []
var arrFeito = []
var arrAfazer = []
var item 
var btnE
var btn
var div


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
        item.innerHTML = `${tarefa.value}`
        item.classList.add('texto')
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
        let arrTodos_sRep = [... new Set(arrTodos)]
        localStorage.setItem('arrTodos', arrTodos_sRep)
    }
    tarefa.focus()
    tarefa.value = ''
    localStorage.setItem('item', item.innerHTML)
    localStorage.setItem('btn', btn.innerHTML)
    localStorage.setItem('btnE', btnE.innerHTML)
}


//inicio das funções dos botões 
document.addEventListener('click', (e) => {
    let targetEl = e.target //retorna o elemento que acionou o evento
    window.parent = targetEl.closest("div") //procura o elemento pai mais perto
    
    e.preventDefault() //cancelar envio do Form *Não necessário nesse caso :)*
    
    if(targetEl.classList.contains('btn1')){  //se clicar no botao com class= btn1
        parent.classList.toggle('feito') //toggle tira ou coloca a class 'feito'

        if(parent.classList.contains('feito')){
            arrFeito.push(parent.innerHTML)
        }else {
            if(arrFeito.indexOf(parent)) arrFeito.splice(arrFeito.indexOf(arrFeito)) //excluir do array feito após tirar a class feito  
        }

        
    }else if(targetEl.classList.contains('btn2')){
        arrTodos.splice(arrTodos.indexOf(targetEl)) //remove item do array 
        parent.remove()
        arrFeito.splice(arrFeito.indexOf(targetEl))
        res.innerHTML = ''
        
    }
        let arrFeito_sRep = [... new Set(arrFeito)] //evitar repetição no array
        localStorage.setItem('arrFeito_sRep', arrFeito_sRep)
})