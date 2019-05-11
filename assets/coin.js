'use strict';

import { Object } from "./object.js";

export class Coin extends Object {
  constructor(x, y, context) {
    super(x, y, 20, 20, context, "#ffc41d", 0);
  }

  _draw(x, y) {
    this.context.fillStyle = this.color;
    this.context.fillRect(x, y, this.width, this.height);
  }
}
