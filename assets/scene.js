'use strict';

import { Walls } from "./walls.js";
import { Coins } from "./coins.js";

export class Scene {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.border = '1px solid black';
    this.context = this.canvas.getContext('2d');
    this.objects = [];

    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }

  initializeMap() {
    const walls = new Walls(this.context, this.canvas);
    this.addObjects(walls.objects);
    const coins = new Coins(this.context, this.canvas);
    this.addObjects(coins.objects);
  }

  start(actionListener) {
    this.loop = setInterval(() => {
      this._clear();
      this.update();
      actionListener();
      this.objects.forEach(x => x.update());
    }, 1000 / 60);
  }

  update() {
    this.context.save();
    this._draw();
    this.context.restore();
  }

  addObject(object) {
    this.objects.push(object);
  }

  addObjects(objects) {
    for (let i = 0; i < objects.length; i++) {
      this.addObject(objects[i]);
    }
  }

  stop() {
    clearInterval(this.loop);
  }

  _draw() {
    this.context.fillStyle = '#efefef';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  _clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
