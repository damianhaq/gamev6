import { calculateDistance, changeMap } from "../functions/map";
import { c, canvas } from "../index";
import { keys, maps, spriteSheet } from "../variable";

export class Player {
  speed: number;
  constructor(public x: number, public y: number, public radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.speed = 2;
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

    c.beginPath();
    c.arc(
      this.x + maps.mapPosition.x,
      this.y + maps.mapPosition.y,
      this.radius,
      0,
      Math.PI * 2
    );
    c.stroke();

    if (keys.w) this.y -= this.speed;
    if (keys.s) this.y += this.speed;
    if (keys.a) this.x -= this.speed;
    if (keys.d) this.x += this.speed;

    //Camera
    maps.mapPosition.x = this.x * -1 + canvas.width / 2;
    maps.mapPosition.y = this.y * -1 + canvas.height / 2;

    this.teleport();
  }

  teleport() {
    const dist = calculateDistance(
      this.x,
      this.y,
      this.radius,
      maps.map1.points.teleports.x,
      maps.map1.points.teleports.y,
      1
    );
    // console.log(maps.map1.points.teleports.x);

    if (dist <= 0) changeMap("map2");
  }
}
