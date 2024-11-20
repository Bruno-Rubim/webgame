import { Scene } from "./sceneClass.js";
import { GameController } from "../gameController/gameControllerClass.js";
import { redCar } from "../gameObjects/redCar.js";

export const carScene = new Scene({})

const controller = new GameController({gameObjects: carScene.gameObjects})

carScene.gameController = controller;

carScene.gameObjects.push(redCar);

controller.fillDict(redCar, 'player')

controller.keyHandler = (keyIsPressed) => {
    if (keyIsPressed['s']) {
        controller.dict['player'].move('back')
    }
    if (keyIsPressed['w']) {
        controller.dict['player'].move('forward')
    }
    if (keyIsPressed['d']) {
        controller.dict['player'].tilt('right')
    }
    if (keyIsPressed['a']) {
        controller.dict['player'].tilt('left')
    }
}