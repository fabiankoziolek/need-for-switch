'use strict';

export class Object {
  constructor(x, y, width, height, context, color = 'black', rotation = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rotation = rotation;
    this.context = context;
  }
}
