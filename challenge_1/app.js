var xhorizontalWin = {};
var xverticalWin = {};
var xdiagonalWin1 = {'0,0':0,'1,1':0,'2,2':0};
var xdiagonalWin2 = {'0,2':0,'1,1':0,'2,0':0};
var ohorizontalWin = {};
var overticalWin = {};
var odiagonalWin1 = {'0,0':0,'1,1':0,'2,2':0};
var odiagonalWin2 = {'0,2':0,'1,1':0,'2,0':0};
var currentPlayer = 'O';
var movesCount = 0;
var winX = 0;
var winO = 0;
var txt1;
var txt2;
var playerX;
var playerO;

window.onload = function(){
  playerX = prompt("Please enter your name for player 1:");
  if (playerX == null || playerX == "") {
    txt1 = "User cancelled the prompt.";
  } else {
    txt1 = `PLAYER X (${playerX}):`;
  }
  playerO = prompt("Please enter your name for player 2:");
  if (playerO == null || playerO == "") {
    txt2 = "User cancelled the prompt.";
  } else {
    txt2 = `PLAYER O (${playerO}):`;
  }
  document.getElementById("playerX").textContent = txt1;
  document.getElementById("playerO").textContent = txt2;
};

var restartGame = function() {
  var elements = document.getElementsByClassName("entry");
  for (let i = 0; i < elements.length; i++) {
    while (elements[i].firstChild) {
      elements[i].removeChild(elements[i].firstChild);
    }
  }
  xhorizontalWin = {};
  xverticalWin = {};
  xdiagonalWin1 = {'0,0':0,'1,1':0,'2,2':0};
  xdiagonalWin2 = {'0,2':0,'1,1':0,'2,0':0};
  ohorizontalWin = {};
  overticalWin = {};
  odiagonalWin1 = {'0,0':0,'1,1':0,'2,2':0};
  odiagonalWin2 = {'0,2':0,'1,1':0,'2,0':0};
  movesCount = 0;
};

var addWinner = function(winner) {
  var element = document.getElementById('currentWinner');
  element.textContent = winner;
};

var addScoreX = function() {
  winX++;
  document.getElementById("playerX").textContent =`${txt1} ${winX}`;
};

var addScoreO = function() {
  winO++;
  document.getElementById("playerO").textContent =`${txt2} ${winO}`;
};

var addPlayer = function(event) {
  if (currentPlayer === 'X') {
    var id = event.currentTarget.id;
    var div = document.createElement('div');
    div.classList.add("playerO");
    var node = document.createTextNode('O');
    div.appendChild(node);
    var element = document.getElementById(id);
    element.appendChild(div);
    checkPlayerO(id);
    currentPlayer = 'O'
    movesCount++;
  } else {
    var id = event.currentTarget.id;
    var div = document.createElement('div');
    div.classList.add("playerX");
    var node = document.createTextNode('X');
    div.appendChild(node);
    var element = document.getElementById(id);
    element.appendChild(div);
    checkPlayerX(id);
    currentPlayer = 'X'
    movesCount++;
  }
  if (movesCount === 9) {
    alert(`It's a draw!`)
    restartGame();
  }
};

var checkPlayerX = function(pos) {
  var positions = [];
  var posNum = pos.split(',');
  for (let i = 0; i < posNum.length; i++) {
    posNum[i] = +posNum[i];    
  }
  positions.push(posNum);
  checkWinnerX(positions, playerX);
}

var checkPlayerO = function(pos) {
  var positions = [];
  var posNum = pos.split(',');
  for (let i = 0; i < posNum.length; i++) {
    posNum[i] = +posNum[i];    
  }
  positions.push(posNum);
  checkWinnerO(positions, playerO);
}

var checkWinnerX = function(positions, player) {
  for (let i = 0; i < positions.length; i++) {
    if (xhorizontalWin[positions[i][0]]) {
      xhorizontalWin[positions[i][0]]++;
    } else {
      xhorizontalWin[positions[i][0]] = 1;
    }
    if (xverticalWin[positions[i][1]]) {
      xverticalWin[positions[i][1]]++;
    } else {
      xverticalWin[positions[i][1]] = 1;
    }
    if (xdiagonalWin1[positions[i].toString()] === 0) {
      xdiagonalWin1[positions[i].toString()] = 1;
    }
    if (xdiagonalWin2[positions[i].toString()] === 0) {
      xdiagonalWin2[positions[i].toString()] = 1;
    }
  }

  for (const key in xhorizontalWin) {
    if (xhorizontalWin[key] === 3) {
      alert(`${player} has won!`);
      addWinner(playerX);
      addScoreX();
      return;
    }
  }
  for (const key in xverticalWin) {
    if (xverticalWin[key] === 3) {
      alert(`${player} has won!`);
      addWinner(playerX);
      addScoreX();
      return;
    }
  }
  var count1 = 0;
  for (const key in xdiagonalWin1) {
    if (xdiagonalWin1[key] === 1) {
      count1++;
    }
  }
  if (count1 === 3) {
    alert(`${player} has won!`);
    addWinner(playerX);
    addScoreX();
    return;
  }
  var count2 = 0;
  for (const key in xdiagonalWin2) {
    if (xdiagonalWin2[key] === 1) {
      count2++;
    }
  }
  if (count2 === 3) {
    alert(`${player} has won!`);
    addWinner(playerX);
    addScoreX();
    return;
  }
};

var checkWinnerO = function(positions, player) {
  for (let i = 0; i < positions.length; i++) {
    if (ohorizontalWin[positions[i][0]]) {
      ohorizontalWin[positions[i][0]]++;
    } else {
      ohorizontalWin[positions[i][0]] = 1;
    }
    if (overticalWin[positions[i][1]]) {
      overticalWin[positions[i][1]]++;
    } else {
      overticalWin[positions[i][1]] = 1;
    }
    if (odiagonalWin1[positions[i].toString()] === 0) {
      odiagonalWin1[positions[i].toString()] = 1;
    }
    if (odiagonalWin2[positions[i].toString()] === 0) {
      odiagonalWin2[positions[i].toString()] = 1;
    }
  }

  for (const key in ohorizontalWin) {
    if (ohorizontalWin[key] === 3) {
      alert(`${player} has won!`);
      addWinner(playerO);
      addScoreO();
      return;
    }
  }
  for (const key in overticalWin) {
    if (overticalWin[key] === 3) {
      alert(`${player} has won!`);
      addWinner(playerO);
      addScoreO();
      return;
    }
  }
  var count1 = 0;
  for (const key in odiagonalWin1) {
    if (odiagonalWin1[key] === 1) {
      count1++;
    }
  }
  if (count1 === 3) {
    alert(`${player} has won!`);
    addWinner(playerO);
    addScoreO();
    return;
  }
  var count2 = 0;
  for (const key in odiagonalWin2) {
    if (odiagonalWin2[key] === 1) {
      count2++;
    }
  }
  if (count2 === 3) {
    alert(`${player} has won!`);
    addWinner(playerO);
    addScoreO();
    return;
  }
};
