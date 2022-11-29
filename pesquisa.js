function pesquisar(){
    var select = document.getElementById('filtro')
    var res = document.getElementById('res')
    res.style.display = 'block'
    let itemSelect = select.options[select.selectedIndex].text //pegar valor do select

    switch (itemSelect) {
        case 'Atividades Feitas':
            let ArrFeito = localStorage.getItem('arrFeito_sRep')
            if(ArrFeito.length == 0)res.innerHTML = 'marque um item como feito antes'
            else res.innerHTML = ArrFeito
            break;
            
        case 'Todos': 
            var todos = localStorage.getItem('arrTodos')
            res.innerHTML = todos
            break
        default:
            alert('ERRO[*_*]')
            break;
    }
}