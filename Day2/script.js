const secondsHand=document.querySelector('.second-hand')
const minuteHand=document.querySelector('.minute-hand')
const hourHand=document.querySelector('.hour-hand')

function setDate(){
    const now=new Date()
    const seconds=now.getSeconds()
    const secDegree=(((seconds+1)/60)*360)+90;
    secondsHand.style.transform=`rotate(${secDegree}deg)`

    const minute=now.getMinutes()
    const minDegree=(((minute+1)/60)*360)+90;
    minuteHand.style.transform=`rotate(${minDegree}deg)`

    const hour=now.getMinutes()
    const hourDegree=(((hour+1)/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegree}deg)`


    console.log(minute,minDegree)
}
setInterval(setDate,1000)