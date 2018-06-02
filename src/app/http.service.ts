import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PlatformLocation } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //Single place to register BASEURL so production/distribution URl management can be done.
  baseURL: string = '';
  searchSource = new BehaviorSubject<string>('');
  public searchStr = this.searchSource.asObservable();

  constructor(
    private http: HttpClient,
    platformLocation: PlatformLocation
  ) { 
    this.baseURL = `${(platformLocation as any).location.origin}/assets/`;
  }


  /**
   * Get method helper method to make all the Get Requests.
   * @param url the relative URL string.
   * @return Observable to subscribe to results.
   */
  get(url: string) {
    return this.http.get(`${this.baseURL}${url}`);
  }

  /**
   * Post method helper method to make all the POST requests.
   * @param url the relative URL string.
   * @param data the Data to be passed in the request.
   * @return Observable to subscribe to results.
   */
  post(url: string, data: any) {
    return this.http.post(`${this.baseURL}${url}`, data);
  }

  /**
   * Generic error handler.
   */
  handleError(error: any) {
    console.log("Error ====>", error);
  }

  searchPizza(val: string) {
    this.searchSource.next(val);
  }
}
