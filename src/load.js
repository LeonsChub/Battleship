import { Player } from './player';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { TurnTracker } from './turnTracker';

const anchorDiv = document.querySelector('#content');
const tracker = TurnTracker('H');
let randomPos = [];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    randomPos.push([i, j]);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function loadMainAssests() {
  loadNamePrompt();
}

function loadNamePrompt() {
  const totalWrap = document.createElement('div');
  totalWrap.classList.add('total-wrap');

  const form = document.createElement('form');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  nameLabel.setAttribute('for', 'name_input');

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name_input');
  nameInput.id = 'name_input';
  nameInput.required = true;
  nameInput.setAttribute('pattern', '^[A-z]{3,}$');

  const btn = document.createElement('button');
  btn.textContent = 'Next';

  const inputWrap = document.createElement('div');
  inputWrap.classList.add('input-wrap');

  inputWrap.appendChild(nameLabel);
  inputWrap.appendChild(nameInput);

  form.appendChild(inputWrap);
  form.onsubmit = `event.preventDefault();`;

  form.addEventListener('submit', (e) => {
    if (nameInput.validity.valid) {
      //const playerBoard = populateBoard();
      //const humanPlayer = Player(nameInput.value, playerBoard);
      //const cpuPlayer = Player('CPU', playerBoard);

      clearScreen();
      loadPreGame(nameInput.value);
      //loadPlayArea(humanPlayer, cpuPlayer);
      //startGame(humanPlayer, cpuPlayer, nameInput.value);
    }
    e.preventDefault();
  });

  const btnWrap = document.createElement('div');
  btnWrap.classList.add('btn-wrap');

  btnWrap.appendChild(btn);
  form.appendChild(btnWrap);

  totalWrap.appendChild(form);
  anchorDiv.appendChild(totalWrap);
}

function createShipDom(size) {
  const shipWrap = document.createElement('div');
  shipWrap.setAttribute('draggable', true);
  shipWrap.classList.add('ship-wrap');
  shipWrap.classList.add('draggable');
  shipWrap.classList.add('horizontal');

  const rootCell = document.createElement('div');
  rootCell.id = 'root-cell';
  rootCell.classList.add('cell');

  shipWrap.addEventListener('dragstart', () => {
    shipWrap.classList.add('dragging');
  });

  shipWrap.addEventListener('dragend', () => {
    shipWrap.classList.remove('dragging');
  });

  shipWrap.addEventListener('click', () => {
    let isHorizontal = shipWrap.classList.contains('horizontal');
    switch (isHorizontal) {
      case true:
        shipWrap.classList.remove('horizontal');
        shipWrap.classList.add('vertical');

        break;

      case false:
        shipWrap.classList.remove('vertical');
        shipWrap.classList.add('horizontal');

        break;

      default:
        break;
    }
  });

  shipWrap.setAttribute('length', size);

  switch (size) {
    case 5:
      shipWrap.classList.add('carrier');
      break;

    case 4:
      shipWrap.classList.add('battleship');
      break;

    case 3:
      shipWrap.classList.add('cruiser');
      break;

    case 2:
      shipWrap.classList.add('submarine');
      break;

    default:
      break;
  }

  for (let i = 0; i < size - 1; i++) {
    let shipCell = document.createElement('div');
    shipCell.classList.add('cell');
    shipWrap.appendChild(shipCell);
  }

  shipWrap.appendChild(rootCell);

  return shipWrap;
}
function clearHighlightDom(cells) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (cells[i][j].classList.contains('highlight')) {
        cells[i][j].classList.remove('highlight');
      }
    }
  }
}

