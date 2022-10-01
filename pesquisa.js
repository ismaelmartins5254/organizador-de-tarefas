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
            break
            
         case 'Atividades a Fazer':
            let feito = localStorage.getItem('arrFeito_sRep')
            let todos = localStorage.getItem('arrTodos')
            let aFazer = feito + todos
         
            res.innerHTML = aFazer

            break
        
        default:
            alert('ERRO[]')
            break;
    }
}