'use strict';

import { Object } from "./object.js";

export class Coin extends Object {
  constructor(x, y, context) {
    super(x, y, 24, 24, context);
    this.animationProgress = 0;
  }

  _draw(x, y) {
    if (this.animationProgress < 60) {
      this.animationProgress++;
    } else {
      this.animationProgress = 0;
    }

    this.context.beginPath();
    this.context.fillStyle = this._getColor();
    this.context.arc(x + (this.width / 2), y + (this.width / 2), this.width / 2, 0, 2 * Math.PI, false);
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = '#919191';
    this.context.stroke();
    this.context.font = "14px Arial";
    this.context.fillStyle = "#fff";
    this.context.fillText("$", x + (this.width / 2) - 4, y + (this.width / 2) + 5);
  }

  _getColor() {
    if (this.animationProgress < 20) {
      return "#5ba944";
    } else if (this.animationProgress < 40) {
      return "#61bd4e";
    } else {
      return "#65c951";
    }
  }
}
