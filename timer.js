'use strict';
const states = {
  reset: 'Stopped',
  paused: 'Paused',
  running: 'Running'
};
let app = new Vue({
  el: '#app-5',
  data: {
    counter: 0,
    interval: undefined,
    state: states.reset,
    runs: 0,
    startSound: new Audio('beep.mp3'),
    stopSound: new Audio('beep-stop.mp3'),
    action: '',
  },
  created: function(){

  },
  methods: {
    startTimer: function () {
      if (!this.interval) {
        console.log('start timer');
        this.interval = setInterval(this.playSounds, 100);
        this.state = states.running;
      }
    },
    stopTimer: function () {
      console.log('pause clicked');
      if (this.interval) {
        this.state = states.paused;
        console.log('timer Paused');
        this.interval = clearInterval(this.interval);
      }
    },
    reset: function() {
      this.stopTimer();
      this.runs = 0;
      this.counter = 0;
      this.action = 0;
      this.state = states.reset;
    },
    playSounds: function () {
      console.log(this.counter);
      this.counter += 100;
      if (this.counter === 200) {
        this.runs++;
        this.startSound.play();
        this.action = 'GO';
      } else if (this.counter === 6200) {
        this.action = 'RELAX';
        this.stopSound.play();
      } else if (this.counter > 17900) {
        this.counter = 0;
      }
    },
  },
});