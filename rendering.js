import { ctx, updateCanvas, renderScale, clearCanvas } from "./canvasHandle.js";
import { gameState } from "./gameState.js"
import "./gameController/keyHandler.js";

let list = [1, 2, 3, 4]


export function render(){
    clearCanvas();
    gameState.currentScene.renderScene(ctx, renderScale);
}

