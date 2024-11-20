import { Scene } from "./sceneClass.js";
import { GameController } from "../gameController/gameControllerClass.js";
import { redCar, blueCar } from "../gameObjects/cars.js";

export const carScene = new Scene({})

const controller = new GameController({gameObjects: carScene.gameObjects})

carScene.gameController = controller;

carScene.gameObjects.push(redCar, blueCar);

controller.fillDict(redCar, 'player1')
controller.fillDict(blueCar, 'player2')

controller.keyHandler = (keyIsPressed) => {
    if (keyIsPressed['s']) {
        controller.dict['player1'].move('back')
    }
    if (keyIsPressed['w']) {
        controller.dict['player1'].move('forward')
    }
    if (keyIsPressed['d']) {
        controller.dict['player1'].tilt('right')
    }
    if (keyIsPressed['a']) {
        controller.dict['player1'].tilt('left')
    }

    if (keyIsPressed['5']) {
        controller.dict['player2'].move('back')
    }
    if (keyIsPressed['8']) {
        controller.dict['player2'].move('forward')
    }
    if (keyIsPressed['6']) {
        controller.dict['player2'].tilt('right')
    }
    if (keyIsPressed['4']) {
        controller.dict['player2'].tilt('left')
    }
}

