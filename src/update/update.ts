import { drawCellOnPosition, tilesetIdToCoords } from "../functions/map";
import { instances, maps } from "../variable";

export function update() {
  drawMap();
}

export function drawMap() {
  const playerCellPos = {
    x: Math.ceil(instances.player.x / 32),
    y: Math.ceil(instances.player.y / 32),
  };

  for (let row = playerCellPos.y - 5; row < playerCellPos.y + 5; row++) {
    for (let cell = playerCellPos.x - 5; cell < playerCellPos.x + 5; cell++) {
      if (row >= 0 && cell >= 0) {
        // const id = map[row][cell];
        const id = (maps.map1.mapToArray as number[][])[row][cell];
        const cords = tilesetIdToCoords(id);
        drawCellOnPosition(cords.x, cords.y, cell, row);
      }
    }
  }
}
