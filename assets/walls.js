'use strict';

import { ColliderObject } from './collider-object.js';

export class Walls {
  constructor(scene) {
    scene.addObjects([
      new ColliderObject(10, 10, scene.canvas.width - 20, 10, scene.context),
      new ColliderObject(scene.canvas.width - 20, 10, 10, scene.canvas.height - 220, scene.context),
      new ColliderObject(10, scene.canvas.height - 220, scene.canvas.width - 20, 10, scene.context),
      new ColliderObject(10, 10, 10, scene.canvas.height - 220, scene.context),
    ]);
  }
}
