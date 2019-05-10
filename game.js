'use strict';

import { Scene } from './assets/scene.js'
import { Car, setControls } from './assets/car.js'

const scene = new Scene(800, 600);
const car1 = new Car(50, 500, scene.context, '#eb0019');
const car2 = new Car(600, 500, scene.context, '#287ee8');
scene.objects.push(car1);
scene.objects.push(car2);

scene.start(() => {
  setControls(car1, scene, 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown');
  setControls(car2, scene, 'a', 'd', 'w', 's');
});



