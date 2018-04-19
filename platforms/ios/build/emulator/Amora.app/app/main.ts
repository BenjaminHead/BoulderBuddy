import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

const firebase = require('nativescript-plugin-firebase');

firebase.init({
    persist: true
})
    .then(instance => {
        console.log('firebase.init done');
    }, error => {
        console.log(`firebase.init error: ${error}`);
    });

platformNativeScriptDynamic().bootstrapModule(AppModule);
