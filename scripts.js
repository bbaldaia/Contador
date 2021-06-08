function contar() {
    let inicio = document.querySelector('#txtinicio')
    let fim = document.querySelector('#txtfim')
    let passo = document.querySelector('#txtpasso')
    let res = document.querySelector('#res')
    
    if (inicio == "") {
        contagem.textContent = 'Impossível contar!'
    } else {          
        res.innerHTML = '<br> Contando: </br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (var c = i; c <= f; c += p) {
            res.innerHTML += `👉 ${c} `
        }
        } else if (i > f) {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `👉 ${c} `  
            }
        }
        
     }                     
}
