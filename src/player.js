const Player = (str, objBoard) => {
  const name = str;
  const board = objBoard;
  let allPos = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      allPos.push({ y: i, x: j });
    }
  }

  const attackBoard = (coord, boardToAttack) => {
    let index;
    let includes = false;
    allPos.forEach((i) => {
      if (coord[1] === i.x && coord[0] === i.y) {
        includes = true;
        index = allPos.indexOf(i);
        allPos.splice(index, 1);
      }
    });

    if (includes) {
      boardToAttack.recieveHit(coord);
    } else {
      return false;
    }
    return true;
  };

  const randAttack = (boardToAttack) => {
    let coord = allPos[getRandomInt(allPos.length)];
    let hitShip = boardToAttack.getCoordinate([coord.y, coord.x]) === 1;
    attackBoard(coord, boardToAttack);

    return { y: coord.y, x: coord.x, hasShip: hitShip };
  };

  const getBoard = () => {
    return board;
  };

  const getName = () => {
    return name;
  };

  //const smartAttack = (boardToAttack) => {};

  return { attackBoard, getName, getBoard, randAttack };
};
export { Player };

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
