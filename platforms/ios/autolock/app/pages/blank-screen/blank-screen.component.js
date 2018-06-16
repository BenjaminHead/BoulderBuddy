"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
var page_1 = require("tns-core-modules/ui/page");
var nativescript_directions_1 = require("nativescript-directions");
var BlankScreenComponent = /** @class */ (function () {
    function BlankScreenComponent(router, firebaseService, page) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.page = page;
        this.screenTouched = false;
        this.directions = new nativescript_directions_1.Directions;
        this.stackLayout = page.getViewById("view");
        this.directions.available().then(function (avail) {
            console.log(avail ? "Yes" : "No");
        });
    }
    BlankScreenComponent.prototype.onTouch = function () {
        this.screenTouched = true;
        setTimeout(function () { this.screenTouched = false; }, 10000);
    };
    BlankScreenComponent.prototype.getDirections = function () {
        this.directions.navigate({
            from: {
                address: this.toDestination
            },
            to: [{
                    address: this.fromDestination
                }],
            ios: {
                preferGoogleMaps: true,
                allowGoogleMapsWeb: true // If waypoints are passed in and Google Maps is not installed, you can either open Apple Maps and the first waypoint is used as the to-address (the rest is ignored), or you can open Google Maps on web so all waypoints are shown (set this property to true). Default false.
            }
        }).then(function () {
            console.log("Maps app launched.");
        }, function (error) {
            console.log(error);
        });
    };
    BlankScreenComponent.prototype.navigate = function () {
        this.router.navigate(["/navigation"]);
    };
    BlankScreenComponent.prototype.arrived = function () {
        this.router.navigate(["/list"]);
    };
    BlankScreenComponent = __decorate([
        core_1.Component({
            selector: "blank-screen",
            moduleId: module.id,
            templateUrl: "./blank-screen.html",
            styleUrls: ["./blank-screen-common.css", "./blank-screen.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            firebase_service_1.FirebaseService,
            page_1.Page])
    ], BlankScreenComponent);
    return BlankScreenComponent;
}());
exports.BlankScreenComponent = BlankScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQVFyRDtJQVFJLDhCQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsSUFBVTtRQUZWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVI5QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQUcsSUFBSSxvQ0FBVSxDQUFDO1FBU3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxjQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTthQUM5QjtZQUNELEVBQUUsRUFBRSxDQUFDO29CQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDaEMsQ0FBQztZQUNGLEdBQUcsRUFBRTtnQkFDRCxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsZ1JBQWdSO2FBQzVTO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFqRFEsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxvQkFBb0IsQ0FBQztTQUNqRSxDQUFDO3lDQVM4QixlQUFNO1lBQ0csa0NBQWU7WUFDMUIsV0FBSTtPQVZyQixvQkFBb0IsQ0FrRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbi8vIGltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgRGlyZWN0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGlyZWN0aW9uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJibGFuay1zY3JlZW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYmxhbmstc2NyZWVuLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYmxhbmstc2NyZWVuLWNvbW1vbi5jc3NcIiwgXCIuL2JsYW5rLXNjcmVlbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQmxhbmtTY3JlZW5Db21wb25lbnQge1xuXG4gICAgc2NyZWVuVG91Y2hlZCA9IGZhbHNlO1xuICAgIHN0YWNrTGF5b3V0O1xuICAgIGRpcmVjdGlvbnMgPSBuZXcgRGlyZWN0aW9ucztcbiAgICB0b0Rlc3RpbmF0aW9uO1xuICAgIGZyb21EZXN0aW5hdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgLy8gcHJpdmF0ZSBzdGFja0xheW91dDogU3RhY2tMYXlvdXRcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdGFja0xheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ2aWV3XCIpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMuYXZhaWxhYmxlKCkudGhlbihhdmFpbCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhdmFpbCA/IFwiWWVzXCIgOiBcIk5vXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRvdWNoKCl7XG4gICAgICAgIHRoaXMuc2NyZWVuVG91Y2hlZCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dGhpcy5zY3JlZW5Ub3VjaGVkID0gZmFsc2U7fSwgMTAwMDApO1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBmcm9tOiB7IC8vIG9wdGlvbmFsLCBkZWZhdWx0ICdjdXJyZW50IGxvY2F0aW9uJ1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMudG9EZXN0aW5hdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvOiBbeyAvLyBpZiBhbiBBcnJheSBpcyBwYXNzZWQgKGFzIGluIHRoaXMgZXhhbXBsZSksIHRoZSBsYXN0IGl0ZW0gaXMgdGhlIGRlc3RpbmF0aW9uLCB0aGUgYWRkcmVzc2VzIGluIGJldHdlZW4gYXJlICd3YXlwb2ludHMnLlxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuZnJvbURlc3RpbmF0aW9uXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICAgIHByZWZlckdvb2dsZU1hcHM6IHRydWUsIC8vIElmIHRoZSBHb29nbGUgTWFwcyBhcHAgaXMgaW5zdGFsbGVkLCB1c2UgdGhhdCBvbmUgaW5zdGVhZCBvZiBBcHBsZSBNYXBzLCBiZWNhdXNlIGl0IHN1cHBvcnRzIHdheXBvaW50cy4gRGVmYXVsdCB0cnVlLlxuICAgICAgICAgICAgICAgIGFsbG93R29vZ2xlTWFwc1dlYjogdHJ1ZSAvLyBJZiB3YXlwb2ludHMgYXJlIHBhc3NlZCBpbiBhbmQgR29vZ2xlIE1hcHMgaXMgbm90IGluc3RhbGxlZCwgeW91IGNhbiBlaXRoZXIgb3BlbiBBcHBsZSBNYXBzIGFuZCB0aGUgZmlyc3Qgd2F5cG9pbnQgaXMgdXNlZCBhcyB0aGUgdG8tYWRkcmVzcyAodGhlIHJlc3QgaXMgaWdub3JlZCksIG9yIHlvdSBjYW4gb3BlbiBHb29nbGUgTWFwcyBvbiB3ZWIgc28gYWxsIHdheXBvaW50cyBhcmUgc2hvd24gKHNldCB0aGlzIHByb3BlcnR5IHRvIHRydWUpLiBEZWZhdWx0IGZhbHNlLlxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5hdmlnYXRlKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbmF2aWdhdGlvblwiXSk7XG4gICAgfVxuXG4gICAgYXJyaXZlZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xuICAgIH1cbn0iXX0=