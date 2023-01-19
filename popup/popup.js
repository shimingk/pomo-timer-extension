const startButton = document.getElementById("start-btn");

// Add event listeners to the checkbox and button
// checkbox.addEventListener("change", (e) => updateContentScript(false));
startButton.addEventListener("click", swapBtnText);
// startButton.addEventListener("click", ());

function swapBtnText () {
  if (startButton.innerHTML === "Pause") {
    startButton.innerHTML = "Start";
  } else {
    startButton.innerHTML = "Pause";
    // startTimer()?
  }
  startButton.classList.toggle("start-timer");
}

// const minutes = 25;
// const sec = 1000;  // 1000ms = 1s
// const convert = 60;
// let interval;
// function timer(minutes) {
//   let duration = minutes * convert * sec;
//   interval = setInterval(function() {
//     duration--;
//     if (!duration) {
//       clearInterval(interval);
//       alert("🚨Nobody cares, go to work⏰")
//     }
//   }, 1000);
// }
// async function updateContentScript(addBlock) {
//   console.log("yurr");
//   // Sends a message to the content script with an object that has the
//   // current value of the checkbox and a boolean (whether to add a block)
//   const message = { enable: checkbox.checked, addBlock: addBlock };
//   const [tab] = await chrome.tabs.query({
//     active: true,
//     lastFocusedWindow: true,
//   });
//   //const response = await chrome.tabs.sendMessage(tab.id, message);
//   // You can do something with response from the content script here
//   //console.log(response);
//   chrome.tabs.sendMessage(tab.id, message);
//   console.log("Yo!");
// }

// let seconds = 0;
// let interval;
// function pomodoro(mins) {
//    seconds = mins*60 || 0;     
//    interval = setInterval(function() {
 
//         seconds--;
//         if(!seconds){
//              clearInterval(interval); 
//              alert("🚨 It is Cool 😎. I wish you could share ");
//         }
//    },1000)
// }