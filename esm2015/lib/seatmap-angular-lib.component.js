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
        console.log(document.getElementById(this.rootId));
        ReactDOM.render(React.createElement(MyReactComponent, reactProps), document.getElementById(this.rootId));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWF0bWFwLWFuZ3VsYXItbGliL3NyYy9saWIvc2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBd0IsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLEtBQUssUUFBUSxNQUFPLFdBQVcsQ0FBQztBQUd2QyxPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDOztBQU9sRCxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBTVcsV0FBTSxHQUFHLEVBQUUsQ0FBQTtRQUNYLFdBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxpQkFBWSxHQUFXLEVBQUUsQ0FBQTtRQUN6QixlQUFVLEdBQVksRUFBRSxDQUFBO1FBQ3ZCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU5QyxXQUFNLEdBQUcsUUFBUSxDQUFBO0tBa0N6QjtJQWhDQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO0lBRVgsQ0FBQztJQUVPLE1BQU07UUFDWixpR0FBaUc7UUFDakcsTUFBTSxVQUFVLEdBQUc7WUFDakIsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3BCLE1BQU0sRUFBRyxJQUFJLENBQUMsTUFBTTtZQUNwQixZQUFZLEVBQUcsSUFBSSxDQUFDLFlBQVk7WUFDaEMsVUFBVSxFQUFHLElBQUksQ0FBQyxVQUFVO1lBQzVCLGVBQWUsRUFBRyxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQyxDQUFDO1lBQ0QsY0FBYyxFQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2hDLENBQUM7WUFDRCxnQkFBZ0IsRUFBRyxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xDLENBQUM7U0FDRixDQUFBO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQ2pELFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUUsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7O3dIQTFDVSwwQkFBMEI7NEdBQTFCLDBCQUEwQixxU0FIM0IsMkJBQTJCOzRGQUcxQiwwQkFBMEI7a0JBTHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHFDQUFxQztpQkFDdEM7OEJBRVUsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0ksZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgKiBhcyBSZWFjdERPTSAgZnJvbSAncmVhY3QtZG9tJztcblxuXG5pbXBvcnQgTXlSZWFjdENvbXBvbmVudCBmcm9tICcuL015UmVhY3RDb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWF0bWFwJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IFtpZF09XCJyb290SWRcIj48L2Rpdj4nLFxuICAvLyBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXRtYXBBbmd1bGFyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3l7XG4gIEBJbnB1dCgpIGZsaWdodCA9IHt9XG4gIEBJbnB1dCgpIGNvbmZpZyA9IHt9XG4gIEBJbnB1dCgpIGF2YWlsYWJpbGl0eSA6IGFueVtdID0gW11cbiAgQElucHV0KCkgcGFzc2VuZ2VycyA6IGFueVtdICA9IFtdXG4gIEBPdXRwdXQoKSBvblNlYXRNYXBJbml0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uU2VhdFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRVbnNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHJvb3RJZCA9ICdyb290SWQnXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuXG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpe1xuICAgIC8vIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KE15UmVhY3RDb21wb25lbnQgKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5yb290SWQpKTtcbiAgICBjb25zdCByZWFjdFByb3BzID0ge1xuICAgICAgZmxpZ2h0IDogdGhpcy5mbGlnaHQsXG4gICAgICBjb25maWcgOiB0aGlzLmNvbmZpZywgIFxuICAgICAgYXZhaWxhYmlsaXR5IDogdGhpcy5hdmFpbGFiaWxpdHksXG4gICAgICBwYXNzZW5nZXJzIDogdGhpcy5wYXNzZW5nZXJzLFxuICAgICAgb25TZWF0TWFwSW5pdGVkIDogKGRhdGEgOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRNYXBJbml0ZWQuZW1pdChkYXRhKVxuICAgICAgfSxcbiAgICAgIG9uU2VhdFNlbGVjdGVkIDogKGRhdGEgOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRTZWxlY3RlZC5lbWl0KGRhdGEpXG4gICAgICB9LFxuICAgICAgb25TZWF0VW5zZWxlY3RlZCA6IChkYXRhIDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0VW5zZWxlY3RlZC5lbWl0KGRhdGEpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdElkKSlcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChNeVJlYWN0Q29tcG9uZW50LCByZWFjdFByb3BzICksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdElkKSk7XG4gIH1cbn1cblxuXG4iXX0=