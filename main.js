(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-container {\r\n  text-align: center;\r\n}\r\n.btn {\r\n  border-radius: 10px;\r\n  background-color: #a3a3a3;\r\n  color: black;\r\n  font-size: 130%;\r\n  padding: 5px 8px;\r\n  margin: 0 8px;\r\n  cursor: pointer;\r\n  outline: yellow;\r\n}\r\n.btn.active {\r\n  background-color: #3a47b1;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 70vh; width:60vw; margin: 50px auto 20px auto\">\n  <app-carousel-book *ngIf=\"active === 'Book'\" [urls]=\"urls\"></app-carousel-book>\n  <app-carousel-bubbles *ngIf=\"active === 'Bubbles'\" [urls]=\"urls\"></app-carousel-bubbles>\n  <app-carousel-lines-horizontal *ngIf=\"active === 'Lines Horizontal'\" [urls]=\"urls\"></app-carousel-lines-horizontal>\n  <app-carousel-lines-vertical *ngIf=\"active === 'Lines Vertical'\" [urls]=\"urls\"></app-carousel-lines-vertical>\n  <app-carousel-waves *ngIf=\"active === 'Waves'\" [urls]=\"urls\"></app-carousel-waves>\n</div>\n<div class=\"btn-container\">\n  <button *ngFor=\"let btn of btns\" [ngClass]=\"{btn: true, active: btn === active}\" (click)=\"active = btn\">{{btn}}</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.urls = [
            'assets/img/landscapes/landscape_1.jpg',
            'assets/img/landscapes/landscape_2.jpg',
            'assets/img/landscapes/landscape_3.jpg',
            'assets/img/landscapes/landscape_4.jpg'
        ];
        this.btns = [
            'Book',
            'Bubbles',
            'Lines Horizontal',
            'Lines Vertical',
            'Waves'
        ];
        this.active = this.btns[3];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _carousel_book_carousel_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel-book/carousel-book.component */ "./src/app/carousel-book/carousel-book.component.ts");
/* harmony import */ var _carousel_bubbles_carousel_bubbles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel-bubbles/carousel-bubbles.component */ "./src/app/carousel-bubbles/carousel-bubbles.component.ts");
/* harmony import */ var _carousel_lines_horizontal_carousel_lines_horizontal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel-lines-horizontal/carousel-lines-horizontal.component */ "./src/app/carousel-lines-horizontal/carousel-lines-horizontal.component.ts");
/* harmony import */ var _carousel_lines_vertical_carousel_lines_vertical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel-lines-vertical/carousel-lines-vertical.component */ "./src/app/carousel-lines-vertical/carousel-lines-vertical.component.ts");
/* harmony import */ var _carousel_waves_carousel_waves_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel-waves/carousel-waves.component */ "./src/app/carousel-waves/carousel-waves.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _carousel_book_carousel_book_component__WEBPACK_IMPORTED_MODULE_3__["CarouselBookComponent"],
                _carousel_bubbles_carousel_bubbles_component__WEBPACK_IMPORTED_MODULE_4__["CarouselBubblesComponent"],
                _carousel_lines_horizontal_carousel_lines_horizontal_component__WEBPACK_IMPORTED_MODULE_5__["CarouselLinesHorizontalComponent"],
                _carousel_lines_vertical_carousel_lines_vertical_component__WEBPACK_IMPORTED_MODULE_6__["CarouselLinesVerticalComponent"],
                _carousel_waves_carousel_waves_component__WEBPACK_IMPORTED_MODULE_7__["CarouselWavesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel-book/carousel-book.component.css":
/*!***********************************************************!*\
  !*** ./src/app/carousel-book/carousel-book.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".yt-carousel-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.yt-carousel {\r\n  /*flex-grow: 1;*/\r\n  height: 100%;\r\n  width: 50%;\r\n  top:0;\r\n  position: absolute;\r\n  display: inline-block;\r\n  -webkit-transform-origin: right;\r\n          transform-origin: right;\r\n}\r\n\r\n.flip {\r\n  -webkit-transform: scaleX(-1);\r\n          transform: scaleX(-1);\r\n}\r\n\r\n.yt-flex {\r\n  /*display: flex;*/\r\n}\r\n\r\n.b1 {\r\n  left:0;\r\n  z-index: 5;\r\n}\r\n\r\n.b2 {\r\n  right: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/carousel-book/carousel-book.component.html":
/*!************************************************************!*\
  !*** ./src/app/carousel-book/carousel-book.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container class=\"yt-carousel-container yt-flex\"\n     [ngStyle]=\"{backgroundImage: 'url('+urls[(current + 1) % urls.length]+')',backgroundPosition: 'left', perspective: '1500px',\n     backgroundSize: size}\">\n  <div class=\"yt-carousel b1\" [ngStyle]=\"{transform: 'rotateY('+rotate+'deg)'}\">\n  <div class=\"yt-carousel-container\" [ngClass]=\"{flip: flip}\"\n       [ngStyle]=\"{backgroundImage: 'url('+urls[listed]+') ', backgroundPosition: position,\n       backgroundSize: size,   filter: 'brightness('+brightness+'%)'}\"\n  ></div>\n  </div>\n  <div class=\"yt-carousel b2\"\n       [ngStyle]=\"{backgroundImage: 'url('+urls[current]+')', backgroundPosition: 'right',\n       backgroundSize: size}\"\n  ></div>\n</div>\n"

/***/ }),

