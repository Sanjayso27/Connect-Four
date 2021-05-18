document.addEventListener('DOMContentLoaded', function() {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  function checkBoard() {
    // left-right check
    for(let row=0;row<=5;row++){
      for(let col=0;col<=3;col++){
        let id=row*7+col;
        var square1 = squares[id];
        var square2 = squares[id+1];
        var square3 = squares[id+2];
        var square4 = squares[id+3];
        //check those squares to see if they all have the class of player-one
        if (
            square1.classList.contains('player-one') &&
            square2.classList.contains('player-one') &&
            square3.classList.contains('player-one') &&
            square4.classList.contains('player-one')
          )
          {
            result.innerHTML = 'Player One Wins!'
          }
          //check those squares to see if they all have the class of player-two
          if (
            square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two')
          )
          {
            result.innerHTML = 'Player Two Wins!'
          }
      }
    }
    //up-to-down check
    for(let col=0;col<=6;col++){
      for(let row=0;row<=2;row++){
        let id=row*7+col;
        var square1 = squares[id];
        var square2 = squares[id+7];
        var square3 = squares[id+14];
        var square4 = squares[id+21];
        //check those squares to see if they all have the class of player-one
        if (
            square1.classList.contains('player-one') &&
            square2.classList.contains('player-one') &&
            square3.classList.contains('player-one') &&
            square4.classList.contains('player-one')
          )
          {
            result.innerHTML = 'Player One Wins!'
          }
          //check those squares to see if they all have the class of player-two
          if (
            square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two')
          )
          {
            result.innerHTML = 'Player Two Wins!'
          }
      }
    }
    //diagonal down
    for(let col=0;col<=3;col++){
      for(let row=0;row<=2;row++){
        let id=row*7+col;
        var square1 = squares[id];
        var square2 = squares[id+8];
        var square3 = squares[id+16];
        var square4 = squares[id+24];
        //check those squares to see if they all have the class of player-one
        if (
            square1.classList.contains('player-one') &&
            square2.classList.contains('player-one') &&
            square3.classList.contains('player-one') &&
            square4.classList.contains('player-one')
          )
          {
            result.innerHTML = 'Player One Wins!'
          }
          //check those squares to see if they all have the class of player-two
          if (
            square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two')
          )
          {
            result.innerHTML = 'Player Two Wins!'
          }
      }
    }
    //diagonal up
    for(let col=0;col<=3;col++){
      for(let row=3;row<=5;row++){
        let id=row*7+col;
        var square1 = squares[id];
        var square2 = squares[id-6];
        var square3 = squares[id-12];
        var square4 = squares[id-18];
        //check those squares to see if they all have the class of player-one
        if (
            square1.classList.contains('player-one') &&
            square2.classList.contains('player-one') &&
            square3.classList.contains('player-one') &&
            square4.classList.contains('player-one')
          )
          {
            result.innerHTML = 'Player One Wins!'
          }
          //check those squares to see if they all have the class of player-two
          if (
            square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two')
          )
          {
            result.innerHTML = 'Player Two Wins!'
          }
      }
    }
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      //if the square below your current square is taken, you can go ontop of it
      if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
        if (currentPlayer == 1) {
          squares[i].classList.add('taken')
          squares[i].classList.add('player-one')
          currentPlayer = 2
          displayCurrentPlayer.innerHTML = currentPlayer
        } else if (currentPlayer == 2){
          squares[i].classList.add('taken')
          squares[i].classList.add('player-two')
          currentPlayer = 1
          displayCurrentPlayer.innerHTML = currentPlayer        
        } 
      } else alert('cant go here')
      checkBoard()
    }
  }
  
})
