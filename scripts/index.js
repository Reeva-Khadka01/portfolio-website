const animText = ["I am a Student", "I am a Web Developer"];
let anim = "";
let x = 0;
let i = 0;
let writingMode = true;
const animatedTextElement = document.getElementById("animatedText");

let writingDelay = 300;
let erasingDelay = 90;

const interval = setInterval(() => {
    if (i < animText.length) {
        if (x < animText[i].length && writingMode === true) { // Writing mode is enabled and you haven't completed typing
            anim += animText[i].charAt(x);
            animatedTextElement.textContent = anim;
            x += 1;
        } else { // You are done with writing the text
            writingMode = false;
            if (x >= 0) { // Erasing the text
                anim = anim.substring(0, x);
                animatedTextElement.textContent = anim;
                x -= 1;
            } else { // Resetting the text and moving towards the next
                x = 0;
                anim = "";
                i += 1;
                writingMode = true;
            }
        }
    } else {
        i = 0;
    }
}, writingMode === true ? writingDelay : erasingDelay);

// Clear the interval when the page is closed or the tab is navigated away
window.onbeforeunload = function() {
    clearInterval(interval);
};