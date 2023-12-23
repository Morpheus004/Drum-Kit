
function playKey(innerhtml){
  switch (innerhtml) {
    case "w":
        var w=new Audio("sounds/tom-1.mp3");
        w.play();
      break;
    case "a":
        var a=new Audio("sounds/tom-2.mp3");
        a.play();
      break;
    case "s":
        var s=new Audio("sounds/tom-3.mp3");
        s.play();
      break;
    case "d":
      var d=new Audio("sounds/tom-4.mp3");
      d.play();
    case "j":
      var j=new Audio("sounds/crash.mp3");
      j.play();
      break;
    case "k":
      var k=new Audio("sounds/snare.mp3");
      k.play();
      break;
    case "l":
      var w=new Audio("sounds/kick-bass.mp3");
      w.play();
      break;

    default:
      console.log("Dont know!")
  }
}

//for mouse clicks
for(var i=0;i<document.querySelectorAll("button").length;i++)
document.querySelectorAll("button")[i].addEventListener("click",function handleClick() {
    var innerhtml=this.innerHTML;
    playKey(innerhtml);
    buttonAnimation(innerhtml);
});

//for keyboard keys
document.addEventListener("keydown",function(event){
    playKey(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(key){
  document.querySelector('.'+key).classList.toggle('pressed');


  setTimeout(function(){
    document.querySelector('.'+key).classList.toggle('pressed');
  },100);
}
