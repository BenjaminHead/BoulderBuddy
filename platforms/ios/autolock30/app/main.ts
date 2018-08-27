import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

const firebase = require('nativescript-plugin-firebase');

import * as app from 'application';

import { BackgroundFetch } from "nativescript-background-fetch";

import * as platform from "platform";

declare var GMSServices: any;

if (app.ios) {
      class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        public applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler:any) {
                  BackgroundFetch.performFetchWithCompletionHandler(application, completionHandler);
                }
      }
      app.ios.delegate = MyDelegate;
    }

if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w");
}

if(app.ios) {
    GMSServices.provideAPIKey("AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w");
}

firebase.init({
    persist: true,
    url: 'https://amora-2cc4c.firebaseio.com/'
})
    .then(instance => {
        console.log('firebase.init done');
    }, error => {
        console.log(`firebase.init error: ${error}`);
    });

platformNativeScriptDynamic().bootstrapModule(AppModule);
