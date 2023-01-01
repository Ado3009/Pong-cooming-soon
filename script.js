function notfytext(){
    let input = document.querySelector('.submit')
    let conatiner = document.querySelector('.container')
    let value = input.value

   let noviEl = document.createElement('p')
        noviEl.setAttribute('id', 'novi')
        conatiner.appendChild(noviEl)

    
    if(value.includes('@') && value.includes('.')){

        let pozicijaAt = value.indexOf('@')
        let pozicijaDot = value.indexOf('.')
        let izmeduAtDot = value.substring(pozicijaAt +1, pozicijaDot)
        if(izmeduAtDot.length > 1){
            let prijeAt = value.substring(0, pozicijaAt)
            if(prijeAt.length > 2){
                let poslijeDot = value.substring(pozicijaDot +1, value.length)
                if(poslijeDot.length > 1){
                    
                }else{
                    noviEl.innerText = 'Please provide a valid email adress'
                }
            }else{
                noviEl.innerText = 'Please provide a valid email adress'
            }
        }else{
            noviEl.innerText = 'Please provide a valid email adress'
        }
    }else{
        noviEl.innerText = 'Please provide a valid email adress'
    }

}