/***/ "./src/app/carousel-book/carousel-book.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/carousel-book/carousel-book.component.ts ***!
  \**********************************************************/
/*! exports provided: CarouselBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselBookComponent", function() { return CarouselBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselBookComponent = /** @class */ (function () {
    function CarouselBookComponent() {
        var _this = this;
        this.setInterval = function () {
            _this.interFunc = setInterval(_this.listBook, _this.interval || 5000);
        };
        this.clearInterval = function () {
            clearInterval(_this.interFunc);
        };
        this.listBook = function () {
            // animate the rotationY
            var i = 0;
            _this.brightness = 100;
            // this.perspective = 1700;
            var inter = setInterval(function () {
                i++;
                _this.brightness = 100 + (i > 18 ? i - 36 : -i);
                _this.rotate = i * 5;
                if (_this.rotate === 180) {
                    // init the new image, return back the listed list
                    _this.brightness = 100;
                    _this.perspective = 0;
                    _this.current = _this.listed;
                    _this.size = (_this.width) + 'px ' + (_this.height) + 'px';
                    _this.flip = false;
                    _this.position = 'left';
                    _this.rotate = 0;
                    // clear the interval
                    clearInterval(inter);
                }
                else if (_this.rotate === 90) {
                    // change the image of the listed picture
                    _this.listed = (_this.listed + 1) % _this.urls.length;
                    _this.size = (_this.width) + 'px  ' + (_this.height) + 'px';
                    _this.flip = true;
                    _this.position = 'right';
                }
            }, 18);
        };
    }
    CarouselBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init the values
        this.flip = false;
        this.current = 0;
        this.listed = 0;
        this.rotate = 0;
        this.brightness = 100;
        this.perspective = 0;
        this.position = 'left';
        // start listing to book listed
        this.setInterval();
        window.addEventListener('focus', this.setInterval);
        window.addEventListener('blur', this.clearInterval);
        window.addEventListener('resize', function () { _this.ngAfterViewInit(); });
    };
    CarouselBookComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // receive the params of the parent div
        this.width = this.container.nativeElement.offsetWidth;
        this.height = this.container.nativeElement.offsetHeight;
        setTimeout(function () {
            _this.size = (_this.width) + 'px ' + (_this.height) + 'px';
        }, 150);
    };
    CarouselBookComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interFunc);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('urls'),
        __metadata("design:type", Array)
    ], CarouselBookComponent.prototype, "urls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('interval'),
        __metadata("design:type", Number)
    ], CarouselBookComponent.prototype, "interval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselBookComponent.prototype, "container", void 0);
    CarouselBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-book',
            template: __webpack_require__(/*! ./carousel-book.component.html */ "./src/app/carousel-book/carousel-book.component.html"),
            styles: [__webpack_require__(/*! ./carousel-book.component.css */ "./src/app/carousel-book/carousel-book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselBookComponent);
    return CarouselBookComponent;
}());



/***/ }),

/***/ "./src/app/carousel-bubbles/carousel-bubbles.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/carousel-bubbles/carousel-bubbles.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carousel-bubbles/carousel-bubbles.component.html":
/*!******************************************************************!*\
  !*** ./src/app/carousel-bubbles/carousel-bubbles.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #containerRef style=\"width: 100%; height: 100%\">\n  <canvas #canvasRef></canvas>\n</div>\n"

/***/ }),

/***/ "./src/app/carousel-bubbles/carousel-bubbles.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/carousel-bubbles/carousel-bubbles.component.ts ***!
  \****************************************************************/
