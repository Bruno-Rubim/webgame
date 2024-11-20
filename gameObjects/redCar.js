import { GameObject } from "./gameObjectClass.js";

export const redCar = new GameObject({name: 'player', posX: 128, posY: 128})
redCar.img = new Image();
redCar.img.src = "images/red-car.png";
redCar.speed = 2;
redCar.tiltForce = 0.05;

redCar.move = (dir) => {
    if (dir === 'forward') {
        redCar.posX += redCar.speed * Math.cos(redCar.angle);
        redCar.posY += redCar.speed * Math.sin(redCar.angle);
    } else {
        redCar.posX -= redCar.speed * Math.cos(redCar.angle);
        redCar.posY -= redCar.speed * Math.sin(redCar.angle);
    }
};

redCar.tilt = (dir) => {
    if (dir === 'left') {
        redCar.angle -= redCar.tiltForce;
    } else {
        redCar.angle += redCar.tiltForce;
    }
};