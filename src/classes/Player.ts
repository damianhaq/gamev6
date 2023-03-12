import { c } from "../index";
import { keys, spriteSheet } from "../variable";

export class Player {
  speed: number;
  constructor(public x: number, public y: number, public radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.speed = 0.7;
  }
  update(dt: number) {
    c.imageSmoothingEnabled = false;
    c.drawImage(spriteSheet, 368, 16, 16, 16, this.x, this.y, 32, 32);

    if (keys.w) this.y -= this.speed;
    if (keys.s) this.y += this.speed;
    if (keys.a) this.x -= this.speed;
    if (keys.d) this.x += this.speed;
  }
}
