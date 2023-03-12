import { c } from "..";
import { maps, spriteSheet, TiledMap } from "../variable";

export function drawCellOnPosition(cx: number, cy: number, x: number, y: number) {
  c.drawImage(spriteSheet, cx, cy, 16, 16, x * 16 * 2, y * 16 * 2, 32, 32);
}

export function tilesetIdToCoords(id: number): { x: number; y: number } {
  const columns = (maps.map1.jsonFile as TiledMap).tilesets[0].columns;

  const y = Math.floor((id - 1) / columns) * 16;
  const x = ((id - 1) % columns) * 16;

  return { x, y };
}
