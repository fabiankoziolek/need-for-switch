'use strict';

import { Coin } from './coin.js';

export class Coins {
  constructor(context) {
    this.objects = [
      new Coin(200, 100, context),
      new Coin(400, 100, context),
      new Coin(600, 100, context),
    ]
  }
}
