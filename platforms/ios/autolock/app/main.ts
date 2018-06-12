import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

const firebase = require('nativescript-plugin-firebase');

import * as app from 'application';

import { BackgroundFetch } from "nativescript-background-fetch";

if (app.ios) {
      class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        public applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler:any) {
                  BackgroundFetch.performFetchWithCompletionHandler(application, completionHandler);
                }
      }
      app.ios.delegate = MyDelegate;
    }

firebase.init({
    persist: true
})
    .then(instance => {
        console.log('firebase.init done');
    }, error => {
        console.log(`firebase.init error: ${error}`);
    });

platformNativeScriptDynamic().bootstrapModule(AppModule);
