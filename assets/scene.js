'use strict';

export class Scene {
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.border = "1px solid black";
    this.context = this.canvas.getContext("2d");
    this.pressedKeys = {
      ArrowLeft: false,
      ArrowRight: false,
      ArrowUp: false,
      ArrowDown: false,
    };

    document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    window.addEventListener('keydown', (down) => {
      this.pressedKeys[down.key] = true;
    });

    window.addEventListener('keyup', (up) => {
      this.pressedKeys[up.key] = false;
    });
  }

  start(update) {
    this.loop = setInterval(update, 1000 / 60);
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  stop() {
    clearInterval(this.loop);
  }
}
