
# project 5 by kashi!

```javascript 
//Generate a Random Color

const randomColor=function(){
const hex='0123456789ABCDEF';
let color='#';
for(let i=0; i<6;i++){
  color+=hex[Math.floor(Math.random()*16)]
}
return color;
};
let intervalId;
const startChangingColor = function () {
  if(!intervalId){
    intervalId=setInterval(changeBgColor,1000);

  }
function changeBgColor() {
  document.body.style.backgroundColor=randomColor();
}
};

const stopChanignColor=function(){
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener('click',startChangingColor )

document.querySelector("#stop").addEventListener('click',stopChanignColor)

```javascript

# project 6
