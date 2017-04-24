import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlexboxContants } from '../shared/constants/flexbox.constants';
import { RoomComponent } from '../shared/components/room/room.component';

import { RestService } from '../shared/services/rest.service';
import { RoomService } from '../shared/services/room.service';
///////////////////////////////////////////////////////////////////////////////////////////////
// Selector: The tag you place in the html. This tag is never replaced on the DOM.
// TemplateUrl: Your html code template to be included on the DOM.
// styleUrls: Style sheets associated with this component and only this component.
///////////////////////////////////////////////////////////////////////////////////////////////
@Component({
    selector: 'app-exploreview',
    templateUrl: './exploreview.component.html',
    styleUrls: ['./exploreview.component.scss'],
    providers: [RoomService, RestService]
})
export class ExploreviewComponent implements OnInit, OnDestroy {
    private flexboxDirections : Object;
    private allRooms: Array<any>;
    private sortOptions: Object;
    private sortOrder: string = 'alert';
    constructor(private roomService: RoomService) {

    }

    //Initialized on once per view.
    //If you change route that has the same view, this will not be called again.
    ngOnInit() {
        this.sortOptions = [{
            'name': 'Alert First',
            'value': 'alert'
        },{
            'name': 'All Ok First',
            'value': 'ok'
        }];

        this.flexboxDirections = FlexboxContants.directions;
        this.roomService.getAllRooms().subscribe(data => {
            this.allRooms = data;
            this.sortArray();

        });
    }

    sortArray(){
        var that = this
        this.allRooms.sort(function (a){
            if(that.sortOrder === 'ok'){
                if((a.lowAlarm === null ||a.census > a.lowAlarm) && (a.highAlarm ===null || a.census < a.highAlarm)){
                    return -1
                }
                else {
                    return 1
                }
            }
            else if(that.sortOrder === 'alert'){
                if((a.highAlarm !== null && a.highAlarm <= a.census) || (a.lowAlarm !== null && a.lowAlarm >= a.census)){
                    return -1
                }
                else {
                    return 1;
                }
            }
        })
    }

    onChange(){
        this.sortArray();
    }
    //Wheneven the user leaves this view, this method is auto called.
    //Unsubsribe all events here.
    //Route events will be auto unsubscribed if navigated to a different view.
    //It is still good practice to unsubscribe.
    ngOnDestroy() {

    }

}
