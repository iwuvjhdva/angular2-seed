/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'sample-component'
})
@View({
    templateUrl: 'sample-component/sample-component.html'
})
export class SampleComponent {
  name: string;

  constructor() {
    this.name = 'Alice';
  }
}
