/*.addEventListener("event type",function)
Function without parentheses 
- if present, calls function while adding listener
- else, adds function to listener*/

/*document.querySelector("button").addEventListener("click", clickHand);
function clickHand() {
    alert("clicked!");
}*/
let keyNum = document.querySelectorAll(".key").length;

for (let i = 0; i<keyNum; i++) {
    document.querySelectorAll(".key")[i].addEventListener("click", function () {//This is an Anonymous Function
        let button = this.innerHTML;
        music (button);
    }) 
}
document.addEventListener("keydown",function(event) {
    music(event.key);
})

function music(button) {
    switch (button) {
        case "w": var audio = new Audio("sounds/piano-ab.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "s": var audio = new Audio("sounds/piano-a.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "e": var audio = new Audio("sounds/piano-bb.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "d": var audio = new Audio("sounds/piano-b.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "f": var audio = new Audio("sounds/piano-c.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "t": var audio = new Audio("sounds/piano-db.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "g": var audio = new Audio("sounds/piano-d.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "y": var audio = new Audio("sounds/piano-eb.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "h": var audio = new Audio("sounds/piano-e.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "j": var audio = new Audio("sounds/piano-f.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "i": var audio = new Audio("sounds/piano-gb.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
        case "k": var audio = new Audio("sounds/piano-gh.wav");
            audio.currentTime = 0.7;
            audio.play();
            break;
    }
}