/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

goog.provide('app.Direction');
goog.provide('app.Map');
goog.provide('app.MapData');
goog.provide('app.TileType');

/**
 * The complete map data. Note that only spaces and T's (trees)
 * are used. X is just for the editor to make a note of level
 * points of interest.
 * @type {!Array<string>}
 */

app.MapData = [
 'T     TT', //MAP START
 '       T', //LEVEL12
 '  TTTT T',
 '  TX T  ',
 '  TTTT T',
 'T T  T  ',
 ' TTTTT Y',
 '  T  T  ', //LEVEL11
 'T TTTT  ',
 '  TX T T',
 '  TTTT  ', //LEVEL10
 'T      T',
 'T TX  TT', //LEVEL9
 'TTTT  T ',
 'T  TTT T',
 'T X   T ',
 'TTTT TT ',
 'T X  T T',
 'T   T TT',
 ' T    TT',
 'T     T ',
 'T     TT',
 'T     TT',
 'T     TT',
 'T     TT',
 'T  S   T', //LEVEL8
 ' X     T', // level 8
 '  T    T',
 'T   T TT',
 'TT T   T',
 'T  TT  T',
 'T T TTTT',
 'T  T  TT', //LEVEL7
 'TT T  TT',
 ' X TT  T',
 ' T  TT T',
 '  T  TTT',
 'TTTT  TT', //LEVEL6
 'TY TTX T',
 'T  T   T',
 'TTTTT  T',
 '  XTT  T', //LEVEL5
 '       T',
 'T TTTT T',
 ' T     T', //LEVEL4
 'T XTTT T',
 '   T T T',
 'T    T T',
 ' T T   T',
 '     TTT',
 'TTX T  T', //LEVEL3
 ' T   T T',
 '    TY T',
 ' T  T  T', //LEVEL2
 'TT  T TT',
 'T X  T T',
 '  T T  T', //LEVEL1
 'TT X   T',
 'T   A TT',
 'TT X T T',
 '       T',
 '  T    T',
 '   T   T',
 'T TTTTTT',
 '   TT  T',
 'T T    T',
 'TTT T TT',
 ' T     T',
 '   T   T'
];

/**
 * The different types of tiles encoded in the map data.
 * @enum {string}
 */
app.TileType = {
  TREE: 'T',
  EMPTY: ' ',
  POI: 'X',
  SLED: 'S',
  TUTORIAL_ARROW: 'A',
  YETI: 'Y'
};

/**
 * Movement direction constants. Currently uses degrees.
 * @enum {number}
 */
app.Direction = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270
};

/**
 * Game map data.
 * @constructor
 */
app.Map = function() {
  // Clean out points of interest.
  this.rows_ = app.MapData.map(function(row) { return row.replace('X', ' '); });
  this.height = this.rows_.length;
  this.width = this.rows_[0].length;
};

/**
 * Iterates tiles in the map in specific rows, calling a handler for each one.
 * The tiles are iterated from top to bottom, right to left to simplify
 * rendering shadows on top of tiles to the right.
 * @param {number} fromY inclusive start row to iterate.
 * @param {number} toY exclusive end row to iterate.
 * @param {function(string, number, number): void} fn which receives each matched tile and its position.
 */
app.Map.prototype.iterateTiles = function(fromY, toY, fn) {
  fromY = Math.max(fromY, 0);
  toY = Math.min(toY, this.height);
  for (var y = fromY; y < toY; y++) {
    for (var x = this.width - 1; x >= 0; x--) {
      fn((this.rows_[y] || '')[x] || ' ', x, y);
    }
  }
};

/**
 * Returns a specific tile.
 * @param {number} x position of tile to get.
 * @param {number} y position of tile to get.
 * @return {app.TileType} the tile or null if out of bounds.
 */
app.Map.prototype.getTile = function(x, y) {
  if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
    return null;
  }
  return (this.rows_[y] || '')[x] || ' ';
};

/**
 * Store the end bound of each level to make it easy to tweak the map.
 * @type {!Array.<number>}
 */
app.Map.LEVEL_BOUNDS = [];
app.Map.LEVEL_BOUNDS.unshift(1);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 6);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 3);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 2);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 14);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 6);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 5);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 4);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 3);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 6);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 3);
app.Map.LEVEL_BOUNDS.unshift(app.Map.LEVEL_BOUNDS[0] + 3);
