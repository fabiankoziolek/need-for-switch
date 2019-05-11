'use strict';

import { Object } from "./object.js";

export class ColliderObject extends Object {
  constructor(x, y, width, height, context, objects, color, rotation) {
    super(x, y, width, height, context, color, rotation);
    this.objects = objects;
  }

  isCollidingOne(collider1, collider2) {
    return (collider1.x < collider2.x + collider2.width &&
      collider1.x + collider1.width > collider2.x &&
      collider1.y < collider2.y + collider2.height &&
      collider1.height + collider1.y > collider2.y);
  }

  isCollidingOneWithSelf(collider) {
    return this.isCollidingOne(this, collider)
  }

  isCollidingMany(collider, colliders) {
    let isColliding = false;

    for (let i = 0; i < colliders.length; i++) {
      if (this.isCollidingOne(collider, colliders[i])) {
        isColliding = true;
        break;
      }
    }

    return isColliding;
  }

  isCollidingManyWithSelf(colliders) {
    return this.isCollidingMany(this, colliders);
  }

  isCollidingAll(collider) {
    const objectsWithoutSelf = this.objects.filter(x => x.id !== collider.id);
    return this.isCollidingMany(collider, objectsWithoutSelf);
  }

  isCollidingAllWithSelf() {
    return this.isCollidingAll(this);
  }
}
