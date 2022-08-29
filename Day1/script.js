window.addEventListener('keydown',(e)=>{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio)
    if(!audio) return;//If other keys are pressed the function will stop
    audio.currentTime=0;// rewind to start
    audio.play()// plays the audio
    key.classList.add('playing')
})

function removeTransition(e){
    if(e.propertyName=='transform'){ // look for this property name 
    this.classList.remove('playing')}
}
const keys=document.querySelectorAll('.key')
keys.forEach(key=>{
    key.addEventListener('transitionend',removeTransition)//remove the transition effect after 0.7s
    })