var xhorizontalWin = {};
var xverticalWin = {};
var xdiagonalWin1 = {'0,0':0,'1,1':0,'2,2':0};
var xdiagonalWin2 = {'0,2':0,'1,1':0,'2,0':0};
var ohorizontalWin = {};
var overticalWin = {};
var odiagonalWin1 = {'0,0':0,'1,1':0,'2,2':0};
var odiagonalWin2 = {'0,2':0,'1,1':0,'2,0':0};
var currentPlayer = 'X';

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

};

var addPlayer = function(event) {
  if (currentPlayer === 'X') {
    var id = event.currentTarget.id;
    var div = document.createElement('div');
    var node = document.createTextNode('O');
    div.appendChild(node);
    var element = document.getElementById(id);
    element.appendChild(div);
    checkPlayerX(id);
    currentPlayer = 'O'
  } else {
    var id = event.currentTarget.id;
    var div = document.createElement('div');
    var node = document.createTextNode('X');
    div.appendChild(node);
    var element = document.getElementById(id);
    element.appendChild(div);
    checkPlayerO(id);
    currentPlayer = 'X'
  }
};

var checkPlayerX = function(pos) {
  var positions = [];
  var posNum = pos.split(',');
  for (let i = 0; i < posNum.length; i++) {
    posNum[i] = +posNum[i];    
  }
  positions.push(posNum);
  console.log(posNum);
  checkWinnerX(positions, 'X');
}

var checkPlayerO = function(pos) {
  var positions = [];
  var posNum = pos.split(',');
  for (let i = 0; i < posNum.length; i++) {
    posNum[i] = +posNum[i];    
  }
  positions.push(posNum);
  console.log(posNum);
  checkWinnerO(positions, 'O');
}

var checkWinnerX = function(positions, player) {
  console.log('hello');
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
    if (xdiagonalWin1[positions[i].toString()]) {
      xdiagonalWin1[positions[i].toString()] = 1;
    }
    if (xdiagonalWin2[positions[i].toString()]) {
      xdiagonalWin2[positions[i].toString()] = 1;
    }
  }

  for (const key in xhorizontalWin) {
    if (xhorizontalWin[key] === 3) {
      alert(`Player ${player} has won!`);
    }
    return;
  }
  for (const key in xverticalWin) {
    if (xverticalWin[key] === 3) {
      alert(`Player ${player} has won!`);
    }
    return;
  }
  var count1 = 0;
  for (const key in xdiagonalWin1) {
    if (xdiagonalWin1[key] === 1) {
      count1++;
    }
  }
  if (count1 === 3) {
    alert(`Player ${player} has won!`);
    return;
  }
  var count2 = 0;
  for (const key in xdiagonalWin2) {
    if (xdiagonalWin2[key] === 1) {
      count2++;
    }
  }
  if (count2 === 3) {
    alert(`Player ${player} has won!`);
    return;
  }
  console.log(xhorizontalWin);
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
    if (odiagonalWin1[positions[i].toString()]) {
      odiagonalWin1[positions[i].toString()] = 1;
    }
    if (odiagonalWin2[positions[i].toString()]) {
      odiagonalWin2[positions[i].toString()] = 1;
    }
  }

  for (const key in ohorizontalWin) {
    if (ohorizontalWin[key] === 3) {
      alert(`Player ${player} has won!`);
    }
    return;
  }
  for (const key in overticalWin) {
    if (overticalWin[key] === 3) {
      alert(`Player ${player} has won!`);
    }
    return;
  }
  var count1 = 0;
  for (const key in odiagonalWin1) {
    if (odiagonalWin1[key] === 1) {
      count1++;
    }
  }
  if (count1 === 3) {
    alert(`Player ${player} has won!`);
    return;
  }
  var count2 = 0;
  for (const key in odiagonalWin2) {
    if (odiagonalWin2[key] === 1) {
      count2++;
    }
  }
  if (count2 === 3) {
    alert(`Player ${player} has won!`);
    return;
  }
  console.log(ohorizontalWin);
};