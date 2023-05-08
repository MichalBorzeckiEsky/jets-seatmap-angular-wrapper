import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import * as React from 'react';

import * as ReactDOM  from 'react-dom';


import MyReactComponent from './MyReactComponent';

@Component({
  selector: 'seatmap',
  template: '<div [id]="rootId"></div>',
  // styleUrls: ['./app.component.css']
})
export class SeatmapAngularLibComponent implements OnChanges, AfterViewInit, OnDestroy{
  @Input() flight = {}
  @Input() config = {}
  @Input() availability : any[] = []
  @Input() passengers : any[]  = []
  @Output() onSeatMapInited = new EventEmitter<any>();
  @Output() onSeatSelected = new EventEmitter<any>();
  @Output() onSeatUnselected = new EventEmitter<any>();

  public rootId = 'rootId'

  ngOnChanges(changes: SimpleChanges){
    this.render();
  }

  ngAfterViewInit(){
    this.render();
  }

  ngOnDestroy(){

  }

  private render(){
    // ReactDOM.render(React.createElement(MyReactComponent ), document.getElementById(this.rootId));
    const reactProps = {
      flight : this.flight,
      config : this.config,  
      availability : this.availability,
      passengers : this.passengers,
      onSeatMapInited : (data : any) => {
        this.onSeatMapInited.emit(data)
      },
      onSeatSelected : (data : any) => {
        this.onSeatSelected.emit(data)
      },
      onSeatUnselected : (data : any) => {
        this.onSeatUnselected.emit(data)
      }
    }
    console.log(document.getElementById(this.rootId))
    ReactDOM.render(React.createElement(MyReactComponent, reactProps ), document.getElementById(this.rootId));
  }
}


