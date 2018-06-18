"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase_service_1 = require("../../shared/services/firebase.service");
// import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
var page_1 = require("tns-core-modules/ui/page");
var nativescript_directions_1 = require("nativescript-directions");
var http_1 = require("@angular/common/http");
var BlankScreenComponent = /** @class */ (function () {
    function BlankScreenComponent(router, firebaseService, page, http) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.page = page;
        this.http = http;
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
    BlankScreenComponent.prototype.getTripData = function () {
        var _this = this;
        console.log("Get trip data called too?");
        this.http.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + this.fromDestination + '&destinations' + this.toDestination + '&key=AIzaSyBLZLJiTixIpZTY1AqMZFNCJuzctJT0D7w')
            .subscribe(function (response) { return _this.tripData = response; });
        return this.tripData;
    };
    BlankScreenComponent.prototype.navigate = function () {
        this.router.navigate(["/navigation"]);
    };
    BlankScreenComponent.prototype.arrived = function () {
        this.getTripData();
        console.log("Trip data is...", this.tripData);
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
            page_1.Page,
            http_1.HttpClient])
    ], BlankScreenComponent);
    return BlankScreenComponent;
}());
exports.BlankScreenComponent = BlankScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmstc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsYW5rLXNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLDJFQUF5RTtBQUV6RSwwRUFBMEU7QUFDMUUsaURBQWdEO0FBRWhELG1FQUFxRDtBQUVyRCw2Q0FBNkU7QUFTN0U7SUFTSSw4QkFBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLElBQVUsRUFDVixJQUFnQjtRQUhoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixTQUFJLEdBQUosSUFBSSxDQUFZO1FBVnBDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBRyxJQUFJLG9DQUFVLENBQUM7UUFVeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsVUFBVSxDQUFDLGNBQVksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELDRDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNyQixJQUFJLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhO2FBQzlCO1lBQ0QsRUFBRSxFQUFFLENBQUM7b0JBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlO2lCQUNoQyxDQUFDO1lBQ0YsR0FBRyxFQUFFO2dCQUNELGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxnUkFBZ1I7YUFDNVM7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFBQSxpQkFLQztRQUpHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrRkFBa0YsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLDhDQUE4QyxDQUFDO2FBQzNNLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUEzRFEsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxvQkFBb0IsQ0FBQztTQUNqRSxDQUFDO3lDQVU4QixlQUFNO1lBQ0csa0NBQWU7WUFDMUIsV0FBSTtZQUNKLGlCQUFVO09BWjNCLG9CQUFvQixDQTREaEM7SUFBRCwyQkFBQztDQUFBLEFBNURELElBNERDO0FBNURZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuLy8gaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBEaXJlY3Rpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kaXJlY3Rpb25zXCI7XG5pbXBvcnQgeyBNYXBWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImJsYW5rLXNjcmVlblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ibGFuay1zY3JlZW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ibGFuay1zY3JlZW4tY29tbW9uLmNzc1wiLCBcIi4vYmxhbmstc2NyZWVuLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBCbGFua1NjcmVlbkNvbXBvbmVudCB7XG5cbiAgICBzY3JlZW5Ub3VjaGVkID0gZmFsc2U7XG4gICAgc3RhY2tMYXlvdXQ7XG4gICAgZGlyZWN0aW9ucyA9IG5ldyBEaXJlY3Rpb25zO1xuICAgIHRvRGVzdGluYXRpb247XG4gICAgZnJvbURlc3RpbmF0aW9uO1xuICAgIHRyaXBEYXRhO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdGFja0xheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ2aWV3XCIpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMuYXZhaWxhYmxlKCkudGhlbihhdmFpbCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhdmFpbCA/IFwiWWVzXCIgOiBcIk5vXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRvdWNoKCl7XG4gICAgICAgIHRoaXMuc2NyZWVuVG91Y2hlZCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dGhpcy5zY3JlZW5Ub3VjaGVkID0gZmFsc2U7fSwgMTAwMDApO1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBmcm9tOiB7IC8vIG9wdGlvbmFsLCBkZWZhdWx0ICdjdXJyZW50IGxvY2F0aW9uJ1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMudG9EZXN0aW5hdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvOiBbeyAvLyBpZiBhbiBBcnJheSBpcyBwYXNzZWQgKGFzIGluIHRoaXMgZXhhbXBsZSksIHRoZSBsYXN0IGl0ZW0gaXMgdGhlIGRlc3RpbmF0aW9uLCB0aGUgYWRkcmVzc2VzIGluIGJldHdlZW4gYXJlICd3YXlwb2ludHMnLlxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuZnJvbURlc3RpbmF0aW9uXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICAgIHByZWZlckdvb2dsZU1hcHM6IHRydWUsIC8vIElmIHRoZSBHb29nbGUgTWFwcyBhcHAgaXMgaW5zdGFsbGVkLCB1c2UgdGhhdCBvbmUgaW5zdGVhZCBvZiBBcHBsZSBNYXBzLCBiZWNhdXNlIGl0IHN1cHBvcnRzIHdheXBvaW50cy4gRGVmYXVsdCB0cnVlLlxuICAgICAgICAgICAgICAgIGFsbG93R29vZ2xlTWFwc1dlYjogdHJ1ZSAvLyBJZiB3YXlwb2ludHMgYXJlIHBhc3NlZCBpbiBhbmQgR29vZ2xlIE1hcHMgaXMgbm90IGluc3RhbGxlZCwgeW91IGNhbiBlaXRoZXIgb3BlbiBBcHBsZSBNYXBzIGFuZCB0aGUgZmlyc3Qgd2F5cG9pbnQgaXMgdXNlZCBhcyB0aGUgdG8tYWRkcmVzcyAodGhlIHJlc3QgaXMgaWdub3JlZCksIG9yIHlvdSBjYW4gb3BlbiBHb29nbGUgTWFwcyBvbiB3ZWIgc28gYWxsIHdheXBvaW50cyBhcmUgc2hvd24gKHNldCB0aGlzIHByb3BlcnR5IHRvIHRydWUpLiBEZWZhdWx0IGZhbHNlLlxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFRyaXBEYXRhKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IHRyaXAgZGF0YSBjYWxsZWQgdG9vP1wiKTtcbiAgICAgICAgdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2Rpc3RhbmNlbWF0cml4L2pzb24/dW5pdHM9aW1wZXJpYWwmb3JpZ2lucz0nICsgdGhpcy5mcm9tRGVzdGluYXRpb24gKyAnJmRlc3RpbmF0aW9ucycgKyB0aGlzLnRvRGVzdGluYXRpb24gKyAnJmtleT1BSXphU3lCTFpMSmlUaXhJcFpUWTFBcU1aRk5DSnV6Y3RKVDBEN3cnKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnRyaXBEYXRhID0gcmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gdGhpcy50cmlwRGF0YTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL25hdmlnYXRpb25cIl0pO1xuICAgIH1cblxuICAgIGFycml2ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0VHJpcERhdGEoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmlwIGRhdGEgaXMuLi5cIiwgdGhpcy50cmlwRGF0YSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICB9XG59Il19