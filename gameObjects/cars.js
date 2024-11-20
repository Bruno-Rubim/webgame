import { GameObject } from "./gameObjectClass.js";

class Car extends GameObject {
    constructor(args) {
        super(args)
    }

    move (dir) {
        if (dir === 'forward') {
            this.posX += this.speed * Math.sin(this.angle);
            this.posY -= this.speed * Math.cos(this.angle);
        } else {
            this.posX -= this.speed * Math.sin(this.angle);
            this.posY += this.speed * Math.cos(this.angle);
        }
    }
    
    tilt (dir) {
        if (dir === 'left') {
            this.angle -= this.tiltForce;
        } else {
            this.angle += this.tiltForce;
        }
    }
}

export const redCar = new Car({name: 'player1', posX: 128, posY: 128})
redCar.img = new Image();
redCar.img.src = "images/red-car.png";
redCar.speed = 2;
redCar.tiltForce = 0.05;

export const blueCar = new Car({name: 'player2', posX: 128, posY: 128})
blueCar.img = new Image();
blueCar.img.src = "images/blue-car.png";
blueCar.speed = 1;
blueCar.tiltForce = 0.1;
