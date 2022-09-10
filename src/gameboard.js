const Gameboard = () => {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const ships = [];

  const getBoard = () => {
    return board;
  };

  const getCoordinate = (coord) => {
    let y = coord[1];
    let x = coord[0];

    return board[y][x];
  };

  const blowCoordinate = (coord) => {
    let y = coord[1];
    let x = coord[0];

    board[y][x] = -1;
  };

  const getShipByCoordinate = (coord) => {
    let shipToReturn = null;
    ships.forEach((ship) => {
      ship.coordinates.forEach((element) => {
        if (element[0] === coord[0] && element[1] === coord[1]) {
          shipToReturn = ship;
        }
      });
    });
    return shipToReturn;
  };

  const getShips = () => {
    return ships;
  };

  const placeShip = (coord, ship) => {
    const x = coord[1];
    const y = coord[0];

    const checkArray = []; /*array meant check if a ship is alreadyPlaced */
    const coordArray = []; /*array meant to track ship coordinates */

    if (ship.getOrientation() === 'y') {
      for (let index = 0; index < ship.getLen(); index++) {
        checkArray.push(board[x + index][y]);
        coordArray.push([y, x + index]);
      }
    }
    if (ship.getOrientation() === 'x') {
      for (let index = 0; index < ship.getLen(); index++) {
        checkArray.push(board[x][y + index]);
        coordArray.push([y + index, x]);
      }
    }

    if (!checkArray.includes(1)) {
      ships.push({ shipPointer: ship, coordinates: coordArray });
      if (ship.getOrientation() === 'y') {
        for (let index = 0; index < ship.getLen(); index++) {
          board[x + index][y] = 1;
        }
      }
      if (ship.getOrientation() === 'x') {
        for (let index = 0; index < ship.getLen(); index++) {
          board[x][y + index] = 1;
        }
      }
    } else {
      return null;
    }
  };

  const recieveHit = (coord) => {
    if (getCoordinate(coord) !== -1) {
      if (getCoordinate(coord) === 1) {
        const hitShip = getShipByCoordinate(coord);

        for (let i = 0; i < hitShip.coordinates.length; i++) {
          if (
            hitShip.coordinates[i][0] === coord[0] &&
            hitShip.coordinates[i][1] === coord[1]
          ) {
            hitShip.shipPointer.hit(i);
          }
        }
      }
      blowCoordinate(coord);
    }
  };

  const toString = () => {
    let str = '';
    for (let index = 0; index < board.length; index++) {
      let arr = board[index];
      str += '\n';

      for (let index = 0; index < arr.length; index++) {
        const state = arr[index];
        str += `${state} |`;
      }
    }

    return str;
  };

  const allShipsSunk = () => {
    let allSunk = true;

    ships.forEach((ship) => {
      if (!ship.shipPointer.getSunk()) {
        allSunk = false;
      }
    });
    return allSunk;
  };
  return {
    getBoard,
    getShips,
    placeShip,
    recieveHit,
    allShipsSunk,
    getCoordinate,
    toString,
  };
};

export { Gameboard };
