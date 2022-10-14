import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HttpService {


  BaseUrl = environment.baseUrl

  constructor(private httpClient: HttpClient) { }

  postService(url: string, data: any, token: boolean, httpOptions: any) {
    return this.httpClient.post(this.BaseUrl+url,data,token && httpOptions)
  }
}

