'use strict';

var doorImg1 = document.getElementById('door1');
var doorImg2 = document.getElementById('door2');
var doorImg3 = document.getElementById('door3');

var botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
var closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

var numClosedDoors = 3;
var openDoor1 = void 0;
var openDoor2 = void 0;
var openDoor3 = void 0;

var startBtn = document.getElementById('start');

var currentlyPlaying = true;

var isBot = function isBot(door) {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

var isClicked = function isClicked(door) {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

var playDoor = function playDoor(door) {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
};

var randomChoreDoorGenerator = function randomChoreDoorGenerator() {
  var choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  } else if (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
};

doorImg1.onclick = function () {
  if (!isClicked(doorImg1) && currentlyPlaying === true) {
    doorImg1.src = openDoor1;
    playDoor(door1);
  }
};

doorImg2.onclick = function () {
  if (!isClicked(doorImg2) && currentlyPlaying === true) {
    doorImg2.src = openDoor2;
    playDoor(door2);
  }
};

doorImg3.onclick = function () {
  if (!isClicked(doorImg3) && currentlyPlaying === true) {
    doorImg3.src = openDoor3;
    playDoor(door3);
  }
};

startBtn.onclick = function () {
  if (currentlyPlaying === false) {
    startRound();
  } else {
    return false;
  }
};

var startRound = function startRound() {
  numClosedDoors = 3;
  doorImg1.src = closedDoorPath;
  doorImg2.src = closedDoorPath;
  doorImg3.src = closedDoorPath;
  startBtn.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

var gameOver = function gameOver(status) {
  if (status === 'win') {
    startBtn.innerHTML = 'You win! Play again?';
  } else {
    startBtn.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
};

startRound();
