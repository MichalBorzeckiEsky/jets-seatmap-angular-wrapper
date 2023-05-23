(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('react'), require('react-dom'), require('react/jsx-runtime'), require('jets-seatmap-react-lib')) :
    typeof define === 'function' && define.amd ? define('seatmap-angular-lib', ['exports', '@angular/core', 'react', 'react-dom', 'react/jsx-runtime', 'jets-seatmap-react-lib'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["seatmap-angular-lib"] = {}, global.ng.core, global.React, global.ReactDOM, global.jsxRuntime, global.jetsSeatmapReactLib));
})(this, (function (exports, i0, React, ReactDOM, jsxRuntime, jetsSeatmapReactLib) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var React__namespace = /*#__PURE__*/_interopNamespace(React);
    var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);

    var SeatmapAngularLibService = /** @class */ (function () {
        function SeatmapAngularLibService() {
        }
        return SeatmapAngularLibService;
    }());
    SeatmapAngularLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeatmapAngularLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SeatmapAngularLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeatmapAngularLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeatmapAngularLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MyReactComponent = function (props) {
        return (jsxRuntime.jsx("div", { children: jsxRuntime.jsx(jetsSeatmapReactLib.JetsSeatMap, { flight: props.flight, config: props.config, availability: props.availability, passengers: props.passengers, onSeatMapInited: props.onSeatMapInited, onSeatSelected: props.onSeatSelected, onSeatUnselected: props.onSeatUnselected, onTooltipRequested: props.onTooltipRequested }, void 0) }, void 0));
    };

    var SeatmapAngularLibComponent = /** @class */ (function () {
        function SeatmapAngularLibComponent() {
            this.flight = {};
            this.config = {};
            this.availability = [];
            this.passengers = [];
            this.onSeatMapInited = new i0.EventEmitter();
            this.onSeatSelected = new i0.EventEmitter();
            this.onSeatUnselected = new i0.EventEmitter();
            this.onTooltipRequested = new i0.EventEmitter();
            this.rootId = 'rootId';
        }
        SeatmapAngularLibComponent.prototype.ngOnChanges = function (changes) {
            this.render();
        };
        SeatmapAngularLibComponent.prototype.ngAfterViewInit = function () {
            this.render();
        };
        SeatmapAngularLibComponent.prototype.ngOnDestroy = function () {
        };
        SeatmapAngularLibComponent.prototype.render = function () {
            var _this = this;
            // ReactDOM.render(React.createElement(MyReactComponent ), document.getElementById(this.rootId));
            var reactProps = {
                flight: this.flight,
                config: this.config,
                availability: this.availability,
                passengers: this.passengers,
                onSeatMapInited: function (data) {
                    _this.onSeatMapInited.emit(data);
                },
                onSeatSelected: function (data) {
                    _this.onSeatSelected.emit(data);
                },
                onSeatUnselected: function (data) {
                    _this.onSeatUnselected.emit(data);
                },
                onTooltipRequested: function (data) {
                    _this.onTooltipRequested.emit(data);
                }
            };
            var root_elem = document.getElementById(this.rootId);
            if (root_elem) {
                ReactDOM__namespace.render(React__namespace.createElement(MyReactComponent, reactProps), root_elem);
            }
        };
        return SeatmapAngularLibComponent;
    }());
    SeatmapAngularLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeatmapAngularLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SeatmapAngularLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SeatmapAngularLibComponent, selector: "seatmap", inputs: { flight: "flight", config: "config", availability: "availability", passengers: "passengers" }, outputs: { onSeatMapInited: "onSeatMapInited", onSeatSelected: "onSeatSelected", onSeatUnselected: "onSeatUnselected", onTooltipRequested: "onTooltipRequested" }, usesOnChanges: true, ngImport: i0__namespace, template: '<div [id]="rootId"></div>', isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeatmapAngularLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'seatmap',
                        template: '<div [id]="rootId"></div>',
                        // styleUrls: ['./app.component.css']
                    }]
            }], propDecorators: { flight: [{
                    type: i0.Input
                }], config: [{
                    type: i0.Input
                }], availability: [{
                    type: i0.Input
                }], passengers: [{
                    type: i0.Input
                }], onSeatMapInited: [{
                    type: i0.Output
                }], onSeatSelected: [{
                    type: i0.Output
                }], onSeatUnselected: [{
                    type: i0.Output
                }], onTooltipRequested: [{
                    type: i0.Output
                }] } });

    var SeatmapAngularLibModule = /** @class */ (function () {
        function SeatmapAngularLibModule() {
        }
        return SeatmapAngularLibModule;
    }());
    SeatmapAngularLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeatmapAngularLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SeatmapAngularLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeatmapAngularLibModule, declarations: [SeatmapAngularLibComponent], exports: [SeatmapAngularLibComponent] });
    SeatmapAngularLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeatmapAngularLibModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SeatmapAngularLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SeatmapAngularLibComponent
                        ],
                        imports: [],
                        exports: [
                            SeatmapAngularLibComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of seatmap-angular-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SeatmapAngularLibComponent = SeatmapAngularLibComponent;
    exports.SeatmapAngularLibModule = SeatmapAngularLibModule;
    exports.SeatmapAngularLibService = SeatmapAngularLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=seatmap-angular-lib.umd.js.map
