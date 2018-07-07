"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Firebase = require("nativescript-plugin-firebase");
// import { Goal } from '../models/goal.model';
// import { Daily } from '../models/daily.model';
var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        this.tripTemplate = {
            travelTime: '',
            distanceTraveled: '',
            averageSpeed: '',
            pointsEarned: '',
            date: new Date
        };
    }
    FirebaseService.prototype.ngOnInit = function () { };
    FirebaseService.prototype.login = function (email, password) {
        return Firebase.login({
            type: Firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: email,
                password: password
            }
        })
            .then(function (result) {
            console.log("user logged in", email, password);
            console.log("Result of login", result, Firebase);
            return result;
        })
            .catch(function (error) {
            return error;
        });
    };
    FirebaseService.prototype.getAllUsers = function () {
        return Firebase.getValue('/users/')
            .then(function (data) {
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    FirebaseService.prototype.logout = function () {
        Firebase.logout();
    };
    FirebaseService.prototype.register = function (user) {
        return Firebase.createUser({
            email: user.email,
            password: user.password
        })
            .then(function (result) {
            console.log("user registered", user);
            user.uid = result.key;
            return Firebase.setValue('/users/' + result.key, user)
                .then(function (data) {
                return data;
            })
                .catch(function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    FirebaseService.prototype.sendTripInfo = function (trip) {
        var _this = this;
        this.getUserKey().then(function (result) {
            _this.user.uid = result;
            _this.tripTemplate.travelTime = trip.rows[0].elements[0].duration.text;
            _this.tripTemplate.distanceTraveled = trip.rows[0].elements[0].distance.text;
            _this.tripTemplate.pointsEarned = JSON.stringify(trip.rows[0].elements[0].duration.value);
            _this.tripTemplate.date = new Date;
            console.log("Sending...", Firebase, '/trips/' + _this.user.uid, _this.tripTemplate);
            return Firebase.push('/trips/' + _this.user.uid, _this.tripTemplate)
                .then(function (data) {
                return data;
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    FirebaseService.prototype.getTripInfo = function () {
        var _this = this;
        this.getUserKey().then(function (result) {
            _this.user.uid = result;
        });
        return Firebase.getValue('/trips/' + this.user.uid)
            .then(function (data) {
            console.log("Got...");
            console.log(JSON.stringify(data));
            return JSON.stringify(data);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    FirebaseService.prototype.resetPassword = function (email) {
        return Firebase.resetPassword({
            email: email
        }).then(function (result) {
            alert("email sent");
            return result;
        }).catch(function (error) {
            console.log(error);
        });
    };
    FirebaseService.prototype.getUser = function () {
        return Firebase.getCurrentUser()
            .then(function (user) {
            return Firebase.getValue('/users/' + user.uid)
                .then(function (data) {
                console.log("User returned", data);
                return data.value;
            })
                .catch(function (error) {
                console.log("Nope");
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log("Trouble in paradise: " + error);
        });
    };
    FirebaseService.prototype.getUserKey = function () {
        var _this = this;
        return Firebase.getCurrentUser()
            .then(function (user) {
            return Firebase.getValue('/users/' + user.uid)
                .then(function (data) {
                console.log("User returned", data);
                if (data.value === undefined) {
                    _this.user.uid = data.key;
                    console.log("UID is...", data.key);
                    return data.key;
                }
                else {
                    _this.user = data.value;
                    console.log("UID is...", data.key);
                    return data.key;
                }
            })
                .catch(function (error) {
                console.log("Nope");
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log("Trouble in paradise: " + error);
        });
    };
    FirebaseService = __decorate([
        core_1.Injectable()
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsdURBQXlEO0FBRXpELCtDQUErQztBQUMvQyxpREFBaUQ7QUFJakQ7SUFEQTtRQUlJLGlCQUFZLEdBQUc7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxFQUFFLElBQUksSUFBSTtTQUNqQixDQUFDO0lBaUpOLENBQUM7SUEvSUcsa0NBQVEsR0FBUixjQUFrQixDQUFDO0lBQ25CLCtCQUFLLEdBQUwsVUFBTSxLQUFLLEVBQUUsUUFBUTtRQUVqQixNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNsQixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQUUsUUFBUTthQUNyQjtTQUNKLENBQUM7YUFDRyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO2FBQzlCLElBQUksQ0FBQyxVQUFDLElB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QUFLLENBQUM7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3BCLENBQUM7WUFDTCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBekpRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtPQUNBLGVBQWUsQ0EwSjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFKRCxJQTBKQztBQTFKWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgRmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4uL3RyaXAvdHJpcFwiO1xuLy8gaW1wb3J0IHsgR29hbCB9IGZyb20gJy4uL21vZGVscy9nb2FsLm1vZGVsJztcbi8vIGltcG9ydCB7IERhaWx5IH0gZnJvbSAnLi4vbW9kZWxzL2RhaWx5Lm1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHVzZXI7XG4gICAgdHJpcFRlbXBsYXRlID0ge1xuICAgICAgICB0cmF2ZWxUaW1lOiAnJyxcbiAgICAgICAgZGlzdGFuY2VUcmF2ZWxlZDogJycsXG4gICAgICAgIGF2ZXJhZ2VTcGVlZDogJycsXG4gICAgICAgIHBvaW50c0Vhcm5lZDogJycsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlXG4gICAgfTtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cbiAgICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpOiBhbnkge1xuXG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICB0eXBlOiBGaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGxvZ2dlZCBpblwiLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IG9mIGxvZ2luXCIsIHJlc3VsdCwgRmlyZWJhc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZ2V0QWxsVXNlcnMgKCl7XG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5nZXRWYWx1ZSgnL3VzZXJzLycpXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICBGaXJlYmFzZS5sb2dvdXQoKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyKSB7XG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciByZWdpc3RlcmVkXCIsIHVzZXIpO1xuICAgICAgICAgICAgICAgIHVzZXIudWlkID0gcmVzdWx0LmtleTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRmlyZWJhc2Uuc2V0VmFsdWUoJy91c2Vycy8nICsgcmVzdWx0LmtleSwgdXNlcilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2VuZFRyaXBJbmZvKHRyaXApIHtcbiAgICAgICAgdGhpcy5nZXRVc2VyS2V5KCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIudWlkID0gcmVzdWx0O1xuICAgICAgICAgICAgdGhpcy50cmlwVGVtcGxhdGUudHJhdmVsVGltZSA9IHRyaXAucm93c1swXS5lbGVtZW50c1swXS5kdXJhdGlvbi50ZXh0O1xuICAgICAgICAgICAgdGhpcy50cmlwVGVtcGxhdGUuZGlzdGFuY2VUcmF2ZWxlZCA9IHRyaXAucm93c1swXS5lbGVtZW50c1swXS5kaXN0YW5jZS50ZXh0O1xuICAgICAgICAgICAgdGhpcy50cmlwVGVtcGxhdGUucG9pbnRzRWFybmVkID0gSlNPTi5zdHJpbmdpZnkodHJpcC5yb3dzWzBdLmVsZW1lbnRzWzBdLmR1cmF0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudHJpcFRlbXBsYXRlLmRhdGUgPSBuZXcgRGF0ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZy4uLlwiLCBGaXJlYmFzZSwgJy90cmlwcy8nICsgdGhpcy51c2VyLnVpZCwgdGhpcy50cmlwVGVtcGxhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIEZpcmViYXNlLnB1c2goJy90cmlwcy8nICsgdGhpcy51c2VyLnVpZCwgdGhpcy50cmlwVGVtcGxhdGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUcmlwSW5mbygpIHtcbiAgICAgICAgdGhpcy5nZXRVc2VyS2V5KCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyLnVpZCA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5nZXRWYWx1ZSgnL3RyaXBzLycgKyB0aGlzLnVzZXIudWlkKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR290Li4uXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgICAgICByZXR1cm4gRmlyZWJhc2UucmVzZXRQYXNzd29yZCgge1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBhbGVydChcImVtYWlsIHNlbnRcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gRmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRmlyZWJhc2UuZ2V0VmFsdWUoJy91c2Vycy8nICsgdXNlci51aWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgcmV0dXJuZWRcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3BlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyb3VibGUgaW4gcGFyYWRpc2U6IFwiICsgZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VyS2V5KCkge1xuICAgICAgICByZXR1cm4gRmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRmlyZWJhc2UuZ2V0VmFsdWUoJy91c2Vycy8nICsgdXNlci51aWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgcmV0dXJuZWRcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIudWlkID0gZGF0YS5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVSUQgaXMuLi5cIiwgZGF0YS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVJRCBpcy4uLlwiLCBkYXRhLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEua2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vcGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==