function loadPreGame(name) {
  const introHeading = document.createElement('h1');
  introHeading.id = 'intro-head';
  introHeading.textContent = `Place your ships admiral ${name}`;

  anchorDiv.appendChild(introHeading);

  const blankBoard = Gameboard();
  let boardDom = boardToDom(blankBoard);
  boardDom.id = 'pregameBoard';

  const domCells = boardDom.querySelectorAll('.cell');
  let cells = [...Array(10)].map(() => Array(10));

  for (let i = 0; i < 10; i++) {
    const row = cells[i];
    for (let j = 0; j < 10; j++) {
      row[j] = domCells[i + j * 10];
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = cells[i][j];

      cell.addEventListener('dragover', (e) => {
        e.preventDefault();
        const ship = document.querySelector('.dragging');
        const len = parseInt(ship.getAttribute('length'));

        if (ship.classList.contains('horizontal')) {
          for (let z = 0; z < len; z++) {
            if (len - 1 + i < 10) {
              cells[i + z][j].classList.add('highlight');
            }
          }
        }
        if (ship.classList.contains('vertical')) {
          for (let z = 0; z < len; z++) {
            if (j - len + 1 >= 0) {
              cells[i][j - z].classList.add('highlight');
            }
          }
        }
      });

      cell.addEventListener('dragleave', () => {
        const ship = document.querySelector('.dragging');
        const len = parseInt(ship.getAttribute('length'));

        if (ship.classList.contains('horizontal')) {
          for (let z = 0; z < len; z++) {
            if (i + z < 10) {
              cells[i + z][j].classList.remove('highlight');
            }
          }
        }
        if (ship.classList.contains('vertical')) {
          for (let z = 0; z < len; z++) {
            if (j - z >= 0) {
              cells[i][j - z].classList.remove('highlight');
            }
          }
        }
      });

      cell.addEventListener('drop', (e) => {
        e.preventDefault();
        let shipPlaced = false;
        const domShip = document.querySelector('.dragging');
        const len = parseInt(domShip.getAttribute('length'));

        if (domShip.classList.contains('horizontal')) {
          if (i + len - 1 < 10) {
            let orientation = 'x';
            const ship = Ship(len, orientation);
            if (blankBoard.placeShip([i, j], ship) === null) {
              alert('CANNOT PLACE SHIP ON TOP OF SHIP');
            } else {
              shipPlaced = true;
            }
          }
        }

        if (domShip.classList.contains('vertical')) {
          if (j - len + 1 < 10) {
            let orientation = 'y';
            const ship = Ship(len, orientation);
            if (blankBoard.placeShip([i, j], ship) === null) {
              alert('CANNOT PLACE SHIP ON TOP OF SHIP');
            } else {
              shipPlaced = true;
            }
          }
        }
        if (shipPlaced) {
          for (let z = 0; z < len; z++) {
            if (domShip.classList.contains('horizontal')) {
              cells[i + z][j].classList.add('occupied');
            }
            if (domShip.classList.contains('vertical')) {
              cells[i][j - z].classList.add('occupied');
            }
          }
          domShip.classList.remove('draggable');
          domShip.classList.add('deactivated');
        }
        clearHighlightDom(cells);
      });
    }
  }

  anchorDiv.appendChild(boardDom);

  const draggableWrap = document.createElement('div');
  draggableWrap.id = 'draggable-wrap';

  const carrierWrap = document.createElement('div');
  carrierWrap.appendChild(createShipDom(5));
  draggableWrap.appendChild(carrierWrap);

  const battleWrap = document.createElement('div');
  battleWrap.appendChild(createShipDom(4));
  draggableWrap.appendChild(battleWrap);

  const cruiserWrap = document.createElement('div');
  cruiserWrap.appendChild(createShipDom(4));
  draggableWrap.appendChild(cruiserWrap);

  const submarineWrap = document.createElement('div');
  submarineWrap.appendChild(createShipDom(3));
  draggableWrap.appendChild(submarineWrap);

  const destroyerWrap = document.createElement('div');
  destroyerWrap.appendChild(createShipDom(2));
  draggableWrap.appendChild(destroyerWrap);

  anchorDiv.appendChild(draggableWrap);

  const btnWrap = document.createElement('div');
  btnWrap.classList.add('btn-wrap');
  const continueButton = document.createElement('button');
  continueButton.textContent = 'Continue';
  continueButton.id = 'continueBtn';

  continueButton.addEventListener('click', () => {
    let ships = document
      .getElementById('draggable-wrap')
      .querySelectorAll('.deactivated');

    if (ships.length === 5) {
      console.log('Game starting');
      const humanPlayer = Player(name, blankBoard);
      const cpuPlayer = Player('CPU', blankBoard);

      clearScreen();
      startGame(humanPlayer, cpuPlayer);
    } else {
      alert('Please place all your ships on the board');
    }
  });

  btnWrap.appendChild(continueButton);
  anchorDiv.appendChild(btnWrap);
}

function clearScreen() {
  anchorDiv.innerHTML = '';
}

