'use strict';

import { ColliderObject } from './collider-object.js';

export class Walls {
  constructor(context, canvas) {
    this.objects = [
      new ColliderObject(10, 10, canvas.width - 20, 10, context),
      new ColliderObject(canvas.width - 20, 10, 10, canvas.height - 220, context),
      new ColliderObject(10, canvas.height - 220, canvas.width - 20, 10, context),
      new ColliderObject(10, 10, 10, canvas.height - 220, context),
    ]
  }
}
