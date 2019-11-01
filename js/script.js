var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var output = document.querySelector(".out");
var show = [];
var locPlace = [];
var counter = 0;
console.log(show);
// THIS IS THE PARENT CLASS
var Place = /** @class */ (function () {
    function Place(country, address, img, img2, img3, webaddress, name) {
        this.country = "";
        this.address = "";
        this.img = "";
        this.img2 = "";
        this.img3 = "";
        this.webaddress = "";
        this.name = "";
        this.country = country;
        this.address = address;
        this.img = img;
        this.img2 = img2;
        this.img3 = img3;
        this.webaddress = webaddress;
        this.name = name;
    }
    Place.prototype.showLocation = function (i) {
        output.innerHTML +=
            "<div class=\"card col-lg-4 col-md-6 col-sm-12\">\n\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n\n<div id=\"carouselExampleControls pic\" class=\"carousel slide shadow\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100 card-img-top\" src=\"" + this.img + "\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item card-img-top\">\n      <img class=\"d-block w-100 card-img-top\" src=\"" + this.img2 + "\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item card-img-top\">\n      <img class=\"d-block w-100 card-img-top\" src=\"" + this.img3 + "\" alt=\"Third slide\">\n    </div>\n  </div>\n\n</div>\n\n \t\t <div class=\"card-body card-text\" id= \"" + counter + "\">\n\n\n\t\t</div>\n\t\t<div class=\"card-body card-text information border shadow\">\n\t\t<p id=\"noGap\">Address:</p>\n\t\t<div class=\"row\">\n\t\t\n\t\t\t\t<p class=\"col-lg-4\">" + this.country + "</p>\n\t\t\t\t<p class=\"col-lg-8\">" + this.address + "</p>\n\t\t\n\t\t</div>\n\t\t\t<a href=\"" + this.webaddress + "\">" + this.webaddress + "</a>\n\t\t</div>\n\n\t\t";
    };
    return Place;
}());
// THIS ARE THE RESTAURANTS
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(country, address, img, img2, img3, webaddress, name, type, openhours, telephone) {
        var _this = _super.call(this, country, address, img, img2, img3, webaddress, name) || this;
        _this.type = "";
        _this.openhours = "";
        _this.telephone = "";
        _this.type = type;
        _this.openhours = openhours;
        _this.telephone = telephone;
        return _this;
    }
    restaurant.prototype.showLocation = function (i) {
        _super.prototype.showLocation.call(this, counter);
        $("#" + counter).append("<div class=\"row\">\n\t\t\t\t<p class=\"col-lg-6\">Restaurant-type: <br><u class=\"text-danger\">" + this.type + "</u></p>\n\t\t\t\t<p class=\"col-lg-6\">open hours:<br> <u class=\"text-danger\">" + this.openhours + "</u></p>\n\t\t\t\t<p>Call us! <u class=\"text-danger\">" + this.telephone + "</u></p>\n\t\t\t</div>");
        counter++;
    };
    return restaurant;
}(Place));
var motto = new restaurant("Vienna,", "Franz-Josefs-Kai 2", "./img/motto.jpg", "./img/motto2.jpg", "./img/motto3.jpg", "https://www.mottoamfluss.at/de", "Motto am Fluss", "Austria", "12:00 - 02:00", "01 2525510");
var mochi = new restaurant("Vienna,", "Vorgartenmarkt Stand 12", "./img/mochi.jpg", "./img/mochi2.jpg", "./img/mochi3.jpg", "https://www.mochi.at/ramen-bar", "Mochi Ramen Bar", "Chinese", "11:30 - 21:30", "01 92513800");
var franks = new restaurant("Vienna,", "Laurenzerberg 2", "./img/franks.jpg", "./img/franks2.jpg", "./img/franks3.jpg", "https://www.franks.at/de", "FRANK'S American Restaurant", "American", "11:00 - 00:00", "01 5337805");
show.push(motto);
show.push(mochi);
show.push(franks);
//THIS ARE THE BARS
var bar = /** @class */ (function (_super) {
    __extends(bar, _super);
    function bar(country, address, img, img2, img3, webaddress, name, costs, taste, dresscode) {
        var _this = _super.call(this, country, address, img, img2, img3, webaddress, name) || this;
        _this.costs = "";
        _this.taste = "";
        _this.dresscode = "";
        _this.costs = costs;
        _this.taste = taste;
        _this.dresscode = dresscode;
        return _this;
    }
    bar.prototype.showLocation = function (i) {
        _super.prototype.showLocation.call(this, counter);
        $("#" + counter).append("<div class=\"row\">\n\t\t\t\t<p class=\"col-lg-6\">Costs: <u class=\"text-danger\">" + this.costs + "</u></p>\n\t\t\t\t<p class=\"col-lg-5 offset-lg-1\">Taste: <u class=\"text-danger\">" + this.taste + "</u></p>\n\t\t\t\t<p >The dresscode motto of this location is:<br> <u class=\"text-danger\">" + this.dresscode + "</u></p>\n\t\t\t</div>");
        counter++;
    };
    return bar;
}(Place));
var fredi = new bar("Vienna,", "Eßlinger Hauptstraße 120", "./img/fredis.jpg", "./img/fredis2.jpg", "./img/fredis3.jpg", "http://www.fredis-bar.at", "Fredis Bar", "$$", "excellent", "come as you are");
var eberts = new bar("Vienna,", "Gumpendorfer Str. 51a", "./img/eberts.jpg", "./img/eberts2.jpg", "./img/eberts3.jpg", "http://www.eberts.at", "Eberts Cocktailbar", "$$", "good", "be good dressed");
var puff = new bar("Vienna,", "Girardigasse 10", "./img/Puffbar.jpg", "./img/Puffbar2.jpg", "./img/Puffbar3.jpg", "https://puff-bar.at", "Puff Bar", "$$$", "satisfying", "be good dressed!");
show.push(fredi);
show.push(eberts);
show.push(puff);
//THIS ARE THE EVENT LOCATIONS
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(country, address, img, img2, img3, webaddress, name, nextEvent, music, minimumAge) {
        var _this = _super.call(this, country, address, img, img2, img3, webaddress, name) || this;
        _this.nextEvent = "";
        _this.music = "";
        _this.minimumAge = "";
        _this.nextEvent = nextEvent;
        _this.music = music;
        _this.minimumAge = minimumAge;
        return _this;
    }
    events.prototype.showLocation = function (i) {
        _super.prototype.showLocation.call(this, counter);
        $("#" + counter).append("<div class=\"row\">\n\t\t\t\t<p class=\"col-lg-6\">Next Event: <br><u class=\"text-danger\">" + this.nextEvent + "</u></p>\n\t\t\t\t<p class=\"col-lg-6\">Musictype:<br> <u class=\"text-danger\">" + this.music + "</u></p>\n\t\t\t\t<p >You have to be at least <u class=\"text-danger\">" + this.minimumAge + " years old.</u></p>\n\t\t\t</div>");
        counter++;
    };
    return events;
}(Place));
var flex = new events("Vienna,", "Augartenbrücke 1", "./img/flex.jpg", "./img/flex2.jpg", "./img/flex3.jpg", "http://flex.at", "Flex", "Bassline", "DnB & Indi", "18");
var forelle = new events("Vienna,", "Spittelauer Lände 12", "./img/forelle.jpg", "./img/forelle2.jpg", "./img/forelle3.jpg", "https://www.grelleforelle.com", "Grelle Forelle", "Oliver Huntemann", "Techno & HipHop", "21");
var camera = new events("Vienna,", "Neubaugasse 2", "./img/camera.jpg", "./img/camera2.jpg", "./img/camera3.jpg", "http://camera-club.at", "Camera Club", "Monday Madness", "Techno & DnB", "21");
show.push(flex);
show.push(forelle);
show.push(camera);
for (var i = 0; i < show.length; i++) {
    show[i].showLocation();
}
