'use strict';

import { Scene } from './assets/scene.js'
import { Car, setControls } from './assets/car.js'
import { ColliderObject } from "./assets/collider-object.js";
import { Coin } from "./assets/coin.js";
import { Hud } from "./assets/hud.js";
import { generateRandomId } from "./assets/utils.js";

const scene = new Scene(800, 800);
const players = [
  {
    id: generateRandomId(),
    color: '#eb0019',
    score: 0,
  },
  {
    id: generateRandomId(),
    color: '#287ee8',
    score: 0,
  }
];

const hud = new Hud(players, scene.context);
scene.objects.push(hud);

const wallTop = new ColliderObject(10, 10, scene.canvas.width - 20, 10, scene.context);
scene.objects.push(wallTop);
const wallRight = new ColliderObject(scene.canvas.width - 20, 10, 10, scene.canvas.height - 220, scene.context);
scene.objects.push(wallRight);
const wallLeft = new ColliderObject(10, scene.canvas.height - 220, scene.canvas.width - 20, 10, scene.context);
scene.objects.push(wallLeft);
const wallBottom = new ColliderObject(10, 10, 10, scene.canvas.height - 220, scene.context);
scene.objects.push(wallBottom);

const coin1 = new Coin(200, 100, scene.context);
scene.objects.push(coin1);
const coin2 = new Coin(400, 100, scene.context);
scene.objects.push(coin2);
const coin3 = new Coin(600, 100, scene.context);
scene.objects.push(coin3);

const car1 = new Car(150, 500, scene.context, scene.objects, players[0]);
scene.objects.push(car1);
const car2 = new Car(600, 500, scene.context, scene.objects, players[1]);
scene.objects.push(car2);

scene.start(() => {
  setControls(car1, scene, 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown');
  setControls(car2, scene, 'a', 'd', 'w', 's');
});



