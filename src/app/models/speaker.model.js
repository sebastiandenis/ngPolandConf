"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_model_1 = require("./image.model");
var Speaker = /** @class */ (function () {
    function Speaker(name, role, bio, imgUrl, imgTitle, imgDesc, email, urlGithub, urlLinkedIn, urlTwitter, urlWww) {
        this.name = name;
        this.role = role;
        this.bio = bio;
        this.email = email;
        this.urlGithub = urlGithub;
        this.urlLinkedIn = urlLinkedIn;
        this.urlTwitter = urlTwitter;
        this.urlWww = urlWww;
        this.photo = new image_model_1.Image(imgUrl, imgTitle, imgDesc);
    }
    return Speaker;
}());
exports.Speaker = Speaker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWFrZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBc0M7QUFjdEM7SUFHRSxpQkFDUyxJQUFZLEVBQ1osSUFBWSxFQUNaLEdBQVcsRUFDbEIsTUFBYyxFQUNkLFFBQWdCLEVBQ2hCLE9BQWUsRUFDUixLQUFhLEVBQ2IsU0FBaUIsRUFDakIsV0FBbUIsRUFDbkIsVUFBa0IsRUFDbEIsTUFBYztRQVZkLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUlYLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksbUJBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlIH0gZnJvbSBcIi4vaW1hZ2UubW9kZWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU3BlYWtlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgcm9sZT86IHN0cmluZztcbiAgYmlvPzogc3RyaW5nO1xuICBwaG90bz86IEltYWdlO1xuICBlbWFpbD86IHN0cmluZztcbiAgdXJsR2l0aHViPzogc3RyaW5nO1xuICB1cmxMaW5rZWRJbj86IHN0cmluZztcbiAgdXJsVHdpdHRlcj86IHN0cmluZztcbiAgdXJsV3d3Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU3BlYWtlciBpbXBsZW1lbnRzIElTcGVha2VyIHtcbiAgcGhvdG86IEltYWdlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIHJvbGU6IHN0cmluZyxcbiAgICBwdWJsaWMgYmlvOiBzdHJpbmcsXG4gICAgaW1nVXJsOiBzdHJpbmcsXG4gICAgaW1nVGl0bGU6IHN0cmluZyxcbiAgICBpbWdEZXNjOiBzdHJpbmcsXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmcsXG4gICAgcHVibGljIHVybEdpdGh1Yjogc3RyaW5nLFxuICAgIHB1YmxpYyB1cmxMaW5rZWRJbjogc3RyaW5nLFxuICAgIHB1YmxpYyB1cmxUd2l0dGVyOiBzdHJpbmcsXG4gICAgcHVibGljIHVybFd3dzogc3RyaW5nXG4gICkge1xuICAgIHRoaXMucGhvdG8gPSBuZXcgSW1hZ2UoaW1nVXJsLCBpbWdUaXRsZSwgaW1nRGVzYyk7XG4gIH1cbn1cbiJdfQ==