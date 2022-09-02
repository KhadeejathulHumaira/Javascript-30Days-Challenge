const inputs=document.querySelectorAll('input')

const handleUpdate=(e)=>{
    const suffix=e.currentTarget.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.currentTarget.name}`,e.currentTarget.value+suffix)
    console.log(e.currentTarget.value)
}

['change','mousemove'].forEach(event=>
    inputs.forEach(input=> input.addEventListener(event,handleUpdate)))
