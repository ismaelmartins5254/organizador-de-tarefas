var arrTodos = []
var arrFeito = []
var arrAfazer = []

function adicionar(){
    var tarefa = document.getElementById('addtarefa')
    var botao = document.getElementById('btn')
    window.item 
    window.btnE
    window.btn
    window.div

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


       
    }
    tarefa.focus()
    tarefa.value = ''
}

//inicio das functions dos botões


document.addEventListener('click', (e) => {
    let targetEl = e.target //retorna o elemento que acionou o evento
    window.parent = targetEl.closest("div") //procura o elemento pai mais perto
    
    e.preventDefault() //cancelar envio do Form *Não necessário nesse caso :)*
    
    if(targetEl.classList.contains('btn1')){  //se clicar no botao com class= btn1
        parent.classList.toggle('feito') //toggle tira ou coloca a class 'feito'
        
        arrFeito.push(parent)
        
    }else if(targetEl.classList.contains('btn2')){
        arrTodos.splice(arrTodos.indexOf(targetEl)) //remove item do array 
        parent.remove()
        res.innerHTML += ''
        arrFeito.splice(arrFeito.indexOf(targetEl))
    }
})

function pesquisar(){
    if (parent.classList.contains('feito')) {
        var select = document.getElementById('filtro')
        window.res = document.getElementById('res')
        let itemSelect = select.options[select.selectedIndex].text
        
        if (itemSelect == 'Atividades Feitas') {
            for(window.i = 0; i< parent.length; i++){
                console.log(parent.item(i))
                res.innerHTML += parent.item(i)
                console.log(arrFeito[i])
            }
            const iterator1 = arrFeito[Symbol.iterator]();

            for (const value of iterator1) {
                console.log(value);
                res.innerHTML += value.value
            }
            
            arrFeito[Symbol.iterator]()
            //res.innerHTML += arrFeito.value
            console.log(arrFeito) 
        }
    }else{
        console.log('loop')
    }
    
}

