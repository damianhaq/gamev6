import { Player } from "./classes/Player";
import gamev6map from "./map/gamev6map.json";
import map2 from "./map/map2.json";

export const maps = {
  map1: {
    jsonFile: gamev6map,
    layers: [],
    points: {
      teleports: {
        x: gamev6map.layers[2].objects[0].x * 2,
        y: gamev6map.layers[2].objects[0].y * 2,
      },
    },
  },
  map2: {
    jsonFile: map2,
    layers: [],
    // points: {
    //   teleports: {
    //     x: gamev6map.layers[2].objects[0].x * 2,
    //     y: gamev6map.layers[2].objects[0].y * 2,
    //   },
    // },
  },
  mapPosition: {
    x: 0,
    y: 0,
  },
  currentMap: "map1",
  tiles: {
    collide: [
      34, 35, 36, 37, 38, 39, 66, 67, 68, 98, 99, 100, 101, 102, 103, 165, 198, 199, 257,
      258, 259, 260, 261, 262, 289, 290, 291, 292, 293, 294, 323, 324, 482, 485, 627, 596,
      597, 598, 628, 629, 630, 660, 661, 662,
    ],
  },
};

export const spriteSheet = new Image();
spriteSheet.src = "./assets/tile.png";

export const keys = {
  w: false,
  s: false,
  a: false,
  d: false,
  space: false,
  escape: false,
  mouse: {
    click: false,
    executeOnceFlag: true,
    x: 0,
    y: 0,
  },
};

export const instances = {
  player: null,
};

interface MapData {
  compressionlevel: number;
  height: number;
  infinite: boolean;
  layers: Layer[];
  nextlayerid: number;
  nextobjectid: number;
  orientation: "orthogonal" | "isometric" | "staggered" | "hexagonal";
  properties: Property[];
  renderorder: "right-down" | "right-up" | "left-down" | "left-up";
  tiledversion: string;
  tileheight: number;
  tilesets: Tileset[];
  tilewidth: number;
  type: "map";
  version: string;
  width: number;
}

interface Layer {
  data?: number[]; // Only for tile layers
  draworder?: "topdown" | "index"; // Only for object layers
  height: number;
  id: number;
  name: string;
  objects?: MapObject[]; // Only for object layers
  opacity: number;
  type: "tilelayer" | "objectgroup";
  visible: boolean;
  width: number;
  x: number;
  y: number;
}

interface MapObject {
  class?: string;
  height: number;
  id: number;
  name: string;
  point: boolean;
  properties: Property[];
  rotation: number;
  type?: string;
  visible: boolean;
  width: number;
  x: number;
  y: number;
}

interface Property {
  name: string;
  type: "string" | "int" | "float" | "bool" | "color" | "file" | "object" | "array";
  value: string | number | boolean | Object | any[];
}

interface Tileset {
  columns: number;
  firstgid: number;
  image: string;
  imageheight: number;
  imagewidth: number;
  margin: number;
  name: string;
  spacing: number;
  tilecount: number;
  tileheight: number;
  tiles?: Tile[];
  tilewidth: number;
}

interface Tile {
  id: number;
  type?: string;
  properties: Property[];
}
