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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2Q0FBZ0U7QUFDaEUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlFQUE4RDtBQUU5RCxvQ0FBbUM7QUFHbkM7SUFTSSxxQkFBb0IsSUFBZ0IsRUFDaEIsZUFBZ0M7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFXcEQsY0FBUyxHQUFHLHNoQkFBc2hCLENBQUM7UUFFbmlCLGdCQUFXLEdBQUcsMENBQTBDLENBQUM7UUFackQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQUVoQiw4QkFBUSxHQUFSLGNBQVksQ0FBQztJQUViLCtCQUFTLEdBQVQsY0FBYSxDQUFDO0lBTWQsa0NBQVksR0FBWixVQUFhLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTTtRQUNwQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FB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QUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBbklRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FVaUIsaUJBQVU7WUFDQyxrQ0FBZTtPQVYzQyxXQUFXLENBb0l2QjtJQUFELGtCQUFDO0NBQUEsQUFwSUQsSUFvSUM7QUFwSVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuL3RyaXBcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyaXBTZXJ2aWNlIHtcblxuICAgIHBhcmFtcztcbiAgICB0cmlwQ29uZmlnO1xuICAgIGNvbmZpZztcbiAgICB0cmlwRGF0YTtcbiAgICB1c2VyO1xuICAgIGxhdGVzdFRyaXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIHRoaXMuc2V0RmlyZWJhc2VUcmlwVXJsKCk7XG4gICAgfVxuXG4gICAgY3VycmVudFRyaXAoKSB7fVxuXG4gICAgdGhpc1dlZWsoKSB7fVxuXG4gICAgdGhpc01vbnRoKCkge31cblxuICAgIGNvbmZpZ1VybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZGlzdGFuY2VtYXRyaXgvanNvbj91bml0cz1pbXBlcmlhbCZvcmlnaW5zPTQwLjY2NTUxMDEsLTczLjg5MTg4OTY5OTk5OTk4JmRlc3RpbmF0aW9ucz00MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42NTk1NjklMkMtNzMuOTMzNzgzJTdDNDAuNzI5MDI5JTJDLTczLjg1MTUyNCU3QzQwLjY4NjAwNzIlMkMtNzMuNjMzNDI3MSU3QzQwLjU5ODU2NiUyQy03My43NTI3NjI2JTdDNDAuNjU5NTY5JTJDLTczLjkzMzc4MyU3QzQwLjcyOTAyOSUyQy03My44NTE1MjQlN0M0MC42ODYwMDcyJTJDLTczLjYzMzQyNzElN0M0MC41OTg1NjYlMkMtNzMuNzUyNzYyNiZrZXk9QUl6YVN5QkxaTEppVGl4SXBaVFkxQXFNWkZOQ0p1emN0SlQwRDd3JztcblxuICAgIGZpcmViYXNlVXJsID0gJ2h0dHBzOi8vYW1vcmEtMmNjNGMuZmlyZWJhc2Vpby5jb20vdHJpcHMnO1xuXG4gICAgc2V0Q29uZmlnVXJsKG9yaWdpbiwgZGVzdGluYXRpb24sIGNvb3Jkcykge1xuICAgICAgICBsZXQgbmV3T3JpZ2luID0gJyc7XG4gICAgICAgIGxldCBuZXdEZXN0aW5hdGlvbiA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9yaWdpbiBhbmQgZGVzdGluYXRpb24gaW4gdHJpcCBzZXJ2aWNlXCIsIG9yaWdpbiwgZGVzdGluYXRpb24pO1xuICAgICAgICBpZighY29vcmRzKSB7XG4gICAgICAgICAgICBuZXdPcmlnaW4gPSBvcmlnaW4uc3BsaXQoJyAnKS5qb2luKCcrJyk7XG4gICAgICAgICAgICBuZXdEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uLnNwbGl0KCcgJykuam9pbignKycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3T3JpZ2luID0gb3JpZ2luO1xuICAgICAgICAgICAgbmV3RGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ1VybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZGlzdGFuY2VtYXRyaXgvanNvbj91bml0cz1pbXBlcmlhbCZvcmlnaW5zPScgKyBuZXdPcmlnaW4gKyAnJmRlc3RpbmF0aW9ucz0nICsgbmV3RGVzdGluYXRpb24gKyAnJmtleT1BSXphU3lCTFpMSmlUaXhJcFpUWTFBcU1aRk5DSnV6Y3RKVDBEN3cnO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2Rpc3RhbmNlbWF0cml4L2pzb24/dW5pdHM9aW1wZXJpYWwmb3JpZ2lucz0nICsgbmV3T3JpZ2luICsgJyZkZXN0aW5hdGlvbnM9JyArIG5ld0Rlc3RpbmF0aW9uICsgJyZrZXk9QUl6YVN5QkxaTEppVGl4SXBaVFkxQXFNWkZOQ0p1emN0SlQwRDd3JztcbiAgICB9XG5cbiAgICBzZXRGaXJlYmFzZVRyaXBVcmwoKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXJLZXkoKS50aGVuKCh1aWQpPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVybCA9ICdodHRwczovL2Ftb3JhLTJjYzRjLmZpcmViYXNlaW8uY29tL3RyaXBzJyArICcvJyArIHVpZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMIGlzLi4uXCIsIHRoaXMuZmlyZWJhc2VVcmwpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VVcmw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGdldFRyaXBCeVVzZXIoKXtcbiAgICAvLyAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VHJpcEluZm8oKTtcbiAgICAvLyB9XG5cbiAgICBnZXRVc2VySW5mb0J5RW1haWwoKXtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0QWxsVXNlcnMoKS50aGVuKChyZXN1bHQpPT4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCB1c2VycyA9IHJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlcnMgbGlzdGVkXCIsIHVzZXJzKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRGaXJlYmFzZVRyaXAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGZyb20gdGhpcyBVUkxcIiwgdGhpcy5maXJlYmFzZVVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9iamVjdD4odGhpcy5maXJlYmFzZVVybCk7XG4gICAgfVxuXG4gICAgc2hvd0ZpcmViYXNlVHJpcCgpIHtcbiAgICAgICAgdGhpcy5nZXRGaXJlYmFzZVRyaXAoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogT2JqZWN0KSA9PiB0aGlzLnRyaXBDb25maWcgPSB7IC4uLmRhdGEgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmlyZWJhc2VUcmlwUmVzcG9uc2UoKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IHJlc3BvbnNlJywgdGhpcy5maXJlYmFzZVVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9iamVjdD4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1VybCwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xuICAgIH1cblxuICAgIHBvc3RGaXJlYmFzZVRyaXBSZXNwb25zZSgpOiBPYnNlcnZhYmxlPE9iamVjdD57XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3N0IHJlc3BvbnNlJywgdGhpcy5maXJlYmFzZVVybCArIHRoaXMudHJpcERhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8T2JqZWN0PihcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVcmwgKyB0aGlzLnRyaXBEYXRhLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gICAgfVxuXG4gICAgc2hvd0ZpcmViYXNlVHJpcFJlc3BvbnNlKCkge1xuICAgICAgICB0aGlzLmxhdGVzdFRyaXAgPSB0aGlzLmdldEZpcmViYXNlVHJpcFJlc3BvbnNlKClcbiAgICAgICAgLy8gcmVzcCBpcyBvZiB0eXBlIGBIdHRwUmVzcG9uc2U8Q29uZmlnPmBcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIHRoZSBib2R5IGRpcmVjdGx5LCB3aGljaCBpcyB0eXBlZCBhcyBgQ29uZmlnYC5cbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBDb25maWcgPSB7IC4uLiByZXNwLmJvZHkgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBEYXRhID0gcmVzcC5ib2R5O1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucG9zdEZpcmViYXNlVHJpcFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlwIHJldHJpZXZlZCBmcm9tIGZpcmViYXNlXCIsIHRoaXMuZmlyZWJhc2VVcmwsIEpTT04uc3RyaW5naWZ5KHJlc3AuYm9keSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXNwLmJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2hhdCBpcyB0aGlzIHJldHVybmluZz9cIiwgdGhpcy5sYXRlc3RUcmlwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF0ZXN0VHJpcDtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9iamVjdD4odGhpcy5jb25maWdVcmwpO1xuICAgIH1cblxuICAgIHNob3dDb25maWcoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IE9iamVjdCkgPT4gdGhpcy5jb25maWcgPSB7IC4uLmRhdGEgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnUmVzcG9uc2UoKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPYmplY3Q+KFxuICAgICAgICAgICAgdGhpcy5jb25maWdVcmwsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgICB9XG5cbiAgICBzaG93Q29uZmlnUmVzcG9uc2UoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnUmVzcG9uc2UoKVxuICAgICAgICAvLyByZXNwIGlzIG9mIHR5cGUgYEh0dHBSZXNwb25zZTxDb25maWc+YFxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhY2Nlc3MgdGhlIGJvZHkgZGlyZWN0bHksIHdoaWNoIGlzIHR5cGVkIGFzIGBDb25maWdgLlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0geyAuLi4gcmVzcC5ib2R5IH07XG4gICAgICAgICAgICAgICAgdGhpcy50cmlwRGF0YSA9IHJlc3AuYm9keTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2VuZFRyaXBJbmZvKHRoaXMudHJpcERhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBDb25maWcuYXV0aEhlYWRlcik7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59XG5cbiJdfQ==