"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Firebase = require("nativescript-plugin-firebase");
// import { Goal } from '../models/goal.model';
// import { Daily } from '../models/daily.model';
var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        this.tripTemplate = {
            destination: '',
            origin: '',
            travelTime: '',
            distanceTraveled: '',
            averageSpeed: '',
            pointsEarned: '',
            date: ''
        };
    }
    // constructor(private tripService: TripService){}
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
            console.log("Here's the trip", trip);
            if (trip.destination_addresses) {
                _this.tripTemplate.destination = trip.destination_addresses;
            }
            if (trip.origin_addresses) {
                _this.tripTemplate.origin = trip.origin_addresses;
            }
            if (trip.rows[0].elements[0].status != "NOT_FOUND") {
                _this.tripTemplate.travelTime = trip.rows[0].elements[0].duration.text;
            }
            if (trip.rows[0].elements[0].status != "NOT_FOUND") {
                _this.tripTemplate.distanceTraveled = trip.rows[0].elements[0].distance.text;
            }
            if (trip.rows[0].elements[0].status != "NOT_FOUND") {
                _this.tripTemplate.pointsEarned = JSON.stringify(trip.rows[0].elements[0].duration.value);
            }
            var newDate = new Date;
            _this.tripTemplate.date = newDate.toString();
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
        return this.getUserKey().then(function (result) {
            _this.user.uid = result;
            return Firebase.getValue('/trips/' + _this.user.uid)
                .then(function (data) {
                console.log("This is the data returned", data.value);
                return data.value;
            })
                .catch(function (error) {
                console.log(error);
            });
        });
        // return Firebase.getValue('/trips/' + this.user.uid)
        //     .then((data) => {
        //     console.log("Got...");
        //         console.log(JSON.stringify(data));
        //         return JSON.stringify(data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
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
                if (data.value === undefined) {
                    _this.user.uid = data.key;
                    return data.key;
                }
                else {
                    _this.user = data.value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsdURBQXlEO0FBR3pELCtDQUErQztBQUMvQyxpREFBaUQ7QUFJakQ7SUFEQTtRQUlJLGlCQUFZLEdBQUc7WUFDWCxXQUFXLEVBQUUsRUFBRTtZQUNmLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7WUFDZCxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQztJQXNLTixDQUFDO0lBcEtHLGtEQUFrRDtJQUVsRCxrQ0FBUSxHQUFSLGNBQWtCLENBQUM7SUFDbkIsK0JBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxRQUFRO1FBRWpCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2xCLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNiLEtBQUssRUFBRSxLQUFLO2dCQUNaLFFBQVEsRUFBRSxRQUFRO2FBQ3JCO1NBQ0osQ0FBQzthQUNHLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsUUFBUSxD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QUU7T0FDQSxlQUFlLENBaUwzQjtJQUFELHNCQUFDO0NBQUEsQUFqTEQsSUFpTEM7QUFqTFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIEZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuLi90cmlwL3RyaXBcIjtcbmltcG9ydCB7IFRyaXBTZXJ2aWNlIH0gZnJvbSBcIi4uL3RyaXAvdHJpcC5zZXJ2aWNlXCI7XG4vLyBpbXBvcnQgeyBHb2FsIH0gZnJvbSAnLi4vbW9kZWxzL2dvYWwubW9kZWwnO1xuLy8gaW1wb3J0IHsgRGFpbHkgfSBmcm9tICcuLi9tb2RlbHMvZGFpbHkubW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdXNlcjtcbiAgICB0cmlwVGVtcGxhdGUgPSB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgdHJhdmVsVGltZTogJycsXG4gICAgICAgIGRpc3RhbmNlVHJhdmVsZWQ6ICcnLFxuICAgICAgICBhdmVyYWdlU3BlZWQ6ICcnLFxuICAgICAgICBwb2ludHNFYXJuZWQ6ICcnLFxuICAgICAgICBkYXRlOiAnJ1xuICAgIH07XG5cbiAgICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyaXBTZXJ2aWNlOiBUcmlwU2VydmljZSl7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuICAgIGxvZ2luKGVtYWlsLCBwYXNzd29yZCk6IGFueSB7XG5cbiAgICAgICAgcmV0dXJuIEZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgICAgIHR5cGU6IEZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgbG9nZ2VkIGluXCIsIGVtYWlsLCBwYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgb2YgbG9naW5cIiwgcmVzdWx0LCBGaXJlYmFzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBnZXRBbGxVc2VycyAoKXtcbiAgICAgICAgcmV0dXJuIEZpcmViYXNlLmdldFZhbHVlKCcvdXNlcnMvJylcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIEZpcmViYXNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIEZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIHJlZ2lzdGVyZWRcIiwgdXNlcik7XG4gICAgICAgICAgICAgICAgdXNlci51aWQgPSByZXN1bHQua2V5O1xuICAgICAgICAgICAgICAgIHJldHVybiBGaXJlYmFzZS5zZXRWYWx1ZSgnL3VzZXJzLycgKyByZXN1bHQua2V5LCB1c2VyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZW5kVHJpcEluZm8odHJpcCkge1xuICAgICAgICB0aGlzLmdldFVzZXJLZXkoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlci51aWQgPSByZXN1bHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhlcmUncyB0aGUgdHJpcFwiLCB0cmlwKTtcbiAgICAgICAgICAgIGlmICh0cmlwLmRlc3RpbmF0aW9uX2FkZHJlc3Nlcykge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcFRlbXBsYXRlLmRlc3RpbmF0aW9uID0gdHJpcC5kZXN0aW5hdGlvbl9hZGRyZXNzZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHJpcC5vcmlnaW5fYWRkcmVzc2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlwVGVtcGxhdGUub3JpZ2luID0gdHJpcC5vcmlnaW5fYWRkcmVzc2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRyaXAucm93c1swXS5lbGVtZW50c1swXS5zdGF0dXMgIT0gXCJOT1RfRk9VTkRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcFRlbXBsYXRlLnRyYXZlbFRpbWUgPSB0cmlwLnJvd3NbMF0uZWxlbWVudHNbMF0uZHVyYXRpb24udGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0cmlwLnJvd3NbMF0uZWxlbWVudHNbMF0uc3RhdHVzICE9IFwiTk9UX0ZPVU5EXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBUZW1wbGF0ZS5kaXN0YW5jZVRyYXZlbGVkID0gdHJpcC5yb3dzWzBdLmVsZW1lbnRzWzBdLmRpc3RhbmNlLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHJpcC5yb3dzWzBdLmVsZW1lbnRzWzBdLnN0YXR1cyAhPSBcIk5PVF9GT1VORFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlwVGVtcGxhdGUucG9pbnRzRWFybmVkID0gSlNPTi5zdHJpbmdpZnkodHJpcC5yb3dzWzBdLmVsZW1lbnRzWzBdLmR1cmF0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGU7XG4gICAgICAgICAgICB0aGlzLnRyaXBUZW1wbGF0ZS5kYXRlID0gbmV3RGF0ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIEZpcmViYXNlLnB1c2goJy90cmlwcy8nICsgdGhpcy51c2VyLnVpZCwgdGhpcy50cmlwVGVtcGxhdGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUcmlwSW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXNlcktleSgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlci51aWQgPSByZXN1bHQ7XG4gICAgICAgICAgICByZXR1cm4gRmlyZWJhc2UuZ2V0VmFsdWUoJy90cmlwcy8nICsgdGhpcy51c2VyLnVpZClcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgZGF0YSByZXR1cm5lZFwiLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIHJldHVybiBGaXJlYmFzZS5nZXRWYWx1ZSgnL3RyaXBzLycgKyB0aGlzLnVzZXIudWlkKVxuICAgICAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiR290Li4uXCIpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgICAgICByZXR1cm4gRmlyZWJhc2UucmVzZXRQYXNzd29yZCgge1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBhbGVydChcImVtYWlsIHNlbnRcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gRmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRmlyZWJhc2UuZ2V0VmFsdWUoJy91c2Vycy8nICsgdXNlci51aWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3BlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyb3VibGUgaW4gcGFyYWRpc2U6IFwiICsgZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VyS2V5KCkge1xuICAgICAgICByZXR1cm4gRmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRmlyZWJhc2UuZ2V0VmFsdWUoJy91c2Vycy8nICsgdXNlci51aWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIudWlkID0gZGF0YS5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEua2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3BlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyb3VibGUgaW4gcGFyYWRpc2U6IFwiICsgZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=