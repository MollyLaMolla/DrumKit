var drumSoundFiles = ["./sounds/tom-1.mp3", "./sounds/tom-2.mp3", "./sounds/tom-3.mp3", "./sounds/tom-4.mp3", "./sounds/crash.mp3", "./sounds/kick-bass.mp3", "./sounds/snare.mp3"];
var buttonsLetters = [];

for (i = 0; i < document.querySelectorAll(".drum").length; i++){
    buttonsLetters.push(document.querySelectorAll(".drum")[i].innerHTML)
}

for (i = 0; i < document.querySelectorAll(".drum").length; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var mouseClicked = this.innerHTML;
        soundAdder(mouseClicked);
        buttonAnimation(mouseClicked);
        
    })
}

document.addEventListener("keydown", function(event){

    var keyClicked = event.key;
    soundAdder(keyClicked);
    buttonAnimation(keyClicked);
    
})

function soundAdder(buttonClicked){
    switch (buttonClicked) {

        case buttonsLetters[0]:
            var audio = new Audio(drumSoundFiles[0]);
            audio.play();
            break;

        case buttonsLetters[1]:
            var audio = new Audio(drumSoundFiles[1]);
            audio.play();
            break;

        case buttonsLetters[2]:
            var audio = new Audio(drumSoundFiles[2]);
            audio.play();
            break;

        case buttonsLetters[3]:
            var audio = new Audio(drumSoundFiles[3]);
            audio.play();
            break;

        case buttonsLetters[4]:
            var audio = new Audio(drumSoundFiles[4]);
            audio.play();
            break;

        case buttonsLetters[5]:
            var audio = new Audio(drumSoundFiles[5]);
            audio.play();
            break;

        case buttonsLetters[6]:
            var audio = new Audio(drumSoundFiles[6]);
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}
