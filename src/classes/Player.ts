import { c, canvas } from "../index";
import { keys, maps, spriteSheet } from "../variable";

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
    c.drawImage(
      spriteSheet,
      368,
      16,
      16,
      16,
      this.x + maps.mapPosition.x,
      this.y + maps.mapPosition.y,
      32,
      32
    );

    if (keys.w) this.y -= this.speed;
    if (keys.s) this.y += this.speed;
    if (keys.a) this.x -= this.speed;
    if (keys.d) this.x += this.speed;

    //Camera
    maps.mapPosition.x = this.x * -1 + canvas.width / 2;
    maps.mapPosition.y = this.y * -1 + canvas.height / 2;
  }
}
