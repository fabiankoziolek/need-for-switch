'use strict';

import { Hud } from "./hud.js";
import { Coins } from "./coins.js";

export class Game {
  constructor(players, scene, countdown) {
    this.players = players;
    this.scene = scene;
    this.countdown = countdown;
    this.pressedKeys = {};

    window.addEventListener('keydown', (down) => {
      this.pressedKeys[down.key] = true;
    });

    window.addEventListener('keyup', (up) => {
      this.pressedKeys[up.key] = false;
    });
  }

  initializeHud() {
    const hud = new Hud(this, this.scene.context);
    this.scene.addObject(hud);
  }

  start(actionListener) {
    this.scene.start(actionListener);

    const timer = setInterval(() => {
      if (this.countdown > 0) {
        this.scene.addObject(Coins.generateCoin(this.scene.context));

        if (this.countdown > 10) {
          this.countdown = this.countdown - 1;
        } else {
          this.countdown = `0${this.countdown - 1}`;
        }
      } else {
        clearInterval(timer);
        this.scene.stop();
      }
    }, 1000);
  }
}
