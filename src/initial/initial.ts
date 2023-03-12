import { maps, TiledMap } from "../variable";
import { controls_ } from "./controls";

export function initial() {
  controls_();
  mapJsonToArray_();
}

export function mapJsonToArray_() {
  const jsonArray = (maps.map1.jsonFile as TiledMap).layers[0].data;
  let count = 0;
  const rows = (maps.map1.jsonFile as TiledMap).layers[0].width;
  const cells = (maps.map1.jsonFile as TiledMap).layers[0].height;
  const result = [];
  // console.log(cells);
  for (let i = 0; i < rows; i++) {
    result[i] = new Array();
    for (let j = 0; j < cells; j++) {
      result[i][j] = jsonArray[count];
      count++;
    }
  }

  maps.map1.mapToArray = result;
}
