const Player = (str, objBoard) => {
  const name = str;
  const board = objBoard;
  let allPos = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      allPos.push({ y: i, x: j });
    }
  }

  const canAttackPos = (coord) => {
    let canAttack = false;
    if (
      (coord[1] >= 0) & (coord[1] <= 9) &&
      (coord[0] >= 0) & (coord[0] <= 9)
    ) {
      allPos.forEach((i) => {
        if (coord[1] === i.x && coord[0] === i.y) {
          canAttack = true;
        }
      });
    }
    return canAttack;
  };

  const attackBoard = (coord, boardToAttack) => {
    if (
      (coord[1] >= 0) & (coord[1] <= 9) &&
      (coord[0] >= 0) & (coord[0] <= 9)
    ) {
      let includes = canAttackPos(coord);
      if (includes) {
        let hitShip = boardToAttack.getCoordinate([coord[0], coord[1]]) === 1;
        let index;

        allPos.forEach((i) => {
          if (coord[1] === i.x && coord[0] === i.y) {
            index = allPos.indexOf(i);
            allPos.splice(index, 1);
          }
        });

        boardToAttack.recieveHit(coord);
        return { x: coord[1], y: coord[0], hasShip: hitShip };
      } else {
        return false;
      }
    }
    return false;
  };

  const randAttack = (boardToAttack) => {
    let coord = allPos[getRandomInt(allPos.length)];
    let hitShip = boardToAttack.getCoordinate([coord.y, coord.x]) === 1;
    attackBoard([coord.y, coord.x], boardToAttack);

    return { y: coord.y, x: coord.x, hasShip: hitShip };
  };

  const getBoard = () => {
    return board;
  };

  const getName = () => {
    return name;
  };

  //const smartAttack = (boardToAttack) => {};

  return { canAttackPos, attackBoard, getName, getBoard, randAttack };
};
export { Player };

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
