export class GameController {
    constructor ({gameObjects = []}) {
        this.gameObjects = gameObjects;
        this.dict = {}
    }
    keyHandler (keyIsPressed) {}
    fillDict(object, word) {
        this.dict[word] = object;
    }
}