import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  sampleData = [
    1, 2, 3, 4
  ];
  constructor(private _http: HttpClient) {

  }
  getPostInfo(id: string = '') {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts`);
  }
}
