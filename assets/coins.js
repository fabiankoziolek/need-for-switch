'use strict';

import { Coin } from './coin.js';
import { randomCoordinates } from "./utils.js";

export class Coins {
  constructor(scene) {
    scene.addObjects([
      Coins.generateCoin(scene.context),
      Coins.generateCoin(scene.context),
      Coins.generateCoin(scene.context),
    ]);
  }

  static generateCoin(context) {
    const coords = randomCoordinates(50, 750, 50, 550);
    return new Coin(coords.x, coords.y, context)
  }
}
