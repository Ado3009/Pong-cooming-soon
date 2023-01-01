function add(){
    let input = document.querySelector('.submit')
    let value = input.value


    let noviEl = document.createElement('div')
      noviEl.classList = ('novi')
     document.querySelector('.container').appendChild(noviEl)

    if (value.includes('@') && value.includes('.')){
    
    let pozicijaAt = value.indexOf('@')
    let pozicijaDot = value.indexOf('.')
    let izmeduAtDot = value.substring(pozicijaAt +1, pozicijaDot)
    if(izmeduAtDot.length > 1){
        let prijeAt = value.substring(0, pozicijaAt)
        if(prijeAt.length > 1){
            let poslijeDot = value.substring(pozicijaDot +1, value.length)
            if(poslijeDot.length > 1){
            }else{
                noviEl.innerHTML = 'Please provide a valid email adress'
            }
        }else{
            noviEl.innerHTML = 'Please provide a valid email adress'
        }
    }else{
        noviEl.innerHTML = 'Please provide a valid email adress'
    }
      
    
 }else{
    noviEl.innerText = 'Please provide a valid email adress'
 }
   
}

