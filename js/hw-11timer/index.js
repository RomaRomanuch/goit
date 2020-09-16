class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    setInterval(this.countDown, 1000);
  }
  countDown() {
    const targetDate = Date.parse(myCountdownTimer.targetDate);
    const refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };
    let now = new Date();
    let currentTime = now.getTime();

    let timeLeft = targetDate - currentTime;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
    refs.secs.innerHTML = secs;
    refs.days.innerHTML = days;
    refs.mins.innerHTML = mins;
    refs.hours.innerHTML = hours;
  }
}

const myCountdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 29, 2020"),
});

myCountdownTimer.start();
