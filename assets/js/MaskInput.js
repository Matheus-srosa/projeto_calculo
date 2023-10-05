const mask = document.querySelectorAll('.mask')
const mask2 = document.querySelectorAll('.mask2')

mask.forEach(mask => {
    mask.addEventListener('keypress',() =>{
        const inputLength = mask.value.length
    
        if (inputLength === 2) {
            mask.value += '.'
        } 
    })
})

mask2.forEach(mask2 => {
    mask2.addEventListener('keypress', () => {
        const maskLength = mask2.value.length
    
        if (maskLength === 1) {
            mask2.value += '.'
        }
    } )
})