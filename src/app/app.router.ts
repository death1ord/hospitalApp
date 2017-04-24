///////////////////////////////////////////////////////////////////////////////////////////////
// Import Modules used by the app
///////////////////////////////////////////////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

///////////////////////////////////////////////////////////////////////////////////////////////
// Import generated components to be used by the app
///////////////////////////////////////////////////////////////////////////////////////////////
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ExploreviewComponent } from './exploreview/exploreview.component';

///////////////////////////////////////////////////////////////////////////////////////////////
// Declare routing here
//Routing is on a first come first serve basis.
//So define component routing first and then handle special cases.
//Else special cases will be matched first
///////////////////////////////////////////////////////////////////////////////////////////////
const appRoutes: Routes = [
    { path: '', component: ExploreviewComponent },
    { path: '', redirectTo: '/all', pathMatch: 'full' },
    { path: '**', redirectTo: '/all', pathMatch: 'full' }
];

///////////////////////////////////////////////////////////////////////////////////////////////
// re-export the Angular RouterModule by adding it to the module exports array.
// By re-exporting the RouterModule here and importing AppRouterModule in AppModule.
// Components declared in AppModule will have access to router directives such as
// RouterLink and RouterOutlet.
///////////////////////////////////////////////////////////////////////////////////////////////

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

///////////////////////////////////////////////////////////////////////////////////////////////
// Export as class to be used by the app. Will contain route definitions.
///////////////////////////////////////////////////////////////////////////////////////////////

export class AppRoutingModule {}
