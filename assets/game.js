'use strict';

import { Hud } from "./hud.js";

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
      if (this.countdown > 10) {
        this.countdown = this.countdown - 1;
      } else if (this.countdown <= 10 && this.countdown > 0) {
        this.countdown = `0${this.countdown - 1}`;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
}
