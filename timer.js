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

// let counter = 0;
// let message = {
//   state: 'Stopped',
//   runs: 0
// };
// let message = {
//   runs: 0
// };
let interval;


let app5 = new Vue({
  el: '#app-5',
  data: {
    counter: 0,
    interval: undefined,
    state: 'stopped',
    runs: 0,
    action: '',
    // message: message

  },
  // watch:{
  //   runs: function(val){
  //     this.runs = val;
  //   }
  // },
  created: function(){

  },
  methods: {
    startTimer: function () {
      console.log('vue started this');
      if (!this.interval) {
        this.state = 'Running';
        console.log('start timer');
        this.interval = setInterval(this.playSounds, 100);
        this.state = 'Started';
      }
    },
    stopTimer: function () {
      console.log(`runs: ${this.runs}`);
      if (this.interval) {
        this.state = 'Stopped';
        console.log('timer stopped');
        this.interval = clearInterval(this.interval);
        this.state = 'Stopped';
      }
    },
    reset: function() {
      this.stopTimer();
      this.runs = 0;
      this.counter = 0;
      this.action = 0;
    },
    playSounds: function () {
      console.log(this.counter);
      this.counter += 100;
      if (this.counter === 200) {
        this.runs++;
        startSound.play();
        this.action = 'ACTION';
      } else if (this.counter === 6200) {
        this.action = 'RELAX';
        stopSound.play();
      } else if (this.counter > 17900) {
        this.counter = 0;
      }
    },
  },
});