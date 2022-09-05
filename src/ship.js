const Ship = (length, o) => {
  let shipArray = [];
  let orientation = o;

  for (let index = 0; index < length; index++) {
    shipArray.push(1);
  }

  const getShip = () => {
    return shipArray;
  };

  const getLen = () => {
    return shipArray.length;
  };

  const getSunk = () => {
    return !shipArray.includes(1);
  };

  const getOrientation = () => {
    return orientation;
  };

  const hit = (n) => {
    if (n > length || n < 0) {
      return null;
    } else {
      shipArray[n] = 0;
    }
  };
  return { getShip, getSunk, hit, getOrientation, getLen };
};

export { Ship };
