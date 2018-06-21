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
    TripService.prototype.showConfigResponse = function () {
        var _this = this;
        console.log('4', this.configUrl);
        this.getConfigResponse()
            .subscribe(function (resp) {
            console.log("Is this even working?", resp.body);
            // access the body directly, which is typed as `Config`.
            _this.config = __assign({}, resp.body);
            _this.tripData = resp.body;
            _this.firebaseService.sendTripInfo(_this.user, _this.tripData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2Q0FBZ0U7QUFDaEUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlFQUE4RDtBQUU5RCxvQ0FBbUM7QUFHbkM7SUFPSSxxQkFBb0IsSUFBZ0IsRUFDaEIsZUFBZ0M7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFVcEQsY0FBUyxHQUFHLHNoQkFBc2hCLENBQUM7UUFUL2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUNBQVcsR0FBWCxjQUFlLENBQUM7SUFFaEIsOEJBQVEsR0FBUixjQUFZLENBQUM7SUFFYiwrQkFBUyxHQUFULGNBQWEsQ0FBQztJQUlkLGtDQUFZLEdBQVosVUFBYSxNQUFNLEVBQUUsV0FBVztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0ZBQWtGLEdBQUcsU0FBUyxHQUFHLGdCQUFnQixHQUFHLGNBQWMsR0FBRyw4Q0FBOEMsQ0FBQztJQUNoTixDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUFBLGlCQUlDO1FBSEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sZ0JBQVEsSUFBSSxDQUFFLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCx3Q0FBa0IsR0FBbEI7UUFBQSxpQkFXQztRQVZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7YUFFbkIsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELHdEQUF3RDtZQUN4RCxLQUFJLENBQUMsTUFBTSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHNDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFuRVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQVFpQixpQkFBVTtZQUNDLGtDQUFlO09BUjNDLFdBQVcsQ0FvRXZCO0lBQUQsa0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4vdHJpcFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJpcFNlcnZpY2Uge1xuXG4gICAgcGFyYW1zO1xuICAgIGNvbmZpZztcbiAgICB0cmlwRGF0YTtcbiAgICB1c2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIH1cblxuICAgIGN1cnJlbnRUcmlwKCkge31cblxuICAgIHRoaXNXZWVrKCkge31cblxuICAgIHRoaXNNb250aCgpIHt9XG5cbiAgICBjb25maWdVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2Rpc3RhbmNlbWF0cml4L2pzb24/dW5pdHM9aW1wZXJpYWwmb3JpZ2lucz00MC42NjU1MTAxLC03My44OTE4ODk2OTk5OTk5OCZkZXN0aW5hdGlvbnM9NDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjkwNTYxNSUyQy03My45OTc2NTkyJTdDNDAuNjU5NTY5JTJDLTczLjkzMzc4MyU3QzQwLjcyOTAyOSUyQy03My44NTE1MjQlN0M0MC42ODYwMDcyJTJDLTczLjYzMzQyNzElN0M0MC41OTg1NjYlMkMtNzMuNzUyNzYyNiU3QzQwLjY1OTU2OSUyQy03My45MzM3ODMlN0M0MC43MjkwMjklMkMtNzMuODUxNTI0JTdDNDAuNjg2MDA3MiUyQy03My42MzM0MjcxJTdDNDAuNTk4NTY2JTJDLTczLjc1Mjc2MjYma2V5PUFJemFTeUJMWkxKaVRpeElwWlRZMUFxTVpGTkNKdXpjdEpUMEQ3dyc7XG5cbiAgICBzZXRDb25maWdVcmwob3JpZ2luLCBkZXN0aW5hdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9rYXkuLi5cIiwgb3JpZ2luLCBkZXN0aW5hdGlvbik7XG4gICAgICAgIGxldCBuZXdPcmlnaW4gPSBvcmlnaW4uc3BsaXQoJyAnKS5qb2luKCcrJyk7XG4gICAgICAgIGxldCBuZXdEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uLnNwbGl0KCcgJykuam9pbignKycpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2Rpc3RhbmNlbWF0cml4L2pzb24/dW5pdHM9aW1wZXJpYWwmb3JpZ2lucz0nICsgbmV3T3JpZ2luICsgJyZkZXN0aW5hdGlvbnM9JyArIG5ld0Rlc3RpbmF0aW9uICsgJyZrZXk9QUl6YVN5QkxaTEppVGl4SXBaVFkxQXFNWkZOQ0p1emN0SlQwRDd3JztcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcxJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9iamVjdD4odGhpcy5jb25maWdVcmwpO1xuICAgIH1cblxuICAgIHNob3dDb25maWcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcyJyk7XG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IE9iamVjdCkgPT4gdGhpcy5jb25maWcgPSB7IC4uLmRhdGEgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnUmVzcG9uc2UoKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj4ge1xuICAgICAgICBjb25zb2xlLmxvZygnMycsIHRoaXMuY29uZmlnVXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0PihcbiAgICAgICAgICAgIHRoaXMuY29uZmlnVXJsLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gICAgfVxuXG4gICAgc2hvd0NvbmZpZ1Jlc3BvbnNlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnNCcsIHRoaXMuY29uZmlnVXJsKTtcbiAgICAgICAgdGhpcy5nZXRDb25maWdSZXNwb25zZSgpXG4gICAgICAgIC8vIHJlc3AgaXMgb2YgdHlwZSBgSHR0cFJlc3BvbnNlPENvbmZpZz5gXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXMgdGhpcyBldmVuIHdvcmtpbmc/XCIsIHJlc3AuYm9keSk7XG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIHRoZSBib2R5IGRpcmVjdGx5LCB3aGljaCBpcyB0eXBlZCBhcyBgQ29uZmlnYC5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHsgLi4uIHJlc3AuYm9keSB9O1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcERhdGEgPSByZXNwLmJvZHk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2VuZFRyaXBJbmZvKHRoaXMudXNlciwgdGhpcy50cmlwRGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgQ29uZmlnLmF1dGhIZWFkZXIpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufVxuXG4iXX0=