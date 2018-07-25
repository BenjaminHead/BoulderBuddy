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
            console.log("UID is...", uid);
            _this.firebaseUrl = 'https://amora-2cc4c.firebaseio.com/trips' + '/' + uid;
            console.log("URL is...", _this.firebaseUrl);
            return _this.firebaseUrl;
        });
    };
    TripService.prototype.getPointsFromTripDB = function () {
        var _this = this;
        var points = 0;
        this.firebaseService.getPointsFromTrips().then(function (result) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2Q0FBZ0U7QUFDaEUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlFQUE4RDtBQUU5RCxvQ0FBbUM7QUFHbkM7SUFTSSxxQkFBb0IsSUFBZ0IsRUFDaEIsZUFBZ0M7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFXcEQsY0FBUyxHQUFHLHNoQkFBc2hCLENBQUM7UUFFbmlCLGdCQUFXLEdBQUcsMENBQTBDLENBQUM7UUFackQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQUVoQiw4QkFBUSxHQUFSLGNBQVksQ0FBQztJQUViLCtCQUFTLEdBQVQsY0FBYSxDQUFDO0lBTWQsa0NBQVksR0FBWixVQUFhLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTTtRQUNwQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FB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QUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQS9JUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBVWlCLGlCQUFVO1lBQ0Msa0NBQWU7T0FWM0MsV0FBVyxDQWdKdkI7SUFBRCxrQkFBQztDQUFBLEFBaEpELElBZ0pDO0FBaEpZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi90cmlwXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmlwU2VydmljZSB7XG5cbiAgICBwYXJhbXM7XG4gICAgdHJpcENvbmZpZztcbiAgICBjb25maWc7XG4gICAgdHJpcERhdGE7XG4gICAgdXNlcjtcbiAgICBsYXRlc3RUcmlwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICB0aGlzLnNldEZpcmViYXNlVHJpcFVybCgpO1xuICAgIH1cblxuICAgIGN1cnJlbnRUcmlwKCkge31cblxuICAgIHRoaXNXZWVrKCkge31cblxuICAgIHRoaXNNb250aCgpIHt9XG5cbiAgICBjb25maWdVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2Rpc3RhbmNlbWF0cml4L2pzb24/dW5pdHM9aW1wZXJpYWwmb3JpZ2lucz00MC42NjU1MTAxLC03My44OTE4ODk2OTk5OTk5OCZkZXN0aW5hdGlvbnM9NDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjU5NTY5JTJDLTczLjkzMzc4MyU3QzQwLjcyOTAyOSUyQy03My44NTE1MjQlN0M0MC42ODYwMDcyJTJDLTczLjYzMzQyNzElN0M0MC41OTg1NjYlMkMtNzMuNzUyNzYyNiU3QzQwLjY1OTU2OSUyQy03My45MzM3ODMlN0M0MC43MjkwMjklMkMtNzMuODUxNTI0JTdDNDAuNjg2MDA3MiUyQy03My42MzM0MjcxJTdDNDAuNTk4NTY2JTJDLTczLjc1Mjc2MjYma2V5PUFJemFTeUJMWkxKaVRpeElwWlRZMUFxTVpGTkNKdXpjdEpUMEQ3dyc7XG5cbiAgICBmaXJlYmFzZVVybCA9ICdodHRwczovL2Ftb3JhLTJjYzRjLmZpcmViYXNlaW8uY29tL3RyaXBzJztcblxuICAgIHNldENvbmZpZ1VybChvcmlnaW4sIGRlc3RpbmF0aW9uLCBjb29yZHMpIHtcbiAgICAgICAgbGV0IG5ld09yaWdpbiA9ICcnO1xuICAgICAgICBsZXQgbmV3RGVzdGluYXRpb24gPSAnJztcbiAgICAgICAgY29uc29sZS5sb2coXCJPcmlnaW4gYW5kIGRlc3RpbmF0aW9uIGluIHRyaXAgc2VydmljZVwiLCBvcmlnaW4sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgaWYoIWNvb3Jkcykge1xuICAgICAgICAgICAgbmV3T3JpZ2luID0gb3JpZ2luLnNwbGl0KCcgJykuam9pbignKycpO1xuICAgICAgICAgICAgbmV3RGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbi5zcGxpdCgnICcpLmpvaW4oJysnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld09yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgICAgIG5ld0Rlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWdVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2Rpc3RhbmNlbWF0cml4L2pzb24/dW5pdHM9aW1wZXJpYWwmb3JpZ2lucz0nICsgbmV3T3JpZ2luICsgJyZkZXN0aW5hdGlvbnM9JyArIG5ld0Rlc3RpbmF0aW9uICsgJyZrZXk9QUl6YVN5QkxaTEppVGl4SXBaVFkxQXFNWkZOQ0p1emN0SlQwRDd3JztcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9kaXN0YW5jZW1hdHJpeC9qc29uP3VuaXRzPWltcGVyaWFsJm9yaWdpbnM9JyArIG5ld09yaWdpbiArICcmZGVzdGluYXRpb25zPScgKyBuZXdEZXN0aW5hdGlvbiArICcma2V5PUFJemFTeUJMWkxKaVRpeElwWlRZMUFxTVpGTkNKdXpjdEpUMEQ3dyc7XG4gICAgfVxuXG4gICAgc2V0RmlyZWJhc2VUcmlwVXJsKCkge1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyS2V5KCkudGhlbigodWlkKT0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVUlEIGlzLi4uXCIsIHVpZCk7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVXJsID0gJ2h0dHBzOi8vYW1vcmEtMmNjNGMuZmlyZWJhc2Vpby5jb20vdHJpcHMnICsgJy8nICsgdWlkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkwgaXMuLi5cIiwgdGhpcy5maXJlYmFzZVVybCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlYmFzZVVybDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UG9pbnRzRnJvbVRyaXBEQiAoKXtcbiAgICAgICAgbGV0IHBvaW50cyA9IDA7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFBvaW50c0Zyb21UcmlwcygpLnRoZW4oKHJlc3VsdDogYW55KT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVuZ3RoIGlzLi4uXCIsIHJlc3VsdC5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IE51bWJlcihyZXN1bHRbaV0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1bSBpcy4uLlwiLCBzdW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VtIGFmdGVyIGxvb3AgaXMuLi5cIiwgc3VtKTtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNlbmRQb2ludHNGcm9tVHJpcHMoc3VtKTtcbiAgICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm9CeUVtYWlsKCl7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldEFsbFVzZXJzKCkudGhlbigocmVzdWx0KT0+IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgdXNlcnMgPSByZXN1bHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXJzIGxpc3RlZFwiLCB1c2Vycyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0RmlyZWJhc2VUcmlwKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldCBmcm9tIHRoaXMgVVJMXCIsIHRoaXMuZmlyZWJhc2VVcmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPYmplY3Q+KHRoaXMuZmlyZWJhc2VVcmwpO1xuICAgIH1cblxuICAgIHNob3dGaXJlYmFzZVRyaXAoKSB7XG4gICAgICAgIHRoaXMuZ2V0RmlyZWJhc2VUcmlwKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IE9iamVjdCkgPT4gdGhpcy50cmlwQ29uZmlnID0geyAuLi5kYXRhIH0pO1xuICAgIH1cblxuICAgIGdldEZpcmViYXNlVHJpcFJlc3BvbnNlKCk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCByZXNwb25zZScsIHRoaXMuZmlyZWJhc2VVcmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPYmplY3Q+KFxuICAgICAgICAgICAgdGhpcy5jb25maWdVcmwsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgICB9XG5cbiAgICBwb3N0RmlyZWJhc2VUcmlwUmVzcG9uc2UoKTogT2JzZXJ2YWJsZTxPYmplY3Q+e1xuICAgICAgICBjb25zb2xlLmxvZygncG9zdCByZXNwb25zZScsIHRoaXMuZmlyZWJhc2VVcmwgKyB0aGlzLnRyaXBEYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9iamVjdD4oXG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVXJsICsgdGhpcy50cmlwRGF0YSwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xuICAgIH1cblxuICAgIHNob3dGaXJlYmFzZVRyaXBSZXNwb25zZSgpIHtcbiAgICAgICAgdGhpcy5sYXRlc3RUcmlwID0gdGhpcy5nZXRGaXJlYmFzZVRyaXBSZXNwb25zZSgpXG4gICAgICAgIC8vIHJlc3AgaXMgb2YgdHlwZSBgSHR0cFJlc3BvbnNlPENvbmZpZz5gXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGFjY2VzcyB0aGUgYm9keSBkaXJlY3RseSwgd2hpY2ggaXMgdHlwZWQgYXMgYENvbmZpZ2AuXG4gICAgICAgICAgICAgICAgdGhpcy50cmlwQ29uZmlnID0geyAuLi4gcmVzcC5ib2R5IH07XG4gICAgICAgICAgICAgICAgdGhpcy50cmlwRGF0YSA9IHJlc3AuYm9keTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBvc3RGaXJlYmFzZVRyaXBSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJpcCByZXRyaWV2ZWQgZnJvbSBmaXJlYmFzZVwiLCB0aGlzLmZpcmViYXNlVXJsLCBKU09OLnN0cmluZ2lmeShyZXNwLmJvZHkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzcC5ib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgaXMgdGhpcyByZXR1cm5pbmc/XCIsIHRoaXMubGF0ZXN0VHJpcCk7XG4gICAgICAgIHJldHVybiB0aGlzLmxhdGVzdFRyaXA7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPYmplY3Q+KHRoaXMuY29uZmlnVXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29uZmlnKCkge1xuICAgICAgICB0aGlzLmdldENvbmZpZygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBPYmplY3QpID0+IHRoaXMuY29uZmlnID0geyAuLi5kYXRhIH0pO1xuICAgIH1cblxuICAgIGdldENvbmZpZ1Jlc3BvbnNlKCk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0PihcbiAgICAgICAgICAgIHRoaXMuY29uZmlnVXJsLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gICAgfVxuXG4gICAgc2hvd0NvbmZpZ1Jlc3BvbnNlKCkge1xuICAgICAgICB0aGlzLmdldENvbmZpZ1Jlc3BvbnNlKClcbiAgICAgICAgLy8gcmVzcCBpcyBvZiB0eXBlIGBIdHRwUmVzcG9uc2U8Q29uZmlnPmBcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIHRoZSBib2R5IGRpcmVjdGx5LCB3aGljaCBpcyB0eXBlZCBhcyBgQ29uZmlnYC5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHsgLi4uIHJlc3AuYm9keSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcERhdGEgPSByZXNwLmJvZHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNlbmRUcmlwSW5mbyh0aGlzLnRyaXBEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgQ29uZmlnLmF1dGhIZWFkZXIpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufVxuXG4iXX0=