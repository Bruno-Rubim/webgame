import { keyIsPressed } from "./gameController/keyHandler.js";
import { gameState } from "./gameState.js"
import { render } from "./rendering.js";
import { updateCanvas } from "./canvasHandle.js";
export function frame(){
    updateCanvas()
    gameState.currentScene.gameController.keyHandler(keyIsPressed);
    render()
    requestAnimationFrame(frame);
}