/*! exports provided: CarouselBubblesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselBubblesComponent", function() { return CarouselBubblesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselBubblesComponent = /** @class */ (function () {
    function CarouselBubblesComponent() {
        var _this = this;
        this.setInterval = function () {
            _this.focus = true;
            _this.interFunc = setInterval(function () {
                _this.current = (_this.current + 1) % _this.urls.length;
                _this.changeImage(0);
            }, _this.interval || 7000);
        };
        this.clearInterval = function () {
            _this.focus = false;
            clearInterval(_this.interFunc);
            _this.setImage();
        };
        this.setImage = function () {
            _this.img.src = _this.urls[_this.current];
            _this.img.onload = function () {
                _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                _this.ctx.drawImage(_this.img, 0, 0, _this.img.width, _this.img.height, 0, 0, _this.canvas.width, _this.canvas.height);
            };
        };
        this.initCircles = function () {
            var width = _this.canvas.width;
            var height = _this.canvas.height;
            _this.circles = [
                { x: width * 0.8, y: height * 0.8, r: width * 0.1 },
                { x: width * 0.5, y: height * 0.2, r: width * 0.15 },
                { x: width * 0.6, y: height * 0.6, r: width * 0.1 },
                { x: width * 0.2, y: height * 0.3, r: width * 0.1 },
                { x: width * 0.3, y: height * 0.4, r: width * 0.15 },
                { x: width * 0.1, y: height * 0.5, r: width * 0.2 },
                { x: width * 0.71, y: height * 0.7, r: width * 0.15 },
                { x: width * 0.9, y: height * 0.18, r: width * 0.1 },
                { x: width * 0.4, y: height * 0.8, r: width * 0.1 },
                { x: width * 0.8, y: height * 0.25, r: width * 0.15 },
                { x: width * 0.1, y: height * 0.1, r: width * 0.2 },
                { x: width * 0.5, y: height * 0.5, r: width * 0.15 },
                { x: width * 0.9, y: height * 0.5, r: width * 0.17 },
                { x: width * 0.15, y: height * 0.9, r: width * 0.17 },
                { x: width * 0.9, y: height * 0.9, r: width * 0.15 },
                { x: width * 0.5, y: height * 0.9, r: width * 0.15 },
                { x: width * 0.5, y: height * 0.9, r: width * 0.15 },
                { x: width * 0.25, y: height * 0.1, r: width * 0.1 },
                { x: width * 0.9, y: height * 0.1, r: width * 0.2 },
                { x: width * 0.6, y: height * 0.25, r: width * 0.2 },
                { x: width * 0.3, y: height * 0.6, r: width * 0.15 },
                { x: width * 0.3, y: height * 0.1, r: width * 0.15 },
                { x: width * 0.3, y: height * 0.9, r: width * 0.15 },
                { x: width * 0.7, y: height * 0.9, r: width * 0.15 },
                { x: width * 0.5, y: height * 0.05, r: width * 0.15 },
            ];
        };
        this.changeImage = function (i) {
            if (i < _this.circles.length && _this.focus) {
                _this.drawCircle(_this.circles[i], _this.current);
                setTimeout(function () { _this.changeImage(i + 1); }, 60);
            }
            else {
                _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                _this.ctx.drawImage(_this.img, 0, 0, _this.img.width, _this.img.height, 0, 0, _this.canvas.width, _this.canvas.height);
            }
        };
        this.drawCircle = function (circle, i) {
            var x = circle.x;
            var y = circle.y;
            var r = circle.r;
            var imgRX = r * (_this.img.width / _this.canvas.width);
            var imgRY = r * (_this.img.height / _this.canvas.height);
            var imgX = x * (_this.img.width / _this.canvas.width);
            var imgY = y * (_this.img.height / _this.canvas.height);
            _this.img.src = _this.urls[i];
            _this.img.onload = function () {
                _this.ctx.save();
                _this.ctx.beginPath();
                _this.ctx.arc(x, y, r, 0, Math.PI * 2, true);
                _this.ctx.closePath();
                _this.ctx.clip();
                _this.ctx.drawImage(_this.img, imgX - imgRX, imgY - imgRY, imgRX * 2, imgRY * 2, x - r, y - r, r * 2, r * 2);
                _this.ctx.beginPath();
                _this.ctx.arc(0, 0, 25, 0, Math.PI * 2, true);
                _this.ctx.clip();
                _this.ctx.closePath();
                _this.ctx.restore();
            };
        };
    }
    CarouselBubblesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current = 0;
        this.setInterval();
        window.addEventListener('focus', function () { _this.setInterval(); });
        window.addEventListener('blur', function () { _this.clearInterval(); });
        window.addEventListener('resize', function () { _this.ngAfterViewInit(); });
    };
    CarouselBubblesComponent.prototype.ngAfterViewInit = function () {
        this.container = this.containerRef.nativeElement;
        this.canvas = this.canvasRef.nativeElement;
        // init the canvas
        this.canvas.height = this.container.offsetHeight;
        this.canvas.width = this.container.offsetWidth;
        this.ctx = this.canvas.getContext('2d');
        this.img = new Image;
        this.setImage();
        this.initCircles();
    };
    CarouselBubblesComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interFunc);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('urls'),
        __metadata("design:type", Array)
    ], CarouselBubblesComponent.prototype, "urls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('interval'),
        __metadata("design:type", Number)
    ], CarouselBubblesComponent.prototype, "interval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvasRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselBubblesComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('containerRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselBubblesComponent.prototype, "containerRef", void 0);
    CarouselBubblesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-bubbles',
            template: __webpack_require__(/*! ./carousel-bubbles.component.html */ "./src/app/carousel-bubbles/carousel-bubbles.component.html"),
            styles: [__webpack_require__(/*! ./carousel-bubbles.component.css */ "./src/app/carousel-bubbles/carousel-bubbles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselBubblesComponent);
    return CarouselBubblesComponent;
}());



/***/ }),

