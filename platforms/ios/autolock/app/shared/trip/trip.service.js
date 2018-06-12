"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var TripService = /** @class */ (function () {
    function TripService() {
        this.http = new XMLHttpRequest();
    }
    TripService.prototype.currentTrip = function () { };
    TripService.prototype.thisWeek = function () { };
    TripService.prototype.thisMonth = function () { };
    TripService.prototype.sendLocationData = function () {
        this.params = { odometer: "5",
            time: "5:0:3" };
        this.http.open("POST", 'https://amora-2cc4c.firebaseio.com/trip' + this.params, true);
    };
    TripService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());
exports.TripService = TripService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBTy9CO0lBTUk7UUFKQSxTQUFJLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUliLENBQUM7SUFFaEIsaUNBQVcsR0FBWCxjQUFlLENBQUM7SUFFaEIsOEJBQVEsR0FBUixjQUFZLENBQUM7SUFFYiwrQkFBUyxHQUFULGNBQWEsQ0FBQztJQUVkLHNDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxRQUFRLEVBQUUsR0FBRztZQUM1QixJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUseUNBQXlDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN6RixDQUFDO0lBbEJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBbUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBUcmlwIH0gZnJvbSBcIi4vdHJpcFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyaXBTZXJ2aWNlIHtcblxuICAgIGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHBhcmFtcztcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIGN1cnJlbnRUcmlwKCkge31cblxuICAgIHRoaXNXZWVrKCkge31cblxuICAgIHRoaXNNb250aCgpIHt9XG5cbiAgICBzZW5kTG9jYXRpb25EYXRhKCkge1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHtvZG9tZXRlcjogXCI1XCIsXG4gICAgICAgIHRpbWU6IFwiNTowOjNcIn07XG4gICAgICAgIHRoaXMuaHR0cC5vcGVuKFwiUE9TVFwiLCAnaHR0cHM6Ly9hbW9yYS0yY2M0Yy5maXJlYmFzZWlvLmNvbS90cmlwJyArIHRoaXMucGFyYW1zLCB0cnVlKVxuICAgIH1cbn1cblxuIl19