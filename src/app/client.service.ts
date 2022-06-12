import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }
  addclientdata(formdata: any): Observable<any> {
    return this.http.post(this.baseUrl + "/api/client/addclient", formdata)
  }
  
}
