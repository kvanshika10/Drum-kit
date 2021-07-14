 var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttonInput=this.textContent;
playSound(buttonInput);
addAnimation(buttonInput);

});
}
document.addEventListener("keydown",function(event){
      playSound(event.key);
      addAnimation(event.key);
});




function playSound(key){
  switch (key) {
              case "w":
            var audio=new Audio('sounds/tom-1.mp3');
              audio.play();
              break;
              case "a":
             audio=new Audio('sounds/tom-2.mp3');
              audio.play();
              break;
              case "s":
             audio=new Audio('sounds/tom-3.mp3');
              audio.play();
              break;
              case "d":
             audio=new Audio('sounds/tom-4.mp3');
              audio.play();
              break;
              case "j":
             audio=new Audio('sounds/snare.mp3');
              audio.play();
              break;
              case "k":
             audio=new Audio('sounds/crash.mp3');
                audio.play();
                 break;
              case "l":
             audio=new Audio('sounds/kick-bass.mp3');
                audio.play();

              break;
               default: console.log(buttonInput);


                  }


}

function addAnimation(key){
var k=  document.querySelector("."+key);
k.classList.add("pressed");
  setTimeout(function(){
    k.classList.remove("pressed");},100);
}
