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

export function changeMap(mapName: string) {
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
