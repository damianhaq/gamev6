import {
  calculateDistance,
  changeMap_,
  drawLine,
  drawRect,
  drawText,
  getChunk_,
  getPositionPixelToTile_,
  isTileCollide_,
} from "../functions/map";
import { c, canvas } from "../index";
import { keys, maps, spriteSheet } from "../variable";

export class Player {
  speed: number;
  collisions: { tileX: number; tileY: number }[];
  currentChunk: { chunkX: number; chunkY: number };
  isCollide: boolean;
  // lastX: number;
  // lastY: number;
  dx: number;
  dy: number;

  constructor(public x: number, public y: number, public radius: number) {
    this.x = x;
    this.y = y;
    // this.lastX = x;
    // this.lastY = y;
    this.dx = 0;
    this.dy = 0;
    this.radius = radius;

    this.speed = 2;
    this.collisions = [];
    this.currentChunk = { chunkX: null, chunkY: null };
    this.isCollide = false;
  }

  update(dt: number) {
    this.drawMe();

    // Moving ------------------------

    // set direction
    if (keys.w || keys.s || keys.a || keys.d) {
      if (keys.w) {
        this.dy = -this.speed;
      } else if (keys.s) {
        this.dy = this.speed;
      }
      if (keys.a) {
        this.dx = -this.speed;
      } else if (keys.d) {
        this.dx = this.speed;
      }
      this.checkCollision();
    } else {
      this.dx = 0;
      this.dy = 0;
      this.isCollide = false;
    }

    // if direction then move
    if (this.dx > 0 && !this.isCollide) this.x += this.speed;
    if (this.dx < 0 && !this.isCollide) this.x -= this.speed;
    if (this.dy > 0 && !this.isCollide) this.y += this.speed;
    if (this.dy < 0 && !this.isCollide) this.y -= this.speed;

    // if (keys.w) this.y -= this.speed;
    // if (keys.s) this.y += this.speed;
    // if (keys.a) this.x -= this.speed;
    // if (keys.d) this.x += this.speed;

    //Camera
    maps.mapPosition.x = this.x * -1 + canvas.width / 2;
    maps.mapPosition.y = this.y * -1 + canvas.height / 2;

    this.teleport();

    this.loadCollisionTilesInChunk();
    this.showCollisions();

    // this.checkCollision();
  }

  checkCollision() {
    this.collisions.forEach((tile) => {
      if (
        this.x + this.dx + this.radius > tile.tileX * 32 &&
        this.x + this.dx - this.radius < tile.tileX * 32 + 32 &&
        this.y + this.dy - this.radius < tile.tileY * 32 + 32 &&
        this.y + this.dy + this.radius > tile.tileY * 32
      ) {
        this.isCollide = true;
      } else {
        // this.isCollide = false;
      }
    });
  }

  // checkCollision(side: "top" | "bottom" | "left" | "right"):boolean {
  //   if (side === "top") {

  //   }
  // }

  drawMe() {
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

    drawText(this.x, this.y + 40, `${this.isCollide}`);
  }
  showCollisions() {
    this.collisions.forEach((tile) => {
      // drawLine(this.x, this.y, tile.tileX * 32, tile.tileY * 32);
      drawRect(tile.tileX * 32, tile.tileY * 32, 32, 32);
    });
  }

  loadCollisionTilesInChunk() {
    const pos = getPositionPixelToTile_(this.x, this.y);
    const chunk = getChunk_(pos.tileX, pos.tileY);

    // execute while enter to new chunk
    if (
      chunk.chunkX !== this.currentChunk.chunkX ||
      chunk.chunkY !== this.currentChunk.chunkY
    ) {
      // console.log("chunk: ", chunk);

      // Clear collisions
      this.collisions.length = 0;

      // Add only collidable tile to chunk-array
      maps[maps.currentMap].layers.forEach((layer: number[][]) => {
        const rowFrom = (chunk.chunkY === 0 ? 0 : -1) + chunk.chunkY * 16;
        const rowTo = 16 + chunk.chunkY * 16;
        for (let row = rowFrom; row < rowTo; row++) {
          const tileFrom = (chunk.chunkX === 0 ? 0 : -2) + chunk.chunkX * 16;
          const tileTo = 16 + chunk.chunkX * 16;
          for (let tile = tileFrom; tile < tileTo; tile++) {
            if (layer[row]) {
              if (layer[row][tile]) {
                const id = layer[row][tile];
                // console.log("row: ", row, "tile: ", tile, "id: ", id);
                if (isTileCollide_(id)) {
                  this.collisions.push({ tileX: tile, tileY: row });
                }
              }
            }
          }
        }
      });

      this.currentChunk.chunkX = chunk.chunkX;
      this.currentChunk.chunkY = chunk.chunkY;
      console.log(this.collisions);
    }
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

    if (dist <= 0) changeMap_("map2");
  }
}