function populateBoard() {
  const playerBoard = Gameboard();
  const carrier = Ship(5, 'x');
  const battleship = Ship(4, 'x');
  const cruiser = Ship(3, 'x');
  const submarine = Ship(3, 'x');
  const destroyer = Ship(2, 'x');

  playerBoard.placeShip([0, 2], carrier);

  battleship.ninteyDegrees();
  playerBoard.placeShip([8, 5], battleship);

  playerBoard.placeShip([1, 4], cruiser);

  playerBoard.placeShip([1, 6], submarine);
  destroyer.ninteyDegrees();

  playerBoard.placeShip([6, 5], destroyer);

  return playerBoard;
}

function boardToDom(board, drawShip = false) {
  const boardWrap = document.createElement('div');
  boardWrap.classList.add('board');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellVal = board.getCoordinate([j, i]);
      const cell = document.createElement('div');
      cell.classList.add('cell');

      if ((cellVal === 1) & drawShip) {
        cell.classList.add('ship');
      }

      boardWrap.appendChild(cell);
    }
  }

  return boardWrap;
}

function loadPlayArea(humanPlayer, cpuPlayer) {
  const playArea = document.createElement('div');
  playArea.id = 'play-area-wrap';

  const turnHeading = document.createElement('h2');
  turnHeading.innerHTML = '<span id = "turn-indicator"></span>s Turn.';

  playArea.appendChild(turnHeading);

  const playerSplitWrap = document.createElement('div');
  playerSplitWrap.classList.add('split');

  playArea.appendChild(playerSplitWrap);

  const playerColumn = document.createElement('div');
  playerColumn.id = 'human-column';

  const cpuColumn = document.createElement('div');
  cpuColumn.id = 'cpu-column';

  anchorDiv.appendChild(playArea);

  const playerName = document.createElement('h1');
  playerName.textContent = humanPlayer.getName();

  playerColumn.appendChild(playerName);
  playerColumn.appendChild(boardToDom(humanPlayer.getBoard(), true));

  const cpuName = document.createElement('h1');
  cpuName.textContent = cpuPlayer.getName();

  cpuColumn.appendChild(cpuName);
  cpuColumn.appendChild(boardToDom(cpuPlayer.getBoard()));

  playerSplitWrap.appendChild(playerColumn);
  playerSplitWrap.appendChild(cpuColumn);
}

function addListenerToCells(
  humanBoardDom,
  cpuBoardDom,
  cpuPlayer,
  humanPlayer
) {
  const humanCells = humanBoardDom[0].children;
  const cpuCells = cpuBoardDom[0].children;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      cpuCells[i * 10 + j].addEventListener('click', () => {
        {
          if (cpuPlayer.getBoard().getCoordinate([j, i]) === 1) {
            cpuCells[i * 10 + j].classList.add('ship');
          }

          if (humanPlayer.getBoard().getCoordinate([j, i]) !== -1) {
            humanPlayer.attackBoard([j, i], cpuPlayer.getBoard());
            cpuCells[i * 10 + j].classList.add('hit');
            updateIndicator('CPU');

            const attackIndex = getRandomInt(randomPos.length);
            const attackPos = randomPos.splice(attackIndex, 1)[0];
            let y = attackPos[1];
            let x = attackPos[0];

            if (humanPlayer.getBoard().getCoordinate([y, x]) === 1) {
              humanCells[attackPos[0] * 10 + attackPos[1]].classList.add(
                'ship'
              );
            }
            humanCells[attackPos[0] * 10 + attackPos[1]].classList.add('hit');

            updateIndicator(humanPlayer.getName());
          }
        }
      });
    }
  }
}

function updateIndicator(name = 'Player 1') {
  const turnIndicator = document.getElementById('turn-indicator');
  if (tracker.getTurn() === 'H') {
    turnIndicator.textContent = name;
  }
  if (tracker.getTurn() === 'C') {
    turnIndicator.textContent = 'CPU';
  }
  tracker.nextTurn();
}

function startGame(humanPlayer, cpuPlayer) {
  if (
    humanPlayer.getBoard().getShips().length === 5 &&
    cpuPlayer.getBoard().getShips().length === 5
  ) {
    const humanDomBoard = document
      .getElementById('human-column')
      .getElementsByClassName('board');

    const cpuDomBoard = document
      .getElementById('cpu-column')
      .getElementsByClassName('board');

    addListenerToCells(humanDomBoard, cpuDomBoard, cpuPlayer, humanPlayer);

    updateIndicator(humanPlayer.getName());
  }
}

export { loadMainAssests };