/***/ "./src/app/carousel-lines-horizontal/carousel-lines-horizontal.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/carousel-lines-horizontal/carousel-lines-horizontal.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-in {\r\n  from {\r\n    opacity: 0\r\n  }\r\n  to {\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes fade-in {\r\n  from {\r\n    opacity: 0\r\n  }\r\n  to {\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.yt-carousel {\r\n  top:0;\r\n  background-position: center !important;\r\n  background-repeat: no-repeat !important;\r\n  background-attachment: fixed !important;\r\n}\r\n\r\n.full {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.yt-line {\r\n  height: 10.1%;\r\n  width: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.yt-line:not(.show) {\r\n  display: none;\r\n}\r\n\r\n.yt-line.show {\r\n  -webkit-animation: fade-in 1 1s ease;\r\n          animation: fade-in 1 1s ease;\r\n}\r\n\r\n.yt-line:nth-child(1) {\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(2) {\r\n  top: 10%;\r\n}\r\n\r\n.yt-line:nth-child(3) {\r\n  top: 20%;\r\n}\r\n\r\n.yt-line:nth-child(4) {\r\n  top: 30%;\r\n}\r\n\r\n.yt-line:nth-child(5) {\r\n  top: 40%;\r\n}\r\n\r\n.yt-line:nth-child(6) {\r\n  top: 50%;\r\n}\r\n\r\n.yt-line:nth-child(7) {\r\n  top: 60%;\r\n}\r\n\r\n.yt-line:nth-child(8) {\r\n  top: 70%;\r\n}\r\n\r\n.yt-line:nth-child(9) {\r\n  top: 80%;\r\n}\r\n\r\n.yt-line:nth-child(10) {\r\n  top: 90%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/carousel-lines-horizontal/carousel-lines-horizontal.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/carousel-lines-horizontal/carousel-lines-horizontal.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #div class=\"yt-carousel full\" [ngStyle]=\"{backgroundImage: 'url('+bigBackground+')', backgroundSize: size}\">\n  <div [ngClass]=\"{show: show[0]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[1]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[2]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[3]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[4]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[5]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[6]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[7]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[8]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[9]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/carousel-lines-horizontal/carousel-lines-horizontal.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/carousel-lines-horizontal/carousel-lines-horizontal.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CarouselLinesHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselLinesHorizontalComponent", function() { return CarouselLinesHorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselLinesHorizontalComponent = /** @class */ (function () {
    function CarouselLinesHorizontalComponent() {
        var _this = this;
        this.inter = 200;
        this.setInterval = function () {
            _this.focus = true;
            _this.intervalFunc = setInterval(_this.loop, _this.interval || 6000);
            console.log('focus');
        };
        this.clearInterval = function () {
            _this.focus = false;
            clearInterval(_this.intervalFunc);
            console.log('blur');
            _this.hideLines();
        };
        this.loop = function () {
            _this.linesBackground = _this.urls[_this.current];
            _this.showLine(0);
            setTimeout(_this.hideLines, _this.inter * 10 + 500);
        };
        this.showLine = function (i) {
            if (i < 10 && _this.focus) {
                _this.show[i] = true;
                setTimeout(function () { _this.showLine(i + 1); }, _this.inter);
            }
        };
        this.hideLines = function () {
            for (var i = 0; i < 10; i++) {
                _this.show[i] = false;
            }
            _this.bigBackground = _this.urls[_this.current];
            _this.current = (_this.current + 1) % _this.urls.length;
        };
    }
    CarouselLinesHorizontalComponent.prototype.ngOnInit = function () {
        this.bigBackground = this.urls[0];
        this.linesBackground = this.urls[0];
        this.current = 1;
        this.width = 0;
        this.height = 0;
        this.focus = true;
        this.show = [false, false, false, false, false, false, false, false, false, false];
        this.setInterval();
        window.addEventListener('focus', this.setInterval);
        window.addEventListener('blur', this.clearInterval);
        window.addEventListener('resize', this.ngAfterViewInit);
    };
    CarouselLinesHorizontalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.width = this.div.nativeElement.offsetWidth;
        this.height = this.div.nativeElement.offsetHeight;
        setTimeout(function () {
            _this.size = (_this.width) + 'px ' + (_this.height) + 'px';
        }, 150);
    };
    CarouselLinesHorizontalComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalFunc);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('urls'),
        __metadata("design:type", Array)
    ], CarouselLinesHorizontalComponent.prototype, "urls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('interval'),
        __metadata("design:type", Number)
    ], CarouselLinesHorizontalComponent.prototype, "interval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('div'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselLinesHorizontalComponent.prototype, "div", void 0);
    CarouselLinesHorizontalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-lines-horizontal',
            template: __webpack_require__(/*! ./carousel-lines-horizontal.component.html */ "./src/app/carousel-lines-horizontal/carousel-lines-horizontal.component.html"),
            styles: [__webpack_require__(/*! ./carousel-lines-horizontal.component.css */ "./src/app/carousel-lines-horizontal/carousel-lines-horizontal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselLinesHorizontalComponent);
    return CarouselLinesHorizontalComponent;
}());



/***/ }),

/***/ "./src/app/carousel-lines-vertical/carousel-lines-vertical.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/carousel-lines-vertical/carousel-lines-vertical.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-in {\r\n  from {\r\n    opacity: 0\r\n  }\r\n  to {\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes fade-in {\r\n  from {\r\n    opacity: 0\r\n  }\r\n  to {\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.yt-carousel {\r\n  top:0;\r\n  /*background-size: cover !important;*/\r\n  background-position: center !important;\r\n  background-repeat: no-repeat !important;\r\n  background-attachment: fixed !important;\r\n}\r\n\r\n.full {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.yt-line {\r\n  height: 100%;\r\n  width: 10.1%;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.yt-line:not(.show) {\r\n  display: none;\r\n}\r\n\r\n.yt-line.show {\r\n  -webkit-animation: fade-in 1 1s ease;\r\n          animation: fade-in 1 1s ease;\r\n}\r\n\r\n.yt-line:nth-child(1) {\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(2) {\r\n  left: 10%;\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(3) {\r\n  left: 20%;\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(4) {\r\n  left: 30%;\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(5) {\r\n  left: 40%;\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(6) {\r\n  left: 50%;\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(7) {\r\n  left: 60%;\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(8) {\r\n  left: 70%;\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(9) {\r\n  left: 80%;\r\n  top: 0;\r\n}\r\n\r\n.yt-line:nth-child(10) {\r\n  left: 90%;\r\n  top: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/carousel-lines-vertical/carousel-lines-vertical.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/carousel-lines-vertical/carousel-lines-vertical.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #div class=\"yt-carousel full\" [ngStyle]=\"{backgroundImage: 'url('+bigBackground+')', backgroundSize: size}\">\n  <div [ngClass]=\"{show: show[0]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[1]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[2]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[3]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[4]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[5]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[6]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[7]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[8]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n  <div [ngClass]=\"{show: show[9]}\" class=\"yt-carousel yt-line\" [ngStyle]=\"{backgroundImage: 'url('+linesBackground+')', backgroundSize: size}\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/carousel-lines-vertical/carousel-lines-vertical.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/carousel-lines-vertical/carousel-lines-vertical.component.ts ***!
  \******************************************************************************/
