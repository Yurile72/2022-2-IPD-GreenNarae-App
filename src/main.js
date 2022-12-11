import App from "./App.vue";

import { createApp } from "vue";
import router from "./router/index";
import firebaseConfig from "../firebaseConfig";

// Plugins
import { registerPlugins } from "@/plugins";

import { initializeApp } from "firebase/app";
import "firebase/messaging";
import {
  // eslint-disable-next-line
  getDatabase,
  // eslint-disable-next-line
  ref,
  // eslint-disable-next-line
  onValue,
} from "firebase/database";

import { getMessaging, getToken } from "firebase/messaging";

const app = createApp(App);
app.config.globalProperties.$firebase = initializeApp(firebaseConfig);
(app.config.globalProperties.user = {
  name: "상심당",
  point: 5500,
  gift: 0,
  coupon: 0,
  stamp: 0,
}),
  app.use(router);
registerPlugins(app);

app.mount("#app");

const messaging = getMessaging();

getToken(messaging, {
  vapidKey:
    "BL0z7dONZEtP7mC34F5fhY0YEDssUsWt_UgLGtokAteOiwfxRpxES6ecrRkMaqzgBQQq4NVe77fWybgOmduhML0",
})
  .then((currentToken) => {
    if (currentToken) {
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });

// 알림 수신을 위한 사용자 권한 요청
Notification.requestPermission().then((permission) => {
  console.log("permission ", permission);
  if (permission !== "granted") {
    alert("알림을 허용해주세요");
  }
});
