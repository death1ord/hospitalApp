import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MdSidenav } from '@angular/material';

///////////////////////////////////////////////////////////////////////////////////////////////
// Selector: The tag you place in the html. This tag is never replaced on the DOM.
// TemplateUrl: Your html code template to be included on the DOM.
// styleUrls: Style sheets associated with this component and only this component.
///////////////////////////////////////////////////////////////////////////////////////////////
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {

    //Should include components if you want to use their functionality.
    @ViewChild('sidenav') sidenav: MdSidenav;

    constructor() {}

    //Initialized on once per view.
    //If you change route that has the same view, this will not be called again.
    ngOnInit() {

    }
    //Wheneven the user leaves this view, this method is auto called.
    //Unsubsribe all events here.
    //Route events will be auto unsubscribed if navigated to a different view.
    //It is still good practice to unsubscribe.

    ngOnDestroy() {

    }

}
