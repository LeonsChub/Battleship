const Player = (str, objBoard) => {
  const name = str;
  const board = objBoard;

  const attackBoard = (coord, boardToAttack) => {
    if (boardToAttack.getCoordinate(coord) !== -1) {
      boardToAttack.recieveHit(coord);
    } else {
      return false;
    }
    return true;
  };

  const randAttack = (boardToAttack, coord = null) => {
    /* coord parameter is purely for testing "ai" capabilites */
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let x = undefined;
    let y = undefined;

    if (coord === null) {
      x = getRandomInt(9);
      y = getRandomInt(9);
    } else {
      x = coord[0];
      y = coord[1];
    }

    if (attackBoard([x, y], boardToAttack) === null) {
      randAttack(boardToAttack);
    }
  };

  const getBoard = () => {
    return board;
  };

  const getName = () => {
    return name;
  };

  return { attackBoard, getName, getBoard, randAttack };
};
export { Player };
