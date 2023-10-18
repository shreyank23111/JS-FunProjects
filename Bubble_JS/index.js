function makeBubble(){
  var clutter=" ";
for(var i=1;i<=168;i++){
  var rn =Math.floor(Math.random()*10);
  clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#panel-bottom").innerHTML=clutter;
}

makeBubble();

var timer=60;
function runTimer(){
 var timerInt = setInterval(function(){
    if(timer>0){
      timer--;
    document.querySelector("#timerVal").textContent=timer;
    }
    else{
      clearInterval(timerInt);
      document.querySelector("#panel-bottom").innerHTML=`<h1>GAME OVER </h1>`;
    }
  },1000)
}
runTimer();

var Nh=0;
function getNewHit(){
 Nh = Math.floor(Math.random()*10);
 document.querySelector("#hitVal").textContent=Nh;
}
getNewHit();

var score=0;

function increaseScore(){
  score += 10;
document.querySelector("#scoreVal").textContent=score;
}



document.querySelector("#panel-bottom")
.addEventListener("click",function(dets){
  var clickedNum = Number(dets.target.textContent);

  if(clickedNum===Nh){
    increaseScore();
    makeBubble();
    getNewHit();
  }

})

