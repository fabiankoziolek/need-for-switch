'use strict';

export class Object {
  constructor(x, y, width, height, context, color = 'black', rotation = 0) {
    this.id = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context;
    this.color = color;
    this.rotation = rotation;
  }

  update() {
    this.context.save();
    this.context.translate(this.x + this.width / 2, this.y + this.height / 2);
    this.context.rotate(this.rotation * (Math.PI / 180));
    this._draw(-this.width / 2, -this.height / 2);
    this.context.restore();
  }

  _draw(x, y) {
    this.context.fillStyle = this.color;
    this.context.fillRect(x, y, this.width, this.height);
  }
}
