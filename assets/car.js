'use strict';

import { Object } from './object.js'

export class Car extends Object {
  constructor(x, y, fill, context) {
    super(x, y, 30, 50, 0, context);
    this.acceleration = 1.08;
    this.breakPower = 0.05;
    this.speed = 0;
    this.initialSpeed = 0.5;
    this.maxSpeed = 6;
    this.maxBackSpeed = 2;
    this.speedDecay = 0.96;
    this.rotationStep = 4;
    this.fill = fill;
  }

  isMoving() {
    return !(this.speed > - this.initialSpeed && this.speed < this.initialSpeed);
  }

  steerLeft() {
    if (this.isMoving()) {
      this.rotation -= this.rotationStep * (this.speed / this.maxSpeed);
    }
  }

  steerRight() {
    if (this.isMoving()) {
      this.rotation += this.rotationStep * (this.speed / this.maxSpeed);
    }
  }

  accelerate() {
    if (this.speed < this.maxSpeed) {
      if (this.speed < 0) {
        this.speed += this.breakPower;
      } else if (this.speed === 0) {
        this.speed = this.initialSpeed;
      } else {
        this.speed *= this.acceleration;
      }
    }
  }

  decelerate() {
    if (this.speed > 0) {
      this.speed -= this.breakPower;
    } else if (this.speed === 0) {
      this.speed = -this.initialSpeed;
    } else {
      if (Math.abs(this.speed) < this.maxBackSpeed) {
        this.speed *= this.acceleration;
      }
    }
  }

  update() {
    if (!this.isMoving()) {
      this.speed = 0;
    } else {
      this.speed *= this.speedDecay;
    }

    const axis = this.getAxis();
    this.x += axis.x;
    this.y += axis.y;

    this.context.save();
    this.context.translate(this.x + this.width / 2, this.y + this.height / 2);
    this.context.rotate(this.rotation * (Math.PI / 180));
    this.draw(-this.width / 2, -this.height / 2);
    this.context.restore();
  }

  getAxis() {
    return {
      x: Math.sin(this.rotation * (Math.PI / 180)) * this.speed,
      y: Math.cos(this.rotation * (Math.PI / 180)) * this.speed * -1,
    };
  }

  draw(x, y) {
    this.context.fillStyle = this.fill;
    this.context.fillRect(x, y, this.width, this.height);
  }
}
