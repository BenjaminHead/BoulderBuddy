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
        this.user = this.firebaseService.getUser();
        console.log("User is...", this.user);
    }
    TripService.prototype.currentTrip = function () { };
    TripService.prototype.thisWeek = function () { };
    TripService.prototype.thisMonth = function () { };
    TripService.prototype.setConfigUrl = function (origin, destination) {
        console.log("Okay...", origin, destination);
        var newOrigin = origin.split(' ').join('+');
        var newDestination = destination.split(' ').join('+');
        return this.configUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + newOrigin + '&destinations=' + newDestination + '&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w';
    };
    TripService.prototype.getUserInfoByEmail = function () {
        this.firebaseService.getAllUsers().then(function (result) { return function () {
            var users = result;
            console.log("Users listed", users);
        }; });
    };
    TripService.prototype.getConfig = function () {
        console.log('1');
        return this.http.get(this.configUrl);
    };
    TripService.prototype.showConfig = function () {
        var _this = this;
        console.log('2');
        this.getConfig()
            .subscribe(function (data) { return _this.config = __assign({}, data); });
    };
    TripService.prototype.getConfigResponse = function () {
        console.log('3', this.configUrl);
        return this.http.get(this.configUrl, { observe: 'response' });
    };
    TripService.prototype.showConfigResponse = function (user) {
        var _this = this;
        console.log('4', this.configUrl, user);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2Q0FBZ0U7QUFDaEUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlFQUE4RDtBQUU5RCxvQ0FBbUM7QUFHbkM7SUFPSSxxQkFBb0IsSUFBZ0IsRUFDaEIsZUFBZ0M7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFXcEQsY0FBUyxHQUFHLHNoQkFBc2hCLENBQUM7UUFWL2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlDQUFXLEdBQVgsY0FBZSxDQUFDO0lBRWhCLDhCQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsK0JBQVMsR0FBVCxjQUFhLENBQUM7SUFJZCxrQ0FBWSxHQUFaLFVBQWEsTUFBTSxFQUFFLFdBQVc7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksY0FBYyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGtGQUFrRixHQUFHLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsOENBQThDLENBQUM7SUFDaE4sQ0FBQztJQUVELHdDQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxJQUFJLE9BQUE7WUFDL0MsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFIa0QsQ0FHbEQsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFBQSxpQkFJQztRQUhHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRTthQUNYLFNBQVMsQ0FBQyxVQUFDLElBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLGdCQUFRLElBQUksQ0FBRSxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHVDQUFpQixHQUFqQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsd0NBQWtCLEdBQWxCLFVBQW1CLElBQUk7UUFBdkIsaUJBVUM7UUFURyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTthQUVuQixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1gsd0RBQXdEO1lBQ3hELEtBQUksQ0FBQyxNQUFNLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUIsTUFBTSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBMUVRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FRaUIsaUJBQVU7WUFDQyxrQ0FBZTtPQVIzQyxXQUFXLENBMkV2QjtJQUFELGtCQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJpcCB9IGZyb20gXCIuL3RyaXBcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyaXBTZXJ2aWNlIHtcblxuICAgIHBhcmFtcztcbiAgICBjb25maWc7XG4gICAgdHJpcERhdGE7XG4gICAgdXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGlzLi4uXCIsIHRoaXMudXNlcik7XG4gICAgfVxuXG4gICAgY3VycmVudFRyaXAoKSB7fVxuXG4gICAgdGhpc1dlZWsoKSB7fVxuXG4gICAgdGhpc01vbnRoKCkge31cblxuICAgIGNvbmZpZ1VybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZGlzdGFuY2VtYXRyaXgvanNvbj91bml0cz1pbXBlcmlhbCZvcmlnaW5zPTQwLjY2NTUxMDEsLTczLjg5MTg4OTY5OTk5OTk4JmRlc3RpbmF0aW9ucz00MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42NTk1NjklMkMtNzMuOTMzNzgzJTdDNDAuNzI5MDI5JTJDLTczLjg1MTUyNCU3QzQwLjY4NjAwNzIlMkMtNzMuNjMzNDI3MSU3QzQwLjU5ODU2NiUyQy03My43NTI3NjI2JTdDNDAuNjU5NTY5JTJDLTczLjkzMzc4MyU3QzQwLjcyOTAyOSUyQy03My44NTE1MjQlN0M0MC42ODYwMDcyJTJDLTczLjYzMzQyNzElN0M0MC41OTg1NjYlMkMtNzMuNzUyNzYyNiZrZXk9QUl6YVN5QkxaTEppVGl4SXBaVFkxQXFNWkZOQ0p1emN0SlQwRDd3JztcblxuICAgIHNldENvbmZpZ1VybChvcmlnaW4sIGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2theS4uLlwiLCBvcmlnaW4sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgbGV0IG5ld09yaWdpbiA9IG9yaWdpbi5zcGxpdCgnICcpLmpvaW4oJysnKTtcbiAgICAgICAgbGV0IG5ld0Rlc3RpbmF0aW9uID0gZGVzdGluYXRpb24uc3BsaXQoJyAnKS5qb2luKCcrJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ1VybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZGlzdGFuY2VtYXRyaXgvanNvbj91bml0cz1pbXBlcmlhbCZvcmlnaW5zPScgKyBuZXdPcmlnaW4gKyAnJmRlc3RpbmF0aW9ucz0nICsgbmV3RGVzdGluYXRpb24gKyAnJmtleT1BSXphU3lCTFpMSmlUaXhJcFpUWTFBcU1aRk5DSnV6Y3RKVDBEN3cnO1xuICAgIH1cblxuICAgIGdldFVzZXJJbmZvQnlFbWFpbCgpe1xuICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRBbGxVc2VycygpLnRoZW4oKHJlc3VsdCk9PiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzdWx0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VycyBsaXN0ZWRcIiwgdXNlcnMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldENvbmZpZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzEnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0Pih0aGlzLmNvbmZpZ1VybCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbmZpZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzInKTtcbiAgICAgICAgdGhpcy5nZXRDb25maWcoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogT2JqZWN0KSA9PiB0aGlzLmNvbmZpZyA9IHsgLi4uZGF0YSB9KTtcbiAgICB9XG5cbiAgICBnZXRDb25maWdSZXNwb25zZSgpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCczJywgdGhpcy5jb25maWdVcmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPYmplY3Q+KFxuICAgICAgICAgICAgdGhpcy5jb25maWdVcmwsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcbiAgICB9XG5cbiAgICBzaG93Q29uZmlnUmVzcG9uc2UodXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnNCcsIHRoaXMuY29uZmlnVXJsLCB1c2VyKTtcbiAgICAgICAgdGhpcy5nZXRDb25maWdSZXNwb25zZSgpXG4gICAgICAgIC8vIHJlc3AgaXMgb2YgdHlwZSBgSHR0cFJlc3BvbnNlPENvbmZpZz5gXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGFjY2VzcyB0aGUgYm9keSBkaXJlY3RseSwgd2hpY2ggaXMgdHlwZWQgYXMgYENvbmZpZ2AuXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSB7IC4uLiByZXNwLmJvZHkgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBEYXRhID0gcmVzcC5ib2R5O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlU2VydmljZS5zZW5kVHJpcEluZm8odGhpcy50cmlwRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIENvbmZpZy5hdXRoSGVhZGVyKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn1cblxuIl19