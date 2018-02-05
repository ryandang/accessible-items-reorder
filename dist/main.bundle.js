webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Items Re-Ordering\n</h1>\n<p>\n  <label>Number of items in the list:</label>\n  <input type=\"text\" [(ngModel)]=\"numberOfItems\" (keyup.enter)=\"updateItemsList()\"/>\n</p>\n<p>\n  Enter the desired order for the item in the input box and hit Enter\n</p>\n<ng-template #itemTpl let-item=\"item\">\n  <div class=\"test-item\">{{item.name}}</div>\n</ng-template>\n\n<div class=\"container\">\n  <div class=\"column-order\"><h3>Order</h3></div>\n  <div class=\"column-items\"><h3>Items</h3></div>\n  <reorder [items]=\"testItems\" [itemTpl]=\"itemTpl\"></reorder>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  height: 320px;\n  width: 500px; }\n  .container .test-item {\n    color: white;\n    background: #1687e0;\n    padding: 10px; }\n  .container .column-order {\n    display: inline-block;\n    width: 56px; }\n  .container .column-items {\n    display: inline-block;\n    width: calc(100% - 60px);\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.testItems = [];
        this.numberOfItems = 40;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.updateItemsList();
    };
    AppComponent.prototype.updateItemsList = function () {
        this.testItems = [];
        for (var x = 0; x < this.numberOfItems; x++) {
            this.testItems.push({
                name: 'Item number ' + (x + 1)
            });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reorder_reorder_module__ = __webpack_require__("../../../../../src/app/reorder/reorder.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__reorder_reorder_module__["a" /* ReorderModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/reorder/reorder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reorder-items-container\">\n  <div class=\"reorder-item\"\n  *ngFor=\"let item of _items; let index = index\"\n  style.top=\"{{(item.order - 1)*itemHeight + 'px'}}\">\n    <div class=\"order-box-container\">\n      <input type=\"text\"\n      class=\"order-box order-box-{{item.order}}\"\n      [tabindex]=\"item.order === 1 || item.order === _items.length ? 0 : item.order\"\n      [(ngModel)]=\"originalOrder[index].order\"\n      (keydown)=\"handleKeyUp($event, originalOrder[index], item)\"/>\n    </div>\n\n    <div class=\"template-container\">\n      <ng-template\n        [ngTemplateOutletContext]=\"{item: item}\"\n        [ngTemplateOutlet]=\"itemTpl\">\n      </ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/reorder/reorder.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reorder-items-container {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  position: relative; }\n  .reorder-items-container .reorder-item {\n    position: absolute;\n    top: 0px;\n    width: calc(100% - 20px);\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0px 10px;\n    transition: top 1s; }\n    .reorder-items-container .reorder-item .order-box {\n      vertical-align: middle;\n      height: 20px;\n      width: 30px;\n      margin-right: 20px; }\n    .reorder-items-container .reorder-item .template-container {\n      width: calc(100% - 65px);\n      display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reorder/reorder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReorderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReorderComponent = (function () {
    function ReorderComponent(elementRef) {
        this.elementRef = elementRef;
        this.itemHeight = 50;
        this.originalOrder = [];
        this._items = [];
    }
    Object.defineProperty(ReorderComponent.prototype, "items", {
        set: function (values) {
            this._items = values;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ReorderComponent.prototype.init = function () {
        // set original order
        this._items.forEach(function (item, idx) {
            item.order = idx + 1;
        });
        // make a copy
        this.originalOrder = JSON.parse(JSON.stringify(this._items));
    };
    ReorderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // get the height of the item container
        setTimeout(function () {
            _this.itemHeight = _this.elementRef.nativeElement.querySelector('.reorder-item').offsetHeight;
        });
        this.containerRef = this.elementRef.nativeElement.querySelector('.reorder-items-container');
    };
    ReorderComponent.prototype.rearrange = function (newOrder, item) {
        var _this = this;
        var itemOriginalOrder = item.order;
        var goToOrder = newOrder.order;
        if (goToOrder > 0 && goToOrder <= this._items.length) {
            // move up
            if (itemOriginalOrder > goToOrder) {
                this._items.forEach(function (_item, idx) {
                    if (_item.order < itemOriginalOrder && _item.order >= goToOrder) {
                        _item.order++;
                        _this.originalOrder[idx].order = _item.order;
                    }
                });
            }
            else {
                this._items.forEach(function (_item, idx) {
                    if (_item.order > itemOriginalOrder && _item.order <= goToOrder) {
                        _item.order--;
                        _this.originalOrder[idx].order = _item.order;
                    }
                });
            }
            item.order = newOrder.order * 1;
            this.checkScrolling(goToOrder);
        }
    };
    // check if the new order is within the container view
    // get how far the new order from the top
    ReorderComponent.prototype.checkScrolling = function (goToOrder) {
        var _this = this;
        var currentScrollTop = this.containerRef.scrollTop;
        var newOrderTop = goToOrder * this.itemHeight;
        var totalScrollHeight = this.containerRef.scrollHeight;
        var containerHeight = this.containerRef.offsetHeight;
        // if it going off the screen
        if (newOrderTop > containerHeight + this.containerRef.scrollTop) {
            // how far the new order from the view box
            var distance_1 = newOrderTop - containerHeight - this.containerRef.scrollTop;
            window.requestAnimationFrame(function () {
                _this.scrollDown((distance_1));
            });
        }
        else {
            this.scrollUp((this.containerRef.scrollTop - newOrderTop + this.itemHeight));
        }
    };
    ReorderComponent.prototype.scrollDown = function (position, incremental) {
        var _this = this;
        if (position > 0) {
            window.requestAnimationFrame(function () {
                incremental = incremental || Math.ceil(position / 40);
                _this.containerRef.scrollTop = _this.containerRef.scrollTop + incremental;
                _this.scrollDown((position - incremental), incremental);
            });
        }
    };
    ReorderComponent.prototype.scrollUp = function (position, incremental) {
        var _this = this;
        if (position > 0) {
            window.requestAnimationFrame(function () {
                incremental = incremental || Math.ceil(position / 40);
                _this.containerRef.scrollTop = _this.containerRef.scrollTop - incremental;
                _this.scrollUp((position - incremental), incremental);
            });
        }
    };
    ReorderComponent.prototype.handleKeyUp = function (evt, newOrder, item) {
        // handle enter key
        if (evt.which === 13) {
            this.rearrange(newOrder, item);
        }
        // handle tab key
        if (evt.which === 9) {
            // handle tab key when it is on first item on the list
            if (item.order === 1) {
                // use default event for shift tab
                if (evt.shiftKey) {
                    return;
                }
                evt.preventDefault();
                this.elementRef.nativeElement.querySelector('.order-box-2').focus();
                return;
            }
            // handle shift tab key when it is on 2nd item on the list
            if (item.order === 2) {
                if (evt.shiftKey) {
                    evt.preventDefault();
                    this.elementRef.nativeElement.querySelector('.order-box-1').focus();
                    return;
                }
            }
            // handle tab key when it on the second last item on the list
            if (item.order === (this._items.length - 1)) {
                // use default event for shift tab
                if (evt.shiftKey) {
                    return;
                }
                evt.preventDefault();
                this.elementRef.nativeElement.querySelector('.order-box-' + this._items.length).focus();
                return;
            }
            // handle last item tab
            if (item.order === this._items.length) {
                // if shift tab on last item, focus second last item
                if (evt.shiftKey) {
                    evt.preventDefault();
                    this.elementRef.nativeElement.querySelector('.order-box-' + (this._items.length - 1)).focus();
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ReorderComponent.prototype, "items", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* TemplateRef */])
    ], ReorderComponent.prototype, "itemTpl", void 0);
    ReorderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'reorder',
            template: __webpack_require__("../../../../../src/app/reorder/reorder.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reorder/reorder.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], ReorderComponent);
    return ReorderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reorder/reorder.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReorderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reorder_component__ = __webpack_require__("../../../../../src/app/reorder/reorder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReorderModule = (function () {
    function ReorderModule() {
    }
    ReorderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__reorder_component__["a" /* ReorderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__reorder_component__["a" /* ReorderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ]
        })
    ], ReorderModule);
    return ReorderModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map