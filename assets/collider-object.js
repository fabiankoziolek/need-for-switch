'use strict';

import { Object } from "./object.js";
import { isNullOrUndefined } from "./utils.js";

export class ColliderObject extends Object {
  constructor(x, y, width, height, context, objects, color, rotation) {
    super(x, y, width, height, context, color, rotation);
    this.objects = objects;
  }

  collidingOne(from, to) {
    if (from.x < to.x + to.width &&
      from.x + from.width > to.x &&
      from.y < to.y + to.height &&
      from.height + from.y > to.y) {
      return to;
    }

    return null;
  }

  collidingOneWithSelf(to) {
    return this.collidingOne(this, to);
  }

  isCollidingOne(from, to) {
    return this.collidingOne(from, to) !== null
  }

  isCollidingOneWithSelf(to) {
    return this.isCollidingOne(this, to)
  }

  collidingMany(from, colliders) {
    const collisionWith = [];

    for (let i = 0; i < colliders.length; i++) {
      const collision = this.collidingOne(from, colliders[i]);

      if (!isNullOrUndefined(collision)) {
        collisionWith.push(colliders[i]);
      }
    }

    return collisionWith;
  }

  collidingManyWithSelf(colliders) {
    return this.collidingMany(this, colliders);
  }

  isCollidingMany(from, colliders) {
    let isColliding = false;

    for (let i = 0; i < colliders.length; i++) {
      if (this.isCollidingOne(from, colliders[i])) {
        isColliding = true;
        break;
      }
    }

    return isColliding;
  }

  isCollidingManyWithSelf(colliders) {
    return this.isCollidingMany(this, colliders);
  }

  collidingAll(collider) {
    const collidingObjectsWithoutSelf = this.objects.filter(x => x.id !== collider.id && x instanceof ColliderObject);
    return this.collidingMany(collider, collidingObjectsWithoutSelf);
  }

  collidingAllWithSelf() {
    return this.collidingAll(this);
  }

  isCollidingAll(collider) {
    const collidingObjectsWithoutSelf = this.objects.filter(x => x.id !== collider.id && x instanceof ColliderObject);
    return this.isCollidingMany(collider, collidingObjectsWithoutSelf);
  }

  isCollidingAllWithSelf() {
    return this.isCollidingAll(this);
  }
}
