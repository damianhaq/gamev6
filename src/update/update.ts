import { c } from "..";
import { drawCellOnPosition, tilesetIdToCoords } from "../functions/map";
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
  const playerCellPos = {
    x: Math.ceil(instances.player.x / 32),
    y: Math.ceil(instances.player.y / 32),
  };

  for (let row = playerCellPos.y - cells; row < playerCellPos.y + cells; row++) {
    for (let cell = playerCellPos.x - cells; cell < playerCellPos.x + cells; cell++) {
      if (row >= 0 && cell >= 0) {
        for (let layer = 0; layer < maps[maps.currentMap].layers.length; layer++) {
          const id = maps[maps.currentMap].layers[layer][row][cell];
          const cords = tilesetIdToCoords(id);
          drawCellOnPosition(cords.x, cords.y, cell, row);
        }
      }
    }
  }
}
