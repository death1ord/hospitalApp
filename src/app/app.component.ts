import { Component, ViewEncapsulation } from '@angular/core';

///////////////////////////////////////////////////////////////////////////////////////////////
// Root file or base file
// Selector: The tag you place in the html. This tag is never replaced on the DOM.
// TemplateUrl: Your html code template to be included on the DOM.
// styleUrls: Style sheets associated with this component and only this component.
///////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None // Do not use shadow-root or emulate the DOM.
})
export class AppComponent {

}
