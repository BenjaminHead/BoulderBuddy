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
        this.firebaseUrl = 'https://boulderbuddy-62d91.firebaseio.com/trips';
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
            console.log("UID is...", uid);
            _this.firebaseUrl = 'https://boulderbuddy-62d91.firebaseio.com/trips' + '/' + uid;
            console.log("URL is...", _this.firebaseUrl);
            return _this.firebaseUrl;
        });
    };
    TripService.prototype.getPointsFromTripDB = function () {
        var _this = this;
        var points = 0;
        return this.firebaseService.getPointsFromTrips().then(function (result) {
            console.log("Length is...", result.length);
            var sum = 0;
            for (var i = 0; i < result.length; i++) {
                sum += Number(result[i]);
                console.log("sum is...", sum);
            }
            console.log("sum after loop is...", sum);
            _this.firebaseService.sendPointsFromTrips(sum);
            return sum;
        });
    };
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
        this.latestTrip = this.getFirebaseTripResponse()
            .subscribe(function (resp) {
            // access the body directly, which is typed as `Config`.
            _this.tripConfig = __assign({}, resp.body);
            _this.tripData = resp.body;
            // this.postFirebaseTripResponse();
            console.log("trip retrieved from firebase", _this.firebaseUrl, JSON.stringify(resp.body));
            return JSON.stringify(resp.body);
        });
        console.log("what is this returning?", this.latestTrip);
        return this.latestTrip;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2Q0FBZ0U7QUFDaEUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlFQUE4RDtBQUU5RCxvQ0FBbUM7QUFHbkM7SUFTSSxxQkFBb0IsSUFBZ0IsRUFDaEIsZUFBZ0M7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFXcEQsY0FBUyxHQUFHLHNoQkFBc2hCLENBQUM7UUFFbmlCLGdCQUFXLEdBQUcsaURBQWlELENBQUM7UUFaNUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQUVoQiw4QkFBUSxHQUFSLGNBQVksQ0FBQztJQUViLCtCQUFTLEdBQVQsY0FBYSxDQUFDO0lBTWQsa0NBQVksR0FBWixVQUFhLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTTtRQUNwQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FB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QUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUEvSVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQVVpQixpQkFBVTtZQUNDLGtDQUFlO09BVjNDLFdBQVcsQ0FnSnZCO0lBQUQsa0JBQUM7Q0FBQSxBQWhKRCxJQWdKQztBQWhKWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4vdHJpcFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJpcFNlcnZpY2Uge1xuXG4gICAgcGFyYW1zO1xuICAgIHRyaXBDb25maWc7XG4gICAgY29uZmlnO1xuICAgIHRyaXBEYXRhO1xuICAgIHVzZXI7XG4gICAgbGF0ZXN0VHJpcDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5zZXRGaXJlYmFzZVRyaXBVcmwoKTtcbiAgICB9XG5cbiAgICBjdXJyZW50VHJpcCgpIHt9XG5cbiAgICB0aGlzV2VlaygpIHt9XG5cbiAgICB0aGlzTW9udGgoKSB7fVxuXG4gICAgY29uZmlnVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9kaXN0YW5jZW1hdHJpeC9qc29uP3VuaXRzPWltcGVyaWFsJm9yaWdpbnM9NDAuNjY1NTEwMSwtNzMuODkxODg5Njk5OTk5OTgmZGVzdGluYXRpb25zPTQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY5MDU2MTUlMkMtNzMuOTk3NjU5MiU3QzQwLjY1OTU2OSUyQy03My45MzM3ODMlN0M0MC43MjkwMjklMkMtNzMuODUxNTI0JTdDNDAuNjg2MDA3MiUyQy03My42MzM0MjcxJTdDNDAuNTk4NTY2JTJDLTczLjc1Mjc2MjYlN0M0MC42NTk1NjklMkMtNzMuOTMzNzgzJTdDNDAuNzI5MDI5JTJDLTczLjg1MTUyNCU3QzQwLjY4NjAwNzIlMkMtNzMuNjMzNDI3MSU3QzQwLjU5ODU2NiUyQy03My43NTI3NjI2JmtleT1BSXphU3lCTFpMSmlUaXhJcFpUWTFBcU1aRk5DSnV6Y3RKVDBEN3cnO1xuXG4gICAgZmlyZWJhc2VVcmwgPSAnaHR0cHM6Ly9ib3VsZGVyYnVkZHktNjJkOTEuZmlyZWJhc2Vpby5jb20vdHJpcHMnO1xuXG4gICAgc2V0Q29uZmlnVXJsKG9yaWdpbiwgZGVzdGluYXRpb24sIGNvb3Jkcykge1xuICAgICAgICBsZXQgbmV3T3JpZ2luID0gJyc7XG4gICAgICAgIGxldCBuZXdEZXN0aW5hdGlvbiA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9yaWdpbiBhbmQgZGVzdGluYXRpb24gaW4gdHJpcCBzZXJ2aWNlXCIsIG9yaWdpbiwgZGVzdGluYXRpb24pO1xuICAgICAgICBpZighY29vcmRzKSB7XG4gICAgICAgICAgICBuZXdPcmlnaW4gPSBvcmlnaW4uc3BsaXQoJyAnKS5qb2luKCcrJyk7XG4gICAgICAgICAgICBuZXdEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uLnNwbGl0KCcgJykuam9pbignKycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3T3JpZ2luID0gb3JpZ2luO1xuICAgICAgICAgICAgbmV3RGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ1VybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZGlzdGFuY2VtYXRyaXgvanNvbj91bml0cz1pbXBlcmlhbCZvcmlnaW5zPScgKyBuZXdPcmlnaW4gKyAnJmRlc3RpbmF0aW9ucz0nICsgbmV3RGVzdGluYXRpb24gKyAnJmtleT1BSXphU3lCTFpMSmlUaXhJcFpUWTFBcU1aRk5DSnV6Y3RKVDBEN3cnO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2Rpc3RhbmNlbWF0cml4L2pzb24/dW5pdHM9aW1wZXJpYWwmb3JpZ2lucz0nICsgbmV3T3JpZ2luICsgJyZkZXN0aW5hdGlvbnM9JyArIG5ld0Rlc3RpbmF0aW9uICsgJyZrZXk9QUl6YVN5QkxaTEppVGl4SXBaVFkxQXFNWkZOQ0p1emN0SlQwRDd3JztcbiAgICB9XG5cbiAgICBzZXRGaXJlYmFzZVRyaXBVcmwoKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXJLZXkoKS50aGVuKCh1aWQpPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVSUQgaXMuLi5cIiwgdWlkKTtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVcmwgPSAnaHR0cHM6Ly9ib3VsZGVyYnVkZHktNjJkOTEuZmlyZWJhc2Vpby5jb20vdHJpcHMnICsgJy8nICsgdWlkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkwgaXMuLi5cIiwgdGhpcy5maXJlYmFzZVVybCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlYmFzZVVybDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UG9pbnRzRnJvbVRyaXBEQiAoKXtcbiAgICAgICAgbGV0IHBvaW50cyA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRQb2ludHNGcm9tVHJpcHMoKS50aGVuKChyZXN1bHQ6IGFueSk9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlbmd0aCBpcy4uLlwiLCByZXN1bHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBOdW1iZXIocmVzdWx0W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdW0gaXMuLi5cIiwgc3VtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1bSBhZnRlciBsb29wIGlzLi4uXCIsIHN1bSk7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5zZW5kUG9pbnRzRnJvbVRyaXBzKHN1bSk7XG4gICAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFVzZXJJbmZvQnlFbWFpbCgpe1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRBbGxVc2VycygpLnRoZW4oKHJlc3VsdCk9PiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzdWx0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VycyBsaXN0ZWRcIiwgdXNlcnMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEZpcmViYXNlVHJpcCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgZnJvbSB0aGlzIFVSTFwiLCB0aGlzLmZpcmViYXNlVXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0Pih0aGlzLmZpcmViYXNlVXJsKTtcbiAgICB9XG5cbiAgICBzaG93RmlyZWJhc2VUcmlwKCkge1xuICAgICAgICB0aGlzLmdldEZpcmViYXNlVHJpcCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBPYmplY3QpID0+IHRoaXMudHJpcENvbmZpZyA9IHsgLi4uZGF0YSB9KTtcbiAgICB9XG5cbiAgICBnZXRGaXJlYmFzZVRyaXBSZXNwb25zZSgpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgcmVzcG9uc2UnLCB0aGlzLmZpcmViYXNlVXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0PihcbiAgICAgICAgICAgIHRoaXMuY29uZmlnVXJsLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gICAgfVxuXG4gICAgcG9zdEZpcmViYXNlVHJpcFJlc3BvbnNlKCk6IE9ic2VydmFibGU8T2JqZWN0PntcbiAgICAgICAgY29uc29sZS5sb2coJ3Bvc3QgcmVzcG9uc2UnLCB0aGlzLmZpcmViYXNlVXJsICsgdGhpcy50cmlwRGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPYmplY3Q+KFxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVybCArIHRoaXMudHJpcERhdGEsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgICB9XG5cbiAgICBzaG93RmlyZWJhc2VUcmlwUmVzcG9uc2UoKSB7XG4gICAgICAgIHRoaXMubGF0ZXN0VHJpcCA9IHRoaXMuZ2V0RmlyZWJhc2VUcmlwUmVzcG9uc2UoKVxuICAgICAgICAvLyByZXNwIGlzIG9mIHR5cGUgYEh0dHBSZXNwb25zZTxDb25maWc+YFxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhY2Nlc3MgdGhlIGJvZHkgZGlyZWN0bHksIHdoaWNoIGlzIHR5cGVkIGFzIGBDb25maWdgLlxuICAgICAgICAgICAgICAgIHRoaXMudHJpcENvbmZpZyA9IHsgLi4uIHJlc3AuYm9keSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcERhdGEgPSByZXNwLmJvZHk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb3N0RmlyZWJhc2VUcmlwUmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaXAgcmV0cmlldmVkIGZyb20gZmlyZWJhc2VcIiwgdGhpcy5maXJlYmFzZVVybCwgSlNPTi5zdHJpbmdpZnkocmVzcC5ib2R5KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3AuYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aGF0IGlzIHRoaXMgcmV0dXJuaW5nP1wiLCB0aGlzLmxhdGVzdFRyaXApO1xuICAgICAgICByZXR1cm4gdGhpcy5sYXRlc3RUcmlwO1xuICAgIH1cblxuICAgIGdldENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0Pih0aGlzLmNvbmZpZ1VybCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbmZpZygpIHtcbiAgICAgICAgdGhpcy5nZXRDb25maWcoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogT2JqZWN0KSA9PiB0aGlzLmNvbmZpZyA9IHsgLi4uZGF0YSB9KTtcbiAgICB9XG5cbiAgICBnZXRDb25maWdSZXNwb25zZSgpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9iamVjdD4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1VybCwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xuICAgIH1cblxuICAgIHNob3dDb25maWdSZXNwb25zZSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb25maWdSZXNwb25zZSgpXG4gICAgICAgIC8vIHJlc3AgaXMgb2YgdHlwZSBgSHR0cFJlc3BvbnNlPENvbmZpZz5gXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGFjY2VzcyB0aGUgYm9keSBkaXJlY3RseSwgd2hpY2ggaXMgdHlwZWQgYXMgYENvbmZpZ2AuXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSB7IC4uLiByZXNwLmJvZHkgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBEYXRhID0gcmVzcC5ib2R5O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlU2VydmljZS5zZW5kVHJpcEluZm8odGhpcy50cmlwRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIENvbmZpZy5hdXRoSGVhZGVyKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn1cblxuIl19