import { Component } from '@angular/core';
import { SampleService } from './services/sampleservice/sample.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flipkart';
  serviceData: any;
  constructor(private _sampleService: SampleService, private _router: Router) {

  }
  sayHello() {
    console.log("Hello");
    this.serviceData = this._sampleService.sampleData;
  }
  goToLoc(path: string) {
    this._router.navigate([path]);
  }
}
