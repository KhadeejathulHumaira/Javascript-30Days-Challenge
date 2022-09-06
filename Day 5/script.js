const panel=document.querySelectorAll('.panel')
panel.forEach(item=>{
    item.addEventListener('click',e=>{
        let currElm= e.currentTarget.classList
        currElm.toggle('open')
        console.log(e.currentTarget.classList)
    })
})
panel.forEach(item=>{
    item.addEventListener('transitionend',e=>{
        console.log(e.propertyName)
        let currElm= e.currentTarget.classList
        e.propertyName.includes('flex')?currElm.toggle('open-active'):' '
       
    })
})

