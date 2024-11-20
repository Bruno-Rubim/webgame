const canvasElement = document.querySelector('canvas');
export const ctx = canvasElement.getContext('2d');

let canvas = {
    originalWidth: 256,
    originalHeight: 256,
}

export let renderScale = 16

canvasElement.style.position = 'absolute';
canvasElement.style.backgroundColor = '#444';

export const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
}

export const updateCanvas = () => {
    if (innerHeight > innerWidth) {
        canvas.width = Math.floor(innerWidth / canvas.originalWidth) * canvas.originalWidth
        canvas.height = Math.floor(innerWidth / canvas.originalHeight) * canvas.originalHeight
    } else {
        canvas.width = Math.floor(innerHeight / canvas.originalWidth) * canvas.originalWidth
        canvas.height = Math.floor(innerHeight / canvas.originalHeight) * canvas.originalHeight
    }
    renderScale = canvas.width / 16;
    canvasElement.style.left = ((innerWidth - canvas.width) / 2) + 'px';
    canvasElement.style.top = ((innerHeight - canvas.height) / 2) + 'px';
    canvasElement.width = canvas.width;
    canvasElement.height = canvas.height;
    ctx.imageSmoothingEnabled = false
}