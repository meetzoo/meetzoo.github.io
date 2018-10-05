'use strict';

let startSound = new Audio('beep.mp3');
let stopSound = new Audio('beep-stop.mp3');

//
// let player = document.getElementById('player');
// document.getElementById('stop').onclick = stop;
// let startButton = document.getElementById('start');
// startButton.onclick = start;

// rxjs.fromEvent(startButton, 'click')
//   .subscribe(() => {
//     console.log('start Clicked!');
//     start();
//   });

let counter = 0;
let message = {
  state: 'Stopped',
  runs: 0
};
// let message = {
//   runs: 0
// };
let interval;
function playSounds() {
  counter += 100;
  if (counter === 200) {
    message.runs++;
    console.log('should play');
    startSound.play();
    message.action = 'ACTION';
    setTimeout(() => { message.action = ''; }, 500);
  } else if (counter === 6200) {
    console.log('should play');
    message.action = 'RELAX';
    setTimeout(() => { message.action = ''; }, 500);
    stopSound.play();
  } else if (counter > 17900) {
    counter = 0;
  }
}
function start(){
  if (!interval){
    message.state = 'Running';
    console.log('start timer');
    interval = setInterval(playSounds, 100);
  }
}
function stop(){
  console.log('attempt to stop timer');
  if (interval){
    message.state = 'Stopped';
    console.log('timer stopped');
    interval = clearInterval(interval);
    counter = 0;
  }
}

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: message
  },
  // watch:{
  //   runs: function(val){
  //     this.runs = val;
  //   }
  // },
  methods: {
    start: function () {
      console.log('vue started this');
      start();
      // this.message = 'Started';
    },
    stop: function () {
      console.log('vue stopped this');
      console.log(`runs: ${message.runs}`);
      stop();
      // this.message = 'Stopped';
    },
    reset: function() {
      message.runs = 0;
    }
  },
});