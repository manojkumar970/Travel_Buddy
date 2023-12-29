import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  private baseUrl = 'http://localhost:8080'; 

  loginUser(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }

}
