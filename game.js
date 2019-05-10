"use strict";

import { Scene } from './assets/scene.js'
import { Car } from './assets/car.js'

const scene = new Scene(800, 600);
const car = new Car(50, 500, 'red', scene.context);

scene.start(() =>  {
  scene.clear();

  if (scene.pressedKeys['ArrowLeft']) {
    car.steerLeft();
  }

  if (scene.pressedKeys['ArrowRight']) {
    car.steerRight();
  }

  if (scene.pressedKeys['ArrowUp']) {
    car.accelerate();
  }

  if (scene.pressedKeys['ArrowDown']) {
    car.decelerate();
  }

  car.update();
});

