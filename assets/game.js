'use strict';

export class Game {
  constructor(players, countdown) {
    this.players = players;
    this.countdown = countdown;
  }

  start() {
    const timer = setInterval(() =>  {
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