/*! exports provided: CarouselLinesVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselLinesVerticalComponent", function() { return CarouselLinesVerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselLinesVerticalComponent = /** @class */ (function () {
    function CarouselLinesVerticalComponent() {
        var _this = this;
        this.inter = 200;
        this.setInterval = function () {
            _this.focus = true;
            _this.intervalFunc = setInterval(_this.loop, _this.interval || 6000);
            console.log('focus');
        };
        this.clearInterval = function () {
            _this.focus = false;
            clearInterval(_this.intervalFunc);
            console.log('blur');
            _this.hideLines();
        };
        this.loop = function () {
            _this.linesBackground = _this.urls[_this.current];
            _this.showLine(0);
            setTimeout(_this.hideLines, _this.inter * 10 + 500);
        };
        this.showLine = function (i) {
            if (i < 10 && _this.focus) {
                _this.show[i] = true;
                setTimeout(function () { _this.showLine(i + 1); }, _this.inter);
            }
        };
        this.hideLines = function () {
            for (var i = 0; i < 10; i++) {
                _this.show[i] = false;
            }
            _this.bigBackground = _this.urls[_this.current];
            _this.current = (_this.current + 1) % _this.urls.length;
        };
    }
    CarouselLinesVerticalComponent.prototype.ngOnInit = function () {
        this.bigBackground = this.urls[0];
        this.linesBackground = this.urls[0];
        this.current = 1;
        this.width = 0;
        this.height = 0;
        this.focus = true;
        this.show = [false, false, false, false, false, false, false, false, false, false];
        this.setInterval();
        window.addEventListener('focus', this.setInterval);
        window.addEventListener('blur', this.clearInterval);
        window.addEventListener('resize', this.ngAfterViewInit);
    };
    CarouselLinesVerticalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.width = this.div.nativeElement.offsetWidth;
        this.height = this.div.nativeElement.offsetHeight;
        setTimeout(function () {
            _this.size = (_this.width) + 'px ' + (_this.height) + 'px';
        }, 150);
    };
    CarouselLinesVerticalComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalFunc);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('urls'),
        __metadata("design:type", Array)
    ], CarouselLinesVerticalComponent.prototype, "urls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('interval'),
        __metadata("design:type", Number)
    ], CarouselLinesVerticalComponent.prototype, "interval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('div'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselLinesVerticalComponent.prototype, "div", void 0);
    CarouselLinesVerticalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-lines-vertical',
            template: __webpack_require__(/*! ./carousel-lines-vertical.component.html */ "./src/app/carousel-lines-vertical/carousel-lines-vertical.component.html"),
            styles: [__webpack_require__(/*! ./carousel-lines-vertical.component.css */ "./src/app/carousel-lines-vertical/carousel-lines-vertical.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselLinesVerticalComponent);
    return CarouselLinesVerticalComponent;
}());



/***/ }),

/***/ "./src/app/carousel-waves/carousel-waves.component.css":
/*!*************************************************************!*\
  !*** ./src/app/carousel-waves/carousel-waves.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fade-in {\r\n  0% {\r\n    opacity: 0\r\n  }\r\n  33% {\r\n    opacity: 0.40;\r\n  }\r\n  66% {\r\n    opacity: 0.60;\r\n  }\r\n  100% {\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0\r\n  }\r\n  33% {\r\n    opacity: 0.40;\r\n  }\r\n  66% {\r\n    opacity: 0.60;\r\n  }\r\n  100% {\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n.canvas:not(.show) {\r\n  display: none;\r\n}\r\n\r\n.canvas.show {\r\n  -webkit-animation: fade-in 1 2.8s linear;\r\n          animation: fade-in 1 2.8s linear;\r\n}\r\n"

/***/ }),

/***/ "./src/app/carousel-waves/carousel-waves.component.html":
/*!**************************************************************!*\
  !*** ./src/app/carousel-waves/carousel-waves.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #containerRef style=\"width: 100%; height: 100%; position:relative\">\n  <canvas #canvasRef></canvas>\n  <canvas [ngClass]=\"{canvas: true, show: show}\" #canvasRef2 style=\"position: absolute; top:0; left:0\"></canvas>\n</div>\n"

/***/ }),

