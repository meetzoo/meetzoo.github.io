'use strict';
const states = {
  reset: 'Stopped',
  paused: 'Paused',
  running: 'Running'
};

let app = new Vue({
  el: '#app-5',
  data: {
    firstInterval: 6,
    secondInterval: 12,
    counter: 0,
    interval: undefined,
    state: states.reset,
    runs: 0,
    startSoundLocation: './beep.mp3',
    stopSoundLocation: './beep-stop.mp3',
    showOptions: false,
    // isSafari: /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
    // safariConfirmed: '',
    action: '',
  },
  // watch: {
  //   safariConfirmed: function () {
  //     return !!(document.getElementById('player') && document.getElementById('player').played && document.getElementById('player').played.length);
  //   }
  // },
  created: function(){
    this.startSound = new Audio(this.startSoundLocation);
    this.stopSound = new Audio(this.stopSoundLocation);
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
      if (this.counter > (( +this.firstInterval + +this.secondInterval) * 1000)) {
        return this.counter = 0;
      } else if (this.counter === (this.firstInterval * 1000)) {
        this.action = 'RELAX';
        this.stopSound.play().catch(error => {
          console.log('not able to play, error', error);
        });
      } else if (this.counter === 100) {
        this.runs++;
        this.startSound.play().catch(error => {
          console.log('not able to play, error', error);
        });
        this.action = 'GO';
      }
      this.counter += 100;
    },
    setStartSound: function(){
      this.startSound = new Audio(this.startSoundLocation);
    }
  },
});