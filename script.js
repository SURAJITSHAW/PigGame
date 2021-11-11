/* Declare Game Variable */

var scores, roundScore, activePlayer, gamePlaying;

init();

/* Genearate Random Numbers */

// dice = Math.floor(Math.random() * 6) + 1;

/* DOM Manipulation */

// document.querySelector('#current--' + activePlayer).textContent = dice;

/* Read element/content from the WebPage */

// var x = document.querySelector('#score--0').textContent;

/* Change CSS */

// document.querySelector('.dice').style.display = 'none';

/* Set Global and roundScore to 0 with JS instead of HTML */

// document.getElementById('score--0').textContent = '0';
// document.getElementById('score--1').textContent = '0';
// document.getElementById('current--0').textContent = '0';
// document.getElementById('current--1').textContent = '0';

/* Set Up an Event Handler */

document.querySelector('.btn--roll').addEventListener('click', function () {
  // Anynomus Function

  if (gamePlaying) {

   // 1. Random Number
 
   var dice = Math.floor(Math.random() * 6) + 1;
 
   // 2. Display the Result
   diceDom = document.querySelector('.dice');
   diceDom.style.display = 'block';
   diceDom.src = 'dice-' + dice + '.png';
 
   // 3. Update the roundScore if the rolled number was not a 1
   if (dice !== 1) {
     // Add Score
 
     roundScore += dice;
     document.querySelector('#current--' + activePlayer).textContent =
       roundScore;
   } else {
     nextPlayer();
   }
   
  }

});

function nextPlayer() {
  // Next Player

  /* Change the player */

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  /* set the roundScore to zero(0) to start over */

  roundScore = 0;

  /* Also need to change the roundScore visually for convinent to User */

  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  /* Visually had to change the User Interface to show the who is the active player right now */

  /* toggle means "if itsn't there add it there and if it is there remove it" simple :) */

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--hold').addEventListener('click', function () {

 if (gamePlaying) {

  // Add current score to global score
 
  scores[activePlayer] += roundScore;
 
  // Update the UI
 
  document.querySelector('#score--' + activePlayer).textContent =
    scores[activePlayer];
 
  // Check if player won the game
 
  if (scores[activePlayer] >= 10) {
    /* Declare the winner */
    document.querySelector('#name--' + activePlayer).textContent = 'winner!';
 
    /* Remove the active class */
 
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
 
    /* Hide the dice */
 
    document.querySelector('.dice').style.display = 'none';
 
    document
      .querySelector('.player--' + activePlayer)
      .classList.add('player--winner');
 
      gamePlaying = false;
  } else {
    // Next Player
 
    nextPlayer();
  }

 }

});

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  document.getElementById('name--0').textContent = 'player--1';
  document.getElementById('name--1').textContent = 'player--2';

  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');

  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');

  document.querySelector('.player--0').classList.add('player--active');
}

document.querySelector('.btn--new').addEventListener('click', init);



 