/***/ "./src/app/carousel-waves/carousel-waves.component.ts":
/*!************************************************************!*\
  !*** ./src/app/carousel-waves/carousel-waves.component.ts ***!
  \************************************************************/
/*! exports provided: CarouselWavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselWavesComponent", function() { return CarouselWavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselWavesComponent = /** @class */ (function () {
    function CarouselWavesComponent() {
        var _this = this;
        this.setInterval = function () {
            _this.interFunc = setInterval(function () {
                _this.current = (_this.current + 1) % _this.urls.length;
                _this.finish = false;
                _this.halfWay = false;
                setTimeout(function () { _this.halfWay = true; }, 1500);
                setTimeout(function () { _this.finish = true; }, 3000);
                _this.setImage();
                _this.setImage2();
            }, _this.interval || 6000);
        };
        this.clearInterval = function () {
            clearInterval(_this.interFunc);
        };
        this.initImages = function () {
            _this.img.src = _this.urls[1];
            _this.img.onload = function () {
                _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                _this.ctx.drawImage(_this.img, 0, 0, _this.img.width, _this.img.height, 0, 0, _this.canvas.width, _this.canvas.height);
            };
        };
        this.setImage = function () {
            _this.img.src = _this.urls[_this.current];
            _this.img.onload = function () {
                _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                _this.ctx.drawImage(_this.img, 0, 0, _this.img.width, _this.img.height, 0, 0, _this.canvas.width, _this.canvas.height);
                _this.waves();
            };
        };
        this.setImage2 = function () {
            _this.img2.src = _this.urls[(_this.current + 1) % _this.urls.length];
            _this.img2.onload = function () {
                _this.ctx2.clearRect(0, 0, _this.canvas2.width, _this.canvas2.height);
                _this.ctx2.drawImage(_this.img2, 0, 0, _this.img2.width, _this.img2.height, 0, 0, _this.canvas2.width, _this.canvas2.height);
                _this.show = true;
                _this.waves2();
            };
        };
    }
    CarouselWavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.img = new Image;
        this.img2 = new Image;
        this.current = 0;
        this.show = false;
        window.addEventListener('focus', function () {
            _this.setInterval();
        });
        window.addEventListener('blur', function () {
            _this.clearInterval();
        });
        window.addEventListener('resize', function () {
            _this.ngAfterViewInit();
        });
        this.setInterval();
    };
    CarouselWavesComponent.prototype.ngAfterViewInit = function () {
        this.container = this.containerRef.nativeElement;
        this.canvas = this.canvasRef.nativeElement;
        this.canvas2 = this.canvasRef2.nativeElement;
        // init the canvas
        this.canvas.height = this.container.offsetHeight;
        this.canvas.width = this.container.offsetWidth;
        this.canvas2.height = this.container.offsetHeight;
        this.canvas2.width = this.container.offsetWidth;
        this.ctx = this.canvas.getContext('2d');
        this.ctx2 = this.canvas2.getContext('2d');
        this.initImages();
    };
    // waves() {
    //
    //   const w = this.canvas.width;
    //   const h = this.canvas.height;
    //
    //   const o1 = new Osc(0.05), o2 = new Osc(0.03), o3 = new Osc(0.06),  // osc. for vert
    //     o4 = new Osc(0.08), o5 = new Osc(0.04), o6 = new Osc(0.067), // osc. for hori
    //
    //     // source grid lines
    //     x0 = 0, x1 = w * 0.25, x2 = w * 0.5, x3 = w * 0.75, x4 = w,
    //     y0 = 0, y1 = h * 0.25, y2 = h * 0.5, y3 = h * 0.75, y4 = h,
    //
    //     // cache source widths/heights
    //     sw0 = x1, sw1 = x2 - x1, sw2 = x3 - x2, sw3 = x4 - x3,
    //     sh0 = y1, sh1 = y2 - y1, sh2 = y3 - y2, sh3 = y4 - y3,
    //
    //     vcanvas = document.createElement('canvas'),  // off-screen canvas for 2. pass
    //     vctx = vcanvas.getContext('2d');
    //
    //   vcanvas.width = w;
    //   vcanvas.height = h;           // set to same size as main canvas
    //
    //   const loop = () => {
    //     this.ctx.clearRect(0, 0, w, h);
    //
    //     for (let y = 0; y < h; y++) {
    //
    //       // segment positions
    //       const lx1 = x1 + o1.current(y * 0.2) * 2.5,
    //         lx2 = x2 + o2.current(y * 0.2) * 2,
    //         lx3 = x3 + o3.current(y * 0.2) * 1.5,
    //
    //         // segment widths
    //         w0 = lx1,
    //         w1 = lx2 - lx1,
    //         w2 = lx3 - lx2,
    //         w3 = x4 - lx3;
    //
    //       // draw image lines
    //       this.ctx.drawImage(this.img, x0, y, sw0, 1, 0, y, w0, 1);
    //       this.ctx.drawImage(this.img, x1, y, sw1, 1, lx1 - 0.5, y, w1 + 0.5, 1);
    //       this.ctx.drawImage(this.img, x2, y, sw2, 1, lx2 - 0.5, y, w2 + 0.5, 1);
    //       this.ctx.drawImage(this.img, x3, y, sw3, 1, lx3 - 0.5, y, w3 + 0.5, 1);
    //     }
    //
    //     // pass 1 done, copy to off-screen canvas:
    //     vctx.clearRect(0, 0, w, h);    // clear off-screen canvas (only if alpha)
    //     vctx.drawImage(this.canvas, 0, 0);
    //     this.ctx.clearRect(0, 0, w, h);     // clear main (onlyif alpha)
    //
    //     for (let x = 0; x < w; x++) {
    //       const ly1 = y1 + o4.current(x * 0.32),
    //         ly2 = y2 + o5.current(x * 0.3) * 2,
    //         ly3 = y3 + o6.current(x * 0.4) * 1.5;
    //
    //       this.ctx.drawImage(vcanvas, x, y0, 1, sh0, x, 0, 1, ly1);
    //       this.ctx.drawImage(vcanvas, x, y1, 1, sh1, x, ly1 - 0.5, 1, ly2 - ly1 + 0.5);
    //       this.ctx.drawImage(vcanvas, x, y2, 1, sh2, x, ly2 - 0.5, 1, ly3 - ly2 + 0.5);
    //       this.ctx.drawImage(vcanvas, x, y3, 1, sh3, x, ly3 - 0.5, 1, y4 - ly3 + 0.5);
    //     }
    //
    //     requestAnimationFrame(loop);
    //   };
    //   loop();
    // }
    CarouselWavesComponent.prototype.waves = function () {
        var _this = this;
        var w = this.canvas.width;
        var h = this.canvas.height;
        var m = 1;
        var o1 = new Osc(0.05), o2 = new Osc(0.03), o3 = new Osc(0.07), // osc. for vert
        o4 = new Osc(0.03), o5 = new Osc(0.02), o6 = new Osc(0.05), // osc. for hori
        // source grid lines
        x0 = 0, x1 = w * 0.25, x2 = w * 0.5, x3 = w * 0.75, x4 = w, y0 = 0, y1 = h * 0.25, y2 = h * 0.5, y3 = h * 0.75, y4 = h, 
        // cache source widths/heights
        sw0 = x1, sw1 = x2 - x1, sw2 = x3 - x2, sw3 = x4 - x3, sh0 = y1, sh1 = y2 - y1, sh2 = y3 - y2, sh3 = y4 - y3, vcanvas = document.createElement('canvas'), // off-screen canvas for 2. pass
        vctx = vcanvas.getContext('2d');
        vcanvas.width = w;
        vcanvas.height = h; // set to same size as main canvas
        var loop = function () {
            _this.ctx.clearRect(0, 0, w, h);
            vctx.clearRect(0, 0, w, h); // clear off-screen canvas (only if alpha)
            vctx.drawImage(_this.img, 0, 0, _this.img.width, _this.img.height, 0, 0, _this.canvas.width, _this.canvas.height);
            for (var y = 0; y < h; y++) {
                // segment positions
                var lx1 = x1 + o1.current(y * 0.2) * m, lx2 = x2 + o2.current(y * 0.2) * m, lx3 = x3 + o3.current(y * 0.2) * m, 
                // segment widths
                w0 = lx1, w1 = lx2 - lx1, w2 = lx3 - lx2, w3 = x4 - lx3;
                // draw image lines
                _this.ctx.drawImage(vcanvas, x0, y, sw0, 1, 0, y, w0, 1);
                _this.ctx.drawImage(vcanvas, x1, y, sw1, 1, lx1 - 0.5, y, w1 + 0.5, 1);
                _this.ctx.drawImage(vcanvas, x2, y, sw2, 1, lx2 - 0.5, y, w2 + 0.5, 1);
                _this.ctx.drawImage(vcanvas, x3, y, sw3, 1, lx3 - 0.5, y, w3 + 0.5, 1);
            }
            // pass 1 done, copy to off-screen canvas:
            vctx.clearRect(0, 0, w, h); // clear off-screen canvas (only if alpha)
            vctx.drawImage(_this.canvas, 0, 0);
            _this.ctx.clearRect(0, 0, w, h); // clear main (onlyif alpha)
            for (var x = 0; x < w; x++) {
                var ly1 = y1 + o4.current(x * 0.32) * m, ly2 = y2 + o5.current(x * 0.3) * m, ly3 = y3 + o6.current(x * 0.4) * m;
                _this.ctx.drawImage(vcanvas, x, y0, 1, sh0, x, 0, 1, ly1);
                _this.ctx.drawImage(vcanvas, x, y1, 1, sh1, x, ly1 - 0.5, 1, ly2 - ly1 + 0.5);
                _this.ctx.drawImage(vcanvas, x, y2, 1, sh2, x, ly2 - 0.5, 1, ly3 - ly2 + 0.5);
                _this.ctx.drawImage(vcanvas, x, y3, 1, sh3, x, ly3 - 0.5, 1, y4 - ly3 + 0.5);
            }
            if (_this.finish) {
                _this.ctx.clearRect(0, 0, w, h); // clear off-screen canvas (only if alpha)
                _this.ctx.drawImage(_this.img2, 0, 0, _this.img2.width, _this.img2.height, 0, 0, _this.canvas.width, _this.canvas.height);
            }
            else if (_this.halfWay) {
                m -= 0.302;
                if (m <= 0) {
                    m = 0.001;
                }
                requestAnimationFrame(loop);
            }
            else {
                m += 0.3;
                requestAnimationFrame(loop);
            }
        };
        loop();
    };
    CarouselWavesComponent.prototype.waves2 = function () {
        var _this = this;
        var w = this.canvas2.width;
        var h = this.canvas2.height;
        var m = 1;
        var o1 = new Osc(0.05), o2 = new Osc(0.03), o3 = new Osc(0.07), // osc. for vert
        o4 = new Osc(0.03), o5 = new Osc(0.02), o6 = new Osc(0.05), // osc. for hori
        // source grid lines
        x0 = 0, x1 = w * 0.25, x2 = w * 0.5, x3 = w * 0.75, x4 = w, y0 = 0, y1 = h * 0.25, y2 = h * 0.5, y3 = h * 0.75, y4 = h, 
        // cache source widths/heights
        sw0 = x1, sw1 = x2 - x1, sw2 = x3 - x2, sw3 = x4 - x3, sh0 = y1, sh1 = y2 - y1, sh2 = y3 - y2, sh3 = y4 - y3, vcanvas = document.createElement('canvas'), // off-screen canvas for 2. pass
        vctx = vcanvas.getContext('2d');
        vcanvas.width = w;
        vcanvas.height = h; // set to same size as main canvas
        console.log(this.img2.width, w);
        var loop = function () {
            _this.ctx2.clearRect(0, 0, w, h);
            vctx.clearRect(0, 0, w, h); // clear off-screen canvas (only if alpha)
            vctx.drawImage(_this.img2, 0, 0, _this.img2.width, _this.img2.height, 0, 0, _this.canvas2.width, _this.canvas2.height);
            for (var y = 0; y < h; y++) {
                // segment positions
                var lx1 = x1 + o1.current(y * 0.2) * m, lx2 = x2 + o2.current(y * 0.2) * m, lx3 = x3 + o3.current(y * 0.2) * m, 
                // segment widths
                w0 = lx1, w1 = lx2 - lx1, w2 = lx3 - lx2, w3 = x4 - lx3;
                // draw image lines
                _this.ctx2.drawImage(vcanvas, x0, y, sw0, 1, 0, y, w0, 1);
                _this.ctx2.drawImage(vcanvas, x1, y, sw1, 1, lx1 - 0.5, y, w1 + 0.5, 1);
                _this.ctx2.drawImage(vcanvas, x2, y, sw2, 1, lx2 - 0.5, y, w2 + 0.5, 1);
                _this.ctx2.drawImage(vcanvas, x3, y, sw3, 1, lx3 - 0.5, y, w3 + 0.5, 1);
            }
            // pass 1 done, copy to off-screen canvas:
            vctx.clearRect(0, 0, w, h); // clear off-screen canvas (only if alpha)
            vctx.drawImage(_this.canvas2, 0, 0);
            _this.ctx2.clearRect(0, 0, w, h); // clear main (onlyif alpha)
            for (var x = 0; x < w; x++) {
                var ly1 = y1 + o4.current(x * 0.32) * m, ly2 = y2 + o5.current(x * 0.3) * m, ly3 = y3 + o6.current(x * 0.4) * m;
                _this.ctx2.drawImage(vcanvas, x, y0, 1, sh0, x, 0, 1, ly1);
                _this.ctx2.drawImage(vcanvas, x, y1, 1, sh1, x, ly1 - 0.5, 1, ly2 - ly1 + 0.5);
                _this.ctx2.drawImage(vcanvas, x, y2, 1, sh2, x, ly2 - 0.5, 1, ly3 - ly2 + 0.5);
                _this.ctx2.drawImage(vcanvas, x, y3, 1, sh3, x, ly3 - 0.5, 1, y4 - ly3 + 0.5);
            }
            if (_this.finish) {
                _this.ctx.drawImage(vcanvas, 0, 0, vcanvas.width, vcanvas.height, 0, 0, _this.canvas.width, _this.canvas.height);
                _this.show = false;
            }
            else if (_this.halfWay) {
                m -= 0.302;
                if (m <= 0) {
                    m = 0.001;
                }
                requestAnimationFrame(loop);
            }
            else {
                m += 0.3;
                requestAnimationFrame(loop);
            }
        };
        loop();
    };
    CarouselWavesComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interFunc);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('urls'),
        __metadata("design:type", Array)
    ], CarouselWavesComponent.prototype, "urls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('interval'),
        __metadata("design:type", Number)
    ], CarouselWavesComponent.prototype, "interval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvasRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselWavesComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvasRef2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselWavesComponent.prototype, "canvasRef2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('containerRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselWavesComponent.prototype, "containerRef", void 0);
    CarouselWavesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-waves',
            template: __webpack_require__(/*! ./carousel-waves.component.html */ "./src/app/carousel-waves/carousel-waves.component.html"),
            styles: [__webpack_require__(/*! ./carousel-waves.component.css */ "./src/app/carousel-waves/carousel-waves.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselWavesComponent);
    return CarouselWavesComponent;
}());

var Osc = /** @class */ (function () {
    function Osc(speed) {
        this.speed = speed;
        this.frame = 0;
    }
    Osc.prototype.current = function (x) {
        this.frame += 0.002 * this.speed;
        return Math.sin(this.frame + x * this.speed * 10);
    };
    return Osc;
}());


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pc\angularCarouselsExample\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map