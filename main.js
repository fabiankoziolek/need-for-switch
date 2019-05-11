'use strict';

import { Scene } from './assets/scene.js'
import { Car } from './assets/car.js'
import { Player } from './assets/player.js';
import { Game } from './assets/game.js';

const scene = new Scene(800, 800);

const game = new Game([
  new Player('One', '#eb0019'),
  new Player('Two', '#287ee8'),
], scene, 15);

game.initializeHud();
scene.initializeMap();

const carOne = new Car(150, 500, scene.context, scene.objects, game.players[0]);
scene.addObject(carOne);
const carTwo = new Car(600, 500, scene.context, scene.objects, game.players[1]);
scene.addObject(carTwo);

game.start(() => {
  carOne.control(game.pressedKeys, 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown');
  carTwo.control(game.pressedKeys, 'a', 'd', 'w', 's');
});
