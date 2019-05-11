'use strict';

import { Object } from "./object.js";
import { isNullOrUndefined } from "./utils.js";

export class Hud extends Object {
  constructor(game, context) {
    super(0, 0, 0, 0, context);
    this.game = game;
  }

  _draw(x, y) {
    this._drawTimer(x, y);
    this._drawPlayersScore(x, y);
  }

  _drawPlayersScore(x, y) {
    this.context.font = "40px Arial";
    this.context.fillStyle = this.game.players[0].color;
    const playerOneScore = !isNullOrUndefined(this.game.players[0]) ? this.game.players[0].score : 0;
    this.context.fillText("Player One: " + playerOneScore, x + 40, y + 715);
    this.context.fillStyle = this.game.players[1].color;
    const playerTwoScore = !isNullOrUndefined(this.game.players[1]) ? this.game.players[1].score : 0;
    this.context.fillText("Player Two: " + playerTwoScore, x + 500, y + 715);
  }

  _drawTimer(x, y) {
    this.context.font = "430px Arial";
    this.context.fillStyle = "#ccc";
    this.context.fillText(this.game.countdown, x + 150, y + 460);
  }
}
