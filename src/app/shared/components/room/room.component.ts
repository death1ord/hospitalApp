import { Component, OnInit, ElementRef, Input, ViewChild, Renderer } from '@angular/core';
import { FlexboxContants } from '../../constants/flexbox.constants';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
    private flexboxDirections : Object = FlexboxContants.directions;
    private triggerAlarm: boolean = false;
    private status: string;
    @Input('room') room: any;

    @ViewChild('low') low: ElementRef;
    @ViewChild('high') high: ElementRef;
    @ViewChild('filler') filler: ElementRef;

    constructor(private renderer: Renderer) {}

    ngOnInit() {
        //console.log(this.room);
        //calculate High point
        console.log(this.high);
        let that = this;
        //Check to see if Alarms exist
        this.renderer.setElementClass(this.high.nativeElement, 'hide', this.room.highAlarm === null);
        this.renderer.setElementClass(this.low.nativeElement, 'hide', this.room.lowAlarm === null);
        //If census is above or below normal trigger alarm
        this.renderer.setElementClass(this.filler.nativeElement, 'alarm', (this.room.lowAlarm !== null && this.room.lowAlarm >= this.room.census) || (this.room.highAlarm !== null && this.room.highAlarm <= this.room.census));

        //Calculate the High and low positions to place the bar
        if(this.room.highAlarm !== null){
            let highPos: number;
            highPos = parseFloat(((this.room.highAlarm/this.room.capacity)*100).toFixed(2));
            this.renderer.setElementStyle(this.high.nativeElement, 'bottom', highPos+'%');
        }
        if(this.room.lowAlarm !== null){
            let lowPos: number;
            lowPos = parseFloat(((this.room.lowAlarm/this.room.capacity)*100).toFixed(2));
            this.renderer.setElementStyle(this.low.nativeElement, 'bottom', lowPos+'%');
        }
        //Calculate howmuch area of the circle we need to fill
        let fillerPercentage: number;

        fillerPercentage = parseFloat(((this.room.census/this.room.capacity)*100).toFixed(2));
        setTimeout(function(){
            that.renderer.setElementStyle(that.filler.nativeElement, 'height', fillerPercentage+'%');
        },500);

        //Decode Readable status
        if(this.room.lowAlarm !== null && this.room.census <= this.room.lowAlarm){
            this.status = 'LOW CAP';
        }
        else if(this.room.highAlarm !== null && this.room.census >= this.room.highAlarm){
            this.status = "HIGH CAP"
        }
        else {
            this.status = "All OK"
        }
    }

}
