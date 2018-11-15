let doorImg1 = document.getElementById('door1');
let doorImg2 = document.getElementById('door2');
let doorImg3 = document.getElementById('door3');

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const startBtn = document.getElementById('start');


let currentlyPlaying = true;

const isBot = door => {
  if (door.src === botDoorPath) {
    return true
  } else {
    return false
  }
}

const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
    if (numClosedDoors === 0) {
      gameOver('win')
    } else if (isBot(door)) {
      gameOver()
    }
  }


const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
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
}

doorImg1.onclick = () => {
  if (!isClicked(doorImg1) && currentlyPlaying === true) {
    doorImg1.src = openDoor1
    playDoor(door1)
  }

}

doorImg2.onclick = () => {
  if (!isClicked(doorImg2) && currentlyPlaying === true) {
    doorImg2.src = openDoor2
    playDoor(door2)
  }
}

doorImg3.onclick = () => {
  if (!isClicked(doorImg3) && currentlyPlaying === true) {
    doorImg3.src = openDoor3
    playDoor(door3)
  }
}

startBtn.onclick = () => {
  if (currentlyPlaying === false) {
    startRound()
  } else {
    return false;
  }

}

const startRound = () => {
  numClosedDoors = 3;
  doorImg1.src = closedDoorPath;
  doorImg2.src = closedDoorPath;
  doorImg3.src = closedDoorPath;
  startBtn.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator()
}

const gameOver = (status) => {
  if (status === 'win') {
    startBtn.innerHTML = 'You win! Play again?'
  } else {
    startBtn.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
}

startRound();
