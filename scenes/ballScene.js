import { Scene } from "./sceneClass.js";
import { greenBall } from "../gameObjects/greenBall.js";
import { pinkBall } from "../gameObjects/pinkBall.js";
import { GameController } from "../gameController/gameControllerClass.js";

export const ballScene = new Scene({})

const controller = new GameController({gameObjects: ballScene.gameObjects})

ballScene.gameController = controller;

ballScene.gameObjects.push(greenBall);
ballScene.gameObjects.push(pinkBall);

controller.fillDict(greenBall, 'player')

controller.keyHandler = (keyIsPressed) => {
    if (keyIsPressed['s']) {
        controller.dict['player'].posY++
    }
    if (keyIsPressed['w']) {
        controller.dict['player'].posY--
    }
    if (keyIsPressed['d']) {
        controller.dict['player'].posX++
    }
    if (keyIsPressed['a']) {
        controller.dict['player'].posX--
    }
}