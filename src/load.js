import { Player } from './player';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { TurnTracker } from './turnTracker';

const anchorDiv = document.querySelector('#content');
const tracker = TurnTracker('H');

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
  nameInput.setAttribute('pattern', '^[a-zA-Z]{4,}$');

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
      const playerBoard = populateBoard();
      const humanPlayer = Player(nameInput.value, playerBoard);
      const cpuPlayer = Player('CPU', playerBoard);

      clearScreen();
      loadPlayArea(humanPlayer, cpuPlayer);

      startGame(humanPlayer, cpuPlayer);
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
  playerBoard.placeShip([8, 2], battleship);

  playerBoard.placeShip([1, 4], cruiser);

  playerBoard.placeShip([1, 6], submarine);
  destroyer.ninteyDegrees();

  playerBoard.placeShip([6, 5], destroyer);

  return playerBoard;
}

function boardToDom(board) {
  const boardWrap = document.createElement('div');
  boardWrap.classList.add('board');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellVal = board.getCoordinate([j, i]);
      const cell = document.createElement('div');
      cell.classList.add('cell');

      if (cellVal === 1) {
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
  playerColumn.appendChild(boardToDom(humanPlayer.getBoard()));

  const cpuName = document.createElement('h1');
  cpuName.textContent = cpuPlayer.getName();

  cpuColumn.appendChild(cpuName);
  cpuColumn.appendChild(boardToDom(cpuPlayer.getBoard()));

  playerSplitWrap.appendChild(playerColumn);
  playerSplitWrap.appendChild(cpuColumn);
}

function addListenerToCells(player, boardDom) {
  const child = boardDom[0].children;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      child[i * 10 + j].addEventListener('click', () => {
        console.log(tracker.getTurn());
      });
    }
  }
}

function addTurnFollowListener(humanPlayer, cpuPlayer) {
  const allCells = document.getElementsByClassName('cell');
  const turnIndicator = document.getElementById('turn-indicator');
  console.log(tracker.getTurn());

  if (tracker.getTurn() === 'H') {
    turnIndicator.textContent = humanPlayer.getName();
  } else {
    turnIndicator.textContent = 'CPU';
  }

  for (let index = 0; index < allCells.length; index++) {
    const cell = allCells[index];

    cell.addEventListener('click', () => {
      tracker.nextTurn();

      if (tracker.getTurn() === 'H') {
        turnIndicator.textContent = humanPlayer.getName();
      } else {
        turnIndicator.textContent = 'CPU';
      }
    });
  }

  const humanDomBoard = document
    .getElementById('human-column')
    .getElementsByClassName('board');

  const cpuDomBoard = document
    .getElementById('cpu-column')
    .getElementsByClassName('board');

  addListenerToCells(humanPlayer, humanDomBoard);
  addListenerToCells(cpuPlayer, cpuDomBoard);
}

function startGame(humanPlayer, cpuPlayer) {
  if (
    humanPlayer.getBoard().getShips().length === 5 &&
    cpuPlayer.getBoard().getShips().length === 5
  ) {
    addTurnFollowListener(humanPlayer, cpuPlayer);
  }
}
export { loadMainAssests };