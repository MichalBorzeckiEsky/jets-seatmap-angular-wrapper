import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyReactComponent from './MyReactComponent';
import * as i0 from "@angular/core";
export class SeatmapAngularLibComponent {
    constructor() {
        this.flight = {};
        this.config = {};
        this.availability = [];
        this.passengers = [];
        this.onSeatMapInited = new EventEmitter();
        this.onSeatSelected = new EventEmitter();
        this.onSeatUnselected = new EventEmitter();
        this.onTooltipRequested = new EventEmitter();
        this.onLayoutUpdated = new EventEmitter();
        this.rootId = 'rootId';
    }
    ngOnChanges(changes) {
        this.render();
    }
    ngAfterViewInit() {
        this.render();
    }
    ngOnDestroy() {
    }
    render() {
        const reactProps = {
            flight: this.flight,
            config: this.config,
            availability: this.availability,
            passengers: this.passengers,
            onSeatMapInited: (data) => {
                this.onSeatMapInited.emit(data);
            },
            onSeatSelected: (data) => {
                this.onSeatSelected.emit(data);
            },
            onSeatUnselected: (data) => {
                this.onSeatUnselected.emit(data);
            },
            onTooltipRequested: (data) => {
                this.onTooltipRequested.emit(data);
            },
            onLayoutUpdated: (data) => {
                this.onLayoutUpdated.emit(data);
            }
        };
        const root_elem = document.getElementById(this.rootId);
        if (root_elem) {
            ReactDOM.render(React.createElement(MyReactComponent, reactProps), root_elem);
        }
    }
}
SeatmapAngularLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeatmapAngularLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SeatmapAngularLibComponent, selector: "seatmap", inputs: { flight: "flight", config: "config", availability: "availability", passengers: "passengers" }, outputs: { onSeatMapInited: "onSeatMapInited", onSeatSelected: "onSeatSelected", onSeatUnselected: "onSeatUnselected", onTooltipRequested: "onTooltipRequested", onLayoutUpdated: "onLayoutUpdated" }, usesOnChanges: true, ngImport: i0, template: '<div [id]="rootId"></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'seatmap',
                    template: '<div [id]="rootId"></div>',
                }]
        }], propDecorators: { flight: [{
                type: Input
            }], config: [{
                type: Input
            }], availability: [{
                type: Input
            }], passengers: [{
                type: Input
            }], onSeatMapInited: [{
                type: Output
            }], onSeatSelected: [{
                type: Output
            }], onSeatUnselected: [{
                type: Output
            }], onTooltipRequested: [{
                type: Output
            }], onLayoutUpdated: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWF0bWFwLWFuZ3VsYXItbGliL3NyYy9saWIvc2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBd0IsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLEtBQUssUUFBUSxNQUFPLFdBQVcsQ0FBQztBQUd2QyxPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDOztBQU1sRCxNQUFNLE9BQU8sMEJBQTBCO0lBSnZDO1FBS1csV0FBTSxHQUFHLEVBQUUsQ0FBQTtRQUNYLFdBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxpQkFBWSxHQUFXLEVBQUUsQ0FBQTtRQUN6QixlQUFVLEdBQVksRUFBRSxDQUFBO1FBQ3ZCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU3QyxXQUFNLEdBQUcsUUFBUSxDQUFBO0tBeUN6QjtJQXZDQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO0lBRVgsQ0FBQztJQUVPLE1BQU07UUFDWixNQUFNLFVBQVUsR0FBRztZQUNqQixNQUFNLEVBQUcsSUFBSSxDQUFDLE1BQU07WUFDcEIsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3BCLFlBQVksRUFBRyxJQUFJLENBQUMsWUFBWTtZQUNoQyxVQUFVLEVBQUcsSUFBSSxDQUFDLFVBQVU7WUFDNUIsZUFBZSxFQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pDLENBQUM7WUFDRCxjQUFjLEVBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDaEMsQ0FBQztZQUNELGdCQUFnQixFQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEMsQ0FBQztZQUNELGtCQUFrQixFQUFFLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDcEMsQ0FBQztZQUNELGVBQWUsRUFBRSxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQyxDQUFDO1NBQ0YsQ0FBQTtRQUNELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksU0FBUyxFQUFFO1lBQ2IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQzs7d0hBbkRVLDBCQUEwQjs0R0FBMUIsMEJBQTBCLG1YQUYzQiwyQkFBMkI7NEZBRTFCLDBCQUEwQjtrQkFKdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OEJBRVUsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0ksZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFDRyxrQkFBa0I7c0JBQTNCLE1BQU07Z0JBQ0csZUFBZTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgKiBhcyBSZWFjdERPTSAgZnJvbSAncmVhY3QtZG9tJztcblxuXG5pbXBvcnQgTXlSZWFjdENvbXBvbmVudCBmcm9tICcuL015UmVhY3RDb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWF0bWFwJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IFtpZF09XCJyb290SWRcIj48L2Rpdj4nLFxufSlcbmV4cG9ydCBjbGFzcyBTZWF0bWFwQW5ndWxhckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95e1xuICBASW5wdXQoKSBmbGlnaHQgPSB7fVxuICBASW5wdXQoKSBjb25maWcgPSB7fVxuICBASW5wdXQoKSBhdmFpbGFiaWxpdHkgOiBhbnlbXSA9IFtdXG4gIEBJbnB1dCgpIHBhc3NlbmdlcnMgOiBhbnlbXSAgPSBbXVxuICBAT3V0cHV0KCkgb25TZWF0TWFwSW5pdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0VW5zZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25Ub29sdGlwUmVxdWVzdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkxheW91dFVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgcm9vdElkID0gJ3Jvb3RJZCdcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKXtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG5cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCl7XG4gICAgY29uc3QgcmVhY3RQcm9wcyA9IHtcbiAgICAgIGZsaWdodCA6IHRoaXMuZmxpZ2h0LFxuICAgICAgY29uZmlnIDogdGhpcy5jb25maWcsICBcbiAgICAgIGF2YWlsYWJpbGl0eSA6IHRoaXMuYXZhaWxhYmlsaXR5LFxuICAgICAgcGFzc2VuZ2VycyA6IHRoaXMucGFzc2VuZ2VycyxcbiAgICAgIG9uU2VhdE1hcEluaXRlZCA6IChkYXRhIDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0TWFwSW5pdGVkLmVtaXQoZGF0YSlcbiAgICAgIH0sXG4gICAgICBvblNlYXRTZWxlY3RlZCA6IChkYXRhIDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0U2VsZWN0ZWQuZW1pdChkYXRhKVxuICAgICAgfSxcbiAgICAgIG9uU2VhdFVuc2VsZWN0ZWQgOiAoZGF0YSA6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdFVuc2VsZWN0ZWQuZW1pdChkYXRhKVxuICAgICAgfSxcbiAgICAgIG9uVG9vbHRpcFJlcXVlc3RlZDogKGRhdGEgOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblRvb2x0aXBSZXF1ZXN0ZWQuZW1pdChkYXRhKVxuICAgICAgfSxcbiAgICAgIG9uTGF5b3V0VXBkYXRlZDogKGRhdGEgOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vbkxheW91dFVwZGF0ZWQuZW1pdChkYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb290X2VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnJvb3RJZCk7XG4gICAgaWYgKHJvb3RfZWxlbSkge1xuICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTXlSZWFjdENvbXBvbmVudCwgcmVhY3RQcm9wcyApLCByb290X2VsZW0pO1xuICAgIH1cbiAgfVxufVxuXG5cbiJdfQ==