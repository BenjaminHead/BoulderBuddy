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
    // getTripByUser(){
    //     this.firebaseService.getTripInfo();
    // }
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
    TripService.prototype.showConfigResponse = function () {
        var _this = this;
        console.log('4', this.configUrl);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw2Q0FBZ0U7QUFDaEUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLGlFQUE4RDtBQUU5RCxvQ0FBbUM7QUFHbkM7SUFPSSxxQkFBb0IsSUFBZ0IsRUFDaEIsZUFBZ0M7UUFEaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFVcEQsY0FBUyxHQUFHLHNoQkFBc2hCLENBQUM7UUFUL2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUNBQVcsR0FBWCxjQUFlLENBQUM7SUFFaEIsOEJBQVEsR0FBUixjQUFZLENBQUM7SUFFYiwrQkFBUyxHQUFULGNBQWEsQ0FBQztJQUlkLGtDQUFZLEdBQVosVUFBYSxNQUFNLEVBQUUsV0FBVztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0ZBQWtGLEdBQUcsU0FBUyxHQUFHLGdCQUFnQixHQUFHLGNBQWMsR0FBRyw4Q0FBOEMsQ0FBQztJQUNoTixDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxJQUFJO0lBRUosd0NBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLElBQUksT0FBQTtZQUMvQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUhrRCxDQUdsRCxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUFBLGlCQUlDO1FBSEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sZ0JBQVEsSUFBSSxDQUFFLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCx3Q0FBa0IsR0FBbEI7UUFBQSxpQkFVQztRQVRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7YUFFbkIsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNYLHdEQUF3RDtZQUN4RCxLQUFJLENBQUMsTUFBTSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTdFUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBUWlCLGlCQUFVO1lBQ0Msa0NBQWU7T0FSM0MsV0FBVyxDQThFdkI7SUFBRCxrQkFBQztDQUFBLEFBOUVELElBOEVDO0FBOUVZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyaXAgfSBmcm9tIFwiLi90cmlwXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmlwU2VydmljZSB7XG5cbiAgICBwYXJhbXM7XG4gICAgY29uZmlnO1xuICAgIHRyaXBEYXRhO1xuICAgIHVzZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRVc2VyKCk7XG4gICAgfVxuXG4gICAgY3VycmVudFRyaXAoKSB7fVxuXG4gICAgdGhpc1dlZWsoKSB7fVxuXG4gICAgdGhpc01vbnRoKCkge31cblxuICAgIGNvbmZpZ1VybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZGlzdGFuY2VtYXRyaXgvanNvbj91bml0cz1pbXBlcmlhbCZvcmlnaW5zPTQwLjY2NTUxMDEsLTczLjg5MTg4OTY5OTk5OTk4JmRlc3RpbmF0aW9ucz00MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42OTA1NjE1JTJDLTczLjk5NzY1OTIlN0M0MC42NTk1NjklMkMtNzMuOTMzNzgzJTdDNDAuNzI5MDI5JTJDLTczLjg1MTUyNCU3QzQwLjY4NjAwNzIlMkMtNzMuNjMzNDI3MSU3QzQwLjU5ODU2NiUyQy03My43NTI3NjI2JTdDNDAuNjU5NTY5JTJDLTczLjkzMzc4MyU3QzQwLjcyOTAyOSUyQy03My44NTE1MjQlN0M0MC42ODYwMDcyJTJDLTczLjYzMzQyNzElN0M0MC41OTg1NjYlMkMtNzMuNzUyNzYyNiZrZXk9QUl6YVN5QkxaTEppVGl4SXBaVFkxQXFNWkZOQ0p1emN0SlQwRDd3JztcblxuICAgIHNldENvbmZpZ1VybChvcmlnaW4sIGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2theS4uLlwiLCBvcmlnaW4sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgbGV0IG5ld09yaWdpbiA9IG9yaWdpbi5zcGxpdCgnICcpLmpvaW4oJysnKTtcbiAgICAgICAgbGV0IG5ld0Rlc3RpbmF0aW9uID0gZGVzdGluYXRpb24uc3BsaXQoJyAnKS5qb2luKCcrJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ1VybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZGlzdGFuY2VtYXRyaXgvanNvbj91bml0cz1pbXBlcmlhbCZvcmlnaW5zPScgKyBuZXdPcmlnaW4gKyAnJmRlc3RpbmF0aW9ucz0nICsgbmV3RGVzdGluYXRpb24gKyAnJmtleT1BSXphU3lCTFpMSmlUaXhJcFpUWTFBcU1aRk5DSnV6Y3RKVDBEN3cnO1xuICAgIH1cblxuICAgIC8vIGdldFRyaXBCeVVzZXIoKXtcbiAgICAvLyAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0VHJpcEluZm8oKTtcbiAgICAvLyB9XG5cbiAgICBnZXRVc2VySW5mb0J5RW1haWwoKXtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0QWxsVXNlcnMoKS50aGVuKChyZXN1bHQpPT4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCB1c2VycyA9IHJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlcnMgbGlzdGVkXCIsIHVzZXJzKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcxJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9iamVjdD4odGhpcy5jb25maWdVcmwpO1xuICAgIH1cblxuICAgIHNob3dDb25maWcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcyJyk7XG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IE9iamVjdCkgPT4gdGhpcy5jb25maWcgPSB7IC4uLmRhdGEgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnUmVzcG9uc2UoKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj4ge1xuICAgICAgICBjb25zb2xlLmxvZygnMycsIHRoaXMuY29uZmlnVXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0PihcbiAgICAgICAgICAgIHRoaXMuY29uZmlnVXJsLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSk7XG4gICAgfVxuXG4gICAgc2hvd0NvbmZpZ1Jlc3BvbnNlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnNCcsIHRoaXMuY29uZmlnVXJsKTtcbiAgICAgICAgdGhpcy5nZXRDb25maWdSZXNwb25zZSgpXG4gICAgICAgIC8vIHJlc3AgaXMgb2YgdHlwZSBgSHR0cFJlc3BvbnNlPENvbmZpZz5gXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGFjY2VzcyB0aGUgYm9keSBkaXJlY3RseSwgd2hpY2ggaXMgdHlwZWQgYXMgYENvbmZpZ2AuXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSB7IC4uLiByZXNwLmJvZHkgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBEYXRhID0gcmVzcC5ib2R5O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlU2VydmljZS5zZW5kVHJpcEluZm8odGhpcy50cmlwRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIENvbmZpZy5hdXRoSGVhZGVyKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn1cblxuIl19