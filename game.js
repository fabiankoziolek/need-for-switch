'use strict';

import { Scene } from './assets/scene.js'
import { Car } from './assets/car.js'

const scene = new Scene(800, 600);
const car1 = new Car(50, 500, scene.context, '#eb0019');
const car2 = new Car(600, 500, scene.context, '#287ee8');
scene.objects.push(car1);
scene.objects.push(car2);

scene.start(() => {
  if (scene.pressedKeys['ArrowLeft']) {
    car1.steerLeft();
  } else {
    car1.stopSteerLeft();
  }

  if (scene.pressedKeys['ArrowRight']) {
    car1.steerRight();
  } else {
    car1.stopSteerRight();
  }

  if (scene.pressedKeys['ArrowUp']) {
    car1.accelerate();
  }

  if (scene.pressedKeys['ArrowDown']) {
    car1.decelerate();
  }

  if (scene.pressedKeys['a']) {
    car2.steerLeft();
  } else {
    car2.stopSteerLeft();
  }

  if (scene.pressedKeys['d']) {
    car2.steerRight();
  } else {
    car2.stopSteerRight();
  }

  if (scene.pressedKeys['w']) {
    car2.accelerate();
  }

  if (scene.pressedKeys['s']) {
    car2.decelerate();
  }
});

