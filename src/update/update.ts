import { drawCellOnPosition, tilesetIdToCoords } from "../functions/map";
import { instances, maps } from "../variable";

export function update() {
  drawMap(5);
}

export function drawMap(cells: number) {
  const playerCellPos = {
    x: Math.ceil(instances.player.x / 32),
    y: Math.ceil(instances.player.y / 32),
  };

  for (let row = playerCellPos.y - cells; row < playerCellPos.y + cells; row++) {
    for (let cell = playerCellPos.x - cells; cell < playerCellPos.x + cells; cell++) {
      if (row >= 0 && cell >= 0) {
        // const id = map[row][cell];
        for (let layer = 0; layer < maps.map1.layers.length; layer++) {
          const id = maps.map1.layers[layer][row][cell];
          const cords = tilesetIdToCoords(id);
          drawCellOnPosition(cords.x, cords.y, cell, row);
        }
      }
    }
  }
}
