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
    TripService.prototype.getTripByUser = function () {
        this.firebaseService.getTripInfo();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2Q0FBZ0U7QUFDaEUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlFQUE4RDtBQUU5RCxvQ0FBbUM7QUFHbkM7SUFPSSxxQkFBb0IsSUFBZ0IsRUFDaEIsZUFBZ0M7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFXcEQsY0FBUyxHQUFHLHNoQkFBc2hCLENBQUM7UUFWL2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlDQUFXLEdBQVgsY0FBZSxDQUFDO0lBRWhCLDhCQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsK0JBQVMsR0FBVCxjQUFhLENBQUM7SUFJZCxrQ0FBWSxHQUFaLFVBQWEsTUFBTSxFQUFFLFdBQVc7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksY0FBYyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGtGQUFrRixHQUFHLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsOENBQThDLENBQUM7SUFDaE4sQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU0sSUFBSSxPQUFBO1lBQy9DLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBSGtELENBR2xELENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQUEsaUJBSUM7UUFIRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUU7YUFDWCxTQUFTLENBQUMsVUFBQyxJQUFZLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxnQkFBUSxJQUFJLENBQUUsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCx1Q0FBaUIsR0FBakI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQXZCLGlCQVVDO1FBVEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7YUFFbkIsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNYLHdEQUF3RDtZQUN4RCxLQUFJLENBQUMsTUFBTSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTlFUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBUWlCLGlCQUFVO1lBQ0Msa0NBQWU7T0FSM0MsV0FBVyxDQStFdkI7SUFBRCxrQkFBQztDQUFBLEFBL0VELElBK0VDO0FBL0VZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi90cmlwXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmlwU2VydmljZSB7XG5cbiAgICBwYXJhbXM7XG4gICAgY29uZmlnO1xuICAgIHRyaXBEYXRhO1xuICAgIHVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBpcy4uLlwiLCB0aGlzLnVzZXIpO1xuICAgIH1cblxuICAgIGN1cnJlbnRUcmlwKCkge31cblxuICAgIHRoaXNXZWVrKCkge31cblxuICAgIHRoaXNNb250aCgpIHt9XG5cbiAgICBjb25maWdVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2Rpc3RhbmNlbWF0cml4L2pzb24/dW5pdHM9aW1wZXJpYWwmb3JpZ2lucz00MC42NjU1MTAxLC03My44OTE4ODk2OTk5OTk5OCZkZXN0aW5hdGlvbnM9NDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjU5NTY5JTJDLTczLjkzMzc4MyU3QzQwLjcyOTAyOSUyQy03My44NTE1MjQlN0M0MC42ODYwMDcyJTJDLTczLjYzMzQyNzElN0M0MC41OTg1NjYlMkMtNzMuNzUyNzYyNiU3QzQwLjY1OTU2OSUyQy03My45MzM3ODMlN0M0MC43MjkwMjklMkMtNzMuODUxNTI0JTdDNDAuNjg2MDA3MiUyQy03My42MzM0MjcxJTdDNDAuNTk4NTY2JTJDLTczLjc1Mjc2MjYma2V5PUFJemFTeUJMWkxKaVRpeElwWlRZMUFxTVpGTkNKdXpjdEpUMEQ3dyc7XG5cbiAgICBzZXRDb25maWdVcmwob3JpZ2luLCBkZXN0aW5hdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9rYXkuLi5cIiwgb3JpZ2luLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIGxldCBuZXdPcmlnaW4gPSBvcmlnaW4uc3BsaXQoJyAnKS5qb2luKCcrJyk7XG4gICAgICAgIGxldCBuZXdEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uLnNwbGl0KCcgJykuam9pbignKycpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2Rpc3RhbmNlbWF0cml4L2pzb24/dW5pdHM9aW1wZXJpYWwmb3JpZ2lucz0nICsgbmV3T3JpZ2luICsgJyZkZXN0aW5hdGlvbnM9JyArIG5ld0Rlc3RpbmF0aW9uICsgJyZrZXk9QUl6YVN5QkxaTEppVGl4SXBaVFkxQXFNWkZOQ0p1emN0SlQwRDd3JztcbiAgICB9XG5cbiAgICBnZXRUcmlwQnlVc2VyKCl7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldFRyaXBJbmZvKCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm9CeUVtYWlsKCl7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldEFsbFVzZXJzKCkudGhlbigocmVzdWx0KT0+IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgdXNlcnMgPSByZXN1bHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXJzIGxpc3RlZFwiLCB1c2Vycyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnMScpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPYmplY3Q+KHRoaXMuY29uZmlnVXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29uZmlnKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnMicpO1xuICAgICAgICB0aGlzLmdldENvbmZpZygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBPYmplY3QpID0+IHRoaXMuY29uZmlnID0geyAuLi5kYXRhIH0pO1xuICAgIH1cblxuICAgIGdldENvbmZpZ1Jlc3BvbnNlKCk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+IHtcbiAgICAgICAgY29uc29sZS5sb2coJzMnLCB0aGlzLmNvbmZpZ1VybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9iamVjdD4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1VybCwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xuICAgIH1cblxuICAgIHNob3dDb25maWdSZXNwb25zZSh1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCc0JywgdGhpcy5jb25maWdVcmwsIHVzZXIpO1xuICAgICAgICB0aGlzLmdldENvbmZpZ1Jlc3BvbnNlKClcbiAgICAgICAgLy8gcmVzcCBpcyBvZiB0eXBlIGBIdHRwUmVzcG9uc2U8Q29uZmlnPmBcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIHRoZSBib2R5IGRpcmVjdGx5LCB3aGljaCBpcyB0eXBlZCBhcyBgQ29uZmlnYC5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHsgLi4uIHJlc3AuYm9keSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcERhdGEgPSByZXNwLmJvZHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNlbmRUcmlwSW5mbyh0aGlzLnRyaXBEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgQ29uZmlnLmF1dGhIZWFkZXIpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufVxuXG4iXX0=