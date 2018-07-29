"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
var admin = require("firebase-admin");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp({
    databaseURL: 'https://amora-2cc4c.firebaseio.com/'
});
var db = admin.database();
function getPoints(uid) {
    return db.ref('/points/' + uid).once('value')
        .then(function (result) { return console.log(JSON.stringify(result)); })
        .catch(function (error) { return console.log("Error: " + error); });
}
function sortKeys(obj) {
    for (var key in obj) {
        if (!obj.hasOwnProperty(key))
            continue;
        return obj[key];
    }
}
exports.updatePoints = functions.database.ref('/trips/{uid}').onUpdate((function (change) {
    // const snapshot = change.after;
    // const val = snapshot.val();
    // let points;
    // sortKeys(val).then((result)=>{
    //     console.log(result);
    //     sortKeys(result).then((trip)=>{
    //         console.log(trip);
    //         if (trip.pointsEarned === true) {
    //             points = trip.pointsEarned;
    //             return db.ref('/points/' + trip.uid).update({
    //                 points: points
    //             })
    //         } else {
    //             return db.ref('/points/' + trip.uid).update({
    //                 points: points
    //             })
    //         }
    //     }).catch((error)=>{
    //         return error;
    //     })
    // }).catch((error)=>{
    //     return error;
    // });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFnRDtBQUNoRCxzQ0FBd0M7QUFDeEMsc0NBQXNDO0FBQ3RDLDJEQUEyRDtBQUMzRCxFQUFFO0FBQ0YsK0VBQStFO0FBQy9FLDBDQUEwQztBQUMxQyxNQUFNO0FBRU4sS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUNoQixXQUFXLEVBQUUscUNBQXFDO0NBQ3JELENBQUMsQ0FBQztBQUNILElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUU1QixtQkFBb0IsR0FBRztJQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN4QyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQztTQUNuRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFFRCxrQkFBbUIsR0FBRztJQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLFFBQVEsQ0FBQztRQUN0QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7QUFDTCxDQUFDO0FBRUQsT0FBTyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFBLE1BQU07SUFDMUUsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLDRDQUE0QztJQUM1QywwQ0FBMEM7SUFDMUMsNERBQTREO0lBQzVELGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDREQUE0RDtJQUM1RCxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLDRDQUE0QztJQUM1QyxFQUFFO0lBQ0YsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixvREFBb0Q7SUFDcEQseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxJQUFJO0FBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tICdmaXJlYmFzZS1mdW5jdGlvbnMnO1xuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xuLy8gLy8gU3RhcnQgd3JpdGluZyBGaXJlYmFzZSBGdW5jdGlvbnNcbi8vIC8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2Z1bmN0aW9ucy90eXBlc2NyaXB0XG4vL1xuLy8gZXhwb3J0IGNvbnN0IGhlbGxvV29ybGQgPSBmdW5jdGlvbnMuaHR0cHMub25SZXF1ZXN0KChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuLy8gIHJlc3BvbnNlLnNlbmQoXCJIZWxsbyBmcm9tIEZpcmViYXNlIVwiKTtcbi8vIH0pO1xuXG5hZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vYW1vcmEtMmNjNGMuZmlyZWJhc2Vpby5jb20vJ1xufSk7XG5jb25zdCBkYiA9IGFkbWluLmRhdGFiYXNlKCk7XG5cbmZ1bmN0aW9uIGdldFBvaW50cyAodWlkKSB7XG4gICAgcmV0dXJuIGRiLnJlZignL3BvaW50cy8nICsgdWlkKS5vbmNlKCd2YWx1ZScpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcbn1cblxuZnVuY3Rpb24gc29ydEtleXMgKG9iaikge1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0cy51cGRhdGVQb2ludHMgPSBmdW5jdGlvbnMuZGF0YWJhc2UucmVmKCcvdHJpcHMve3VpZH0nKS5vblVwZGF0ZSgoY2hhbmdlID0+IHtcbiAgICAvLyBjb25zdCBzbmFwc2hvdCA9IGNoYW5nZS5hZnRlcjtcbiAgICAvLyBjb25zdCB2YWwgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAvLyBsZXQgcG9pbnRzO1xuICAgIC8vIHNvcnRLZXlzKHZhbCkudGhlbigocmVzdWx0KT0+e1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIC8vICAgICBzb3J0S2V5cyhyZXN1bHQpLnRoZW4oKHRyaXApPT57XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0cmlwKTtcbiAgICAvLyAgICAgICAgIGlmICh0cmlwLnBvaW50c0Vhcm5lZCA9PT0gdHJ1ZSkge1xuICAgIC8vICAgICAgICAgICAgIHBvaW50cyA9IHRyaXAucG9pbnRzRWFybmVkO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBkYi5yZWYoJy9wb2ludHMvJyArIHRyaXAudWlkKS51cGRhdGUoe1xuICAgIC8vICAgICAgICAgICAgICAgICBwb2ludHM6IHBvaW50c1xuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBkYi5yZWYoJy9wb2ludHMvJyArIHRyaXAudWlkKS51cGRhdGUoe1xuICAgIC8vICAgICAgICAgICAgICAgICBwb2ludHM6IHBvaW50c1xuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pLmNhdGNoKChlcnJvcik9PntcbiAgICAvLyAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9KS5jYXRjaCgoZXJyb3IpPT57XG4gICAgLy8gICAgIHJldHVybiBlcnJvcjtcbiAgICAvLyB9KTtcbiAgICAvLyBpZiAoZGF0YVRyaXApIHtcbiAgICAvLyAgICAgcG9pbnRzID0gZGJUcmlwLnBvaW50c0Vhcm5lZDtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJQb2ludHMgcHVsbGVkXCIsIHBvaW50cyk7XG4gICAgLy9cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBwb2ludHMgPSBkYlRyaXAucG9pbnRzO1xuICAgIC8vICAgICByZXR1cm4gZGIucmVmKCcvcG9pbnRzLycgKyB0cmlwLnVpZCkudXBkYXRlKHtcbiAgICAvLyAgICAgICAgIHBvaW50czogcG9pbnRzXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxufSkpOyJdfQ==