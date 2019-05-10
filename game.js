'use strict';

import { Scene } from './assets/scene.js'
import { Car } from './assets/car.js'

const scene = new Scene(800, 600);
const car1 = new Car(50, 500, scene.context, '#eb0019');
const car2 = new Car(600, 500, scene.context, '#287ee8');
scene.objects.push(car1);
scene.objects.push(car2);

scene.start(() => {
  controlCar(car1, 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown');
  controlCar(car2, 'a', 'd', 'w', 's');
});

function controlCar(car, leftKey, rightKey, accelerateKey, decelerateKey) {
  if (scene.pressedKeys[leftKey]) {
    car.steerLeft();
  } else {
    car.stopSteerLeft();
  }

  if (scene.pressedKeys[rightKey]) {
    car.steerRight();
  } else {
    car.stopSteerRight();
  }

  if (scene.pressedKeys[accelerateKey]) {
    car.accelerate();
  }

  if (scene.pressedKeys[decelerateKey]) {
    car.decelerate();
  }
}

