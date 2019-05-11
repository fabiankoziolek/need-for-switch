'use strict';

import { generateRandomId } from "./utils.js";

export class Player {
  constructor(color) {
    this.id = generateRandomId();
    this.color = color;
    this.score = 0;
  }

  incrementScore() {
    this.score = this.score + 1;
  }
}
