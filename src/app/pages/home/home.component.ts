import { Component } from '@angular/core';
import { SampleService } from 'src/app/services/sampleservice/sample.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  serviceData: any;
  isLoading: boolean = false;
  constructor(private _sampleService: SampleService) {

  }
  loadServiceData() {
    this.isLoading = true;
    this._sampleService.getPostInfo().subscribe((apiRes: any) => {
      this.isLoading = false;
      this.serviceData = apiRes;
    });
  }
}
