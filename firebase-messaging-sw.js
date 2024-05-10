importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
	  apiKey: "AIzaSyDxKdRDgEMVC4wbVpSz5YxMvB8i4dbAQzM",
    authDomain: "push-notifications-ae013.firebaseapp.com",
    projectId: "push-notifications-ae013",
    storageBucket: "push-notifications-ae013.appspot.com",
    messagingSenderId: "450984013154",
    appId: "1:450984013154:web:e9c31424ee93d30f3e503b"
  };
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});