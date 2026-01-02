importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

const CACHE_NAME = "timetable-cache-v1";

const FILES_TO_CACHE = [
  "/timetable/",
  "/timetable/index.html",
  "/timetable/style.css",
  "/timetable/script.js",
  "/timetable/manifest.json",
  "/timetable/icon-192.png",
  "/timetable/icon-512.png"
];
firebase.initializeApp({
  apiKey: "AIzaSyACRKlP9nM0H8VL6XujsbJTOKBN5Z23Ryk",
  authDomain: "timetable-46988.firebaseapp.com",
  projectId: "timetable-46988",
  storageBucket: "timetable-46988.firebasestorage.app",
  messagingSenderId: "611929599966",
  appId: "1:611929599966:web:8b681ad3c973a6f77fb74f",
  measurementId: "G-KTZ2WX1DGN"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-192.png"
  });
});

