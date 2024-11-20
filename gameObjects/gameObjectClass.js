export class GameObject {
    constructor({height = 1, width = 1, img = null, posX = 0, posY = 0, name = 'empty'}){
        this.height = height;
        this.width = width;
        this.posX = posX;
        this.posY = posY;
        this.name = name
        this.angle = 0
    }
    render(ctx, scale) {
        ctx.translate((this.posX) * scale / 16, (this.posY) * scale / 16,);
        ctx.rotate(this.angle + 1.5708);
        ctx.drawImage(this.img, -8 * (scale / 16), -8 * (scale / 16), this.width*scale,  this.height*scale);
        ctx.restore();
    }
}