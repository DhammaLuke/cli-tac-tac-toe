const vorpal = require('vorpal')();


// create object to store board spaces
let boardSpace = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
}

// make move
let makeMove = (space, exoroh) => {
  boardSpace[space] = exoroh.toUpperCase();
}

// create board
vorpal
  .command('play TTT', 'Outputs Tic-Tac-Toe Board')
  .action(function(args, callback) {
    this.log('_________' + '\n' +
    boardSpace[1] + ' | ' + boardSpace[2] + ' | ' + boardSpace[3] + '\n' +
    '_________' + '\n' +
    boardSpace[4] + ' | ' + boardSpace[5] + ' | ' + boardSpace[6] + '\n' +
    '_________' + '\n' +
    boardSpace[7] + ' | ' + boardSpace[8] + ' | ' + boardSpace[9] + '\n' +
    '_________' + '\n');
    callback();
  });

// validate move
let validateMove = (space) => {
  (boardSpace[space] === ' ') ? true : false;
}
// win options
let allWins = {
  '[1,2,3]': '[1,2,3]',
  '[4,5,6]': '[4,5,6]',
  '[7,8,9]': '[7,8,9]',
  '[1,4,7]': '[1,4,7]',
  '[2,5,8]': '[2,5,8]',
  '[3,6,9]': '[3,6,9]',
  '[7,5,3]': '[7,5,3]',
  '[9,5,1]': '[9,5,1]'
}
// check win
let checkWin = (player) => {
  for(let win of allWins) {
    if(allWins[win])
  }
}
// play game



vorpal
  .delimiter('TicTacToe$')
  .show();
