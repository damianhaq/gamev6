import { c } from "..";
import { maps, spriteSheet } from "../variable";

export function drawCellOnPosition(cx: number, cy: number, x: number, y: number) {
  c.drawImage(
    spriteSheet,
    cx,
    cy,
    16,
    16,
    x * 16 * 2 + maps.mapPosition.x,
    y * 16 * 2 + maps.mapPosition.y,
    32,
    32
  );
}

export function tilesetIdToCoords(id: number): { x: number; y: number } {
  const columns = maps.map1.jsonFile?.tilesets[0].columns;

  const y = Math.floor((id - 1) / columns) * 16;
  const x = ((id - 1) % columns) * 16;

  return { x, y };
}

export function changeMap_(mapName: string) {
  maps.currentMap = mapName;
}

export function calculateDistance(
  fromX: number,
  fromY: number,
  fromRadius: number,
  toX: number,
  toY: number,
  toRadius: number
): number {
  let distance: number = Math.sqrt((fromX - toX) ** 2 + (fromY - toY) ** 2);
  distance = distance - fromRadius - toRadius;
  return distance;
}

export function getChunk_(
  tileX: number,
  tileY: number
): { chunkX: number; chunkY: number } {
  const chunkX = Math.floor(tileX / 16);
  const chunkY = Math.floor(tileY / 16);
  return { chunkX, chunkY };
}

export function getPositionPixelToTile_(posX: number, posY: number) {
  const tileX = Math.ceil(posX / 32);
  const tileY = Math.ceil(posY / 32);
  return { tileX, tileY };
}

export function isTileCollide_(id: number): boolean {
  return maps.tiles.collide.includes(id);
}

export function drawLine(fromX: number, FromY: number, toX: number, toY: number) {
  c.beginPath();
  c.moveTo(fromX + maps.mapPosition.x, FromY + maps.mapPosition.y);
  c.lineTo(toX + maps.mapPosition.x, toY + maps.mapPosition.y);
  c.stroke();
}
export function drawRect(x: number, y: number, w: number, h: number) {
  c.beginPath();
  c.rect(x + maps.mapPosition.x, y + maps.mapPosition.y, w, h);
  c.stroke();
}
