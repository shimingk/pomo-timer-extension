'use strict';

// let notifId = "pomo-notif";

chrome.alarms.onAlarm.addListener(() => {
  chrome.action.setBadgeText({ text: '' });
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'images/android-chrome-512x512.png',
    title: 'Great work!',
    message: 'You earned yourself a nice break!',
    buttons: [ 
      { title: 'Begin 5-min break' },
    //   { title: 'Restart Pomodoro cycle'}
    ],
    priority: 0
  });
});
  
// chrome.notifications.onClicked.addListener(async () => {
//   const item = await chrome.storage.sync.get(['minutes']);
//   chrome.action.setBadgeText({ text: 'ON' });
//   chrome.alarms.create({ delayInMinutes: item.minutes });
//   console.log("Restart");
// });

chrome.notifications.onButtonClicked.addListener( () => {
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: 0.25});
  console.log("Break!");
});