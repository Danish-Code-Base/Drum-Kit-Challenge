// Detecting button press

var times = document.querySelectorAll(".drum").length;
for (var i = 0; i < times; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// Detecting keyboard press

document.addEventListener("keypress",function(event){
    makeSound(event.key); //key is event's property 
    buttonAnimation(event.key);
});

function makeSound(key) {
    var audio;
    switch (key) {
        case "w":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
    // if (this.innerHTML == "w") {
    //     audio = new Audio("./sounds/crash.mp3");
    //     audio.play();
    // }else if(this.innerHTML == "a"){
    //     audio = new Audio("./sounds/kick-bass.mp3");
    //     audio.play();
    // }else if(this.innerHTML == "s"){
    //     audio = new Audio("./sounds/snare.mp3");
    //     audio.play();
    // }else if(this.innerHTML == "d"){
    //     audio = new Audio("./sounds/tom-1.mp3");
    //     audio.play();
    // }else if(this.innerHTML == "j"){
    //     audio = new Audio("./sounds/tom-2.mp3");
    //     audio.play();
    // }else if(this.innerHTML == "k"){
    //     audio = new Audio("./sounds/tom-3.mp3");
    //     audio.play();
    // }else if(this.innerHTML == "l"){
    //     audio = new Audio("./sounds/tom-4.mp3");
    //     audio.play();
    // }
    // this.style.color = "white";
    // var audio = new Audio("./sounds/tom-1.mp3");
    // audio.play();
}

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey);
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },250);
}