import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTsService {
  constructor(private http: HttpClient) { }
  fetchData(): Observable<any> {
    return this.http.get('https://analytics-backend-z5tc.onrender.com/api/csv');
  }
}
