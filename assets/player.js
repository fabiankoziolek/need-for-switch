'use strict';

import { generateRandomId } from './utils.js';

export class Player {
  constructor(name, color) {
    this.id = generateRandomId();
    this.name = name;
    this.color = color;
    this.score = 0;
  }

  incrementScore() {
    this.score = this.score + 1;
  }
}
