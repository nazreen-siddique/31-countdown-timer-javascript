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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let futureDate = new Date(2023 , 10 , 13 , 11, 30 , 0);
// console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
let weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on  ${weekday} ${date}  ${month} ${year} ${hours}:${minutes}am `

const futureTime= futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const timeLeft = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinutes = 60 * 1000;

  let days = Math.floor(timeLeft / oneDay);

  let hours = Math.floor((timeLeft%oneDay)/oneHour);
  let minutes = Math.floor((timeLeft% oneHour)/oneMinutes);
  let seconds = Math.floor((timeLeft % oneMinutes)/1000);

  const values = [days, hours,minutes,seconds];
  function format(item){
    if(item<10){
    return (item = `0${item}`)
    }
    return item;
  }
  items.forEach(function(item,index){
    item.innerHTML =format( values[index]);
    // console.log(item);
  })
  if(timeLeft<0){
    clearInterval(countdown);
    deadline.innerHTML =  `<h4 class = "expired">sorry giveaway expired</h4>`
  }
  
}
// countdown
// let countdown = setInterval(getRemainingTime,1000);
let countdown = setInterval ( getRemainingTime,1000);

getRemainingTime();