declare module "jp-prefecture" {
  const VERSION: string;

  function convert(type: any, value: any, key: any): any;

  function find(type: any, value: any, select: any): any;

  function findBy(type: any, key: any, value: any, select: any): any;

  function getAll(type: any, select: any): any;

  function getAllPref(select: any): any;

  function getAllRegion(select: any): any;

  function getAllRegionInPref(): any;

  function getNeighbors(type: any, value: any, select: any): any;

  function getPrefNeighbors(value: any, select: any): any;

  function getRegionNeighbors(value: any, select: any): any;

  function isNeighbor(type: any, val1: any, val2: any): any;

  function isPrefNeighbor(val1: any, val2: any): any;

  function isRegionNeighbor(val1: any, val2: any): any;

  function neighborSize(type: any, value: any): any;

  function prefConvert(value: any, key: any): any;

  function prefFind(value: any, select: any): any;

  function prefFindBy(key: any, value: any, select: any): any;

  function prefFindByRegion(value: any, select: any): any;

  function prefNeighborSize(value: any): any;

  function prefWhere(attrs: any, select: any): any;

  function regionConvert(value: any, key: any): any;

  function regionFind(value: any, select: any): any;

  function regionFindBy(key: any, value: any, select: any): any;

  function regionFindByPref(value: any, select: any): any;

  function regionNeighborSize(value: any): any;

  function regionWhere(attrs: any, select: any): any;

  function where(type: any, attrs: any, select: any): any;
}
