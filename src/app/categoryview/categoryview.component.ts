import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

///////////////////////////////////////////////////////////////////////////////////////////////
// Selector: The tag you place in the html. This tag is never replaced on the DOM.
// TemplateUrl: Your html code template to be included on the DOM.
// styleUrls: Style sheets associated with this component and only this component.
///////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.scss']
})
export class CategoryviewComponent implements OnInit, OnDestroy {
  //In order to store the id of the category
  selectedId: number;
  //In order to maintain the subscribe event.
  private subscribeEvent: any;

  constructor(private route: ActivatedRoute,
    private router: Router) {

  }
  //Initialized on once per view.
  //If you change route that has the same view, this will not be called again.
  ngOnInit() {
    //Subscribe to the route change event in order to obtain the id
    this.subscribeEvent = this.route.params.subscribe(params => {
      this.selectedId = params['id'];
    })
  }
  //Wheneven the user leaves this view, this method is auto called.
  //Unsubsribe all events here.
  //Route events will be auto unsubscribed if navigated to a different view.
  //It is still good practice to unsubscribe.
  ngOnDestroy() {
    this.subscribeEvent.unsubscribe();
  }
  //Custom function to navigate to all page.
  navigateToAll() {
    this.router.navigate(['/all']);
  }

}
