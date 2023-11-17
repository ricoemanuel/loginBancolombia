import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  login(data:any): Observable<any> {
    return this.http.post<any>('https://koy60.wiremockapi.cloud/login/', data);
  }
}
