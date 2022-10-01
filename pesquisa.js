
function pesquisar(){
    var select = document.getElementById('filtro')
    var res = document.getElementById('res')
    res.style.display = 'block'
    let itemSelect = select.options[select.selectedIndex].text //pegar valor do select
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.classList.add('remover-botao')
    let i = localStorage.getItem('arrFeito')
    let arrNovo = [... new Set(i.innerText)]

    switch (itemSelect) {
        case 'Atividades Feitas':
            span.innerHTML = arrNovo
            res.appendChild(div)
            div.appendChild(span)
           
            break;
            
        case 'Todos': 
            res.innerHTML = localStorage.getItem('arrTodos')
            div.appendChild(span)
            break
            
         case 'Atividades a Fazer':
            alert('Atividades a Fazer')
            break
        
        default:
            alert('loop')
            break;
    }
        
}