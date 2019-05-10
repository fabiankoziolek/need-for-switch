'use strict';

import { Scene } from './assets/scene.js'
import { Car } from './assets/car.js'

const scene = new Scene(800, 600);
const car = new Car(50, 500, scene.context, 'red');
scene.objects.push(car);

scene.start(() =>  {
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
});

