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
    FirebaseService.prototype.sendTripInfo = function (user, trip) {
        return Firebase.setValue('/trips/' + user.id, trip)
            .then(function (data) {
            return data.value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsdURBQXlEO0FBQ3pELCtDQUErQztBQUMvQyxpREFBaUQ7QUFJakQ7SUFBQTtJQXFGQSxDQUFDO0lBbEZHLGtDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQiwrQkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLFFBQVE7UUFFakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLFFBQVE7YUFDckI7U0FDSixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7YUFDQyxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztpQkFDakQsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDVixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsSUFBSSxFQUFFLElBQUk7UUFDbkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO2FBQzlDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsS0FBSztRQUNmLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFFO1lBQzNCLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVc7WUFDaEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO2FBQzNCLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDekMsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBcEZRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtPQUNBLGVBQWUsQ0FxRjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXJGRCxJQXFGQztBQXJGWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgRmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG4vLyBpbXBvcnQgeyBHb2FsIH0gZnJvbSAnLi4vbW9kZWxzL2dvYWwubW9kZWwnO1xuLy8gaW1wb3J0IHsgRGFpbHkgfSBmcm9tICcuLi9tb2RlbHMvZGFpbHkubW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpOiBhbnkge1xuXG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICB0eXBlOiBGaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGxvZ2dlZCBpblwiLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICBGaXJlYmFzZS5sb2dvdXQoKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyKSB7XG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5jcmVhdGVVc2VyKHtcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgcmVnaXN0ZXJlZFwiLCB1c2VyKTtcbiAgICAgICAgICAgICAgICB1c2VyLnVpZCA9IHJlc3VsdC5rZXk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZpcmViYXNlLnNldFZhbHVlKCcvdXNlcnMvJyArIHJlc3VsdC5rZXksIHVzZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHNlbmRUcmlwSW5mbyh1c2VyLCB0cmlwKSB7XG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5zZXRWYWx1ZSgnL3RyaXBzLycgKyB1c2VyLmlkLCB0cmlwKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5yZXNldFBhc3N3b3JkKCB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwiZW1haWwgc2VudFwiKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiBGaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpXG4gICAgICAgICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBGaXJlYmFzZS5nZXRWYWx1ZSgnL3VzZXJzLycgKyB1c2VyLnVpZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==