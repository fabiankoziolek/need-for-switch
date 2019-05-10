'use strict';

import { Object } from "./object.js";

export class ColiderObject extends Object {
  constructor(x, y, width, height, context, color = 'black', rotation = 0) {
    super(x, y, width, height, context, color, rotation)
  }
}
