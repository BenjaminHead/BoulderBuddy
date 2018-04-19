"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Firebase = require("nativescript-plugin-firebase");
// import { Goal } from '../models/goal.model';
// import { Daily } from '../models/daily.model';
var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
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
            return result;
        })
            .catch(function (error) {
            return error;
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
    FirebaseService.prototype.resetPassword = function (email) {
        return Firebase.resetPassword({
            email: email
        }).then(function (result) {
        }).catch(function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsdURBQXlEO0FBQ3pELCtDQUErQztBQUMvQyxpREFBaUQ7QUFJakQ7SUFBQTtJQTJFQSxDQUFDO0lBeEVHLGtDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQiwrQkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLFFBQVE7UUFFakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLFFBQVE7YUFDckI7U0FDSixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7YUFDQyxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztpQkFDakQsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDVixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsS0FBSztRQUNmLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFFO1lBQzNCLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVc7UUFFcEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztRQUVmLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdELGlDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTthQUMzQixJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ3pDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFBO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTFFUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7T0FDQSxlQUFlLENBMkUzQjtJQUFELHNCQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIEZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xuLy8gaW1wb3J0IHsgR29hbCB9IGZyb20gJy4uL21vZGVscy9nb2FsLm1vZGVsJztcbi8vIGltcG9ydCB7IERhaWx5IH0gZnJvbSAnLi4vbW9kZWxzL2RhaWx5Lm1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gICAgbG9naW4oZW1haWwsIHBhc3N3b3JkKTogYW55IHtcblxuICAgICAgICByZXR1cm4gRmlyZWJhc2UubG9naW4oe1xuICAgICAgICAgICAgdHlwZTogRmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBsb2dnZWQgaW5cIiwgZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgRmlyZWJhc2UubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcikge1xuICAgICAgICByZXR1cm4gRmlyZWJhc2UuY3JlYXRlVXNlcih7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIHJlZ2lzdGVyZWRcIiwgdXNlcik7XG4gICAgICAgICAgICAgICAgdXNlci51aWQgPSByZXN1bHQua2V5O1xuICAgICAgICAgICAgICAgIHJldHVybiBGaXJlYmFzZS5zZXRWYWx1ZSgnL3VzZXJzLycgKyByZXN1bHQua2V5LCB1c2VyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5yZXNldFBhc3N3b3JkKCB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcblxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcblxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIEZpcmViYXNlLmdldEN1cnJlbnRVc2VyKClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZpcmViYXNlLmdldFZhbHVlKCcvdXNlcnMvJyArIHVzZXIudWlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcm91YmxlIGluIHBhcmFkaXNlOiBcIiArIGVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19