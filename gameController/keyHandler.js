export let keyIsPressed = {}

window.addEventListener("keydown", function(event) {
    keyIsPressed[event.key] = true;
});

window.addEventListener("keyup", function(event) {
    keyIsPressed[event.key] = false;
});