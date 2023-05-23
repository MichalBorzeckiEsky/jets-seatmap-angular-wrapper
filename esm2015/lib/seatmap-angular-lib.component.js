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
            },
            onTooltipRequested: (data) => {
                this.onTooltipRequested.emit(data);
            }
        };
        const root_elem = document.getElementById(this.rootId);
        if (root_elem) {
            ReactDOM.render(React.createElement(MyReactComponent, reactProps), root_elem);
        }
    }
}
SeatmapAngularLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SeatmapAngularLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SeatmapAngularLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SeatmapAngularLibComponent, selector: "seatmap", inputs: { flight: "flight", config: "config", availability: "availability", passengers: "passengers" }, outputs: { onSeatMapInited: "onSeatMapInited", onSeatSelected: "onSeatSelected", onSeatUnselected: "onSeatUnselected", onTooltipRequested: "onTooltipRequested" }, usesOnChanges: true, ngImport: i0, template: '<div [id]="rootId"></div>', isInline: true });
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
            }], onTooltipRequested: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWF0bWFwLWFuZ3VsYXItbGliL3NyYy9saWIvc2VhdG1hcC1hbmd1bGFyLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBd0IsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLEtBQUssUUFBUSxNQUFPLFdBQVcsQ0FBQztBQUd2QyxPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDOztBQU9sRCxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBTVcsV0FBTSxHQUFHLEVBQUUsQ0FBQTtRQUNYLFdBQU0sR0FBRyxFQUFFLENBQUE7UUFDWCxpQkFBWSxHQUFXLEVBQUUsQ0FBQTtRQUN6QixlQUFVLEdBQVksRUFBRSxDQUFBO1FBQ3ZCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWhELFdBQU0sR0FBRyxRQUFRLENBQUE7S0F1Q3pCO0lBckNDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7SUFFWCxDQUFDO0lBRU8sTUFBTTtRQUNaLGlHQUFpRztRQUNqRyxNQUFNLFVBQVUsR0FBRztZQUNqQixNQUFNLEVBQUcsSUFBSSxDQUFDLE1BQU07WUFDcEIsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3BCLFlBQVksRUFBRyxJQUFJLENBQUMsWUFBWTtZQUNoQyxVQUFVLEVBQUcsSUFBSSxDQUFDLFVBQVU7WUFDNUIsZUFBZSxFQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pDLENBQUM7WUFDRCxjQUFjLEVBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDaEMsQ0FBQztZQUNELGdCQUFnQixFQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEMsQ0FBQztZQUNELGtCQUFrQixFQUFFLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDcEMsQ0FBQztTQUNGLENBQUE7UUFDRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLFNBQVMsRUFBRTtZQUNiLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNoRjtJQUNILENBQUM7O3dIQWhEVSwwQkFBMEI7NEdBQTFCLDBCQUEwQiwrVUFIM0IsMkJBQTJCOzRGQUcxQiwwQkFBMEI7a0JBTHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHFDQUFxQztpQkFDdEM7OEJBRVUsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0ksZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNO2dCQUNHLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFDRyxrQkFBa0I7c0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICogYXMgUmVhY3RET00gIGZyb20gJ3JlYWN0LWRvbSc7XG5cblxuaW1wb3J0IE15UmVhY3RDb21wb25lbnQgZnJvbSAnLi9NeVJlYWN0Q29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VhdG1hcCcsXG4gIHRlbXBsYXRlOiAnPGRpdiBbaWRdPVwicm9vdElkXCI+PC9kaXY+JyxcbiAgLy8gc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWF0bWFwQW5ndWxhckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95e1xuICBASW5wdXQoKSBmbGlnaHQgPSB7fVxuICBASW5wdXQoKSBjb25maWcgPSB7fVxuICBASW5wdXQoKSBhdmFpbGFiaWxpdHkgOiBhbnlbXSA9IFtdXG4gIEBJbnB1dCgpIHBhc3NlbmdlcnMgOiBhbnlbXSAgPSBbXVxuICBAT3V0cHV0KCkgb25TZWF0TWFwSW5pdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25TZWF0VW5zZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25Ub29sdGlwUmVxdWVzdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHJvb3RJZCA9ICdyb290SWQnXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuXG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpe1xuICAgIC8vIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KE15UmVhY3RDb21wb25lbnQgKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5yb290SWQpKTtcbiAgICBjb25zdCByZWFjdFByb3BzID0ge1xuICAgICAgZmxpZ2h0IDogdGhpcy5mbGlnaHQsXG4gICAgICBjb25maWcgOiB0aGlzLmNvbmZpZywgIFxuICAgICAgYXZhaWxhYmlsaXR5IDogdGhpcy5hdmFpbGFiaWxpdHksXG4gICAgICBwYXNzZW5nZXJzIDogdGhpcy5wYXNzZW5nZXJzLFxuICAgICAgb25TZWF0TWFwSW5pdGVkIDogKGRhdGEgOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRNYXBJbml0ZWQuZW1pdChkYXRhKVxuICAgICAgfSxcbiAgICAgIG9uU2VhdFNlbGVjdGVkIDogKGRhdGEgOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vblNlYXRTZWxlY3RlZC5lbWl0KGRhdGEpXG4gICAgICB9LFxuICAgICAgb25TZWF0VW5zZWxlY3RlZCA6IChkYXRhIDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWF0VW5zZWxlY3RlZC5lbWl0KGRhdGEpXG4gICAgICB9LFxuICAgICAgb25Ub29sdGlwUmVxdWVzdGVkOiAoZGF0YSA6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9uVG9vbHRpcFJlcXVlc3RlZC5lbWl0KGRhdGEpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvb3RfZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucm9vdElkKTtcbiAgICBpZiAocm9vdF9lbGVtKSB7XG4gICAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChNeVJlYWN0Q29tcG9uZW50LCByZWFjdFByb3BzICksIHJvb3RfZWxlbSk7XG4gICAgfVxuICB9XG59XG5cblxuIl19