const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// DOM Element
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline h4");

// future date it means end of giveaway date

const futureDate = new Date(2021, 6, 2, 11, 30);

// get full year
const year = futureDate.getFullYear();

// get month
let month = futureDate.getMonth();
// access in months array for this month
month = months[month];

// get week day
let weekday = futureDate.getDay();
// access in weekDays array for this week day
weekday = weekDays[weekday];

// get date
const date = futureDate.getDate();

// get hour
const hour = futureDate.getHours();

// get minutes
const minutes = futureDate.getMinutes();

giveaway.innerHTML = `Giveaway Ends On ${weekday}, ${date} ${month} ${year}, ${hour}:${minutes}am`;

// let's go create a remaining time function
function getRemainingTime() {
  // get's time value convert to miliseconds
  const todayTime = new Date().getTime();
  const t = futureDate - todayTime;

  // 1day = 24hr
  // 1hr = 60min
  // 1min = 60s
  // 1s = 1000ms

  // convert time to miliseconds
  const oneDay = 24 * 60 * 60 * 1000; // day to miliseconds
  const oneHour = 60 * 60 * 1000; // day to miliseconds
  const oneMin = 60 * 1000; // day to miliseconds
  const oneSec = 1000; // day to miliseconds

  // remain day to end giveaway
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMin);
  const seconds = Math.floor((t % oneMin) / oneSec);

  // values
  const values = [days, hours, minutes, seconds];

  // add zeros to number less than 10
  function format(item) {
    if (item < 10) {
      return (item.innerHTML = `0${item}`);
    }
    return item;
  }

  // values add to each item
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  // if giveaway date is expired countdown is finish and show msg

  if (t < 0) {
    clearInterval(countdown);
    // show msg
    deadline.innerHTML = `<h5 class="expired">sorry, This giveaway  has expired</h5>`;
  }
}

// countdown time every seconds
let countdown = setInterval(getRemainingTime, 1000);

// execute getRemainingTime function
getRemainingTime();
