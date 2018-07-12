"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var firebase_service_1 = require("../services/firebase.service");
var config_1 = require("../config");
var TripService = /** @class */ (function () {
    function TripService(http, firebaseService) {
        this.http = http;
        this.firebaseService = firebaseService;
        this.configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';
        this.firebaseUrl = 'https://amora-2cc4c.firebaseio.com/trips';
        this.user = this.firebaseService.getUser();
        this.setFirebaseTripUrl();
    }
    TripService.prototype.currentTrip = function () { };
    TripService.prototype.thisWeek = function () { };
    TripService.prototype.thisMonth = function () { };
    TripService.prototype.setConfigUrl = function (origin, destination, coords) {
        var newOrigin = '';
        var newDestination = '';
        console.log("Origin and destination in trip service", origin, destination);
        if (!coords) {
            newOrigin = origin.split(' ').join('+');
            newDestination = destination.split(' ').join('+');
        }
        else {
            newOrigin = origin;
            newDestination = destination;
        }
        this.configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + newOrigin + '&destinations=' + newDestination + '&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';
        return this.configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + newOrigin + '&destinations=' + newDestination + '&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';
    };
    TripService.prototype.setFirebaseTripUrl = function () {
        var _this = this;
        this.firebaseService.getUserKey().then(function (uid) {
            _this.firebaseUrl = 'https://amora-2cc4c.firebaseio.com/trips' + '/' + uid;
            console.log("URL is...", _this.firebaseUrl);
            return _this.firebaseUrl;
        });
    };
    // getTripByUser(){
    //     this.firebaseService.getTripInfo();
    // }
    TripService.prototype.getUserInfoByEmail = function () {
        this.firebaseService.getAllUsers().then(function (result) { return function () {
            var users = result;
            console.log("Users listed", users);
        }; });
    };
    TripService.prototype.getFirebaseTrip = function () {
        console.log("get from this URL", this.firebaseUrl);
        return this.http.get(this.firebaseUrl);
    };
    TripService.prototype.showFirebaseTrip = function () {
        var _this = this;
        this.getFirebaseTrip()
            .subscribe(function (data) { return _this.tripConfig = __assign({}, data); });
    };
    TripService.prototype.getFirebaseTripResponse = function () {
        console.log('get response', this.firebaseUrl);
        return this.http.get(this.configUrl, { observe: 'response' });
    };
    TripService.prototype.postFirebaseTripResponse = function () {
        console.log('post response', this.firebaseUrl + this.tripData);
        return this.http.post(this.firebaseUrl + this.tripData, { observe: 'response' });
    };
    TripService.prototype.showFirebaseTripResponse = function () {
        var _this = this;
        this.getFirebaseTripResponse()
            .subscribe(function (resp) {
            // access the body directly, which is typed as `Config`.
            _this.tripConfig = __assign({}, resp.body);
            _this.tripData = resp.body;
            // this.postFirebaseTripResponse();
            console.log("trip retrieved from firebase", _this.firebaseUrl, JSON.stringify(resp.body));
            return JSON.stringify(resp.body);
        });
    };
    TripService.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    TripService.prototype.showConfig = function () {
        var _this = this;
        this.getConfig()
            .subscribe(function (data) { return _this.config = __assign({}, data); });
    };
    TripService.prototype.getConfigResponse = function () {
        return this.http.get(this.configUrl, { observe: 'response' });
    };
    TripService.prototype.showConfigResponse = function () {
        var _this = this;
        this.getConfigResponse()
            .subscribe(function (resp) {
            // access the body directly, which is typed as `Config`.
            _this.config = __assign({}, resp.body);
            _this.tripData = resp.body;
            return _this.firebaseService.sendTripInfo(_this.tripData);
        });
    };
    TripService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", config_1.Config.authHeader);
        return headers;
    };
    TripService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    TripService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_2.HttpClient,
            firebase_service_1.FirebaseService])
    ], TripService);
    return TripService;
}());
exports.TripService = TripService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2Q0FBZ0U7QUFDaEUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlFQUE4RDtBQUU5RCxvQ0FBbUM7QUFHbkM7SUFRSSxxQkFBb0IsSUFBZ0IsRUFDaEIsZUFBZ0M7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFXcEQsY0FBUyxHQUFHLHNoQkFBc2hCLENBQUM7UUFFbmlCLGdCQUFXLEdBQUcsMENBQTBDLENBQUM7UUFackQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQUVoQiw4QkFBUSxHQUFSLGNBQVksQ0FBQztJQUViLCtCQUFTLEdBQVQsY0FBYSxDQUFDO0lBTWQsa0NBQVksR0FBWixVQUFhLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTTtRQUNwQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FB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QUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWhJUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBU2lCLGlCQUFVO1lBQ0Msa0NBQWU7T0FUM0MsV0FBVyxDQWlJdkI7SUFBRCxrQkFBQztDQUFBLEFBaklELElBaUlDO0FBaklZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi90cmlwXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmlwU2VydmljZSB7XG5cbiAgICBwYXJhbXM7XG4gICAgdHJpcENvbmZpZztcbiAgICBjb25maWc7XG4gICAgdHJpcERhdGE7XG4gICAgdXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5zZXRGaXJlYmFzZVRyaXBVcmwoKTtcbiAgICB9XG5cbiAgICBjdXJyZW50VHJpcCgpIHt9XG5cbiAgICB0aGlzV2VlaygpIHt9XG5cbiAgICB0aGlzTW9udGgoKSB7fVxuXG4gICAgY29uZmlnVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9kaXN0YW5jZW1hdHJpeC9qc29uP3VuaXRzPWltcGVyaWFsJm9yaWdpbnM9NDAuNjY1NTEwMSwtNzMuODkxODg5Njk5OTk5OTgmZGVzdGluYXRpb25zPTQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY1OTU2OSUyQy03My45MzM3ODMlN0M0MC43MjkwMjklMkMtNzMuODUxNTI0JTdDNDAuNjg2MDA3MiUyQy03My42MzM0MjcxJTdDNDAuNTk4NTY2JTJDLTczLjc1Mjc2MjYlN0M0MC42NTk1NjklMkMtNzMuOTMzNzgzJTdDNDAuNzI5MDI5JTJDLTczLjg1MTUyNCU3QzQwLjY4NjAwNzIlMkMtNzMuNjMzNDI3MSU3QzQwLjU5ODU2NiUyQy03My43NTI3NjI2JmtleT1BSXphU3lCTFpMSmlUaXhJcFpUWTFBcU1aRk5DSnV6Y3RKVDBEN3cnO1xuXG4gICAgZmlyZWJhc2VVcmwgPSAnaHR0cHM6Ly9hbW9yYS0yY2M0Yy5maXJlYmFzZWlvLmNvbS90cmlwcyc7XG5cbiAgICBzZXRDb25maWdVcmwob3JpZ2luLCBkZXN0aW5hdGlvbiwgY29vcmRzKSB7XG4gICAgICAgIGxldCBuZXdPcmlnaW4gPSAnJztcbiAgICAgICAgbGV0IG5ld0Rlc3RpbmF0aW9uID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3JpZ2luIGFuZCBkZXN0aW5hdGlvbiBpbiB0cmlwIHNlcnZpY2VcIiwgb3JpZ2luLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIGlmKCFjb29yZHMpIHtcbiAgICAgICAgICAgIG5ld09yaWdpbiA9IG9yaWdpbi5zcGxpdCgnICcpLmpvaW4oJysnKTtcbiAgICAgICAgICAgIG5ld0Rlc3RpbmF0aW9uID0gZGVzdGluYXRpb24uc3BsaXQoJyAnKS5qb2luKCcrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdPcmlnaW4gPSBvcmlnaW47XG4gICAgICAgICAgICBuZXdEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9kaXN0YW5jZW1hdHJpeC9qc29uP3VuaXRzPWltcGVyaWFsJm9yaWdpbnM9JyArIG5ld09yaWdpbiArICcmZGVzdGluYXRpb25zPScgKyBuZXdEZXN0aW5hdGlvbiArICcma2V5PUFJemFTeUJMWkxKaVRpeElwWlRZMUFxTVpGTkNKdXpjdEpUMEQ3dyc7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ1VybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZGlzdGFuY2VtYXRyaXgvanNvbj91bml0cz1pbXBlcmlhbCZvcmlnaW5zPScgKyBuZXdPcmlnaW4gKyAnJmRlc3RpbmF0aW9ucz0nICsgbmV3RGVzdGluYXRpb24gKyAnJmtleT1BSXphU3lCTFpMSmlUaXhJcFpUWTFBcU1aRk5DSnV6Y3RKVDBEN3cnO1xuICAgIH1cblxuICAgIHNldEZpcmViYXNlVHJpcFVybCgpIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcktleSgpLnRoZW4oKHVpZCk9PiB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVXJsID0gJ2h0dHBzOi8vYW1vcmEtMmNjNGMuZmlyZWJhc2Vpby5jb20vdHJpcHMnICsgJy8nICsgdWlkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkwgaXMuLi5cIiwgdGhpcy5maXJlYmFzZVVybCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlYmFzZVVybDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0VHJpcEJ5VXNlcigpe1xuICAgIC8vICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRUcmlwSW5mbygpO1xuICAgIC8vIH1cblxuICAgIGdldFVzZXJJbmZvQnlFbWFpbCgpe1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRBbGxVc2VycygpLnRoZW4oKHJlc3VsdCk9PiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzdWx0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VycyBsaXN0ZWRcIiwgdXNlcnMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEZpcmViYXNlVHJpcCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgZnJvbSB0aGlzIFVSTFwiLCB0aGlzLmZpcmViYXNlVXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0Pih0aGlzLmZpcmViYXNlVXJsKTtcbiAgICB9XG5cbiAgICBzaG93RmlyZWJhc2VUcmlwKCkge1xuICAgICAgICB0aGlzLmdldEZpcmViYXNlVHJpcCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBPYmplY3QpID0+IHRoaXMudHJpcENvbmZpZyA9IHsgLi4uZGF0YSB9KTtcbiAgICB9XG5cbiAgICBnZXRGaXJlYmFzZVRyaXBSZXNwb25zZSgpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgcmVzcG9uc2UnLCB0aGlzLmZpcmViYXNlVXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0PihcbiAgICAgICAgICAgIHRoaXMuY29uZmlnVXJsLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gICAgfVxuXG4gICAgcG9zdEZpcmViYXNlVHJpcFJlc3BvbnNlKCk6IE9ic2VydmFibGU8T2JqZWN0PntcbiAgICAgICAgY29uc29sZS5sb2coJ3Bvc3QgcmVzcG9uc2UnLCB0aGlzLmZpcmViYXNlVXJsICsgdGhpcy50cmlwRGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPYmplY3Q+KFxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVybCArIHRoaXMudHJpcERhdGEsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgICB9XG5cbiAgICBzaG93RmlyZWJhc2VUcmlwUmVzcG9uc2UoKSB7XG4gICAgICAgIHRoaXMuZ2V0RmlyZWJhc2VUcmlwUmVzcG9uc2UoKVxuICAgICAgICAvLyByZXNwIGlzIG9mIHR5cGUgYEh0dHBSZXNwb25zZTxDb25maWc+YFxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhY2Nlc3MgdGhlIGJvZHkgZGlyZWN0bHksIHdoaWNoIGlzIHR5cGVkIGFzIGBDb25maWdgLlxuICAgICAgICAgICAgICAgIHRoaXMudHJpcENvbmZpZyA9IHsgLi4uIHJlc3AuYm9keSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcERhdGEgPSByZXNwLmJvZHk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb3N0RmlyZWJhc2VUcmlwUmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaXAgcmV0cmlldmVkIGZyb20gZmlyZWJhc2VcIiwgdGhpcy5maXJlYmFzZVVybCwgSlNPTi5zdHJpbmdpZnkocmVzcC5ib2R5KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3AuYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9iamVjdD4odGhpcy5jb25maWdVcmwpO1xuICAgIH1cblxuICAgIHNob3dDb25maWcoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IE9iamVjdCkgPT4gdGhpcy5jb25maWcgPSB7IC4uLmRhdGEgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnUmVzcG9uc2UoKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPYmplY3Q+KFxuICAgICAgICAgICAgdGhpcy5jb25maWdVcmwsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgICB9XG5cbiAgICBzaG93Q29uZmlnUmVzcG9uc2UoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnUmVzcG9uc2UoKVxuICAgICAgICAvLyByZXNwIGlzIG9mIHR5cGUgYEh0dHBSZXNwb25zZTxDb25maWc+YFxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhY2Nlc3MgdGhlIGJvZHkgZGlyZWN0bHksIHdoaWNoIGlzIHR5cGVkIGFzIGBDb25maWdgLlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0geyAuLi4gcmVzcC5ib2R5IH07XG4gICAgICAgICAgICAgICAgdGhpcy50cmlwRGF0YSA9IHJlc3AuYm9keTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2VuZFRyaXBJbmZvKHRoaXMudHJpcERhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBDb25maWcuYXV0aEhlYWRlcik7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59XG5cbiJdfQ==