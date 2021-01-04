/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');
   
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    apiKey: "AIzaSyDclt9FW50lnduZqwdDQFDQPdyRKL_CKOM",
    authDomain: "laravelpush-1a2d4.firebaseapp.com",
    databaseURL: "https://laravelpush-1a2d4-default-rtdb.firebaseio.com",
    projectId: "laravelpush-1a2d4",
    storageBucket: "laravelpush-1a2d4.appspot.com",
    messagingSenderId: "785747950172",
    appId: "1:785747950172:web:0471d52262a15f07e98499",
    measurementId: "G-CS8D366WTP"
  
    });
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    /* Customize notification here */
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };
  
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});
