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
        // ReactDOM.render(React.createElement(MyReactComponent ), document.getElementById(this.rootId));
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
            }
        };
        const root_elem = document.getElementById(this.rootId);
        if (root_elem) {
            ReactDOM.render(React.createElement(MyReactComponent, reactProps), root_elem);
        }
    }
}
SeatmapAngularLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeatmapAngularLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SeatmapAngularLibComponent, selector: "seatmap", inputs: { flight: "flight", config: "config", availability: "availability", passengers: "passengers" }, outputs: { onSeatMapInited: "onSeatMapInited", onSeatSelected: "onSeatSelected", onSeatUnselected: "onSeatUnselected" }, usesOnChanges: true, ngImport: i0, template: '<div [id]="rootId"></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'seatmap',
                    template: '<div [id]="rootId"></div>',
                    // styleUrls: ['./app.component.css']
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWF0bWFwLWFuZ3VsYXItbGliL3NyYy9saWIvc2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBd0IsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLEtBQUssUUFBUSxNQUFPLFdBQVcsQ0FBQztBQUd2QyxPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDOztBQU9sRCxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBTVcsV0FBTSxHQUFHLEVBQUUsQ0FBQTtRQUNYLFdBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxpQkFBWSxHQUFXLEVBQUUsQ0FBQTtRQUN6QixlQUFVLEdBQVksRUFBRSxDQUFBO1FBQ3ZCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU5QyxXQUFNLEdBQUcsUUFBUSxDQUFBO0tBb0N6QjtJQWxDQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO0lBRVgsQ0FBQztJQUVPLE1BQU07UUFDWixpR0FBaUc7UUFDakcsTUFBTSxVQUFVLEdBQUc7WUFDakIsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3BCLE1BQU0sRUFBRyxJQUFJLENBQUMsTUFBTTtZQUNwQixZQUFZLEVBQUcsSUFBSSxDQUFDLFlBQVk7WUFDaEMsVUFBVSxFQUFHLElBQUksQ0FBQyxVQUFVO1lBQzVCLGVBQWUsRUFBRyxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQyxDQUFDO1lBQ0QsY0FBYyxFQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2hDLENBQUM7WUFDRCxnQkFBZ0IsRUFBRyxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xDLENBQUM7U0FDRixDQUFBO1FBQ0QsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxTQUFTLEVBQUU7WUFDYixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOzt3SEE1Q1UsMEJBQTBCOzRHQUExQiwwQkFBMEIscVNBSDNCLDJCQUEyQjs0RkFHMUIsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxxQ0FBcUM7aUJBQ3RDOzhCQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNJLGVBQWU7c0JBQXhCLE1BQU07Z0JBQ0csY0FBYztzQkFBdkIsTUFBTTtnQkFDRyxnQkFBZ0I7c0JBQXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICogYXMgUmVhY3RET00gIGZyb20gJ3JlYWN0LWRvbSc7XG5cblxuaW1wb3J0IE15UmVhY3RDb21wb25lbnQgZnJvbSAnLi9NeVJlYWN0Q29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VhdG1hcCcsXG4gIHRlbXBsYXRlOiAnPGRpdiBbaWRdPVwicm9vdElkXCI+PC9kaXY+JyxcbiAgLy8gc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWF0bWFwQW5ndWxhckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95e1xuICBASW5wdXQoKSBmbGlnaHQgPSB7fVxuICBASW5wdXQoKSBjb25maWcgPSB7fVxuICBASW5wdXQoKSBhdmFpbGFiaWxpdHkgOiBhbnlbXSA9IFtdXG4gIEBJbnB1dCgpIHBhc3NlbmdlcnMgOiBhbnlbXSAgPSBbXVxuICBAT3V0cHV0KCkgb25TZWF0TWFwSW5pdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0VW5zZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyByb290SWQgPSAncm9vdElkJ1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpe1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcblxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKXtcbiAgICAvLyBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChNeVJlYWN0Q29tcG9uZW50ICksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdElkKSk7XG4gICAgY29uc3QgcmVhY3RQcm9wcyA9IHtcbiAgICAgIGZsaWdodCA6IHRoaXMuZmxpZ2h0LFxuICAgICAgY29uZmlnIDogdGhpcy5jb25maWcsICBcbiAgICAgIGF2YWlsYWJpbGl0eSA6IHRoaXMuYXZhaWxhYmlsaXR5LFxuICAgICAgcGFzc2VuZ2VycyA6IHRoaXMucGFzc2VuZ2VycyxcbiAgICAgIG9uU2VhdE1hcEluaXRlZCA6IChkYXRhIDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0TWFwSW5pdGVkLmVtaXQoZGF0YSlcbiAgICAgIH0sXG4gICAgICBvblNlYXRTZWxlY3RlZCA6IChkYXRhIDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0U2VsZWN0ZWQuZW1pdChkYXRhKVxuICAgICAgfSxcbiAgICAgIG9uU2VhdFVuc2VsZWN0ZWQgOiAoZGF0YSA6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uU2VhdFVuc2VsZWN0ZWQuZW1pdChkYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb290X2VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnJvb3RJZCk7XG4gICAgaWYgKHJvb3RfZWxlbSkge1xuICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTXlSZWFjdENvbXBvbmVudCwgcmVhY3RQcm9wcyApLCByb290X2VsZW0pO1xuICAgIH1cbiAgfVxufVxuXG5cbiJdfQ==