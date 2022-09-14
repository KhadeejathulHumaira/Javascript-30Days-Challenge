const canvas=document.querySelector('#draw');
const cntx=canvas.getContext('2d')//getting the context inside the canvas
//width & height of canvas is set to windows width and height
canvas.width=window.innerWidth
canvas.height=window.innerHeight
cntx.strokeStyle='#bada55';
cntx.lineJoin='round';
cntx.lineCap='round';
cntx.lineWidth=30;

let isDrawing=false;
let lastX=0;
let lastY=0;
let hue=0;
let direction = true;

const draw=(e)=>{
    if(!isDrawing) return;
    cntx.strokeStyle=`hsl(${hue},100%,50%)`
    cntx.beginPath();//start to draw
    //start from
    cntx.moveTo(lastX,lastY);
    //go to
    cntx.lineTo(e.offsetX,e.offsetY);
    cntx.stroke()
    console.log(e)
    lastX=e.offsetX
    lastY=e.offsetY
    hue++;
    if(hue>=360){
        hue=0
    }
    if (cntx.lineWidth >= 100 || cntx.lineWidth <= 1) {
        direction = !direction;
      }
    
      if(direction) {
        cntx.lineWidth++;
      } else {
        cntx.lineWidth--;
      }


}
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown',(e)=> {
    isDrawing=true
    console.log(e.offsetX)
    lastX=e.offsetX
    lastY=e.offsetY
})
canvas.addEventListener('mouseup',()=> isDrawing=false)
canvas.addEventListener('mouseout',()=> isDrawing=false)
