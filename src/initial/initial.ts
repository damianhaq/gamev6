import { Player } from "../classes/Player";
import { instances, maps } from "../variable";
import { controls_ } from "./controls";

export function initial() {
  controls_();
  mapJsonToArray_();

  // Spawn pos
  const spawnY = maps.map1.jsonFile.layers
    .filter((el) => el.type === "objectgroup")[0]
    .objects.filter((el) => el.name === "spawn")[0].y;
  const spawnX = maps.map1.jsonFile.layers
    .filter((el) => el.type === "objectgroup")[0]
    .objects.filter((el) => el.name === "spawn")[0].x;

  // console.log(spawnX, spawnY);

  //Player
  instances.player = new Player(spawnX * 2, spawnY * 2, 15);
}

export function mapJsonToArray_() {
  for (let i = 0; i < 2; i++) {
    const mapName = i === 0 ? "map1" : "map2";

    const tileLayersArray = maps[mapName].jsonFile?.layers.filter(
      (el) => el.type === "tilelayer"
    );

    tileLayersArray.forEach((layer) => {
      const jsonArray = layer.data;
      const rows = layer.width;
      const cells = layer.height;
      let count = 0;
      let result = new Array();

      for (let i = 0; i < rows; i++) {
        result[i] = new Array();
        for (let j = 0; j < cells; j++) {
          result[i][j] = jsonArray[count];
          count++;
        }
      }
      maps[mapName].layers?.push(result);
    });
  }
}
