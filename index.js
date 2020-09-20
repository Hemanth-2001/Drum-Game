var numberofdrums = document.querySelectorAll("button").length;

for (var i = 0; i < numberofdrums  ; i++){
document.querySelectorAll("button")[i].addEventListener("click", oclick);
}
function oclick(){
    var buttonclicked = this.innerHTML;
    sound(buttonclicked);
    pressed(buttonclicked);
}

document.addEventListener("keypress", function (event){
   sound(event.key);
   pressed(event.key);
})

function sound(key){
    switch (key){
        case "w" :
         var audio = new Audio("sounds/crash.mp3");
         audio.play();
         break;
         case "a" :
             var audio = new Audio("sounds/kick.mp3");
             audio.play();
         break;
         case "s" :
             var audio = new Audio("sounds/snare.mp3");
             audio.play();
         break;
         case "d" :
             var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
         break;
         case "e" :
             var audio = new Audio("sounds/tom-2.mp3");
             audio.play();
         break;
         case "f" :
             var audio = new Audio("sounds/tom-3.mp3");
             audio.play();
         break;
         case "g" :
             var audio = new Audio("sounds/tom-4.mp3");
             audio.play();
 
     }

}

function pressed(currentpress){
    var now = document.querySelector("."+currentpress);
    now.classList.add("pressed");
    setTimeout(function (){
        now.classList.remove("pressed");
    } , 100);
}