"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp({
    databaseURL: 'https://amora-2cc4c.firebaseio.com/'
});
const db = admin.database();
function getPoints(uid) {
    return db.ref('/points/' + uid).once('value')
        .then(result => console.log(JSON.stringify(result)))
        .catch(error => console.log("Error: " + error));
}
function sortKeys(obj) {
    let wantedObj;
    for (let key in obj) {
        if (!obj.hasOwnProperty(key))
            continue;
        wantedObj = obj[key];
        return wantedObj;
    }
    return wantedObj;
}
exports.updatePoints = functions.database.ref('/trips/{uid}').onUpdate((change => {
    const snapshot = change.after;
    const val = snapshot.val();
    let points;
    sortKeys(val).then((result) => {
        console.log(result);
        sortKeys(result).then((trip) => {
            console.log(trip);
            if (trip.pointsEarned === true) {
                points = trip.pointsEarned;
                return db.ref('/points/' + trip.uid).update({
                    points: points
                });
            }
            else {
                return db.ref('/points/' + trip.uid).update({
                    points: points
                });
            }
        }).catch((error) => {
            return error;
        });
    }).catch((error) => {
        return error;
    });
    // if (dataTrip) {
    //     points = dbTrip.pointsEarned;
    //     console.log("Points pulled", points);
    //
    // } else {
    //     points = dbTrip.points;
    //     return db.ref('/points/' + trip.uid).update({
    //         points: points
    //     })
    // }
}));
//# sourceMappingURL=index.js.map