'use strict';

import { Object } from "./object.js";
import { isNullOrUndefined } from "./utils.js";

export class Hud extends Object {
  constructor(players, context) {
    super(0, 0, 0, 0, context);
    this.players = players;
  }

  _draw(x, y) {
    this._drawTimer(x, y);
    this.context.font = "40px Arial";
    this.context.fillStyle = this.players[0].color;
    const playerOneScore = !isNullOrUndefined(this.players[0]) ? this.players[0].score : 0;
    this.context.fillText("Player One: " + playerOneScore, x + 40, y + 715);
    this.context.fillStyle = this.players[1].color;
    const playerTwoScore = !isNullOrUndefined(this.players[1]) ? this.players[1].score : 0;
    this.context.fillText("Player Two: " + playerTwoScore, x + 500, y + 715);
  }

  _drawTimer(x, y) {
    this.context.font = "430px Arial";
    this.context.fillStyle = "#ccc";
    this.context.fillText("15", x + 150, y + 460);
  }
}
