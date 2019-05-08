class Scene {
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.border = "1px solid black";
    this.context = this.canvas.getContext("2d");
    this.keys = {
      ArrowLeft: false,
      ArrowRight: false,
      ArrowUp: false,
      ArrowDown: false,
    };

    document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    window.addEventListener('keydown', (down) => {
      scene.keys[down.key] = true;
    });

    window.addEventListener('keyup', (up) => {
      scene.keys[up.key] = false;
    });
  }

  start(update) {
    this.loop = setInterval(update, 1000 / 60);
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  stop() {
    clearInterval(this.loop);
  }
}

class Object {
  constructor(x, y, width, height, rotation) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rotation = rotation;
  }
}

class Car extends Object {
  constructor(x, y, fill) {
    super(x, y, 30, 50, 0);
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
    if (!car.isMoving()) {
      car.speed = 0;
    } else {
      car.speed *= car.speedDecay;
    }

    if (scene.keys['ArrowLeft']) {
      car.steerLeft();
    }
    if (scene.keys['ArrowRight']) {
      car.steerRight();
    }
    if (scene.keys['ArrowUp']) {
      car.accelerate();
    }
    if (scene.keys['ArrowDown']) {
      car.decelerate();
    }

    const axis = this.getAxis();
    this.x += axis.x;
    this.y += axis.y;

    scene.context.save();
    scene.context.translate(this.x + this.width / 2, this.y + this.height / 2);
    scene.context.rotate(this.rotation * (Math.PI / 180));
    this.draw(-this.width / 2, -this.height / 2);
    scene.context.restore();
  }

  getAxis() {
    return {
      x: Math.sin(this.rotation * (Math.PI / 180)) * this.speed,
      y: Math.cos(this.rotation * (Math.PI / 180)) * this.speed * -1,
    };
  }

  draw(x, y) {
    scene.context.fillStyle = this.fill;
    scene.context.fillRect(x, y, this.width, this.height);
  }
}

const scene = new Scene(800, 600);
const car = new Car(50, 500, 'red');

scene.start(() =>  {
  scene.clear();
  car.update();
});

