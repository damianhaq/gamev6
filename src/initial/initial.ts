import { maps, TiledMap } from "../variable";
import { controls_ } from "./controls";

export function initial() {
  controls_();
  mapJsonToArray_();
}

export function mapJsonToArray_() {
  for (let layer = 0; layer < (maps.jsonFile as TiledMap).layers.length; layer++) {
    const jsonArray = (maps.jsonFile as TiledMap).layers[layer].data;
    let count = 0;
    const rows = (maps.jsonFile as TiledMap).layers[layer].width;
    const cells = (maps.jsonFile as TiledMap).layers[layer].height;
    let result = new Array();
    // console.log(cells);
    for (let i = 0; i < rows; i++) {
      result[i] = new Array();
      for (let j = 0; j < cells; j++) {
        result[i][j] = jsonArray[count];
        count++;
      }
    }

    // maps.map1.mapToArray = result;
    maps.map1.layers?.push(result);
  }
}
