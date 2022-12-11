// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("http://www.gstatic.com/firebasejs/9.15.0/firebase-app.js");
importScripts("http://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
// const app = firebase.initializeApp({
//   apiKey: "AIzaSyDlmRpB9_oUuyqFjcsorLcBzz0O-8MaLQw",
//   projectId: "ipd-greennarae",
//   messagingSenderId: "242233680916",
//   appId: "1:242233680916:web:30319afbafa4678eadb301",
// });

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyDlmRpB9_oUuyqFjcsorLcBzz0O-8MaLQw",
//   authDomain: "ipd-greennarae.firebaseapp.com",
//   databaseURL: "https://ipd-greennarae-default-rtdb.firebaseio.com",
//   projectId: "ipd-greennarae",
//   storageBucket: "ipd-greennarae.appspot.com",
//   messagingSenderId: "242233680916",
//   appId: "1:242233680916:web:30319afbafa4678eadb301",
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyDlmRpB9_oUuyqFjcsorLcBzz0O-8MaLQw",
  projectId: "ipd-greennarae",
  messagingSenderId: "242233680916",
  appId: "1:242233680916:web:30319afbafa4678eadb301",
});




const messaging = app.messaging()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('firebase-messaging-sw.js')
    .then(reg => {
      console.log(`Service Worker Registration (Scope: ${reg.scope})`);
    })
    .catch(error => {
      const msg = `Service Worker Error (${error})`;
      console.error(msg);
    });
} else {
  // happens when the app isn't served over HTTPS or if the browser doesn't support service workers
  console.warn('Service Worker not available');
}
