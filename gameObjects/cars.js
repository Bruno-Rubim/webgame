import { GameObject } from "./gameObjectClass.js";

function move (dir) {
    if (dir === 'forward') {
        this.posX += this.speed * Math.sin(this.angle);
        this.posY -= this.speed * Math.cos(this.angle);
    } else {
        this.posX -= this.speed * Math.sin(this.angle);
        this.posY += this.speed * Math.cos(redCar.angle);
    }
}

function tilt (dir) {
    if (dir === 'left') {
        this.angle -= this.tiltForce;
    } else {
        this.angle += this.tiltForce;
    }
};

export const redCar = new GameObject({name: 'player1', posX: 128, posY: 128})
redCar.img = new Image();
redCar.img.src = "images/red-car.png";
redCar.speed = 2;
redCar.tiltForce = 0.05;

redCar.move = move;
redCar.tilt = tilt;

export const blueCar = new GameObject({name: 'player2', posX: 32, posY: 0})
blueCar.img = new Image();
blueCar.img.src = "images/blue-car.png";
blueCar.speed = 2;
blueCar.tiltForce = 0.05;

blueCar.move = move;
blueCar.tilt = tilt;