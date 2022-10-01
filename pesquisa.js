
function pesquisar(){
    var select = document.getElementById('filtro')
    var res = document.getElementById('res')
    res.style.display = 'block'
    let itemSelect = select.options[select.selectedIndex].text //pegar valor do select

    switch (itemSelect) {
        case 'Atividades Feitas':
            res.innerHTML = localStorage.getItem('arrFeito_sRep')
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