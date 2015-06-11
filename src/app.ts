/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {SampleComponent} from 'sample-component/sample-component';

// Annotation section
@Component({
  selector: 'angular2-seed'
})
@View({
  template: '<sample-component></sample-component>',
  directives: [SampleComponent]
})
export class Angular2SeedComponent {
}

bootstrap(Angular2SeedComponent);
