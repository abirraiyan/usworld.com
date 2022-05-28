

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");



const newYear = "11 February 2022";


function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) %60;
   const seconds = Math.floor(totalSeconds) %60;

   console.log(days , hours , mins , seconds)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formateTime(hours);
    minsEl.innerHTML = formateTime(mins);
    secondsEl.innerHTML = formateTime(seconds);

}
function formateTime(time){

    return time < 10 ? `0${time}` : time;
}


//initial call

countdown();
setInterval(countdown, 1000);
