var rect =document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
var rectLocation= rect.getBoundingClientRect();
var insiderectVal =details.clientX - rectLocation.left;

if(insiderectVal<rectLocation.width/2){
 var redColor =  gsap.utils.mapRange(0,rectLocation.width/2,255,0,details.insiderectVal)
 gsap.to(rect,{
  backgroundColor: `rgb(${redColor},0,0)`,
  ease: Power4,
 })

}
else{
  console.log(("right"));
}
})
console.log();