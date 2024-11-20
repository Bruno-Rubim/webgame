export class Scene {
    constructor ({gameController = null}) {
        this.gameController = gameController;
        this.gameObjects = [];
    }
    renderScene (ctx, scale) {
        for (let i = 0; i < this.gameObjects.length; i++){
            this.gameObjects[i].render(ctx, scale)
        }
    }
}