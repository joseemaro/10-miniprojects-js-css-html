const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const holiday = "1 Feb 2022";

function countDown(){
    const holidaysDate = new Date(holiday);
    const currentDate = new Date();

    const total_seconds = (holidaysDate - currentDate) / 1000;
    const days = Math.floor(total_seconds / 3600 / 24);
    const hours = Math.floor(total_seconds / 3600) % 24;
    const mins = Math.floor(total_seconds / 60) % 60;
    const seconds = Math.floor(total_seconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(days, hours, mins, seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countDown();
setInterval(countDown, 1000);