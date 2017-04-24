///////////////////////////////////////////////////////////////////////////////////////////////
// Import Modules used by the app
///////////////////////////////////////////////////////////////////////////////////////////////

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

///////////////////////////////////////////////////////////////////////////////////////////////
// Import Routing and routes used by the app
///////////////////////////////////////////////////////////////////////////////////////////////

import { AppRoutingModule } from './app.router';

///////////////////////////////////////////////////////////////////////////////////////////////
// Import generated components to be used by the app
///////////////////////////////////////////////////////////////////////////////////////////////
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ExploreviewComponent } from './exploreview/exploreview.component';
import { RoomComponent } from './shared/components/room/room.component'

///////////////////////////////////////////////////////////////////////////////////////////////
// Import user generated components to be used by the app in declarations
// Import available 3rd party components to be used by the app in imports
// Import services to be used by the app in providers
///////////////////////////////////////////////////////////////////////////////////////////////

@NgModule({
    declarations: [
        AppComponent,
        BodyComponent,
        ExploreviewComponent,
        RoomComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MdlModule,
        MaterialModule.forRoot(),
        FlexLayoutModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
