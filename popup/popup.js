'use strict';

const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const breakButton = document.getElementById("break-btn");
const demoButton = document.getElementById("start-demo");
// const minutes = 0.25;  // 0.25 min = 15s, 0.5 min = 30s, 2 min = 120s, 5 min = 300s, 25 min = 1500s 
// 1000ms = 1s 
const convert = 60;
// let time = document.getElementById("time");

// Add event listeners to the buttons
startButton.addEventListener("click", setAlarm);
resetButton.addEventListener("click", clearAlarm);
breakButton.addEventListener("click", setAlarm);
demoButton.addEventListener("click", setAlarm);

function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  let timeSelection = "Currently: ";
  if (minutes < 1) {
    timeSelection = timeSelection + (minutes * convert) + " sec of focus work time";
  } else if (minutes === 5) {
    timeSelection = timeSelection + " on break - " + minutes + " min";
  } else {
    timeSelection = timeSelection + minutes + " min of focus work time";
  }
  document.getElementById("current").innerHTML = timeSelection;
  chrome.action.setBadgeText({text: 'ON'});
  chrome.alarms.create({delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
  console.log("Alarm set!");
  // startTimer(minutes);
}
  
function clearAlarm() {
  chrome.action.setBadgeText({text: ''});
  chrome.alarms.clearAll();
  document.getElementById("current").innerHTML = "";
  console.log("Alarm cleared!");
  // if (interval !== null) {
  //   clearInterval(interval);
  //   time.innerHTML = "00:00";
  // }
}

// function swapBtnText () {
//   if (startButton.innerHTML === "Pause") {
//     startButton.innerHTML = "Start";
//   } else {
//     startButton.innerHTML = "Pause";
//     startTimer(minutes);
//   }
//   startButton.classList.toggle("start-timer");
// }

// let interval;
// // let timeLeft = minutes * convert;
// // time.innerHTML = timeLeft;
// function startTimer(minutes) {
//   let timer = minutes * convert;
//   let min;
//   let sec;
//   interval = setInterval(function() {
//     min = parseInt(timer / convert, 10);
//     sec = parseInt(timer % convert, 10);

//     min = min < 10 ? "0" + min : min;
//     sec = sec < 10 ? "0" + sec : sec;
//     time.innerHTML = min + ":" + sec;
//     if (--timer < 0) {
//       timer = minutes;
//     }
//     console.log("Time left: " + minutes);
//     if (minutes === 0) {
//       clearInterval(interval);
//     }
//     // console.log("Time left: " + timeLeft);  // update #time
//     // timeLeft--;
//     // if (!timeLeft) {
//     //   clearInterval(interval);
//     //   // alert("Break Time!");
//     // }
//   }, 1000);  // 1000ms = 1s countdown decrement
// }