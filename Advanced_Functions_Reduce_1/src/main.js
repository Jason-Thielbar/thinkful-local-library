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

function squareKmTotal(parks) {
  return parks.reduce((outPut, park) => {
    return outPut + park.areaInSquareKm;
  }, 0);
}

function parkNameAndState(parks) {
  const outPut = parks.reduce((acc, park) => {
    acc[park.name] = park.location.state
    return acc
  }, {})
  return outPut;
}

function parkByState(parks) {
  const outPut = parks.reduce((acc, park) => {
    if (acc[park.location.state]){
      acc[park.location.state].push(park);
    }else{
      acc[park.location.state] = [park]
    }
  return acc;
  }, {})
return outPut;
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
