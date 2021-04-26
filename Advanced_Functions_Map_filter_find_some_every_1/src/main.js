/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function findParkByName(parks, name) {
  let parkName = parks.find((park) => park.name === name);
  return parkName || null;
}

function allParksAboveCertainSize(parks, minSize) {
  let outPut = parks.every((park) => park.areaInSquareKm >= minSize);
  return outPut || false;
}

function getBigParkNames(parks, minSize) {
  let outPut = parks
    .filter((park) => park.areaInSquareKm >= minSize)
    //.map((park) => park.areaInSquareKm >= minSize)
  return outPut;
}

function doesStateHaveOneBigPark(parks, minSize, state) {
  let outPut = parks 
  .filter(park => park.stae === state)
  .some(park => park.areaInSquareKm >= minSize); 
  return outPut || false; 
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
