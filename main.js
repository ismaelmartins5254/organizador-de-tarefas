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
        item.id = 'i'
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
    localStorage.setItem('item', item.innerHTML)
    localStorage.setItem('btn', btn.innerHTML)
    localStorage.setItem('btnE', btnE.innerHTML)
}


//inicio das functions dos botões 
document.addEventListener('click', (e) => {
    let targetEl = e.target //retorna o elemento que acionou o evento
    window.parent = targetEl.closest("div") //procura o elemento pai mais perto
    
    e.preventDefault() //cancelar envio do Form *Não necessário nesse caso :)*
    
    if(targetEl.classList.contains('btn1')){  //se clicar no botao com class= btn1
        parent.classList.toggle('feito') //toggle tira ou coloca a class 'feito'
        arrFeito.push(parent.innerHTML)
        localStorage.setItem('arrFeito', arrFeito)
    }else if(targetEl.classList.contains('btn2')){
        arrTodos.splice(arrTodos.indexOf(targetEl)) //remove item do array 
        parent.remove()
        arrFeito.splice(arrFeito.indexOf(targetEl))
        res.innerHTML = ''
        
    }
})

//function de busca

function pesquisar(){
    var select = document.getElementById('filtro')
    var res = document.getElementById('res')
    res.style.display = 'block'
    let itemSelect = select.options[select.selectedIndex].text //pegar valor do select

    let item = localStorage.getItem('item')
    let btnE = localStorage.getItem('btnE')
    let btn = localStorage.getItem('btn')
    console.log(`oi ${item + btnE + btn}`)
    console.log(`ola ${btnE}`)
    console.log(`hello ${btn}`)

    switch (itemSelect) {
        case 'Atividades Feitas':
            let div = document.createElement('div')
            let span = document.createElement('span')
            span.innerHTML = item
            let buttonF = document.createElement('button')
            buttonF.innerHTML = btnE
            let buttonC = document.createElement('button')
            buttonC.innerHTML = btn
            res.appendChild(div)
            div.appendChild(span)
            div.appendChild(buttonC)
            div.appendChild(buttonF)
            
            break;

        case 'Todos': 
            alert("todos")
            break
            
         case 'Atividades a Fazer':
            alert('Atividades a Fazer')
            break
        
        default:
            alert('loop')
            break;
    }
        
}