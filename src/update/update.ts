import { c } from "..";
import {
  drawCellOnPosition,
  getPositionPixelToTile_,
  tilesetIdToCoords,
} from "../functions/map";
import { instances, maps } from "../variable";

export function update(deltaTime: number) {
  drawMap(30);
  drawObjects();
}

function drawObjects() {
  maps[maps.currentMap].jsonFile.layers[2].objects.forEach((obj) => {
    c.beginPath();
    c.arc(
      obj.x * 2 + maps.mapPosition.x,
      obj.y * 2 + maps.mapPosition.y,
      10,
      0,
      Math.PI * 2
    );
    c.stroke();
    c.fillText(obj.name, obj.x * 2 + maps.mapPosition.x, obj.y * 2 + maps.mapPosition.y);
  });
}

export function drawMap(cells: number) {
  const playerCellPos = getPositionPixelToTile_(instances.player.x, instances.player.y);

  for (let row = playerCellPos.tileY - cells; row < playerCellPos.tileY + cells; row++) {
    for (
      let cell = playerCellPos.tileX - cells;
      cell < playerCellPos.tileX + cells;
      cell++
    ) {
      if (
        row >= 0 &&
        cell >= 0 &&
        row < maps[maps.currentMap].jsonFile.height &&
        cell < maps[maps.currentMap].jsonFile.width
      ) {
        for (let layer = 0; layer < maps[maps.currentMap].layers.length; layer++) {
          const id = maps[maps.currentMap].layers[layer][row][cell];
          const cords = tilesetIdToCoords(id);
          drawCellOnPosition(cords.x, cords.y, cell, row);
        }
      }
    }
  }
}
